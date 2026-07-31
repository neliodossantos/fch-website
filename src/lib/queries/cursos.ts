import { supabase, isSupabaseConfigured } from '@/lib/supabase'
import type { Curso } from '@/types/database'

// Course grau type (from database)
export type CursoGrau = 'Licenciatura' | 'Pós-Graduação'

// Course display interface for frontend
export interface CursoDisplay {
  id: string
  nome: string
  tipo: 'graduacao' | 'pos-graduacao'
  duracao: string
  descricao: string
  coordenador: string
  slug: string
  objetivos: string[]
  perfil: string
  areas: string[]
  pdfUrl?: string
}

// Helper function to map grau to tipo
function grauToTipo(grau: string | undefined): 'graduacao' | 'pos-graduacao' {
  return grau === 'Pós-Graduação' ? 'pos-graduacao' : 'graduacao'
}

// Structure for curriculum (internal to this module)
interface CurriculumDisciplina {
  nome: string
  professor: string
  professorSlug: string
  creditos: number
}

export interface Semestre {
  semestre: number
  disciplinas: CurriculumDisciplina[]
}

export interface AnoCurricular {
  ano: number
  semestres: Semestre[]
}

export interface EstruturaCurricular {
  cursoSlug: string
  cursoNome: string
  pdfUrl?: string
  anos: AnoCurricular[]
}

// Transform database curso to display format
function transformCursoToDisplay(dbCurso: Curso & { coordenador?: { nome: string } | null }): CursoDisplay {
  return {
    id: dbCurso.id,
    nome: dbCurso.nome,
    tipo: grauToTipo(dbCurso.grau),
    duracao: dbCurso.duracao || '4 anos',
    descricao: dbCurso.descricao || '',
    coordenador: dbCurso.coordenador?.nome || '',
    slug: dbCurso.slug,
    objetivos: dbCurso.objetivos || [],
    perfil: dbCurso.perfil_graduado || '',
    areas: dbCurso.saidas_profissionais || [],
    pdfUrl: dbCurso.pdf_url,
  }
}

export async function getCursos(): Promise<CursoDisplay[]> {
  if (!isSupabaseConfigured || !supabase) {
    return []
  }

  try {
    const { data, error } = await supabase
      .from('cursos')
      .select(`
        *,
        coordenador:professores!cursos_coordenador_id_fkey(nome)
      `)
      .order('nome')
    
    if (error) throw error
    
    if (data && data.length > 0) {
      return data.map(transformCursoToDisplay)
    }
    
    return []
  } catch {
    return []
  }
}

// Get cursos by grau (Licenciatura ou Pós-Graduação)
export async function getCursosByGrau(grau: CursoGrau): Promise<CursoDisplay[]> {
  if (!isSupabaseConfigured || !supabase) {
    return []
  }

  try {
    const { data, error } = await supabase
      .from('cursos')
      .select(`
        *,
        coordenador:professores!cursos_coordenador_id_fkey(nome)
      `)
      .eq('grau', grau)
      .order('nome')
    
    if (error) throw error
    
    if (data && data.length > 0) {
      return data.map(transformCursoToDisplay)
    }
    
    return []
  } catch {
    return []
  }
}

// Get cursos agrupados por grau
export async function getCursosAgrupados(): Promise<{ licenciatura: CursoDisplay[], posGraduacao: CursoDisplay[] }> {
  const [licenciatura, posGraduacao] = await Promise.all([
    getCursosByGrau('Licenciatura'),
    getCursosByGrau('Pós-Graduação')
  ])
  return { licenciatura, posGraduacao }
}

export async function getCursoBySlug(slug: string): Promise<CursoDisplay | undefined> {
  if (!isSupabaseConfigured || !supabase) {
    return undefined
  }

  try {
    const { data, error } = await supabase
      .from('cursos')
      .select(`
        *,
        coordenador:professores!cursos_coordenador_id_fkey(nome)
      `)
      .eq('slug', slug)
      .single()
    
    if (error) throw error
    
    if (data) {
      return transformCursoToDisplay(data)
    }
    
    return undefined
  } catch {
    return undefined
  }
}

export async function getEstruturaCurricular(cursoSlug: string): Promise<EstruturaCurricular | undefined> {
  if (!isSupabaseConfigured || !supabase) {
    return undefined
  }

  try {
    // First get the curso to get its id and name
    const { data: cursoData, error: cursoError } = await supabase
      .from('cursos')
      .select('id, nome, pdf_url')
      .eq('slug', cursoSlug)
      .single()
    
    if (cursoError) throw cursoError
    if (!cursoData) return undefined

    // Now fetch disciplinas using the curso id
    const { data, error } = await supabase
      .from('disciplinas')
      .select(`
        *,
        professor:professores(nome, slug)
      `)
      .eq('curso_id', cursoData.id)
      .order('ano')
      .order('semestre')
    
    if (error) throw error
    
    if (data && data.length > 0) {
      // Group disciplinas by ano and semestre
      const anosMap = new Map<number, Map<number, CurriculumDisciplina[]>>()
      
      for (const disc of data) {
        const ano = disc.ano || 1
        const semestre = disc.semestre || 1
        
        if (!anosMap.has(ano)) {
          anosMap.set(ano, new Map())
        }
        const semestreMap = anosMap.get(ano)!
        if (!semestreMap.has(semestre)) {
          semestreMap.set(semestre, [])
        }
        
        const professor = disc.professor as { nome?: string; slug?: string } | null
        semestreMap.get(semestre)!.push({
          nome: disc.nome,
          professor: professor?.nome || 'A definir',
          professorSlug: professor?.slug || '',
          creditos: disc.creditos || 0,
        })
      }
      
      // Convert to our nested structure
      const anos: AnoCurricular[] = []
      const sortedAnos = Array.from(anosMap.keys()).sort((a, b) => a - b)
      
      for (const ano of sortedAnos) {
        const semestreMap = anosMap.get(ano)!
        const semestres: Semestre[] = []
        const sortedSemestres = Array.from(semestreMap.keys()).sort((a, b) => a - b)
        
        for (const semestre of sortedSemestres) {
          semestres.push({
            semestre,
            disciplinas: semestreMap.get(semestre)!,
          })
        }
        
        anos.push({ ano, semestres })
      }
      
      return {
        cursoSlug,
        cursoNome: cursoData.nome,
        pdfUrl: cursoData.pdf_url,
        anos,
      }
    }
    
    return undefined
  } catch {
    return undefined
  }
}

// Async helper functions for filtering by type - now use getCursosByGrau for efficiency
export async function getCursosGraduacao(): Promise<CursoDisplay[]> {
  return getCursosByGrau('Licenciatura')
}

export async function getCursosPosGraduacao(): Promise<CursoDisplay[]> {
  return getCursosByGrau('Pós-Graduação')
}

// Export all course slugs for static generation
export function getAllCursoSlugs(): string[] {
  return []
}
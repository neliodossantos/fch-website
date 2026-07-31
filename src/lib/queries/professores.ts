import { supabase, isSupabaseConfigured } from '@/lib/supabase'
import type { Professor } from '@/types/database'

// Extended professor type for frontend display with additional fields
export interface ProfessorDisplay {
  id: string
  slug: string
  nome: string
  titulacao: string
  areas: string[]
  email: string
  foto?: string
  foto_url?: string | null
  departamento: string
  biografia: string
  formacao: string[]
  disciplinas: string[]
  publicacoes: {
    titulo: string
    ano: number
    tipo: 'artigo' | 'livro' | 'capitulo'
    revista?: string
  }[]
  telefone?: string
  gabinete?: string
}

export async function getProfessores(): Promise<ProfessorDisplay[]> {
  if (!isSupabaseConfigured || !supabase) {
    return []
  }

  try {
    const { data, error } = await supabase
      .from('professores')
      .select('*')
      .order('nome')
    
    if (error) throw error
    return (data as Professor[]).map(p => ({
      id: p.id,
      slug: p.slug,
      nome: p.nome,
      titulacao: p.titulo || '',
      areas: p.areas_investigacao || [],
      email: p.email || '',
      foto_url: p.foto_url,
      departamento: p.departamento || '',
      biografia: p.biografia || '',
      formacao: [],
      disciplinas: [],
      publicacoes: [],
      telefone: p.telefone,
      gabinete: p.gabinete
    }))
  } catch {
    return []
  }
}

export async function getProfessorBySlug(slug: string): Promise<ProfessorDisplay | null> {
  if (!isSupabaseConfigured || !supabase) {
    return null
  }

  try {
    const { data, error } = await supabase
      .from('professores')
      .select(`
        *,
        formacoes:formacao(*),
        publicacoes:publicacao(*)
      `)
      .eq('slug', slug)
      .single()
    
    if (error) throw error
    
    const professor = data as Professor & { formacoes?: Array<{ grau: string; instituicao: string; ano?: string }>; publicacoes?: Array<{ titulo: string; ano?: string; revista?: string }> }
    
    const formacao = professor.formacoes && professor.formacoes.length > 0
      ? professor.formacoes.map(f => `${f.grau} - ${f.instituicao}${f.ano ? ` (${f.ano})` : ''}`)
      : []
    
    const publicacoes = professor.publicacoes && professor.publicacoes.length > 0
      ? professor.publicacoes.map(p => ({
          titulo: p.titulo,
          ano: p.ano ? parseInt(p.ano, 10) || new Date().getFullYear() : new Date().getFullYear(),
          tipo: 'artigo' as const,
          revista: p.revista
        }))
      : []
    
    return {
      id: professor.id,
      slug: professor.slug,
      nome: professor.nome,
      titulacao: professor.titulo || '',
      areas: professor.areas_investigacao || [],
      email: professor.email || '',
      foto_url: professor.foto_url,
      departamento: professor.departamento || '',
      biografia: professor.biografia || '',
      formacao,
      disciplinas: [],
      publicacoes,
      telefone: professor.telefone,
      gabinete: professor.gabinete
    }
  } catch {
    return null
  }
}

export async function getProfessorDisciplinas(professorId: string) {
  if (!isSupabaseConfigured || !supabase) {
    return []
  }

  try {
    const { data, error } = await supabase
      .from('disciplinas')
      .select(`
        *,
        curso:cursos(nome, slug)
      `)
      .eq('professor_id', professorId)
    
    if (error) throw error
    return data
  } catch {
    return []
  }
}

export async function getAllProfessorSlugs(): Promise<string[]> {
  if (!isSupabaseConfigured || !supabase) {
    return []
  }

  try {
    const { data, error } = await supabase
      .from('professores')
      .select('slug')
    
    if (error) throw error
    return (data || []).map((p: { slug: string }) => p.slug)
  } catch {
    return []
  }
}

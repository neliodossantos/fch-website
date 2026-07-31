import { supabase, isSupabaseConfigured } from '@/lib/supabase'
import type { Disciplina } from '@/types/database'

// Disciplina display interface for frontend
export interface DisciplinaDisplay {
  id: string
  nome: string
  slug: string
  codigo?: string
  creditos: number
  horas?: number
  carga_horaria_teorica?: number
  carga_horaria_pratica?: number
  semestre: number
  ano: number
  curso: {
    nome: string
    slug: string
  }
  professor?: {
    nome: string
    slug: string
  }
  ementa?: string
  objetivos?: string
  bibliografia?: string
}

// Default empty curso when no data is available
const DEFAULT_CURSO = { nome: '', slug: '' }

// Database result type with joined relations
type DisciplinaWithRelations = Disciplina & { 
  curso?: { nome: string; slug: string } | null
  professor?: { nome: string; slug: string } | null 
}

// Transform database disciplina to display format
function transformDisciplinaToDisplay(d: DisciplinaWithRelations): DisciplinaDisplay {
  return {
    id: d.id,
    nome: d.nome,
    slug: d.slug,
    codigo: d.codigo,
    creditos: d.creditos || 0,
    horas: d.horas,
    carga_horaria_teorica: d.carga_horaria_teorica,
    carga_horaria_pratica: d.carga_horaria_pratica,
    semestre: d.semestre,
    ano: d.ano,
    curso: d.curso ? { nome: d.curso.nome, slug: d.curso.slug } : DEFAULT_CURSO,
    professor: d.professor ? { nome: d.professor.nome, slug: d.professor.slug } : undefined,
    ementa: d.ementa,
    objetivos: d.objetivos,
    bibliografia: d.bibliografia,
  }
}

// Get all disciplinas
export async function getDisciplinas(): Promise<DisciplinaDisplay[]> {
  if (!isSupabaseConfigured || !supabase) {
    return []
  }

  try {
    const { data, error } = await supabase
      .from('disciplinas')
      .select(`
        *,
        curso:cursos(nome, slug),
        professor:professores(nome, slug)
      `)
      .order('nome')
    
    if (error) throw error
    
    if (data && data.length > 0) {
      return data.map(transformDisciplinaToDisplay)
    }
    
    return []
  } catch {
    return []
  }
}

// Get disciplina by slug
export async function getDisciplinaBySlug(slug: string): Promise<DisciplinaDisplay | null> {
  if (!isSupabaseConfigured || !supabase) {
    return null
  }

  try {
    const { data, error } = await supabase
      .from('disciplinas')
      .select(`
        *,
        curso:cursos(nome, slug),
        professor:professores(nome, slug)
      `)
      .eq('slug', slug)
      .single()
    
    if (error) throw error
    
    if (data) {
      return transformDisciplinaToDisplay(data)
    }
    
    return null
  } catch {
    return null
  }
}

// Get disciplinas by year for a specific curso
export async function getDisciplinasByAno(cursoId: string, ano: number): Promise<DisciplinaDisplay[]> {
  if (!isSupabaseConfigured || !supabase) {
    return []
  }

  try {
    const { data, error } = await supabase
      .from('disciplinas')
      .select(`
        *,
        curso:cursos(nome, slug),
        professor:professores(nome, slug)
      `)
      .eq('curso_id', cursoId)
      .eq('ano', ano)
      .order('semestre')
      .order('nome')
    
    if (error) throw error
    
    if (data && data.length > 0) {
      return data.map(transformDisciplinaToDisplay)
    }
    
    return []
  } catch {
    return []
  }
}

// Get disciplinas by curso
export async function getDisciplinasByCurso(cursoId: string): Promise<DisciplinaDisplay[]> {
  if (!isSupabaseConfigured || !supabase) {
    return []
  }

  try {
    const { data, error } = await supabase
      .from('disciplinas')
      .select(`
        *,
        curso:cursos(nome, slug),
        professor:professores(nome, slug)
      `)
      .eq('curso_id', cursoId)
      .order('ano')
      .order('semestre')
      .order('nome')
    
    if (error) throw error
    
    if (data && data.length > 0) {
      return data.map(transformDisciplinaToDisplay)
    }
    
    return []
  } catch {
    return []
  }
}

// Get disciplinas by professor
export async function getDisciplinasByProfessor(professorId: string): Promise<DisciplinaDisplay[]> {
  if (!isSupabaseConfigured || !supabase) {
    return []
  }

  try {
    const { data, error } = await supabase
      .from('disciplinas')
      .select(`
        *,
        curso:cursos(nome, slug),
        professor:professores(nome, slug)
      `)
      .eq('professor_id', professorId)
      .order('ano')
      .order('semestre')
      .order('nome')
    
    if (error) throw error
    
    if (data && data.length > 0) {
      return data.map(transformDisciplinaToDisplay)
    }
    
    return []
  } catch {
    return []
  }
}

import { supabase, isSupabaseConfigured } from '@/lib/supabase'
import type { Evento } from '@/types/database'

// Evento display interface for frontend
export interface EventoDisplay {
  id: string
  titulo: string
  slug: string
  descricao: string
  data: string
  hora: string
  local: string
  tipo: string
  imagem_url?: string
  created_at: string
}

// Get today's date in YYYY-MM-DD format for database queries
function getTodayDateString(): string {
  return new Date().toISOString().split('T')[0]
}

// Extract time from ISO date string safely
function extractTimeFromDate(dateString: string): string {
  try {
    const date = new Date(dateString)
    if (isNaN(date.getTime())) {
      return ''
    }
    const timeString = date.toTimeString().slice(0, 5)
    return timeString !== '00:00' ? timeString : ''
  } catch {
    return ''
  }
}

// Transform database evento to display format
function transformEventoToDisplay(dbEvento: Evento): EventoDisplay {
  const extractedHora = extractTimeFromDate(dbEvento.data)
  
  return {
    id: dbEvento.id,
    titulo: dbEvento.titulo,
    slug: dbEvento.slug || dbEvento.id,
    descricao: dbEvento.descricao || '',
    data: dbEvento.data,
    hora: dbEvento.hora || extractedHora,
    local: dbEvento.local || '',
    tipo: dbEvento.tipo || 'conferencia',
    imagem_url: dbEvento.imagem_url,
    created_at: dbEvento.created_at,
  }
}

// Get all eventos ordered by date
export async function getEventos(limit?: number): Promise<EventoDisplay[]> {
  if (!isSupabaseConfigured || !supabase) {
    return []
  }

  try {
    let query = supabase
      .from('eventos')
      .select('*')
      .order('data', { ascending: false })
    
    if (limit) query = query.limit(limit)
    
    const { data, error } = await query
    if (error) throw error
    
    if (data && data.length > 0) {
      return data.map(transformEventoToDisplay)
    }
    
    return []
  } catch {
    return []
  }
}

// Get eventos futuros (date >= today)
export async function getEventosFuturos(limit?: number): Promise<EventoDisplay[]> {
  if (!isSupabaseConfigured || !supabase) {
    return []
  }

  try {
    const today = getTodayDateString()
    
    let query = supabase
      .from('eventos')
      .select('*')
      .gte('data', today)
      .order('data', { ascending: true })
    
    if (limit) query = query.limit(limit)
    
    const { data, error } = await query
    if (error) throw error
    
    if (data && data.length > 0) {
      return data.map(transformEventoToDisplay)
    }
    
    return []
  } catch {
    return []
  }
}

// Get eventos realizados/passados (date < today)
export async function getEventosRealizados(limit?: number): Promise<EventoDisplay[]> {
  if (!isSupabaseConfigured || !supabase) {
    return []
  }

  try {
    const today = getTodayDateString()
    
    let query = supabase
      .from('eventos')
      .select('*')
      .lt('data', today)
      .order('data', { ascending: false })
    
    if (limit) query = query.limit(limit)
    
    const { data, error } = await query
    if (error) throw error
    
    if (data && data.length > 0) {
      return data.map(transformEventoToDisplay)
    }
    
    return []
  } catch {
    return []
  }
}

// Get evento by slug
export async function getEventoBySlug(slug: string): Promise<EventoDisplay | null> {
  if (!isSupabaseConfigured || !supabase) {
    return null
  }

  try {
    const { data, error } = await supabase
      .from('eventos')
      .select('*')
      .eq('slug', slug)
      .single()
    
    if (error) throw error
    
    if (data) {
      return transformEventoToDisplay(data)
    }
    
    return null
  } catch {
    return null
  }
}

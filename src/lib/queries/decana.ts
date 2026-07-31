import { supabase, isSupabaseConfigured } from '@/lib/supabase'
import type { Decana } from '@/types/database'

export async function getDecana(): Promise<Decana | null> {
  if (!isSupabaseConfigured || !supabase) {
    return null
  }

  try {
    const { data, error } = await supabase
      .from('decana')
      .select('*')
      .single()
    
    if (error) throw error
    return data
  } catch {
    return null
  }
}

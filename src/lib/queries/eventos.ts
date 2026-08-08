import { apiGet } from '@/lib/api'
import type { Evento } from '@/types/database'
export interface EventoDisplay { id: string; titulo: string; slug: string; descricao: string; data: string; hora: string; local: string; tipo: string; imagem_url?: string; video_url?: string; featured?: boolean; created_at: string }
const mapEvento = (e: Evento): EventoDisplay => ({ id: e.id, titulo: e.titulo, slug: e.slug || e.id, descricao: e.descricao || '', data: e.data, hora: e.hora || '', local: e.local || '', tipo: e.tipo || 'conferencia', imagem_url: e.imagem_url, video_url: e.video_url, featured: e.featured, created_at: e.created_at })
async function all() { return ((await apiGet<Evento[]>('/eventos')) || []).map(mapEvento) }
export async function getEventos(limit?: number) { return (await all()).slice(0, limit) }
export async function getEventosFuturos(limit?: number) {
  const today = new Date().toISOString()
  return (await all())
    .filter(e => e.data >= today)
    .sort((a, b) => { if (Boolean(a.featured) !== Boolean(b.featured)) return a.featured ? -1 : 1; return a.data.localeCompare(b.data) })
    .slice(0, limit)
}
export async function getEventosRealizados(limit?: number) {
  const today = new Date().toISOString()
  return (await all())
    .filter(e => e.data < today)
    .sort((a, b) => { if (Boolean(a.featured) !== Boolean(b.featured)) return a.featured ? -1 : 1; return b.data.localeCompare(a.data) })
    .slice(0, limit)
}
export async function getEventoBySlug(slug: string) { const evento = await apiGet<Evento>(`/eventos/${slug}`); return evento ? mapEvento(evento) : null }

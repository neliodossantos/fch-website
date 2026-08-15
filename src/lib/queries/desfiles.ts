import { apiGet, resolveMediaUrl } from '@/lib/api'

export interface DesfileMedia {
  id: string
  url: string
  alt?: string
  caption?: string
}

export interface DesfileDisplay {
  id: string
  titulo: string
  slug: string
  descricao: string
  ano: number
  pontos: string[]
  media: DesfileMedia[]
  mediaLayout: 'grid' | 'slider'
}

type ApiDesfile = {
  id: string
  titulo: string
  slug: string
  descricao?: string
  ano: number
  pontos?: string[]
  media?: { id: string; url: string; alt?: string; caption?: string }[]
  mediaLayout?: 'grid' | 'slider'
}

function mapDesfile(d: ApiDesfile): DesfileDisplay {
  return {
    id: d.id,
    titulo: d.titulo,
    slug: d.slug,
    descricao: d.descricao || '',
    ano: d.ano,
    pontos: d.pontos || [],
    media: (d.media || []).map(item => ({ id: item.id, url: resolveMediaUrl(item.url) || item.url, alt: item.alt, caption: item.caption })),
    mediaLayout: d.mediaLayout || 'grid',
  }
}

export async function getDesfiles(): Promise<DesfileDisplay[]> {
  const desfiles = await apiGet<ApiDesfile[]>('/desfiles')
  return (desfiles || []).map(mapDesfile)
}

export async function getDesfileBySlug(slug: string): Promise<DesfileDisplay | null> {
  const desfile = await apiGet<ApiDesfile>(`/desfiles/${slug}`)
  return desfile ? mapDesfile(desfile) : null
}

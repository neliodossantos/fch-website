import { apiGet } from '@/lib/api'

type ApiNoticia = {
  id: string
  title: string
  slug: string
  excerpt?: string
  body?: string
  publishedAt?: string
  media?: { url: string }[]
}

function mapApiNoticia(noticia: ApiNoticia) {
  return {
    id: noticia.id,
    titulo: noticia.title,
    slug: noticia.slug,
    resumo: noticia.excerpt || '',
    conteudo: noticia.body || '',
    imagem_url: noticia.media?.[0]?.url || null,
    data_publicacao: noticia.publishedAt || new Date().toISOString(),
  }
}

export async function getNoticias(limit?: number) {
  const [noticias, posts] = await Promise.all([
    apiGet<ApiNoticia[]>('/content?type=news'),
    apiGet<ApiNoticia[]>('/content?type=post'),
  ])

  return [...(noticias || []), ...(posts || [])]
    .sort((first, second) => new Date(second.publishedAt || 0).getTime() - new Date(first.publishedAt || 0).getTime())
    .slice(0, limit)
    .map(mapApiNoticia)
}

export async function getNoticiaBySlug(slug: string) {
  const noticia = await apiGet<ApiNoticia>(`/content/${slug}`)
  return noticia ? mapApiNoticia(noticia) : null
}

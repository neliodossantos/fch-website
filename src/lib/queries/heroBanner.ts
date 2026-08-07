import { apiGet } from '@/lib/api'

type SectionMedia = { url: string; alt?: string; position: number }
type Section = { sectionKey?: string; media?: SectionMedia[] }

const API_URL = process.env.FCH_API_URL || process.env.NEXT_PUBLIC_FCH_API_URL || 'http://localhost:3005/api'
const API_ORIGIN = API_URL.replace(/\/api\/?$/, '')

export type HeroBannerImage = { url: string; alt: string }

export async function getHeroBanner(): Promise<HeroBannerImage | null> {
  const sections = await apiGet<Section[]>('/content?type=section')
  const section = sections?.find(item => item.sectionKey === 'home-hero-banner')
  const image = section?.media?.slice().sort((a, b) => a.position - b.position)[0]
  if (!image) return null
  return {
    url: image.url.startsWith('http') ? image.url : `${API_ORIGIN}${image.url}`,
    alt: image.alt || 'Faculdade de Ciências Humanas',
  }
}

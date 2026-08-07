import { apiGet } from '@/lib/api'

export interface HighlightDisplay {
  id: string
  title: string
  description: string
  href: string
  icon: string
  imageUrl?: string
  videoUrl?: string
}

export async function getDestaques(): Promise<HighlightDisplay[]> {
  return (await apiGet<HighlightDisplay[]>('/destaques')) || []
}

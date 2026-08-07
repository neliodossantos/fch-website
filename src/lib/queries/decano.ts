import { apiGet } from '@/lib/api'
import type { Decano } from '@/types/database'
type Section = { sectionKey?: string; body?: string }
export async function getDecano(): Promise<Decano | null> {
  const sections = await apiGet<Section[]>('/content?type=section')
  const message = sections?.find(section => section.sectionKey === 'home-dean-message')
  return message ? { id: 'decana', nome: 'Dr. Nlandu Faustino', titulo: 'Decano da Faculdade de Ciências Humanas', foto_url: '/images/decana/decano.jpeg', mensagem: message.body } : null
}
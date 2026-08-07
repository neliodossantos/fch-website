import { apiGet } from '@/lib/api'
import type { Professor } from '@/types/database'

export interface ProfessorDisplay {
  id: string; slug: string; nome: string; titulacao: string; areas: string[]; email: string
  foto?: string; foto_url?: string | null; departamento: string; biografia: string
  formacao: string[]; disciplinas: string[]; publicacoes: { titulo: string; ano: number; tipo: 'artigo' | 'livro' | 'capitulo'; revista?: string }[]
  telefone?: string; gabinete?: string
}
type ProfessorApi = Professor & { formacoes?: { grau: string; instituicao: string; ano?: string }[]; publicacoes?: { titulo: string; ano?: string; revista?: string }[] }
const mapProfessor = (p: ProfessorApi): ProfessorDisplay => ({ id: p.id, slug: p.slug, nome: p.nome, titulacao: p.titulo || '', areas: p.areas_investigacao || [], email: p.email || '', foto_url: p.foto_url, departamento: p.departamento || '', biografia: p.biografia || '', formacao: (p.formacoes || []).map(f => `${f.grau} - ${f.instituicao}${f.ano ? ` (${f.ano})` : ''}`), disciplinas: [], publicacoes: (p.publicacoes || []).map(p => ({ titulo: p.titulo, ano: Number(p.ano) || new Date().getFullYear(), tipo: 'artigo', revista: p.revista })), telefone: p.telefone, gabinete: p.gabinete })
export async function getProfessores(): Promise<ProfessorDisplay[]> { return ((await apiGet<ProfessorApi[]>('/professores')) || []).map(mapProfessor) }
export async function getProfessorBySlug(slug: string): Promise<ProfessorDisplay | null> { const p = await apiGet<ProfessorApi>(`/professores/${slug}`); return p ? mapProfessor(p) : null }
export async function getProfessorDisciplinas(professorId: string) { return (await apiGet<unknown[]>(`/professores/${professorId}/disciplinas`)) || [] }
export async function getAllProfessorSlugs(): Promise<string[]> { return ((await apiGet<{ slug: string }[]>('/professores/slugs')) || []).map(p => p.slug) }

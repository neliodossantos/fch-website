import { apiGet } from '@/lib/api'
import type { Curso } from '@/types/database'
export type CursoGrau = 'Licenciatura' | 'Pós-Graduação'
export interface CursoDisplay { id: string; nome: string; tipo: 'graduacao' | 'pos-graduacao'; duracao: string; descricao: string; coordenador: string; slug: string; objetivos: string[]; perfil: string; areas: string[]; pdfUrl?: string }
export interface Semestre { semestre: number; disciplinas: { nome: string; professor: string; professorSlug: string; creditos: number }[] }
export interface AnoCurricular { ano: number; semestres: Semestre[] }
export interface EstruturaCurricular { cursoSlug: string; cursoNome: string; pdfUrl?: string; anos: AnoCurricular[] }
type ApiCurso = Curso & { coordenador?: { nome: string } }
const map = (c: ApiCurso): CursoDisplay => ({ id: c.id, nome: c.nome, tipo: c.grau === 'Pós-Graduação' ? 'pos-graduacao' : 'graduacao', duracao: c.duracao || '4 anos', descricao: c.descricao || '', coordenador: c.coordenador?.nome || '', slug: c.slug, objetivos: c.objetivos || [], perfil: c.perfil_graduado || '', areas: c.saidas_profissionais || [], pdfUrl: c.pdf_url })
export async function getCursos(): Promise<CursoDisplay[]> { return ((await apiGet<ApiCurso[]>('/cursos')) || []).map(map) }
export async function getCursosByGrau(grau: CursoGrau): Promise<CursoDisplay[]> { return ((await apiGet<ApiCurso[]>(`/cursos?grau=${encodeURIComponent(grau)}`)) || []).map(map) }
export async function getCursosAgrupados() { const [licenciatura, posGraduacao] = await Promise.all([getCursosByGrau('Licenciatura'), getCursosByGrau('Pós-Graduação')]); return { licenciatura, posGraduacao } }
export async function getCursoBySlug(slug: string): Promise<CursoDisplay | undefined> { const curso = await apiGet<ApiCurso>(`/cursos/${slug}`); return curso ? map(curso) : undefined }
export async function getEstruturaCurricular(cursoSlug: string): Promise<EstruturaCurricular | undefined> { return (await apiGet<EstruturaCurricular>(`/cursos/${cursoSlug}/estrutura`)) || undefined }
export async function getCursosGraduacao(): Promise<CursoDisplay[]> { return getCursosByGrau('Licenciatura') }
export async function getCursosPosGraduacao(): Promise<CursoDisplay[]> { return getCursosByGrau('Pós-Graduação') }
export function getAllCursoSlugs(): string[] { return [] }

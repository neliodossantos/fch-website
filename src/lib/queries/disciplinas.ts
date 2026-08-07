import { apiGet } from '@/lib/api'
import type { Disciplina } from '@/types/database'
export interface DisciplinaDisplay { id: string; nome: string; slug: string; codigo?: string; creditos: number; horas?: number; carga_horaria_teorica?: number; carga_horaria_pratica?: number; semestre: number; ano: number; curso: { nome: string; slug: string }; professor?: { nome: string; slug: string }; ementa?: string; objetivos?: string; bibliografia?: string }
type ApiDisciplina = Disciplina & { curso?: { nome: string; slug: string }; professor?: { nome: string; slug: string } }
const map = (d: ApiDisciplina): DisciplinaDisplay => ({ ...d, creditos: d.creditos || 0, curso: d.curso || { nome: '', slug: '' }, professor: d.professor })
export async function getDisciplinas(): Promise<DisciplinaDisplay[]> { return ((await apiGet<ApiDisciplina[]>('/disciplinas')) || []).map(map) }
export async function getDisciplinaBySlug(slug: string): Promise<DisciplinaDisplay | null> { const d = await apiGet<ApiDisciplina>(`/disciplinas/${slug}`); return d ? map(d) : null }
export async function getDisciplinasByAno(cursoId: string, ano: number): Promise<DisciplinaDisplay[]> { return ((await apiGet<ApiDisciplina[]>(`/disciplinas?cursoId=${cursoId}&ano=${ano}`)) || []).map(map) }
export async function getDisciplinasByCurso(cursoId: string): Promise<DisciplinaDisplay[]> { return ((await apiGet<ApiDisciplina[]>(`/disciplinas?cursoId=${cursoId}`)) || []).map(map) }
export async function getDisciplinasByProfessor(professorId: string): Promise<DisciplinaDisplay[]> { return ((await apiGet<ApiDisciplina[]>(`/disciplinas?professorId=${professorId}`)) || []).map(map) }

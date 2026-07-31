export interface Professor {
  id: string
  nome: string
  slug: string
  titulo?: string
  departamento?: string
  email?: string
  telefone?: string
  linkedin?: string
  foto_url?: string
  biografia?: string
  areas_investigacao?: string[]
  gabinete?: string
  created_at: string
}

export interface Formacao {
  id: string
  professor_id: string
  grau: string
  instituicao: string
  ano?: string
}

export interface Publicacao {
  id: string
  professor_id: string
  titulo: string
  revista?: string
  ano?: string
}

export interface Curso {
  id: string
  nome: string
  slug: string
  descricao?: string
  duracao?: string
  grau?: string
  tipo?: string
  objetivos?: string[]
  perfil_graduado?: string
  saidas_profissionais?: string[]
  coordenador_id?: string
  pdf_url?: string
  created_at: string
}

export interface Disciplina {
  id: string
  curso_id: string
  professor_id?: string
  nome: string
  slug: string
  codigo?: string
  ano: number
  semestre: number
  creditos?: number
  horas?: number
  carga_horaria_teorica?: number
  carga_horaria_pratica?: number
  ementa?: string
  objetivos?: string
  bibliografia?: string
}

export interface Decana {
  id: string
  nome: string
  titulo?: string
  foto_url?: string
  mensagem?: string
}

export interface Evento {
  id: string
  titulo: string
  slug?: string
  descricao?: string
  data: string
  hora?: string
  local?: string
  tipo?: string
  imagem_url?: string
  created_at: string
}

export interface Noticia {
  id: string
  titulo: string
  slug: string
  resumo?: string
  conteudo?: string
  imagem_url?: string
  data_publicacao: string
  autor?: string
  created_at: string
}

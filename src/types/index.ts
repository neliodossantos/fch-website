export interface Curso {
  id: string
  nome: string
  tipo: 'graduacao' | 'pos-graduacao'
  duracao: string
  descricao: string
  coordenador: string
  slug: string
  objetivos: string[]
  perfil: string
  areas: string[]
}

export interface Docente {
  id: string
  nome: string
  titulacao: string
  areas: string[]
  email: string
  foto?: string
  lattes?: string
  departamento: string
}

export interface Evento {
  id: string
  titulo: string
  data: string
  hora: string
  local: string
  descricao: string
  tipo: 'conferencia' | 'seminario' | 'workshop' | 'cultural'
  status: 'futuro' | 'realizado'
  imagem?: string
}

export interface NavItem {
  title: string
  href: string
  children?: NavItem[]
}

export interface Noticia {
  id: string
  titulo: string
  resumo: string
  data: string
  imagem?: string
  slug: string
}

export interface Membro {
  id: string
  nome: string
  cargo: string
  curso: string
  foto?: string
  email?: string
}

export interface Parceiro {
  id: string
  nome: string
  tipo: string
  descricao: string
  logo?: string
  website?: string
}

export interface Projeto {
  id: string
  titulo: string
  descricao: string
  investigadores: string[]
  status: 'em_andamento' | 'concluido'
  ano_inicio: number
  ano_fim?: number
}

export interface Publicacao {
  id: string
  titulo: string
  autores: string[]
  ano: number
  revista?: string
  tipo: 'artigo' | 'livro' | 'capitulo' | 'tese'
  link?: string
}

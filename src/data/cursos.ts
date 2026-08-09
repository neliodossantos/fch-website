export interface CursoResumo {
  id: string
  slug: string
  nome: string
  descricao: string
  duracao?: string
  coordenador?: string
  areas: string[]
}

export const cursosGraduacao: CursoResumo[] = [
  {
    id: 'psicologia-clinica',
    slug: 'psicologia-clinica',
    nome: 'Psicologia — Opção Clínica',
    descricao:
      'O curso de Psicologia, opção Clínica, forma profissionais capacitados para compreender, avaliar e intervir em processos de saúde mental.',
    duracao: '5 anos',
    coordenador: 'Doutora Helena Veloso',
    areas: ['Promoção da Saúde Mental', 'Saúde Comunitária', 'Docência', 'Investigação'],
  },
  {
    id: 'psicologia-trabalho-organizacoes',
    slug: 'psicologia-trabalho-organizacoes',
    nome: 'Psicologia — Opção do Trabalho e das Organizações',
    descricao:
      'O curso de Psicologia, opção do Trabalho e das Organizações, forma profissionais capazes de intervir em contextos organizacionais, empresariais e institucionais.',
    duracao: '5 anos',
    coordenador: 'Mestre Manuel Armando Dala',
    areas: ['Recrutamento & Selecção', 'Gestão de Recursos Humanos', 'Consultoria Organizacional', 'Desenvolvimento Organizacional'],
  },
  {
    id: 'linguas-administracao',
    slug: 'linguas-administracao',
    nome: 'Línguas e Administração',
    descricao:
      'O curso de Línguas e Administração integra competências linguísticas, culturais e organizacionais, preparando profissionais para contextos nacionais e internacionais.',
    coordenador: 'Doutor Domingos Carlos Pascoal (Línguas Românicas) e Doutor Francisco Matete (Línguas Germânicas)',
    areas: ['Tradução', 'Diplomacia', 'Jornalismo/Comunicação Social', 'Gestão de Empresas'],
  },
]

export const cursosPosGraduacao: CursoResumo[] = [
  {
    id: 'especializacao-gestao-ensino-superior',
    slug: 'especializacao-gestao-ensino-superior',
    nome: 'Especialização em Gestão do Ensino Superior',
    descricao:
      'Curso que fortalece as capacidades de liderança de quadros das Instituições de Ensino Superior angolanas em matéria de gestão do ensino, investigação e extensão.',
    coordenador: 'Manuel Dala',
    areas: ['Planeamento Estratégico', 'Gestão do Ensino Superior', 'Investigação', 'Extensão'],
  },
  {
    id: 'capacitacao-pedagogica',
    slug: 'capacitacao-pedagogica',
    nome: 'Capacitação Pedagógica (PGPCP)',
    descricao:
      'Programa (PGPCP) que desenvolve as capacidades didáctico-pedagógicas dos docentes do ensino superior.',
    coordenador: 'Manuel Dala',
    areas: ['Didáctica do Ensino Superior', 'Prática Pedagógica', 'Comunicação Educativa', 'Avaliação das Aprendizagens'],
  },
  {
    id: 'gestao-pessoas-360',
    slug: 'gestao-pessoas-360',
    nome: 'Gestão de Pessoas 360º',
    descricao:
      'Programa que integra Gestão de Pessoas, Psicologia Organizacional, Direito do Trabalho e Inteligência Artificial Aplicada à Gestão de Pessoas.',
    coordenador: 'Lorena Henriquez',
    areas: ['Gestão de Pessoas', 'Psicologia Organizacional', 'Direito do Trabalho', 'Inteligência Artificial'],
  },
  {
    id: 'consulta-psicologica',
    slug: 'consulta-psicologica',
    nome: 'Consulta Psicológica',
    descricao:
      'Programa que desenvolve competências avançadas para psicólogos e profissionais de saúde mental nas vertentes Cognitivo-Comportamental e Psicanalítica.',
    coordenador: 'Helena Veloso',
    areas: ['Terapia Psicanalítica', 'Psicoterapia Cognitivo-Comportamental', 'Ética e Deontologia', 'Atendimento Clínico Supervisionado'],
  },
]

export function getCursoGraduacaoBySlug(slug: string): CursoResumo | undefined {
  return cursosGraduacao.find(curso => curso.slug === slug)
}

export function getCursoPosGraduacaoBySlug(slug: string): CursoResumo | undefined {
  return cursosPosGraduacao.find(curso => curso.slug === slug)
}

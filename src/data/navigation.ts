import { NavItem } from '@/types'
import { Locale, localizePath } from '@/lib/i18n'

const aboutNavigationItem: NavItem = {
  title: 'Sobre',
  href: '/sobre',
  children: [
    { title: 'História', href: '/sobre/historia' },
    { title: 'Missão, Visão e Valores', href: '/sobre/missao-visao-valores' },
    { title: 'Estrutura Organizacional', href: '/sobre/estrutura-organizacional' },
    { title: 'Direção', href: '/sobre/direcao' },
    { title: 'Mensagem do Decano', href: '/sobre/mensagem-do-decano' },
    { title: 'Desfile Académico', href: '/desfile-academico' },
    { title: 'Cooperação Internacional', href: '/sobre/cooperacao-internacional' },
    { title: 'Perspectivas de Desenvolvimento', href: '/sobre/perspectivas-desenvolvimento' },
    { title: 'Secretaria', href: '/sobre/secretaria', children: [
      { title: 'Serviços', href: '/sobre/secretaria/servicos' },
      { title: 'Formulários', href: '/sobre/secretaria/formularios' },
      { title: 'Horários e Contactos', href: '/sobre/secretaria/horarios-Contactos' },
    ] },
  ],
}

export const navigationItems: NavItem[] = [
  aboutNavigationItem,
  {
    title: 'Ensino',
    href: '/cursos',
    children: [
      {
        title: 'Graduação',
        href: '/cursos/graduacao',
        children: [
          { title: 'Psicologia do Trabalho e das Organizações', href: '/cursos/graduacao/psicologia-trabalho-organizacoes' },
          { title: 'Psicologia Clínica', href: '/cursos/graduacao/psicologia-clinica' },
          { title: 'Línguas e Administração', href: '/cursos/graduacao/linguas-administracao' },
        ],
      },
      {
        title: 'Pós-Graduação',
        href: '/cursos/pos-graduacao',
        children: [
          { title: 'Especialização em Gestão do Ensino Superior', href: '/cursos/pos-graduacao/especializacao-gestao-ensino-superior' },
          { title: 'Capacitação Pedagógica', href: '/cursos/pos-graduacao/capacitacao-pedagogica' },
          { title: 'Gestão de Pessoas 360º', href: '/cursos/pos-graduacao/gestao-pessoas-360' },
          { title: 'Consulta Psicológica', href: '/cursos/pos-graduacao/consulta-psicologica' },
        ],
      },
    ],
  },
  {
    title: 'Investigação',
    href: '/ciei',
    children: [
      { title: 'Projetos', href: '/ciei/projetos' },
      { title: 'Investigadores', href: '/ciei/investigadores' },
      { title: 'Publicações', href: '/ciei/publicacoes' },
    ],
  },
  {
    title: 'Extensão',
    href: '/extensao',
    children: [
      { title: 'Cursos Complementares', href: '/extensao/cursos-complementares' },
      { title: 'Laboratório de Psicologia', href: '/laboratorio-psicologia' },
      { title: 'Estágios', href: '/estagios', children: [
        { title: 'Supervisores', href: '/estagios/supervisores' },
        { title: 'Parceiros', href: '/estagios/parceiros' },
      ] },
    ],
  },
  {
    title: 'Docentes',
    href: '/corpo-docente',
  },
  {
    title: 'Eventos',
    href: '/eventos',
    children: [
      { title: 'Eventos Futuros', href: '/eventos/futuros' },
      { title: 'Eventos Realizados', href: '/eventos/realizados' },
    ],
  },
  {
    title: 'Associação de Estudantes',
    href: '/associacao-estudantes',
    children: [
      { title: 'Membros', href: '/associacao-estudantes/membros' },
      { title: 'Contactos', href: '/associacao-estudantes/Contactos' },
    ],
  },
  {
    title: 'Admissões',
    href: '/admissoes',
    children: [
      { title: 'Requisitos', href: '/admissoes/requisitos' },
      { title: 'Documentos', href: '/admissoes/documentos' },
      { title: 'Taxas', href: '/admissoes/taxas' },
      { title: 'FAQ', href: '/admissoes/faq' },
    ],
  },
  {
    title: 'Contacto',
    href: '/contato',
  },
]

const englishLabels: Record<string, string> = {
  'Ensino': 'Academics', 'Graduação': 'Undergraduate', 'Pós-Graduação': 'Graduate Studies', 'Psicologia do Trabalho e das Organizações': 'Work and Organizational Psychology', 'Psicologia Clínica': 'Clinical Psychology', 'Línguas e Administração': 'Languages and Administration', 'Especialização em Gestão do Ensino Superior': 'Higher Education Management Specialization', 'Capacitação Pedagógica': 'Pedagogical Training', 'Gestão de Pessoas 360º': 'People Management 360º', 'Consulta Psicológica': 'Psychological Consultation', 'Investigação': 'Research', 'Projetos': 'Projects', 'Investigadores': 'Researchers', 'Publicações': 'Publications', 'Extensão': 'Extension', 'Cursos Complementares': 'Complementary Courses', 'Laboratório de Psicologia': 'Psychology Laboratory', 'Estágios': 'Internships', 'Supervisores': 'Supervisors', 'Parceiros': 'Partners', 'Docentes': 'Faculty', 'Eventos': 'Events', 'Eventos Futuros': 'Upcoming Events', 'Eventos Realizados': 'Past Events', 'Associação de Estudantes': 'Student Association', 'Membros': 'Members', 'Contactos': 'Contacts', 'Sobre': 'About', 'História': 'History', 'Missão, Visão e Valores': 'Mission, Vision and Values', 'Estrutura Organizacional': 'Organizational Structure', 'Direção': 'Leadership', 'Mensagem do Decano': "Dean's Message", 'Desfile Académico': 'Academic Parade', 'Cooperação Internacional': 'International Cooperation', 'Perspectivas de Desenvolvimento': 'Development Perspectives', 'Secretaria': 'Secretariat', 'Serviços': 'Services', 'Formulários': 'Forms', 'Horários e Contactos': 'Hours and Contacts', 'Admissões': 'Admissions', 'Requisitos': 'Requirements', 'Documentos': 'Documents', 'Taxas': 'Fees', 'Contacto': 'Contact',
}

export function getNavigationItems(locale: Locale): NavItem[] {
  if (locale === 'pt') return navigationItems
  const translate = (items: NavItem[]): NavItem[] => items.map(item => ({
    ...item,
    title: englishLabels[item.title] || item.title,
    href: localizePath(item.href, 'en'),
    children: item.children ? translate(item.children) : undefined,
  }))
  return translate(navigationItems)
}

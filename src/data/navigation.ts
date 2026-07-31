import { NavItem } from '@/types'

export const navigationItems: NavItem[] = [
  
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
          { title: 'Línguas', href: '/cursos/graduacao/linguas' },
        ],
      },
      {
        title: 'Pós-Graduação',
        href: '/cursos/pos-graduacao',
        children: [
          { title: 'Mestrado em Psicologia Clínica', href: '/cursos/pos-graduacao/mestrado-psicologia-clinica' },
          { title: 'Mestrado em Gestão Social', href: '/cursos/pos-graduacao/mestrado-gestao-social' },
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
      { title: 'Estágios',
      href: '/estagios',
      children: [
      { title: 'Supervisores', href: '/estagios/supervisores' },
      { title: 'Parceiros', href: '/estagios/parceiros' },
    ],
    }
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
 /*{
    title: 'Coordenação Extracurricular',
    href: '/coordenacao-extracurricular',
    children: [
      { title: 'Atividades', href: '/coordenacao-extracurricular/atividades' },
    ],
  },*/

  
  {
    title: 'Sobre',
    href: '/sobre',
    children: [
      { title: 'História', href: '/sobre/historia' },
      { title: 'Missão, Visão e Valores', href: '/sobre/missao-visao-valores' },
      { title: 'Estrutura Organizacional', href: '/sobre/estrutura-organizacional' },
      { title: 'Direção', href: '/sobre/direcao' },
      {
        title: 'Secretaria',
        href: '/sobre/secretaria',
        children: [
          { title: 'Serviços', href: '/sobre/secretaria/servicos' },
          { title: 'Formulários', href: '/sobre/secretaria/formularios' },
          { title: 'Horários e Contactos', href: '/sobre/secretaria/horarios-Contactos' },
        ],
      },
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

export const locales = ['pt', 'en'] as const
export type Locale = (typeof locales)[number]

const segmentTranslations: Record<string, string> = {
  admissoes: 'admissions', 'associacao-estudantes': 'student-association', atividades: 'activities', candidatura: 'application', 'capacitacao-pedagogica': 'pedagogical-training', contato: 'contact', 'coordenacao-extracurricular': 'extracurricular-coordination', 'corpo-docente': 'faculty', cursos: 'courses', 'cursos-complementares': 'complementary-courses', direcao: 'leadership', documentos: 'documents', 'especializacao-gestao-ensino-superior': 'higher-education-management-specialization', estagios: 'internships', eventos: 'events', extensao: 'extension', formularios: 'forms', futuros: 'upcoming', 'gestao-pessoas-360': 'people-management-360', graduacao: 'undergraduate', historia: 'history', 'horarios-contatos': 'hours-contact', inscricao: 'registration', investigadores: 'researchers', 'laboratorio-psicologia': 'psychology-laboratory', 'linguas-administracao': 'languages-administration', 'links-uteis': 'useful-links', marcacao: 'booking', membros: 'members', 'mensagem-do-decano': 'deans-message', 'missao-visao-valores': 'mission-vision-values', noticias: 'news', parceiros: 'partners', 'perspectivas-desenvolvimento': 'development-perspectives', 'pos-graduacao': 'graduate', projetos: 'projects', 'psicologia-clinica': 'clinical-psychology', 'psicologia-trabalho-organizacoes': 'work-organizational-psychology', publicacoes: 'publications', realizados: 'past', requisitos: 'requirements', secretaria: 'secretariat', servicos: 'services', sobre: 'about', supervisores: 'supervisors', taxas: 'fees', 'consulta-psicologica': 'psychological-consultation', 'cooperacao-internacional': 'international-cooperation', 'estrutura-organizacional': 'organizational-structure', ciei: 'ciei', faq: 'faq', 'desfile-academico': 'academic-parade',
}

const reverseSegmentTranslations = Object.fromEntries(Object.entries(segmentTranslations).map(([pt, en]) => [en, pt]))

export function getLocale(pathname: string): Locale {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'pt'
}

export function localizePath(pathname: string, locale: Locale) {
  const cleanPath = pathname.replace(/^\/en(?=\/|$)/, '') || '/'
  if (locale === 'pt') return cleanPath
  const translatedPath = cleanPath.split('/').map(segment => segmentTranslations[segment] || segment).join('/')
  return `/en${translatedPath === '/' ? '' : translatedPath}`
}

export function toPortuguesePath(pathname: string) {
  const withoutLocale = pathname.replace(/^\/en(?=\/|$)/, '') || '/'
  return withoutLocale.split('/').map(segment => reverseSegmentTranslations[segment] || segment).join('/')
}

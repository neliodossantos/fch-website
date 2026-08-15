export interface Disciplina {
  nome: string
  curso: string
}

export interface Docente {
  slug: string
  nome: string
  titulo: string
  departamento?: string
  email?: string
  foto_url?: string
  formacao: string[]
  disciplinas: Disciplina[]
}

export const docentes: Docente[] = [
  {
    slug: 'nlando-matondo-faustino',
    nome: 'Nlando Matondo Faustino',
    titulo: 'Doutor em Filosofia',
    departamento: 'Decanato',
    foto_url: '/images/decana/decano.png',
    formacao: [
      'Doutoramento em Filosofia, especialidade Filosofia Política — Universidade de Évora, Portugal (2022)',
      'Diploma de Estudos Avançados em Filosofia Política — Universidade de Évora (2019)',
      'Mestrado em Ciências da Educação — Administração e Gestão Educacional — Universidade de Évora (2014)',
      'Mestrado em Filosofia — Universidade Gregoriana / Faculté de Philosophie Saint Pièrre Canisius, Kimwenza, RDC (2002–2004)',
      'Bacharelato Único em Filosofia — mesma instituição (2001–2002)',
      'Bacharelato em Filosofia — Seminário Maior de São Paulo, Uíge, Angola',
    ],
    disciplinas: [
      { nome: 'Extensão', curso: 'Especialização em Gestão do Ensino Superior' },
      { nome: 'A Universidade e as Novas Tendências Pedagógicas', curso: 'Capacitação Pedagógica (PGPCP)' },
    ],
  },
  {
    slug: 'helena-veloso',
    nome: 'Helena Veloso',
    titulo: 'Doutora',
    departamento: 'Departamento de Psicologia Clínica',
    email: 'helena.veloso@ucan.edu',
    formacao: [],
    disciplinas: [
      { nome: 'Terapia Psicanalítica: Teoria e Prática', curso: 'Consulta Psicológica' },
      { nome: 'Atendimento Clínico Supervisionado em Terapia Psicanalítica I, II e III', curso: 'Consulta Psicológica' },
    ],
  },
  {
    slug: 'manuel-armando-dala',
    nome: 'Manuel Armando Dala',
    titulo: 'Mestre',
    departamento: 'Departamento de Psicologia do Trabalho e das Organizações',
    email: 'manuel.dala@ucan.edu',
    foto_url: '/images/professores/mdala.jpg',
    formacao: [],
    disciplinas: [
      { nome: 'Saúde Mental, Qualidade de Vida e Psicodinâmica do Trabalho', curso: 'Gestão de Pessoas 360º' },
    ],
  },
  {
    slug: 'domingos-carlos-pascoal',
    nome: 'Domingos Carlos Pascoal',
    titulo: 'Doutor',
    departamento: 'Departamento de Línguas Românicas e Literaturas Modernas',
    email: 'domingos.pascoal@ucan.edu',
    formacao: [],
    disciplinas: [],
  },
  {
    slug: 'francisco-matete',
    nome: 'Francisco Matete',
    titulo: 'Doutor',
    departamento: 'Departamento de Línguas Germânicas e Literaturas Modernas',
    email: 'francisco.matete@ucan.edu',
    foto_url: '/images/professores/Matete.jpg',
    formacao: [],
    disciplinas: [],
  },
  {
    slug: 'joao-manuel-saveia',
    nome: 'João Manuel Saveia Daniel Francisco',
    titulo: 'Doutor em Psicologia',
    foto_url: '/images/professores/Jsaveia.jpg',
    formacao: [
      'Doutor em Psicologia — Universidade Federal da Bahia (UFBA)',
      'Mestre em Administração — Organização e Recursos Humanos — Universidade Federal de Minas Gerais (UFMG)',
      'Especialista em Gestão Estratégica de Negócios — UFMG',
      'Especialista em Gestão Estratégica de Recursos Humanos — UFMG',
      'Licenciado em Psicologia',
    ],
    disciplinas: [
      { nome: 'Recursos Humanos no Coração do Ensino Superior', curso: 'Especialização em Gestão do Ensino Superior' },
      { nome: 'Psicologia Organizacional e do Trabalho: Comportamento, Motivação e Desempenho', curso: 'Gestão de Pessoas 360º' },
    ],
  },
  {
    slug: 'tuca-manuel',
    nome: 'Tuca Manuel',
    titulo: 'Doutor em Ciências da Educação',
    formacao: [
      'Doutor em Ciências da Educação / Organização e Gestão Escolar — Universidade do Minho, Portugal',
      'Especialista em Organizações Educativas e Administração Educacional — Universidade do Minho, Portugal',
    ],
    disciplinas: [{ nome: 'Fundamentos do Ensino Superior', curso: 'Especialização em Gestão do Ensino Superior' }],
  },
  {
    slug: 'ken-kalala-ndalamba',
    nome: 'Ken Kalala Ndalamba',
    titulo: 'Doutor em Gestão e Administração Pública',
    formacao: [
      'Doutor em Gestão e Administração Pública — University of the Western Cape, África do Sul',
      'Mestre (MA) em Liderança e Gestão — University of the Western Cape',
      'Pós-graduado em Ensino Superior — Docência e Gestão — University of South Africa',
    ],
    disciplinas: [{ nome: 'Planeamento Estratégico', curso: 'Especialização em Gestão do Ensino Superior' }],
  },
  {
    slug: 'eurico-wongo-gungula',
    nome: 'Eurico Wongo Gungula',
    titulo: 'Doutor em Ciências Pedagógicas',
    formacao: [
      'Doutor em Ciências Pedagógicas — Universidade Máximo Gómez Báez / Universidade de Oriente, Cuba',
      'Mestre em Novas Tecnologias aplicadas à Educação — Matemática — Universidade Máximo Gómez Báez, Cuba',
    ],
    disciplinas: [{ nome: 'Investigação', curso: 'Especialização em Gestão do Ensino Superior' }],
  },
  {
    slug: 'samuel-helena-tumbula',
    nome: 'Samuel Helena Tumbula',
    titulo: 'Doutor em Ciências da Educação',
    foto_url: '/images/professores/SamuelTumbula.jpeg',
    formacao: [
      'Doutor em Ciências da Educação, Administração e Organização Escolar — Universidade Católica Portuguesa (2020)',
      'Mestre em Ciências da Educação, mesma especialidade — Universidade Católica Portuguesa (2010)',
      'MBA em Gerenciamento de Projectos — Fundação Getúlio Vargas, Brasil (2017)',
      'Pós-graduação em Direito do Trabalho e Segurança Social — Universidade Católica Portuguesa (2021)',
      'Pós-graduação em Contratação Pública — Universidade de Coimbra (em conclusão)',
      'Pós-graduação em Direito da Responsabilidade Civil — Universidade de Lisboa (em conclusão)',
      'Formação em Metodologia Qualitativa e Quantitativa — Universidade de Coimbra (2022)',
    ],
    disciplinas: [
      { nome: 'Redacção de Projectos de Investigação Científica', curso: 'Especialização em Gestão do Ensino Superior' },
      { nome: 'Metodologia de Investigação Científica', curso: 'Consulta Psicológica' },
    ],
  },
  {
    slug: 'ana-maria-alfaiate-rocha',
    nome: 'Ana Maria Alfaiate Rocha',
    titulo: 'Doutora em Psicologia da Educação',
    foto_url: '/images/professores/AnaRocha.jpeg',
    formacao: [
      'Doutora em Psicologia da Educação — Faculdade de Psicologia da Universidade de Lisboa',
      'Especialista em Avaliação e Intervenção Psicológica em Contextos Educativos — mesma instituição',
    ],
    disciplinas: [{ nome: 'Gestão e Liderança de Equipas', curso: 'Especialização em Gestão do Ensino Superior' }],
  },
  {
    slug: 'albertino-candimba-sebastiao',
    nome: 'Albertino Candimba Sebastião',
    titulo: 'Doutor em Educação',
    formacao: [
      'Doutoramento em Educação, Gestão Estratégica e Avaliação Institucional em Instituições de Ensino Superior',
      'Mestrado em Educação, mesma área',
      'MBA em Gestão Educacional, Gestão e Planeamento Estratégico',
      'Especialização em Ensino da Física e Química — Universidade de Aveiro',
    ],
    disciplinas: [{ nome: 'Gestão Académica', curso: 'Especialização em Gestão do Ensino Superior' }],
  },
  {
    slug: 'pedro-manuel-marques-fernandes',
    nome: 'Pedro Manuel Marques Fernandes',
    titulo: 'MBA em Gestão de Empresas',
    formacao: [
      'MBA/Mestrado em Gestão de Empresas — Lisboa',
      'Curso de Formação de Formadores — Lisboa',
      'Programa de Doutoramento em Gestão Estratégica — Lisboa',
      'Cursos de Especialização em Contabilidade — Lisboa',
      'Licenciatura em Gestão de Empresas — Lisboa',
    ],
    disciplinas: [{ nome: 'Gestão Financeira', curso: 'Especialização em Gestão do Ensino Superior' }],
  },
  {
    slug: 'joao-francisco',
    nome: 'João Francisco',
    titulo: 'Doutor em Direito',
    formacao: [
      'Doutor em Direito — Universitat de València, Espanha (2021), com pesquisa doutoral como Visiting Fellow na University of Oslo e no Centro de Direitos Humanos da Faculdade de Direito da Universidade de Pretória',
      'Mestre em Direito — Universitat de València (2016)',
      'Professor de Direito Internacional na Faculdade de Direito da UCAN',
      'Coordenador do Departamento de Direito Público e do Departamento de Estudos e Investigação do Centro de Direitos Humanos e Cidadania da Faculdade de Direito da UCAN',
      'Estágio pós-doutoral na Universidade Federal de Minas Gerais',
      'Professor Convidado na Faculdade de Direito da Universidade Agostinho Neto',
      'Advogado, membro da Ordem dos Advogados de Angola',
    ],
    disciplinas: [{ nome: 'Questões Normativas do Ensino Superior', curso: 'Capacitação Pedagógica (PGPCP)' }],
  },
  {
    slug: 'pedro-fernandes-educacao',
    nome: 'Pedro Fernandes',
    titulo: 'Mestre em Ciências da Educação',
    formacao: [
      'Mestre em Ciências da Educação — Escola Superior Pedagógica de Zwickau (Ernest Schneller), Alemanha (1993)',
      'Especialista em Políticas, Planificação e Gestão da Educação — Universidade Pedagógica, Moçambique (2003)',
      'Formação em Desenho, Desenvolvimento e Avaliação Curricular — MED, Luanda (1997 e 2008); MEC, Espanha (2000)',
      'Curso de Formador de Formadores — CNFOR, Luanda (2016)',
    ],
    disciplinas: [
      { nome: 'Prática Pedagógica I e II', curso: 'Capacitação Pedagógica (PGPCP)' },
      { nome: 'Planificação do Processo de Ensino-Aprendizagem', curso: 'Capacitação Pedagógica (PGPCP)' },
    ],
  },
  {
    slug: 'maria-helena-miguel',
    nome: 'Maria Helena Miguel',
    titulo: 'Mestre em Ensino da Língua Portuguesa',
    formacao: [
      'Mestre em Ensino da Língua Portuguesa — ISCED/Luanda (2009)',
      'Licenciada em Língua Portuguesa — ISCED/Luanda (1997)',
      'Onze disciplinas frequentadas na Universidade do Minho, Portugal (1991–1993): História e Filosofia da Educação; Fonética, Fonologia e Morfologia do Português; Prática Pedagógica I e II; Sintaxe e Semântica do Português; Desenvolvimento Curricular; História da Língua Portuguesa; Metodologia do Ensino do Português; Teoria da Literatura; Sociologia da Educação; Camonianos e Pessoanos',
    ],
    disciplinas: [{ nome: 'Processo de Avaliação das Aprendizagens', curso: 'Capacitação Pedagógica (PGPCP)' }],
  },
  {
    slug: 'jose-chivinda',
    nome: 'José Chivinda',
    titulo: 'Doutor em Ciências da Educação',
    formacao: [
      'Doutoramento em Ciências da Educação — Universidade Católica Portuguesa',
      'Director Geral do Instituto Superior Dom Bosco, vinculado à UCAN (2013–2019)',
    ],
    disciplinas: [
      { nome: 'Comunicação Educativa', curso: 'Capacitação Pedagógica (PGPCP)' },
      { nome: 'Métodos e Meios de Ensino', curso: 'Capacitação Pedagógica (PGPCP)' },
    ],
  },
]

export function getDocenteBySlug(slug: string): Docente | undefined {
  return docentes.find(docente => docente.slug === slug)
}

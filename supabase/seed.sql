-- Seed data for FCH database
-- Run this after schema.sql

-- Insert Decana
INSERT INTO decana (nome, titulo, mensagem) VALUES
  ('Prof.ª Dr.ª Helena Fernandes', 
   'Decana da Faculdade de Ciências Sociais e Humanas',
   'É com imenso orgulho que dou as boas-vindas a todos os visitantes do nosso site institucional. A Faculdade de Ciências Sociais e Humanas tem como missão formar profissionais competentes, éticos e comprometidos com a transformação social.

Ao longo dos anos, a nossa instituição tem-se destacado pela excelência académica, pela investigação de qualidade e pelo impacto positivo na comunidade. Os nossos cursos de Psicologia do Trabalho e das Organizações, Psicologia Clínica e Línguas preparam os estudantes para enfrentar os desafios do mundo contemporâneo com conhecimento, sensibilidade e responsabilidade social.

Acreditamos que a educação superior deve ser transformadora, não apenas para os indivíduos, mas para toda a sociedade. Por isso, investimos continuamente na qualificação do nosso corpo docente, na atualização dos nossos programas curriculares e na criação de oportunidades de desenvolvimento para os nossos estudantes.

Convido-vos a conhecer melhor a nossa Faculdade, os nossos cursos, as nossas atividades de investigação e extensão. Juntos, podemos construir um futuro mais justo, inclusivo e sustentável.');

-- Insert Professores (first, as cursos reference them)
INSERT INTO professores (nome, slug, titulo, departamento, email, telefone, biografia, areas_investigacao, gabinete) VALUES
  ('Prof. Dr. António Silva', 
   'antonio-silva', 
   'Doutor em Psicologia', 
   'Psicologia Clínica', 
   'antonio.silva@FCH.edu', 
   '+244 923 456 789',
   'António Silva é Professor Catedrático de Psicologia na FCH, com mais de 20 anos de experiência em docência e investigação. Especialista em Psicologia Clínica, tem desenvolvido trabalho relevante na área da avaliação e intervenção psicológica.',
   ARRAY['Psicologia Clínica', 'Psicoterapia', 'Avaliação Psicológica'],
   'Sala 201, Bloco A'),
  ('Prof.ª Dr.ª Teresa Oliveira', 
   'teresa-oliveira', 
   'Doutora em Psicologia Clínica', 
   'Psicologia Clínica', 
   'teresa.oliveira@FCH.edu', 
   '+244 923 456 793',
   'Teresa Oliveira é Professora Associada e Coordenadora do Mestrado em Psicologia Clínica. Especialista em neuropsicologia, desenvolve investigação sobre avaliação neuropsicológica e intervenção clínica.',
   ARRAY['Neuropsicologia', 'Psicopatologia', 'Intervenção Clínica'],
   'Sala 205, Bloco A'),
  ('Prof. Dr. Miguel Sousa', 
   'miguel-sousa', 
   'Doutor em Psicologia', 
   'Psicologia do Trabalho e das Organizações', 
   'miguel.sousa@FCH.edu', 
   '+244 923 456 799',
   'Miguel Sousa é Professor Catedrático de Psicologia, especializado em psicologia organizacional e gestão de recursos humanos. Coordenador do curso de Psicologia do Trabalho e das Organizações.',
   ARRAY['Psicologia Organizacional', 'Recursos Humanos', 'Liderança'],
   'Sala 209, Bloco A'),
  ('Prof. Dr. Pedro Martins', 
   'pedro-martins', 
   'Doutor em Psicologia Social', 
   'Psicologia do Trabalho e das Organizações', 
   'pedro.martins@FCH.edu', 
   '+244 923 456 795',
   'Pedro Martins é Professor Auxiliar de Psicologia, especializado em psicologia social e comunitária. Desenvolve projetos de intervenção comunitária e investigação sobre dinâmicas de grupo.',
   ARRAY['Psicologia Social', 'Psicologia Comunitária', 'Dinâmicas de Grupo'],
   'Sala 207, Bloco A'),
  ('Prof.ª Dr.ª Ana Rodrigues', 
   'ana-rodrigues', 
   'Doutora em Linguística', 
   'Línguas', 
   'ana.rodrigues@FCH.edu', 
   '+244 923 456 792',
   'Ana Rodrigues é Professora Associada e Coordenadora do curso de Línguas. Especialista em linguística aplicada e tradução, desenvolve investigação sobre ensino de línguas e comunicação intercultural.',
   ARRAY['Linguística Aplicada', 'Tradução', 'Ensino de Línguas'],
   'Sala 203, Bloco C'),
  ('Prof. Dr. Ricardo Almeida', 
   'ricardo-almeida', 
   'Doutor em Estudos Literários', 
   'Línguas', 
   'ricardo.almeida@FCH.edu', 
   '+244 923 456 797',
   'Ricardo Almeida é Professor Auxiliar de Línguas, especializado em literatura comparada e literaturas africanas de expressão inglesa.',
   ARRAY['Literatura Comparada', 'Literaturas Africanas', 'Língua Inglesa'],
   'Sala 205, Bloco C'),
  ('Prof. Dr. Carlos Ferreira', 
   'carlos-ferreira', 
   'Doutor em Gestão', 
   'Psicologia do Trabalho e das Organizações', 
   'carlos.ferreira@FCH.edu', 
   '+244 923 456 794',
   'Carlos Ferreira é Professor Associado e Coordenador do Mestrado em Gestão Social. Especializado em gestão de organizações do terceiro setor e empreendedorismo social.',
   ARRAY['Gestão Social', 'Políticas Públicas', 'Empreendedorismo'],
   'Sala 108, Bloco B'),
  ('Prof.ª Dr.ª Maria Fernandes', 
   'maria-fernandes', 
   'Doutora em Psicologia', 
   'Psicologia do Trabalho e das Organizações', 
   'maria.fernandes@FCH.edu', 
   '+244 923 456 796',
   'Maria Fernandes é Professora Auxiliar de Psicologia, com investigação nas áreas de saúde ocupacional, stress e bem-estar no trabalho.',
   ARRAY['Saúde Ocupacional', 'Stress e Burnout', 'Bem-estar no Trabalho'],
   'Sala 304, Bloco A'),
  ('Prof. Dr. João Santos', 
   'joao-santos', 
   'Doutor em Línguas e Literaturas', 
   'Línguas', 
   'joao.santos@FCH.edu', 
   '+244 923 456 800',
   'João Santos é Professor Auxiliar de Línguas, especializado em língua e literatura francesa, com foco na tradução literária e estudos francófonos.',
   ARRAY['Língua Francesa', 'Tradução Literária', 'Francofonia'],
   'Sala 207, Bloco C');

-- Insert Cursos with all fields
INSERT INTO cursos (nome, slug, descricao, duracao, grau, tipo, objetivos, perfil_graduado, saidas_profissionais, coordenador_id, pdf_url) VALUES
  ('Licenciatura em Psicologia do Trabalho e das Organizações', 
   'psicologia-trabalho-organizacoes', 
   'O curso de Psicologia do Trabalho e das Organizações forma profissionais capacitados para compreender e intervir nos processos psicológicos em contextos organizacionais, desenvolvendo competências em gestão de pessoas, comportamento organizacional e saúde ocupacional.', 
   '4 anos', 
   'Licenciatura',
   'graduacao',
   ARRAY['Formar profissionais com sólida base teórica e prática em Psicologia Organizacional', 'Desenvolver competências para avaliação e intervenção em contextos de trabalho', 'Capacitar para gestão de recursos humanos e desenvolvimento organizacional', 'Promover a investigação científica na área do trabalho e das organizações'],
   'O egresso será capaz de atuar em contextos organizacionais, desenvolvendo avaliações, intervenções e pesquisas na área da Psicologia do Trabalho, gestão de pessoas e comportamento organizacional.',
   ARRAY['Psicologia Organizacional', 'Gestão de Recursos Humanos', 'Comportamento Organizacional', 'Saúde Ocupacional'],
   (SELECT id FROM professores WHERE slug = 'miguel-sousa'),
   '/documentos/plano-curricular-psicologia-trabalho-organizacoes.pdf'),
  ('Licenciatura em Psicologia Clínica', 
   'psicologia-clinica', 
   'O curso de Psicologia Clínica forma profissionais capacitados para compreender, avaliar e intervir em processos de saúde mental, desenvolvendo competências em avaliação psicológica, psicoterapia e intervenção clínica.', 
   '4 anos', 
   'Licenciatura',
   'graduacao',
   ARRAY['Formar profissionais com sólida base teórica e prática em Psicologia Clínica', 'Desenvolver competências para avaliação e intervenção psicológica', 'Capacitar para atuação ética e socialmente responsável em saúde mental', 'Promover a investigação científica na área clínica'],
   'O egresso será capaz de atuar em contextos clínicos e de saúde, desenvolvendo avaliações, diagnósticos e intervenções psicoterapêuticas.',
   ARRAY['Psicologia Clínica', 'Avaliação Psicológica', 'Psicoterapia', 'Saúde Mental'],
   (SELECT id FROM professores WHERE slug = 'antonio-silva'),
   '/documentos/plano-curricular-psicologia-clinica.pdf'),
  ('Licenciatura em Línguas', 
   'linguas', 
   'O curso de Línguas forma profissionais capacitados para atuar nas áreas de tradução, interpretação, ensino de línguas e comunicação intercultural, com domínio de múltiplas línguas e suas literaturas.', 
   '4 anos', 
   'Licenciatura',
   'graduacao',
   ARRAY['Formar profissionais com domínio de múltiplas línguas estrangeiras', 'Desenvolver competências em tradução e interpretação', 'Capacitar para o ensino de línguas em diferentes contextos', 'Promover o conhecimento das literaturas e culturas associadas às línguas estudadas'],
   'O egresso será capaz de atuar em tradução, interpretação, ensino de línguas, assessoria linguística e comunicação intercultural.',
   ARRAY['Tradução', 'Interpretação', 'Ensino de Línguas', 'Literaturas'],
   (SELECT id FROM professores WHERE slug = 'ana-rodrigues'),
   '/documentos/plano-curricular-linguas.pdf'),
  ('Mestrado em Psicologia Clínica', 
   'mestrado-psicologia-clinica', 
   'O Mestrado em Psicologia Clínica forma especialistas em avaliação, diagnóstico e intervenção psicológica, com ênfase na investigação científica e na prática clínica baseada em evidências.', 
   '2 anos', 
   'Mestrado',
   'pos-graduacao',
   ARRAY['Aprofundar conhecimentos em avaliação psicológica', 'Desenvolver competências avançadas em intervenção clínica', 'Formar investigadores na área da Psicologia Clínica', 'Promover a prática clínica baseada em evidências'],
   'O egresso será um especialista em Psicologia Clínica, capaz de desenvolver investigação científica e atuar em contextos clínicos com elevado nível de competência.',
   ARRAY['Avaliação Psicológica', 'Psicoterapia', 'Neuropsicologia', 'Psicopatologia'],
   (SELECT id FROM professores WHERE slug = 'teresa-oliveira'),
   NULL),
  ('Mestrado em Gestão Social', 
   'mestrado-gestao-social', 
   'O Mestrado em Gestão Social forma profissionais especializados na gestão de organizações sociais, projetos de desenvolvimento e políticas públicas.', 
   '2 anos', 
   'Mestrado',
   'pos-graduacao',
   ARRAY['Formar gestores sociais com visão estratégica', 'Desenvolver competências em gestão de projetos sociais', 'Capacitar para avaliação de políticas públicas', 'Promover a inovação social e empreendedorismo'],
   'O egresso será capaz de gerir organizações do terceiro setor, coordenar projetos de desenvolvimento social e avaliar políticas públicas.',
   ARRAY['Gestão de ONGs', 'Políticas Públicas', 'Empreendedorismo Social', 'Avaliação de Projetos'],
   (SELECT id FROM professores WHERE slug = 'carlos-ferreira'),
   NULL);

-- Insert Formacao for professors
INSERT INTO formacao (professor_id, grau, instituicao, ano) VALUES
  ((SELECT id FROM professores WHERE slug = 'antonio-silva'), 'Doutoramento em Psicologia', 'Universidade de Lisboa', '2005'),
  ((SELECT id FROM professores WHERE slug = 'antonio-silva'), 'Mestrado em Psicologia Clínica', 'Universidade de Coimbra', '2000'),
  ((SELECT id FROM professores WHERE slug = 'antonio-silva'), 'Licenciatura em Psicologia', 'Universidade do Porto', '1997'),
  ((SELECT id FROM professores WHERE slug = 'teresa-oliveira'), 'Doutoramento em Psicologia Clínica', 'Universidade de Lisboa', '2007'),
  ((SELECT id FROM professores WHERE slug = 'teresa-oliveira'), 'Mestrado em Neuropsicologia', 'Universidade de Coimbra', '2002'),
  ((SELECT id FROM professores WHERE slug = 'teresa-oliveira'), 'Licenciatura em Psicologia', 'Universidade do Porto', '1998'),
  ((SELECT id FROM professores WHERE slug = 'miguel-sousa'), 'Doutoramento em Psicologia Organizacional', 'ISCTE', '2015'),
  ((SELECT id FROM professores WHERE slug = 'miguel-sousa'), 'Mestrado em Gestão de Recursos Humanos', 'Universidade do Minho', '2010'),
  ((SELECT id FROM professores WHERE slug = 'miguel-sousa'), 'Licenciatura em Psicologia', 'Universidade de Lisboa', '2006'),
  ((SELECT id FROM professores WHERE slug = 'pedro-martins'), 'Doutoramento em Psicologia Social', 'Universidade de Lisboa', '2012'),
  ((SELECT id FROM professores WHERE slug = 'pedro-martins'), 'Mestrado em Psicologia Comunitária', 'ISPA', '2007'),
  ((SELECT id FROM professores WHERE slug = 'pedro-martins'), 'Licenciatura em Psicologia', 'Universidade do Porto', '2003'),
  ((SELECT id FROM professores WHERE slug = 'ana-rodrigues'), 'Doutoramento em Linguística', 'Universidade do Minho', '2010'),
  ((SELECT id FROM professores WHERE slug = 'ana-rodrigues'), 'Mestrado em Tradução', 'Universidade de Coimbra', '2005'),
  ((SELECT id FROM professores WHERE slug = 'ana-rodrigues'), 'Licenciatura em Línguas e Literaturas Modernas', 'Universidade Nova de Lisboa', '2001'),
  ((SELECT id FROM professores WHERE slug = 'ricardo-almeida'), 'Doutoramento em Estudos Literários', 'Universidade Nova de Lisboa', '2013'),
  ((SELECT id FROM professores WHERE slug = 'ricardo-almeida'), 'Mestrado em Literatura Comparada', 'ISCTE', '2008'),
  ((SELECT id FROM professores WHERE slug = 'ricardo-almeida'), 'Licenciatura em Línguas e Literaturas', 'Universidade Lusófona', '2004'),
  ((SELECT id FROM professores WHERE slug = 'carlos-ferreira'), 'Doutoramento em Gestão', 'ISCTE', '2009'),
  ((SELECT id FROM professores WHERE slug = 'carlos-ferreira'), 'Mestrado em Administração Pública', 'Universidade do Minho', '2004'),
  ((SELECT id FROM professores WHERE slug = 'carlos-ferreira'), 'Licenciatura em Gestão', 'Universidade Católica', '2000'),
  ((SELECT id FROM professores WHERE slug = 'maria-fernandes'), 'Doutoramento em Psicologia', 'Universidade de Coimbra', '2011'),
  ((SELECT id FROM professores WHERE slug = 'maria-fernandes'), 'Mestrado em Psicologia da Saúde', 'Universidade do Porto', '2006'),
  ((SELECT id FROM professores WHERE slug = 'maria-fernandes'), 'Licenciatura em Psicologia', 'ISCTE', '2002'),
  ((SELECT id FROM professores WHERE slug = 'joao-santos'), 'Doutoramento em Línguas e Literaturas', 'Universidade de Lisboa', '2014'),
  ((SELECT id FROM professores WHERE slug = 'joao-santos'), 'Mestrado em Tradução Literária', 'Universidade de Coimbra', '2009'),
  ((SELECT id FROM professores WHERE slug = 'joao-santos'), 'Licenciatura em Línguas e Literaturas', 'Universidade Nova de Lisboa', '2005');

-- Insert Publicacoes for professors
INSERT INTO publicacao (professor_id, titulo, revista, ano) VALUES
  ((SELECT id FROM professores WHERE slug = 'antonio-silva'), 'Intervenção Psicológica em Contexto Clínico', NULL, '2022'),
  ((SELECT id FROM professores WHERE slug = 'antonio-silva'), 'Avaliação Psicológica: Métodos e Instrumentos', 'Revista Portuguesa de Psicologia', '2020'),
  ((SELECT id FROM professores WHERE slug = 'teresa-oliveira'), 'Avaliação Neuropsicológica: Fundamentos e Aplicações', NULL, '2021'),
  ((SELECT id FROM professores WHERE slug = 'teresa-oliveira'), 'Psicopatologia do Desenvolvimento', 'Análise Psicológica', '2019'),
  ((SELECT id FROM professores WHERE slug = 'miguel-sousa'), 'Psicologia Organizacional: Fundamentos e Aplicações', NULL, '2023'),
  ((SELECT id FROM professores WHERE slug = 'miguel-sousa'), 'Liderança e Motivação nas Organizações', 'Psychologica', '2021'),
  ((SELECT id FROM professores WHERE slug = 'pedro-martins'), 'Intervenção Comunitária: Fundamentos e Práticas', NULL, '2021'),
  ((SELECT id FROM professores WHERE slug = 'pedro-martins'), 'Dinâmicas de Grupo em Contextos Organizacionais', 'Psicologia: Teoria e Pesquisa', '2019'),
  ((SELECT id FROM professores WHERE slug = 'ana-rodrigues'), 'Tradução e Comunicação Intercultural', NULL, '2022'),
  ((SELECT id FROM professores WHERE slug = 'ana-rodrigues'), 'Ensino de Línguas no Contexto Africano', 'Linguística & Ensino', '2020'),
  ((SELECT id FROM professores WHERE slug = 'ricardo-almeida'), 'Literaturas Africanas de Expressão Inglesa', NULL, '2023'),
  ((SELECT id FROM professores WHERE slug = 'ricardo-almeida'), 'Identidade e Literatura no Contexto Pós-Colonial', 'Revista de Estudos Literários', '2021'),
  ((SELECT id FROM professores WHERE slug = 'carlos-ferreira'), 'Gestão Social: Teoria e Prática', NULL, '2022'),
  ((SELECT id FROM professores WHERE slug = 'carlos-ferreira'), 'Empreendedorismo Social em África', 'Revista de Gestão Social', '2020'),
  ((SELECT id FROM professores WHERE slug = 'maria-fernandes'), 'Saúde Mental no Trabalho', NULL, '2022'),
  ((SELECT id FROM professores WHERE slug = 'maria-fernandes'), 'Stress e Burnout em Organizações Africanas', 'Psicologia: Saúde & Doenças', '2020'),
  ((SELECT id FROM professores WHERE slug = 'joao-santos'), 'Tradução Literária: Teoria e Prática', NULL, '2023'),
  ((SELECT id FROM professores WHERE slug = 'joao-santos'), 'A Francofonia Africana na Literatura', 'Estudos Francófonos', '2021');

-- Insert Disciplinas for Psicologia do Trabalho e das Organizações (1º ano)
INSERT INTO disciplinas (curso_id, professor_id, nome, slug, ano, semestre, creditos, horas) VALUES
  ((SELECT id FROM cursos WHERE slug = 'psicologia-trabalho-organizacoes'), (SELECT id FROM professores WHERE slug = 'antonio-silva'), 'Introdução à Psicologia', 'introducao-psicologia-pto', 1, 1, 6, 60),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-trabalho-organizacoes'), (SELECT id FROM professores WHERE slug = 'pedro-martins'), 'Psicologia Social I', 'psicologia-social-1-pto', 1, 1, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-trabalho-organizacoes'), (SELECT id FROM professores WHERE slug = 'carlos-ferreira'), 'Fundamentos de Gestão', 'fundamentos-gestao', 1, 1, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-trabalho-organizacoes'), (SELECT id FROM professores WHERE slug = 'miguel-sousa'), 'Metodologia Científica', 'metodologia-cientifica-pto', 1, 1, 4, 40),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-trabalho-organizacoes'), (SELECT id FROM professores WHERE slug = 'ana-rodrigues'), 'Comunicação Empresarial', 'comunicacao-empresarial', 1, 1, 4, 40),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-trabalho-organizacoes'), (SELECT id FROM professores WHERE slug = 'teresa-oliveira'), 'Psicologia do Desenvolvimento', 'psicologia-desenvolvimento-pto', 1, 2, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-trabalho-organizacoes'), (SELECT id FROM professores WHERE slug = 'pedro-martins'), 'Psicologia Social II', 'psicologia-social-2-pto', 1, 2, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-trabalho-organizacoes'), (SELECT id FROM professores WHERE slug = 'miguel-sousa'), 'Comportamento Organizacional I', 'comportamento-organizacional-1', 1, 2, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-trabalho-organizacoes'), (SELECT id FROM professores WHERE slug = 'carlos-ferreira'), 'Estatística Aplicada', 'estatistica-aplicada-pto', 1, 2, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-trabalho-organizacoes'), (SELECT id FROM professores WHERE slug = 'carlos-ferreira'), 'Economia do Trabalho', 'economia-trabalho', 1, 2, 4, 40);

-- Insert Disciplinas for Psicologia do Trabalho e das Organizações (2º ano)
INSERT INTO disciplinas (curso_id, professor_id, nome, slug, ano, semestre, creditos, horas) VALUES
  ((SELECT id FROM cursos WHERE slug = 'psicologia-trabalho-organizacoes'), (SELECT id FROM professores WHERE slug = 'miguel-sousa'), 'Psicologia Organizacional I', 'psicologia-organizacional-1', 2, 1, 6, 60),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-trabalho-organizacoes'), (SELECT id FROM professores WHERE slug = 'miguel-sousa'), 'Comportamento Organizacional II', 'comportamento-organizacional-2', 2, 1, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-trabalho-organizacoes'), (SELECT id FROM professores WHERE slug = 'miguel-sousa'), 'Gestão de Recursos Humanos I', 'gestao-rh-1', 2, 1, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-trabalho-organizacoes'), (SELECT id FROM professores WHERE slug = 'pedro-martins'), 'Dinâmicas de Grupo', 'dinamicas-grupo', 2, 1, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-trabalho-organizacoes'), (SELECT id FROM professores WHERE slug = 'carlos-ferreira'), 'Métodos de Investigação', 'metodos-investigacao-pto', 2, 1, 4, 40),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-trabalho-organizacoes'), (SELECT id FROM professores WHERE slug = 'miguel-sousa'), 'Psicologia Organizacional II', 'psicologia-organizacional-2', 2, 2, 6, 60),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-trabalho-organizacoes'), (SELECT id FROM professores WHERE slug = 'miguel-sousa'), 'Gestão de Recursos Humanos II', 'gestao-rh-2', 2, 2, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-trabalho-organizacoes'), (SELECT id FROM professores WHERE slug = 'miguel-sousa'), 'Recrutamento e Seleção', 'recrutamento-selecao', 2, 2, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-trabalho-organizacoes'), (SELECT id FROM professores WHERE slug = 'maria-fernandes'), 'Saúde Ocupacional I', 'saude-ocupacional-1', 2, 2, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-trabalho-organizacoes'), (SELECT id FROM professores WHERE slug = 'antonio-silva'), 'Ética Profissional', 'etica-profissional-pto', 2, 2, 4, 40);

-- Insert Disciplinas for Psicologia do Trabalho e das Organizações (3º ano)
INSERT INTO disciplinas (curso_id, professor_id, nome, slug, ano, semestre, creditos, horas) VALUES
  ((SELECT id FROM cursos WHERE slug = 'psicologia-trabalho-organizacoes'), (SELECT id FROM professores WHERE slug = 'miguel-sousa'), 'Liderança e Motivação', 'lideranca-motivacao', 3, 1, 6, 60),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-trabalho-organizacoes'), (SELECT id FROM professores WHERE slug = 'miguel-sousa'), 'Avaliação de Desempenho', 'avaliacao-desempenho', 3, 1, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-trabalho-organizacoes'), (SELECT id FROM professores WHERE slug = 'maria-fernandes'), 'Saúde Ocupacional II', 'saude-ocupacional-2', 3, 1, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-trabalho-organizacoes'), (SELECT id FROM professores WHERE slug = 'carlos-ferreira'), 'Formação e Desenvolvimento', 'formacao-desenvolvimento', 3, 1, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-trabalho-organizacoes'), (SELECT id FROM professores WHERE slug = 'pedro-martins'), 'Psicologia do Trabalho', 'psicologia-trabalho', 3, 1, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-trabalho-organizacoes'), (SELECT id FROM professores WHERE slug = 'maria-fernandes'), 'Ergonomia e Fatores Humanos', 'ergonomia-fatores-humanos', 3, 2, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-trabalho-organizacoes'), (SELECT id FROM professores WHERE slug = 'miguel-sousa'), 'Cultura Organizacional', 'cultura-organizacional', 3, 2, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-trabalho-organizacoes'), (SELECT id FROM professores WHERE slug = 'pedro-martins'), 'Gestão de Conflitos', 'gestao-conflitos', 3, 2, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-trabalho-organizacoes'), (SELECT id FROM professores WHERE slug = 'carlos-ferreira'), 'Consultoria Organizacional', 'consultoria-organizacional', 3, 2, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-trabalho-organizacoes'), (SELECT id FROM professores WHERE slug = 'miguel-sousa'), 'Estágio Curricular I', 'estagio-curricular-1-pto', 3, 2, 6, 60);

-- Insert Disciplinas for Psicologia do Trabalho e das Organizações (4º ano)
INSERT INTO disciplinas (curso_id, professor_id, nome, slug, ano, semestre, creditos, horas) VALUES
  ((SELECT id FROM cursos WHERE slug = 'psicologia-trabalho-organizacoes'), (SELECT id FROM professores WHERE slug = 'miguel-sousa'), 'Intervenção Organizacional', 'intervencao-organizacional', 4, 1, 6, 60),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-trabalho-organizacoes'), (SELECT id FROM professores WHERE slug = 'carlos-ferreira'), 'Gestão da Mudança', 'gestao-mudanca', 4, 1, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-trabalho-organizacoes'), (SELECT id FROM professores WHERE slug = 'miguel-sousa'), 'Estágio Curricular II', 'estagio-curricular-2-pto', 4, 1, 8, 80),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-trabalho-organizacoes'), (SELECT id FROM professores WHERE slug = 'miguel-sousa'), 'Seminário de Investigação I', 'seminario-investigacao-1-pto', 4, 1, 4, 40),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-trabalho-organizacoes'), (SELECT id FROM professores WHERE slug = 'miguel-sousa'), 'Estágio Curricular III', 'estagio-curricular-3-pto', 4, 2, 10, 100),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-trabalho-organizacoes'), (SELECT id FROM professores WHERE slug = 'miguel-sousa'), 'Seminário de Investigação II', 'seminario-investigacao-2-pto', 4, 2, 4, 40),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-trabalho-organizacoes'), (SELECT id FROM professores WHERE slug = 'miguel-sousa'), 'Trabalho de Conclusão de Curso', 'tcc-pto', 4, 2, 10, 100);

-- Insert Disciplinas for Psicologia Clínica (1º ano)
INSERT INTO disciplinas (curso_id, professor_id, nome, slug, ano, semestre, creditos, horas) VALUES
  ((SELECT id FROM cursos WHERE slug = 'psicologia-clinica'), (SELECT id FROM professores WHERE slug = 'antonio-silva'), 'Introdução à Psicologia', 'introducao-psicologia-pc', 1, 1, 6, 60),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-clinica'), (SELECT id FROM professores WHERE slug = 'teresa-oliveira'), 'História da Psicologia', 'historia-psicologia', 1, 1, 4, 40),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-clinica'), (SELECT id FROM professores WHERE slug = 'pedro-martins'), 'Biologia Humana', 'biologia-humana', 1, 1, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-clinica'), (SELECT id FROM professores WHERE slug = 'carlos-ferreira'), 'Filosofia das Ciências Humanas', 'filosofia-ciencias-humanas', 1, 1, 4, 40),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-clinica'), (SELECT id FROM professores WHERE slug = 'antonio-silva'), 'Metodologia Científica', 'metodologia-cientifica-pc', 1, 1, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-clinica'), (SELECT id FROM professores WHERE slug = 'teresa-oliveira'), 'Psicologia do Desenvolvimento I', 'psicologia-desenvolvimento-1', 1, 2, 6, 60),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-clinica'), (SELECT id FROM professores WHERE slug = 'teresa-oliveira'), 'Neurociências', 'neurociencias', 1, 2, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-clinica'), (SELECT id FROM professores WHERE slug = 'carlos-ferreira'), 'Estatística I', 'estatistica-1', 1, 2, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-clinica'), (SELECT id FROM professores WHERE slug = 'pedro-martins'), 'Psicologia Social I', 'psicologia-social-1-pc', 1, 2, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-clinica'), (SELECT id FROM professores WHERE slug = 'ana-rodrigues'), 'Antropologia', 'antropologia', 1, 2, 4, 40);

-- Insert Disciplinas for Psicologia Clínica (2º ano)
INSERT INTO disciplinas (curso_id, professor_id, nome, slug, ano, semestre, creditos, horas) VALUES
  ((SELECT id FROM cursos WHERE slug = 'psicologia-clinica'), (SELECT id FROM professores WHERE slug = 'teresa-oliveira'), 'Psicologia do Desenvolvimento II', 'psicologia-desenvolvimento-2', 2, 1, 6, 60),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-clinica'), (SELECT id FROM professores WHERE slug = 'antonio-silva'), 'Psicologia da Personalidade', 'psicologia-personalidade', 2, 1, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-clinica'), (SELECT id FROM professores WHERE slug = 'carlos-ferreira'), 'Estatística II', 'estatistica-2', 2, 1, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-clinica'), (SELECT id FROM professores WHERE slug = 'pedro-martins'), 'Psicologia Social II', 'psicologia-social-2-pc', 2, 1, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-clinica'), (SELECT id FROM professores WHERE slug = 'teresa-oliveira'), 'Psicologia da Aprendizagem', 'psicologia-aprendizagem', 2, 1, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-clinica'), (SELECT id FROM professores WHERE slug = 'teresa-oliveira'), 'Psicopatologia I', 'psicopatologia-1', 2, 2, 6, 60),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-clinica'), (SELECT id FROM professores WHERE slug = 'antonio-silva'), 'Métodos de Investigação em Psicologia', 'metodos-investigacao-pc', 2, 2, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-clinica'), (SELECT id FROM professores WHERE slug = 'pedro-martins'), 'Psicologia Cognitiva', 'psicologia-cognitiva', 2, 2, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-clinica'), (SELECT id FROM professores WHERE slug = 'antonio-silva'), 'Ética e Deontologia', 'etica-deontologia', 2, 2, 4, 40),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-clinica'), (SELECT id FROM professores WHERE slug = 'pedro-martins'), 'Psicologia Comunitária', 'psicologia-comunitaria', 2, 2, 5, 50);

-- Insert Disciplinas for Psicologia Clínica (3º ano)
INSERT INTO disciplinas (curso_id, professor_id, nome, slug, ano, semestre, creditos, horas) VALUES
  ((SELECT id FROM cursos WHERE slug = 'psicologia-clinica'), (SELECT id FROM professores WHERE slug = 'teresa-oliveira'), 'Psicopatologia II', 'psicopatologia-2', 3, 1, 6, 60),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-clinica'), (SELECT id FROM professores WHERE slug = 'antonio-silva'), 'Avaliação Psicológica I', 'avaliacao-psicologica-1', 3, 1, 6, 60),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-clinica'), (SELECT id FROM professores WHERE slug = 'antonio-silva'), 'Psicologia Clínica I', 'psicologia-clinica-1', 3, 1, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-clinica'), (SELECT id FROM professores WHERE slug = 'teresa-oliveira'), 'Entrevista Clínica', 'entrevista-clinica', 3, 1, 4, 40),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-clinica'), (SELECT id FROM professores WHERE slug = 'teresa-oliveira'), 'Psicofarmacologia', 'psicofarmacologia', 3, 1, 4, 40),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-clinica'), (SELECT id FROM professores WHERE slug = 'antonio-silva'), 'Avaliação Psicológica II', 'avaliacao-psicologica-2', 3, 2, 6, 60),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-clinica'), (SELECT id FROM professores WHERE slug = 'antonio-silva'), 'Psicologia Clínica II', 'psicologia-clinica-2', 3, 2, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-clinica'), (SELECT id FROM professores WHERE slug = 'maria-fernandes'), 'Psicologia da Saúde', 'psicologia-saude', 3, 2, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-clinica'), (SELECT id FROM professores WHERE slug = 'teresa-oliveira'), 'Neuropsicologia', 'neuropsicologia', 3, 2, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-clinica'), (SELECT id FROM professores WHERE slug = 'antonio-silva'), 'Estágio Curricular I', 'estagio-curricular-1-pc', 3, 2, 6, 60);

-- Insert Disciplinas for Psicologia Clínica (4º ano)
INSERT INTO disciplinas (curso_id, professor_id, nome, slug, ano, semestre, creditos, horas) VALUES
  ((SELECT id FROM cursos WHERE slug = 'psicologia-clinica'), (SELECT id FROM professores WHERE slug = 'antonio-silva'), 'Psicoterapias', 'psicoterapias', 4, 1, 6, 60),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-clinica'), (SELECT id FROM professores WHERE slug = 'teresa-oliveira'), 'Intervenção Clínica', 'intervencao-clinica', 4, 1, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-clinica'), (SELECT id FROM professores WHERE slug = 'antonio-silva'), 'Estágio Curricular II', 'estagio-curricular-2-pc', 4, 1, 8, 80),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-clinica'), (SELECT id FROM professores WHERE slug = 'teresa-oliveira'), 'Seminário de Investigação I', 'seminario-investigacao-1-pc', 4, 1, 4, 40),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-clinica'), (SELECT id FROM professores WHERE slug = 'antonio-silva'), 'Estágio Curricular III', 'estagio-curricular-3-pc', 4, 2, 10, 100),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-clinica'), (SELECT id FROM professores WHERE slug = 'teresa-oliveira'), 'Seminário de Investigação II', 'seminario-investigacao-2-pc', 4, 2, 4, 40),
  ((SELECT id FROM cursos WHERE slug = 'psicologia-clinica'), (SELECT id FROM professores WHERE slug = 'antonio-silva'), 'Trabalho de Conclusão de Curso', 'tcc-pc', 4, 2, 10, 100);

-- Insert Disciplinas for Línguas (1º ano)
INSERT INTO disciplinas (curso_id, professor_id, nome, slug, ano, semestre, creditos, horas) VALUES
  ((SELECT id FROM cursos WHERE slug = 'linguas'), (SELECT id FROM professores WHERE slug = 'ana-rodrigues'), 'Língua Portuguesa I', 'lingua-portuguesa-1', 1, 1, 6, 60),
  ((SELECT id FROM cursos WHERE slug = 'linguas'), (SELECT id FROM professores WHERE slug = 'ricardo-almeida'), 'Língua Inglesa I', 'lingua-inglesa-1', 1, 1, 6, 60),
  ((SELECT id FROM cursos WHERE slug = 'linguas'), (SELECT id FROM professores WHERE slug = 'ana-rodrigues'), 'Introdução à Linguística', 'introducao-linguistica', 1, 1, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'linguas'), (SELECT id FROM professores WHERE slug = 'joao-santos'), 'Metodologia Científica', 'metodologia-cientifica-ling', 1, 1, 4, 40),
  ((SELECT id FROM cursos WHERE slug = 'linguas'), (SELECT id FROM professores WHERE slug = 'ana-rodrigues'), 'Literatura Portuguesa I', 'literatura-portuguesa-1', 1, 1, 4, 40),
  ((SELECT id FROM cursos WHERE slug = 'linguas'), (SELECT id FROM professores WHERE slug = 'ana-rodrigues'), 'Língua Portuguesa II', 'lingua-portuguesa-2', 1, 2, 6, 60),
  ((SELECT id FROM cursos WHERE slug = 'linguas'), (SELECT id FROM professores WHERE slug = 'ricardo-almeida'), 'Língua Inglesa II', 'lingua-inglesa-2', 1, 2, 6, 60),
  ((SELECT id FROM cursos WHERE slug = 'linguas'), (SELECT id FROM professores WHERE slug = 'joao-santos'), 'Língua Francesa I', 'lingua-francesa-1', 1, 2, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'linguas'), (SELECT id FROM professores WHERE slug = 'ana-rodrigues'), 'Fonética e Fonologia', 'fonetica-fonologia', 1, 2, 4, 40),
  ((SELECT id FROM cursos WHERE slug = 'linguas'), (SELECT id FROM professores WHERE slug = 'ana-rodrigues'), 'Literatura Portuguesa II', 'literatura-portuguesa-2', 1, 2, 4, 40);

-- Insert Disciplinas for Línguas (2º ano)
INSERT INTO disciplinas (curso_id, professor_id, nome, slug, ano, semestre, creditos, horas) VALUES
  ((SELECT id FROM cursos WHERE slug = 'linguas'), (SELECT id FROM professores WHERE slug = 'ana-rodrigues'), 'Língua Portuguesa III', 'lingua-portuguesa-3', 2, 1, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'linguas'), (SELECT id FROM professores WHERE slug = 'ricardo-almeida'), 'Língua Inglesa III', 'lingua-inglesa-3', 2, 1, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'linguas'), (SELECT id FROM professores WHERE slug = 'joao-santos'), 'Língua Francesa II', 'lingua-francesa-2', 2, 1, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'linguas'), (SELECT id FROM professores WHERE slug = 'ana-rodrigues'), 'Morfologia e Sintaxe', 'morfologia-sintaxe', 2, 1, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'linguas'), (SELECT id FROM professores WHERE slug = 'ricardo-almeida'), 'Literatura Inglesa I', 'literatura-inglesa-1', 2, 1, 4, 40),
  ((SELECT id FROM cursos WHERE slug = 'linguas'), (SELECT id FROM professores WHERE slug = 'ana-rodrigues'), 'Língua Portuguesa IV', 'lingua-portuguesa-4', 2, 2, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'linguas'), (SELECT id FROM professores WHERE slug = 'ricardo-almeida'), 'Língua Inglesa IV', 'lingua-inglesa-4', 2, 2, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'linguas'), (SELECT id FROM professores WHERE slug = 'joao-santos'), 'Língua Francesa III', 'lingua-francesa-3', 2, 2, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'linguas'), (SELECT id FROM professores WHERE slug = 'ana-rodrigues'), 'Semântica e Pragmática', 'semantica-pragmatica', 2, 2, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'linguas'), (SELECT id FROM professores WHERE slug = 'ricardo-almeida'), 'Literatura Inglesa II', 'literatura-inglesa-2', 2, 2, 4, 40);

-- Insert Disciplinas for Línguas (3º ano)
INSERT INTO disciplinas (curso_id, professor_id, nome, slug, ano, semestre, creditos, horas) VALUES
  ((SELECT id FROM cursos WHERE slug = 'linguas'), (SELECT id FROM professores WHERE slug = 'ricardo-almeida'), 'Tradução I (Inglês)', 'traducao-1-ingles', 3, 1, 6, 60),
  ((SELECT id FROM cursos WHERE slug = 'linguas'), (SELECT id FROM professores WHERE slug = 'joao-santos'), 'Tradução I (Francês)', 'traducao-1-frances', 3, 1, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'linguas'), (SELECT id FROM professores WHERE slug = 'joao-santos'), 'Literatura Francesa I', 'literatura-francesa-1', 3, 1, 4, 40),
  ((SELECT id FROM cursos WHERE slug = 'linguas'), (SELECT id FROM professores WHERE slug = 'ana-rodrigues'), 'Linguística Aplicada', 'linguistica-aplicada', 3, 1, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'linguas'), (SELECT id FROM professores WHERE slug = 'ricardo-almeida'), 'Literatura Africana', 'literatura-africana', 3, 1, 4, 40),
  ((SELECT id FROM cursos WHERE slug = 'linguas'), (SELECT id FROM professores WHERE slug = 'ricardo-almeida'), 'Tradução II (Inglês)', 'traducao-2-ingles', 3, 2, 6, 60),
  ((SELECT id FROM cursos WHERE slug = 'linguas'), (SELECT id FROM professores WHERE slug = 'joao-santos'), 'Tradução II (Francês)', 'traducao-2-frances', 3, 2, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'linguas'), (SELECT id FROM professores WHERE slug = 'joao-santos'), 'Literatura Francesa II', 'literatura-francesa-2', 3, 2, 4, 40),
  ((SELECT id FROM cursos WHERE slug = 'linguas'), (SELECT id FROM professores WHERE slug = 'ana-rodrigues'), 'Didática das Línguas', 'didatica-linguas', 3, 2, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'linguas'), (SELECT id FROM professores WHERE slug = 'ana-rodrigues'), 'Estágio Curricular I', 'estagio-curricular-1-ling', 3, 2, 6, 60);

-- Insert Disciplinas for Línguas (4º ano)
INSERT INTO disciplinas (curso_id, professor_id, nome, slug, ano, semestre, creditos, horas) VALUES
  ((SELECT id FROM cursos WHERE slug = 'linguas'), (SELECT id FROM professores WHERE slug = 'ricardo-almeida'), 'Interpretação', 'interpretacao', 4, 1, 6, 60),
  ((SELECT id FROM cursos WHERE slug = 'linguas'), (SELECT id FROM professores WHERE slug = 'joao-santos'), 'Tradução Especializada', 'traducao-especializada', 4, 1, 5, 50),
  ((SELECT id FROM cursos WHERE slug = 'linguas'), (SELECT id FROM professores WHERE slug = 'ana-rodrigues'), 'Estágio Curricular II', 'estagio-curricular-2-ling', 4, 1, 8, 80),
  ((SELECT id FROM cursos WHERE slug = 'linguas'), (SELECT id FROM professores WHERE slug = 'ana-rodrigues'), 'Seminário de Investigação I', 'seminario-investigacao-1-ling', 4, 1, 4, 40),
  ((SELECT id FROM cursos WHERE slug = 'linguas'), (SELECT id FROM professores WHERE slug = 'ana-rodrigues'), 'Estágio Curricular III', 'estagio-curricular-3-ling', 4, 2, 10, 100),
  ((SELECT id FROM cursos WHERE slug = 'linguas'), (SELECT id FROM professores WHERE slug = 'ana-rodrigues'), 'Seminário de Investigação II', 'seminario-investigacao-2-ling', 4, 2, 4, 40),
  ((SELECT id FROM cursos WHERE slug = 'linguas'), (SELECT id FROM professores WHERE slug = 'ana-rodrigues'), 'Trabalho de Conclusão de Curso', 'tcc-ling', 4, 2, 10, 100);

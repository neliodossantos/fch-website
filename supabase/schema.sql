-- Tabela de Professores
CREATE TABLE professores (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  titulo VARCHAR(255),
  departamento VARCHAR(255),
  email VARCHAR(255),
  telefone VARCHAR(50),
  linkedin VARCHAR(255),
  foto_url TEXT,
  biografia TEXT,
  areas_investigacao TEXT[],
  gabinete VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de Formação
CREATE TABLE formacao (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  professor_id UUID REFERENCES professores(id) ON DELETE CASCADE,
  grau VARCHAR(255) NOT NULL,
  instituicao VARCHAR(255) NOT NULL,
  ano VARCHAR(10)
);

-- Tabela de Publicações
CREATE TABLE publicacao (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  professor_id UUID REFERENCES professores(id) ON DELETE CASCADE,
  titulo TEXT NOT NULL,
  revista VARCHAR(255),
  ano VARCHAR(10)
);

-- Tabela de Cursos
CREATE TABLE cursos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  descricao TEXT,
  duracao VARCHAR(50),
  grau VARCHAR(100),
  tipo VARCHAR(50) DEFAULT 'graduacao',
  objetivos TEXT[],
  perfil_graduado TEXT,
  saidas_profissionais TEXT[],
  coordenador_id UUID REFERENCES professores(id) ON DELETE SET NULL,
  pdf_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de Disciplinas
CREATE TABLE disciplinas (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  curso_id UUID REFERENCES cursos(id) ON DELETE CASCADE,
  professor_id UUID REFERENCES professores(id) ON DELETE SET NULL,
  nome VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  codigo VARCHAR(50),
  ano INTEGER NOT NULL,
  semestre INTEGER NOT NULL,
  creditos INTEGER,
  horas INTEGER,
  carga_horaria_teorica INTEGER,
  carga_horaria_pratica INTEGER,
  ementa TEXT,
  objetivos TEXT,
  bibliografia TEXT
);

-- Tabela da Decana
CREATE TABLE decana (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  titulo VARCHAR(255),
  foto_url TEXT,
  mensagem TEXT
);

-- Tabela de Eventos
CREATE TABLE eventos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  descricao TEXT,
  data TIMESTAMP WITH TIME ZONE NOT NULL,
  local VARCHAR(255),
  imagem_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de Notícias
CREATE TABLE noticias (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  resumo TEXT,
  conteudo TEXT,
  imagem_url TEXT,
  data_publicacao TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  autor VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para performance
CREATE INDEX idx_professores_slug ON professores(slug);
CREATE INDEX idx_cursos_slug ON cursos(slug);
CREATE INDEX idx_noticias_slug ON noticias(slug);
CREATE INDEX idx_disciplinas_slug ON disciplinas(slug);
CREATE INDEX idx_disciplinas_curso ON disciplinas(curso_id);
CREATE INDEX idx_disciplinas_professor ON disciplinas(professor_id);
CREATE INDEX idx_eventos_data ON eventos(data);

-- Habilitar RLS (Row Level Security)
ALTER TABLE professores ENABLE ROW LEVEL SECURITY;
ALTER TABLE formacao ENABLE ROW LEVEL SECURITY;
ALTER TABLE publicacao ENABLE ROW LEVEL SECURITY;
ALTER TABLE cursos ENABLE ROW LEVEL SECURITY;
ALTER TABLE disciplinas ENABLE ROW LEVEL SECURITY;
ALTER TABLE decana ENABLE ROW LEVEL SECURITY;
ALTER TABLE eventos ENABLE ROW LEVEL SECURITY;
ALTER TABLE noticias ENABLE ROW LEVEL SECURITY;

-- Políticas de leitura pública
CREATE POLICY "Permitir leitura pública de professores" ON professores FOR SELECT USING (true);
CREATE POLICY "Permitir leitura pública de formacao" ON formacao FOR SELECT USING (true);
CREATE POLICY "Permitir leitura pública de publicacao" ON publicacao FOR SELECT USING (true);
CREATE POLICY "Permitir leitura pública de cursos" ON cursos FOR SELECT USING (true);
CREATE POLICY "Permitir leitura pública de disciplinas" ON disciplinas FOR SELECT USING (true);
CREATE POLICY "Permitir leitura pública de decana" ON decana FOR SELECT USING (true);
CREATE POLICY "Permitir leitura pública de eventos" ON eventos FOR SELECT USING (true);
CREATE POLICY "Permitir leitura pública de noticias" ON noticias FOR SELECT USING (true);

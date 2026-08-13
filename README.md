 # FCH - Faculdade de Ciências Humanas

Site institucional completo para a Faculdade de Ciências  Humanas (FCH).

##  Tecnologias

- **Framework:** Next.js 14 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Ícones:** Lucide React
- **Formulários:** React Hook Form + Zod

## 📁 Estrutura do Projeto

```
src/
├── app/                    # Páginas (App Router)
│   ├── sobre/             # Páginas sobre a faculdade
│   ├── cursos/            # Cursos de graduação e pós-graduação
│   ├── corpo-docente/     # Lista de docentes
│   ├── eventos/           # Eventos futuros e realizados
│   ├── associacao-estudantes/  # Associação de estudantes
│   ├── coordenacao-extracurricular/  # Atividades extracurriculares
│   ├── estagios/          # Informações sobre estágios
│   ├── ciei/              # Centro de investigação
│   ├── extensao/          # Cursos de extensão
│   ├── laboratorio-psicologia/  # Serviços de psicologia
│   ├── admissoes/         # Processo de admissão
│   ├── links-uteis/       # Links úteis
│   └── contato/           # Página de contato
├── components/            # Componentes reutilizáveis
│   ├── layout/            # Header, Footer, Navigation
│   ├── home/              # Componentes da página inicial
│   ├── ui/                # Componentes de UI (Button, Card, Input)
│   └── shared/            # Componentes compartilhados
├── data/                  # Dados mockados
├── lib/                   # Utilitários
└── types/                 # Definições de tipos TypeScript
```

##  Como Executar

### Pré-requisitos

- Node.js 18.x ou superior
- npm ou yarn

### Instalação

1. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse o site em [http://localhost:3000](http://localhost:3000)

### Dashboard de conteúdos

Com o backend NestJS em execução, crie o ficheiro `.env.local`:

```env
FCH_API_URL=http://localhost:3005/api
NEXT_PUBLIC_FCH_API_URL=http://localhost:3005/api
```

Aceda a [http://localhost:3000/admin](http://localhost:3000/admin) para gerir destaques, notícias e eventos. Notícias (`/admin/noticias`) e Eventos (`/admin/eventos`) têm editor de página inteira próprio, com categoria/autor/tags/SEO (notícias) ou datas/local/organizadores/agenda (eventos), galeria de imagens, vídeo, secções com texto/imagens/vídeo reordenáveis por arrastar, e pré-visualização antes de publicar.

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

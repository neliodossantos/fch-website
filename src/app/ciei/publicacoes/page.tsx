import { Metadata } from 'next'
import { ExternalLink } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Publicações',
  description: 'Publicações científicas do CIEI - FCH.',
}

const artigos = [
  {
    titulo: 'Saúde mental em estudantes universitários: um estudo longitudinal',
    autores: ['Oliveira, T.', 'Silva, A.'],
    revista: 'Psicologia: Teoria e Pesquisa',
    ano: 2023,
  },
  {
    titulo: 'Políticas sociais e combate à pobreza: uma análise crítica',
    autores: ['Santos, M.', 'Ferreira, C.'],
    revista: 'Serviço Social & Sociedade',
    ano: 2023,
  },
  {
    titulo: 'Transformações urbanas e exclusão social',
    autores: ['Costa, J.', 'Pereira, S.'],
    revista: 'Sociologia, Problemas e Práticas',
    ano: 2022,
  },
  {
    titulo: 'Media digitais e participação política dos jovens',
    autores: ['Rodrigues, A.', 'Almeida, R.'],
    revista: 'Comunicação e Sociedade',
    ano: 2022,
  },
]

const livros = [
  {
    titulo: 'Manual de Avaliação Psicológica',
    autores: ['Silva, A.', 'Oliveira, T.'],
    editora: 'Editora Universitária',
    ano: 2023,
  },
  {
    titulo: 'Intervenção Social: Fundamentos e Práticas',
    autores: ['Santos, M.', 'Mendes, C.'],
    editora: 'Editora Ciências Sociais',
    ano: 2022,
  },
]

const capitulos = [
  {
    titulo: 'Psicologia Clínica no contexto africano',
    autores: ['Martins, P.'],
    livro: 'Psicologia em África: Perspetivas Contemporâneas',
    ano: 2023,
  },
  {
    titulo: 'Comunicação e desenvolvimento',
    autores: ['Rodrigues, A.'],
    livro: 'Comunicação para o Desenvolvimento',
    ano: 2022,
  },
]

export default function PublicacoesPage() {
  return (
    <>
      <PageHeader
        title="Publicações"
        description="Produção científica dos investigadores do CIEI."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle title="Artigos Científicos" />
          <div className="space-y-4 mb-12">
            {artigos.map((artigo, index) => (
              <Card key={index}>
                <CardContent className="py-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">{artigo.titulo}</h3>
                      <p className="text-sm text-gray-600 mb-1">
                        {artigo.autores.join('; ')}
                      </p>
                      <p className="text-sm text-gray-500">
                        <em>{artigo.revista}</em>, {artigo.ano}
                      </p>
                    </div>
                    <button className="text-primary hover:text-primary-dark dark:hover:text-blue-300">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <SectionTitle title="Livros" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {livros.map((livro, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{livro.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-1">
                    {livro.autores.join('; ')}
                  </p>
                  <p className="text-sm text-gray-500">
                    {livro.editora}, {livro.ano}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <SectionTitle title="Capítulos de Livro" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {capitulos.map((cap, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{cap.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-1">
                    {cap.autores.join('; ')}
                  </p>
                  <p className="text-sm text-gray-500">
                    In: <em>{cap.livro}</em>, {cap.ano}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

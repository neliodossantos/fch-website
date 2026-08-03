import { Metadata } from 'next'
import { ExternalLink } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Card, CardContent } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Publicações',
  description: 'Publicações científicas dos investigadores do CIEI - FCH (2020-2026).',
}

const artigos = [
  {
    titulo: 'Attitudes and Practices for the Prevention of Malaria in Luanda, Angola',
    autores: ['Sobral, I.', 'Santana, M.'],
    revista: 'Fortune Journals',
    ano: 2024,
    url: 'http://www.fortunejournals.com/articles/knowledge-attitudesand-practices-for-theprevention.pdf',
  },
  {
    titulo: 'Atitudes das famílias face aos membros portadores de Psicose: estudo de caso do hospital psiquiátrico do Lubango e do Centro de Reabilitação do Lubango, em Angola',
    autores: ['Lopes, M.', 'Veloso, H.'],
    revista: 'Revista Magazine',
    ano: 2024,
  },
  {
    titulo: 'Nutritional status and consumption of energy drinks among gym goers and non-gym-goers in Luanda, Angola',
    autores: ['Massanga, L.', 'Santana, M.'],
    revista: 'Revista Brasileira de Nutrição Esportiva',
    ano: 2024,
    url: 'https://www.rbne.com.br/index.php/rbne/article/view/2279',
  },
  {
    titulo: 'Factors influencing access to primary health care in Luanda, Angola',
    autores: ['Maquengo, A.S.C.', 'Bastos, A.M.', 'Santana, M.S.'],
    revista: 'BMC Health Services Research, 25:250',
    ano: 2025,
    url: 'https://doi.org/10.1186/s12913-024-12120-7',
  },
  {
    titulo: 'Influence of electronic media on food choices of schoolchildren and adolescents in Luanda, Angola',
    autores: ['Oliveira, O.A.', 'Santana, M.S.'],
    revista: 'The North African Journal of Food and Nutrition Research, 7(16)',
    ano: 2023,
    url: 'https://doi.org/10.51745/najfnr.7.1613-2',
  },
  {
    titulo: 'Nutritional Status Pre-Gestational and Gestational Among Women Living With HIV Positive in Luanda, Angola',
    autores: ['Santana, M.S.', 'Filipe, M.E.J.'],
    revista: 'Journal of Food Science and Nutrition Research, 5',
    ano: 2022,
    url: 'https://doi.org/10.26502/jfsnr.2642-110000116',
  },
  {
    titulo: 'II Encontro de Jovens Investigadores da CPLP Sobre África - Livro de Resumos',
    autores: ['Abril, C.', 'Falconi, J.', 'Monteiro, M.', 'Santana, M.S.'],
    revista: 'Centro de Estudos Sobre África e Desenvolvimento, Lisboa (ISBN 978-989-54687-3-7)',
    ano: 2022,
  },
]

const publicacoesPorAno = [
  { ano: 2020, indexadas: 11, naoIndexadas: 4, total: 15 },
  { ano: 2021, indexadas: 9, naoIndexadas: 8, total: 17 },
  { ano: 2022, indexadas: 12, naoIndexadas: 4, total: 16 },
  { ano: 2023, indexadas: 9, naoIndexadas: 4, total: 13 },
  { ano: 2024, indexadas: 6, naoIndexadas: 0, total: 5 },
  { ano: 2025, indexadas: 10, naoIndexadas: 0, total: 10 },
  { ano: 2026, indexadas: 2, naoIndexadas: 1, total: 3 },
]

export default function PublicacoesPage() {
  return (
    <>
      <PageHeader
        title="Publicações"
        description="Produção científica dos investigadores do CIEI, entre 2020 e 2026."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle title="Artigos Científicos" />
          <div className="space-y-4 mb-16">
            {artigos.map((artigo, index) => (
              <Card key={index}>
                <CardContent className="py-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1 dark:text-white">{artigo.titulo}</h3>
                      <p className="text-sm text-gray-600 mb-1 dark:text-gray-300">
                        {artigo.autores.join('; ')}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        <em>{artigo.revista}</em>, {artigo.ano}
                      </p>
                    </div>
                    {artigo.url && (
                      <a
                        href={artigo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-dark dark:hover:text-blue-300 flex-shrink-0"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <SectionTitle
            title="Publicações por Ano"
            subtitle="59 artigos em revistas indexadas e 21 em livros e meios não indexados, totalizando 80 publicações entre 2020 e 2026"
          />
          <Card className="mb-12">
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-200">Ano</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-700 dark:text-gray-200">Revistas Indexadas</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-700 dark:text-gray-200">Não Indexadas</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-700 dark:text-gray-200">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {publicacoesPorAno.map((item) => (
                      <tr key={item.ano} className="border-b last:border-b-0">
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{item.ano}</td>
                        <td className="py-3 px-4 text-right text-gray-600 dark:text-gray-300">{item.indexadas}</td>
                        <td className="py-3 px-4 text-right text-gray-600 dark:text-gray-300">{item.naoIndexadas}</td>
                        <td className="py-3 px-4 text-right font-medium text-primary">{item.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gray-50 rounded-lg p-6 max-w-3xl dark:bg-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Está também em preparação um livro com 11 artigos, organizado pelo CIEI, resultantes de
              pesquisas do Programa de Iniciação Científica (PIC) e de Trabalhos de Fim de Curso das
              áreas de Psicologia Clínica, Psicologia do Trabalho e das Organizações e Saúde e Nutrição,
              a ser publicado assim que houver disponibilidade orçamental.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

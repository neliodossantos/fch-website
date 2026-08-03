import { Metadata } from 'next'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Projetos de Investigação',
  description: 'Linhas de investigação e projetos do CIEI - FCH.',
}

const linhasInvestigacao = [
  {
    titulo: 'Saúde',
    descricao:
      'Inclui pesquisas sobre saúde física, como a desnutrição extrema em crianças e as suas famílias, e sobre saúde mental, tendo como objecto portadores de transtornos mentais, crianças abusadas sexualmente e os seus cuidadores, e profissionais de saúde. Comporta ainda investigação sobre desporto e saúde, H.I.V & SIDA, álcool e outras drogas, a vivência do luto, a prevalência do autismo e as representações sociais de professores sobre o racismo em livros escolares.',
  },
  {
    titulo: 'Estudos sobre Género',
    descricao:
      'Linha de pesquisa que envolve investigações que visam o empoderamento da mulher, tendo em vista a sua importância para o desenvolvimento das sociedades.',
  },
  {
    titulo: 'Construção e Adaptação de Testes',
    descricao:
      'Visa a construção e adaptação de instrumentos e testes psicológicos à população angolana.',
  },
  {
    titulo: 'Ecologia',
    descricao:
      'O Centro aspira tornar-se um núcleo de pesquisas ecológicas com a finalidade de produzir "mentes verdes", possuindo actualmente um projecto de pesquisa em curso nesta temática.',
  },
]

const eventosRealizados = [
  {
    titulo: 'IV Fórum sobre Género "Heroínas Vivas"',
    descricao: 'Fórum dedicado à discussão de temas de género e empoderamento feminino.',
  },
  {
    titulo: 'Ética na Humanização dos Serviços de Saúde',
    descricao: 'Evento científico sobre ética aplicada à humanização dos serviços de saúde em Angola.',
  },
  {
    titulo: 'Prémio "Onjila You Luto" - Programa de Iniciação Científica',
    descricao: 'Cerimónia de premiação de pesquisa desenvolvida no âmbito do PIC da UCAN.',
  },
  {
    titulo: 'Intervenção em Rede Multidisciplinar no Contexto da Hidrocefalia em Angola',
    descricao: 'Fórum científico realizado em parceria com a Associação OSAI sobre hidrocefalia em contexto angolano.',
  },
  {
    titulo: 'Webinar sobre Ética e Saúde',
    descricao: 'Sessão online de discussão sobre ética aplicada à área da saúde.',
  },
  {
    titulo: 'Participação em Feira Ecológica da UNESCO',
    descricao: 'Estudantes do PIC apresentaram pesquisa em feira ecológica, na presença da Vice-Reitora da FCH e da Ministra da Educação.',
  },
]

export default function ProjetosPage() {
  return (
    <>
      <PageHeader
        title="Projetos de Investigação"
        description="Linhas de investigação em curso e iniciativas científicas desenvolvidas pelo CIEI."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle title="Linhas de Investigação em Curso" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            {linhasInvestigacao.map((linha, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{linha.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-200 text-sm text-justify">{linha.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <SectionTitle title="Eventos e Iniciativas Realizadas" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventosRealizados.map((evento, index) => (
              <Card key={index} className="opacity-90">
                <CardHeader>
                  <CardTitle className="text-base">{evento.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-200 text-sm text-justify">{evento.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

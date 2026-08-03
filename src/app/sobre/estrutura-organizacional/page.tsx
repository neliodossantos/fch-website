import { Metadata } from 'next'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Estrutura Organizacional',
  description: 'Conheça a estrutura organizacional da Faculdade de Ciências Humanas da UCAN.',
}

const departamentos = [
  {
    nome: 'Departamento de Psicologia Clínica',
    coordenador: 'Doutora Helena Veloso',
    descricao:
      'Responsável pela coordenação das actividades académicas, científicas e de extensão relacionadas com a formação dos futuros psicólogos clínicos, promovendo competências em avaliação psicológica, diagnóstico, intervenção clínica, psicoterapia, saúde mental e investigação científica.',
  },
  {
    nome: 'Departamento de Psicologia do Trabalho e das Organizações',
    coordenador: 'Mestre Manuel Armando Dala',
    descricao:
      'Dedica-se à formação de profissionais capazes de intervir em contextos organizacionais, empresariais e institucionais, nas áreas de gestão de recursos humanos, desenvolvimento organizacional, saúde ocupacional, liderança e comportamento organizacional.',
  },
  {
    nome: 'Departamento de Línguas Românicas e Literaturas Modernas',
    coordenador: 'Doutor Domingos Carlos Pascoal',
    descricao:
      'Coordena a formação linguística e cultural relacionada com a Língua Portuguesa, Francesa, Latim, Italiano e outras áreas da Linguística, desenvolvendo actividades de ensino, investigação e extensão em Linguística, Literatura, Tradução, Comunicação e Ensino de Línguas.',
  },
  {
    nome: 'Departamento de Línguas Germânicas e Literaturas Modernas',
    coordenador: 'Doutor Francisco Matete',
    descricao:
      'Assegura a formação linguística nas áreas da Língua Inglesa e dos estudos interculturais, promovendo a tradução e interpretação e a investigação em linguística aplicada e ensino de línguas estrangeiras.',
  },
]

const unidades = [
  {
    nome: 'Centro Interdisciplinar de Ensino e Investigação (CIEI)',
    descricao: 'Unidade de pesquisa vinculada à FCH e ao Instituto Superior de Ciências da Saúde, criada em Outubro de 2020, responsável pela investigação científica e pelo Programa de Iniciação Científica.',
  },
  {
    nome: 'Laboratório de Psicologia (LaP_FCH_UCAN)',
    descricao: 'Espaço de articulação entre formação prática, investigação e intervenção psicológica aplicada, com prestação de serviços psicológicos gratuitos à comunidade.',
  },
  {
    nome: 'Coordenação de Estágios',
    descricao: 'Gestão dos estágios curriculares e da ampla rede de instituições parceiras que acolhem os estudantes.',
  },
  {
    nome: 'Coordenação de Cursos de Formação Complementar',
    descricao: 'Organização de cursos de curta duração (16 a 32 horas) em Metodologias de Investigação, Línguas, Linguística, Psicologia e áreas afins.',
  },
  {
    nome: 'Conselhos Científico e Pedagógico',
    descricao: 'Órgãos consultivos responsáveis pela orientação científica e pedagógica das actividades da Faculdade.',
  },
  {
    nome: 'Clube de Leitura',
    descricao: 'Espaço de promoção da leitura e de actividades culturais, dinamizado no âmbito do Departamento de Línguas Românicas.',
  },
]

export default function EstruturaOrganizacionalPage() {
  return (
    <>
      <PageHeader
        title="Estrutura Organizacional"
        description="Como a FCH está organizada para melhor servir a comunidade académica."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <SectionTitle
              title="Departamentos"
              subtitle="Unidades académicas responsáveis pela coordenação do ensino, investigação e extensão"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {departamentos.map((dept, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{dept.nome}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-2 dark:text-gray-300">
                      <strong>Chefia:</strong> {dept.coordenador}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{dept.descricao}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <SectionTitle
              title="Unidades de Apoio"
              subtitle="Estruturas que suportam as actividades de ensino, investigação e extensão"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {unidades.map((unidade, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-primary mb-2">{unidade.nome}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{unidade.descricao}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

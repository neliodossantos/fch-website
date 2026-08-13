import { Metadata } from 'next'
import Link from 'next/link'
import { Clock, User, BookOpen, Briefcase } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { getCursoGraduacaoBySlug } from '@/data/cursos'

export const metadata: Metadata = {
  title: 'Licenciatura em Psicologia - Opção do Trabalho e das Organizações',
  description: 'O curso de Psicologia, opção do Trabalho e das Organizações, forma profissionais capazes de intervir em contextos organizacionais, empresariais e institucionais.',
}

const saidasProfissionais = [
  'Recrutamento & Seleção',
  'Formação e Desenvolvimento',
  'Consultoria Organizacional',
  'Gestão de Recursos Humanos',
  'Análise de Clima e Cultura Organizacional',
  'Investigação',
  'Ensino',
  'Consultoria e empreendedorismo',
]

const locaisAtuacao = [
  'Empresas',
  'Organizações Públicas',
  'Organizações Não Governamentais (ONGs)',
  'Consultoras',
]

export default function PsicologiaTrabalhoOrganizacoesPage() {
  const curso = getCursoGraduacaoBySlug('psicologia-trabalho-organizacoes')!

  return (
    <>
      <PageHeader
        eyebrow="Licenciatura"
        title={curso.nome}
        description={curso.descricao}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <SectionTitle title="Sobre o Curso" />
              <p className="text-gray-700 dark:text-[#E4D9CC] mb-8 leading-relaxed text-justify">
                O curso de Psicologia foi criado pelo Decreto Executivo n.º 496/15 e é ministrado pela
                Faculdade de Ciências Humanas desde 2007, conferindo o grau de Licenciatura em
                Psicologia, na opção do Trabalho e das Organizações. Com duração de cinco anos, a
                formação combina uma sólida base científica e teórica com uma forte componente prática,
                incluindo actividades laboratoriais, práticas supervisionadas, estágio e elaboração de
                monografia. O currículo desenvolve competências de consultoria organizacional,
                investigação científica e intervenção em contextos de trabalho.
              </p>

              <SectionTitle title="Saídas Profissionais" />
              <div className="flex flex-wrap gap-2 mb-8">
                {saidasProfissionais.map((saida, index) => (
                  <span
                    key={index}
                    className="text-sm bg-primary/10 text-primary dark:bg-[#332a22] dark:text-[#E4D9CC] px-3 py-1 rounded-full"
                  >
                    {saida}
                  </span>
                ))}
              </div>
              <p className="text-gray-700 dark:text-[#E4D9CC] mb-8 leading-relaxed text-justify">
                Outras áreas de actuação incluem o desenvolvimento de projectos de ergonomia, análise
                de funções, estudos de mercado de trabalho e comunicação institucional, entre outros.
              </p>

              <SectionTitle title="Locais de Actuação" />
              <div className="flex flex-wrap gap-2 mb-8">
                {locaisAtuacao.map((local, index) => (
                  <span
                    key={index}
                    className="text-sm bg-primary/10 text-primary dark:bg-[#332a22] dark:text-[#E4D9CC] px-3 py-1 rounded-full"
                  >
                    {local}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <Card className="sticky top-24">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-primary mb-4">Informações</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-primary mr-3" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-[#d8cfc4]">Duração</p>
                        <p className="font-medium dark:text-[#E4D9CC]">{curso.duracao}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <User className="w-5 h-5 text-primary mr-3" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-[#d8cfc4]">Chefia do Departamento</p>
                        <p className="font-medium dark:text-[#E4D9CC]">{curso.coordenador}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-5 h-5 text-primary mr-3" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-[#d8cfc4]">Grau</p>
                        <p className="font-medium dark:text-[#E4D9CC]">Licenciatura</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="w-5 h-5 text-primary mr-3" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-[#d8cfc4]">Regime</p>
                        <p className="font-medium dark:text-[#E4D9CC]">Presencial</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <p className="text-sm font-medium text-gray-700 dark:text-[#E4D9CC] mb-3">Prova de Ingresso</p>
                    <p className="text-sm text-gray-600 dark:text-[#d8cfc4]">Língua Portuguesa e Conhecimentos Gerais</p>
                  </div>

                  <div className="mt-6 space-y-3">
                    <Link href="/admissoes" className="block">
                      <Button className="w-full">Candidate-se</Button>
                    </Link>
                    <Link href="/contato" className="block">
                      <Button variant="outline" className="w-full">Mais informações</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

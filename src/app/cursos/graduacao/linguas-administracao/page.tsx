import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Clock, User, Target, BookOpen, Briefcase } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { EstruturaProgramatica } from '@/components/cursos/EstruturaProgramatica'
import { getCursoBySlug, getEstruturaCurricular } from '@/lib/queries/cursos'

export const revalidate = 60 // Revalida cache a cada 60 segundos

export const metadata: Metadata = {
  title: 'Licenciatura em Línguas e Administração',
  description: 'O curso de Línguas e Administração integra competências linguísticas, culturais e organizacionais, preparando profissionais para contextos nacionais e internacionais.',
}

const saidasProfissionais = [
  'Administração em Instituições Públicas e Privadas',
  'Tradução',
  'Organizações Internacionais',
  'Jornalismo/Comunicação Social',
  'Agências de Viagens',
  'Consultoria',
  'Edição de Livros e Revisão de Textos',
  'Diplomacia',
  'Empreendedorismo para áreas afins',
  'Técnico da área de RH',
  'Assessor de Imprensa',
  'Docência (após agregação pedagógica)',
  'Investigador e Escritor',
  'Secretário Executivo ou Administrativo',
  'Gestor de Empresas',
]

export default async function LinguasAdministracaoPage() {
  const curso = await getCursoBySlug('linguas-administracao')
  const estrutura = await getEstruturaCurricular('linguas-administracao')

  if (!curso) {
    notFound()
  }

  return (
    <>
      <PageHeader
        title={curso.nome}
        description={curso.descricao}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <SectionTitle title="Sobre o Curso" />
              <p className="text-gray-700 dark:text-gray-200 mb-8 leading-relaxed text-justify">
                O curso de Línguas e Administração integra competências linguísticas, culturais e
                organizacionais, preparando profissionais para actuar em contextos nacionais e
                internacionais. A formação contempla o desenvolvimento de competências em línguas
                estrangeiras, tradução, comunicação intercultural, administração e gestão,
                proporcionando uma preparação adequada para os desafios do mercado de trabalho
                contemporâneo. É um curso que privilegia a interdisciplinaridade, oferecendo um leque
                vasto de saídas profissionais ao futuro licenciado.
              </p>

              <SectionTitle title="Objetivos do Curso" />
              <ul className="space-y-3 mb-8">
                {curso.objetivos.map((objetivo, index) => (
                  <li key={index} className="flex items-start">
                    <Target className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-200">{objetivo}</span>
                  </li>
                ))}
              </ul>

              <SectionTitle title="Saídas Profissionais" />
              <div className="flex flex-wrap gap-2 mb-8">
                {saidasProfissionais.map((saida, index) => (
                  <span
                    key={index}
                    className="text-sm bg-primary/10 text-primary dark:bg-gray-700 dark:text-gray-200 px-3 py-1 rounded-full"
                  >
                    {saida}
                  </span>
                ))}
              </div>

              {estrutura && <EstruturaProgramatica estrutura={estrutura} />}
            </div>

            <div>
              <Card className="sticky top-24">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-primary mb-4">Informações</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-primary mr-3" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-300">Duração</p>
                        <p className="font-medium dark:text-gray-200">{curso.duracao}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <User className="w-5 h-5 text-primary mr-3" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-300">Coordenação</p>
                        <p className="font-medium dark:text-gray-200">{curso.coordenador}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-5 h-5 text-primary mr-3" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-300">Grau</p>
                        <p className="font-medium dark:text-gray-200">Licenciatura</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="w-5 h-5 text-primary mr-3" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-300">Regime</p>
                        <p className="font-medium dark:text-gray-200">Presencial</p>
                      </div>
                    </div>
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

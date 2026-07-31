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
  title: 'Licenciatura em Psicologia do Trabalho e das Organizações',
  description: 'O curso de Psicologia do Trabalho e das Organizações forma profissionais capacitados para compreender e intervir nos processos psicológicos em contextos organizacionais.',
}

export default async function PsicologiaTrabalhoOrganizacoesPage() {
  const curso = await getCursoBySlug('psicologia-trabalho-organizacoes')
  const estrutura = await getEstruturaCurricular('psicologia-trabalho-organizacoes')

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
                A Licenciatura em Psicologia do Trabalho e das Organizações da FCH forma profissionais 
                capacitados para compreender e intervir nos processos psicológicos em contextos organizacionais. 
                O curso oferece uma formação abrangente que inclui fundamentos teóricos, metodológicos e práticos 
                da Psicologia Organizacional, preparando os estudantes para actuação em gestão de pessoas, 
                comportamento organizacional, recrutamento e seleção, e saúde ocupacional.
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
              
              <SectionTitle title="Saidas Profissionais" />
              <p className="text-gray-700 dark:text-gray-200 mb-8 leading-relaxed text-justify">{curso.perfil}</p>
              
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
                        <p className="text-sm text-gray-500 dark:text-gray-300">Coordenador</p>
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
                  
                  <div className="mt-6 pt-6 border-t">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-3">Áreas de Atuação</p>
                    <div className="flex flex-wrap gap-2">
                      {curso.areas.map((area, index) => (
                        <span
                          key={index}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                        >
                          {area}
                        </span>
                      ))}
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

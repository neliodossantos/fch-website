import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Clock, User, Target, BookOpen, Briefcase } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { getCursoBySlug } from '@/lib/queries/cursos'

export const revalidate = 60 // Revalida cache a cada 60 segundos

export const metadata: Metadata = {
  title: 'Mestrado em Gestão Social',
  description: 'O Mestrado em Gestão Social forma profissionais especializados na gestão de organizações sociais, projetos de desenvolvimento e políticas públicas.',
}

export default async function MestradoGestaoSocialPage() {
  const curso = await getCursoBySlug('mestrado-gestao-social')

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
              <SectionTitle title="Sobre o Programa" />
              <p className="text-gray-700 mb-8 leading-relaxed text-justify">
                O Mestrado em Gestão Social forma profissionais especializados na gestão de 
                organizações sociais, projetos de desenvolvimento e políticas públicas. O programa 
                combina teoria e prática, preparando gestores sociais com visão estratégica e 
                competências para liderar iniciativas de transformação social.
              </p>
              
              <SectionTitle title="Objetivos do Programa" />
              <ul className="space-y-3 mb-8">
                {curso.objetivos.map((objetivo, index) => (
                  <li key={index} className="flex items-start">
                    <Target className="w-5 h-5 text-gray-700 dark:text-gray-200 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{objetivo}</span>
                  </li>
                ))}
              </ul>
              
              <SectionTitle title="Saídas Profissionais" />
              <p className="text-gray-700 mb-8 leading-relaxed text-justify">{curso.perfil}</p>
              
              <SectionTitle title="Estrutura Curricular" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-primary mb-3">1º Ano</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Teoria das Organizações Sociais</li>
                      <li>• Políticas Públicas e Sociais</li>
                      <li>• Gestão de Projetos Sociais</li>
                      <li>• Metodologia de Investigação</li>
                      <li>• Empreendedorismo Social</li>
                      <li>• Seminário de Investigação I</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-primary mb-3">2º Ano</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Avaliação de Políticas e Programas</li>
                      <li>• Gestão de Recursos e Financiamento</li>
                      <li>• Seminário de Investigação II</li>
                      <li>• Dissertação</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <SectionTitle title="Requisitos de Admissão" />
              <ul className="text-gray-700 space-y-2 mb-8">
                <li>• Licenciatura em Serviço Social, Sociologia, Administração ou área afim</li>
                <li>• Média mínima de 14 valores na licenciatura</li>
                <li>• Experiência profissional na área (preferencial)</li>
                <li>• Curriculum vitae</li>
                <li>• Carta de motivação</li>
                <li>• Projeto de investigação preliminar</li>
              </ul>
            </div>
            
            <div>
              <Card className="sticky top-24 border-secondary/30">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-primary mb-4">Informações</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-gray-700 dark:text-gray-200 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Duração</p>
                        <p className="font-medium">{curso.duracao}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <User className="w-5 h-5 text-gray-700 dark:text-gray-200 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Coordenador</p>
                        <p className="font-medium">{curso.coordenador}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-5 h-5 text-gray-700 dark:text-gray-200 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Grau</p>
                        <p className="font-medium">Mestrado</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="w-5 h-5 text-gray-700 dark:text-gray-200 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Regime</p>
                        <p className="font-medium">Presencial</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t">
                    <p className="text-sm font-medium text-gray-700 mb-3">Áreas de Especialização</p>
                    <div className="flex flex-wrap gap-2">
                      {curso.areas.map((area, index) => (
                        <span
                          key={index}
                          className="text-xs bg-primary/10 text-primary dark:bg-gray-700 dark:text-gray-200 px-2 py-1 rounded"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-3">
                    <Link href="/admissoes" className="block">
                      <Button variant="secondary" className="w-full">Candidate-se</Button>
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

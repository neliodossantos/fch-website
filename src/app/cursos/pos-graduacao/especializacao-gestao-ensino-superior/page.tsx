import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { User, Mail, Phone, BookOpen, Briefcase } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { getCursoBySlug } from '@/lib/queries/cursos'

export const revalidate = 60 // Revalida cache a cada 60 segundos

export const metadata: Metadata = {
  title: 'Especialização em Gestão do Ensino Superior',
  description: 'Curso que fortalece as capacidades de liderança de quadros das Instituições de Ensino Superior angolanas em matéria de gestão do ensino, investigação e extensão.',
}

const disciplinasObrigatorias = [
  { disciplina: 'Recursos Humanos no Coração do Ensino Superior', docente: 'João Manuel Saveia', carga: '100H' },
  { disciplina: 'Fundamentos do Ensino Superior', docente: 'Tuca Manuel', carga: '100H' },
  { disciplina: 'Planeamento Estratégico', docente: 'Ken Ndalamba', carga: '100H' },
  { disciplina: 'Processos de Criação, Avaliação e Acreditação de Cursos', docente: 'Manuel Zau', carga: '100H' },
  { disciplina: 'Investigação', docente: 'Eurico Gungula', carga: '100H' },
  { disciplina: 'Extensão', docente: 'Nlandu Faustino', carga: '100H' },
]

const modulosOpcionais = [
  { disciplina: 'Gestão e Liderança de Equipas', docente: 'Ana Rocha', carga: '75H' },
  { disciplina: 'Redacção de Projectos de Investigação Científica', docente: 'Samuel Tumbula', carga: '75H' },
  { disciplina: 'Gestão Académica', docente: 'Albertino Candimba', carga: '75H' },
  { disciplina: 'Gestão Financeira', docente: 'Pedro Fernandes', carga: '75H' },
]

export default async function EGESPage() {
  const curso = await getCursoBySlug('especializacao-gestao-ensino-superior')

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
              <SectionTitle title="Apresentação" />
              <p className="text-gray-700 dark:text-gray-200 mb-8 leading-relaxed text-justify">
                Este curso foi criado e homologado pelo Decreto Executivo n.º 108/22, de 16 de
                Fevereiro, no âmbito do Programa de Apoio ao Ensino Superior (UNI.AO), financiado pela
                União Europeia e implementado pela Agência Expertise France. É um curso diferenciador
                que visa fortalecer as capacidades de liderança de quadros das Instituições de Ensino
                Superior angolanas públicas, público-privadas e privadas em matéria de gestão do
                ensino, da investigação e das actividades de extensão. A gestão do curso teve como
                pressuposto o consórcio entre a UCAN (líder do consórcio) e a Universidade Aberta de
                Portugal, com aulas disponíveis também na plataforma de ensino a distância da UCAN.
              </p>

              <SectionTitle title="Plano de Estudo — Disciplinas Obrigatórias" />
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-2 font-semibold text-gray-700 dark:text-gray-200">Disciplina</th>
                          <th className="text-left py-3 px-2 font-semibold text-gray-700 dark:text-gray-200">Docente</th>
                          <th className="text-right py-3 px-2 font-semibold text-gray-700 dark:text-gray-200">Carga Horária</th>
                        </tr>
                      </thead>
                      <tbody>
                        {disciplinasObrigatorias.map((item, index) => (
                          <tr key={index} className="border-b last:border-b-0">
                            <td className="py-3 px-2 text-gray-700 dark:text-gray-200">{item.disciplina}</td>
                            <td className="py-3 px-2 text-gray-600 dark:text-gray-300">{item.docente}</td>
                            <td className="py-3 px-2 text-right text-gray-600 dark:text-gray-300">{item.carga}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <SectionTitle title="Módulos Opcionais" />
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-2 font-semibold text-gray-700 dark:text-gray-200">Disciplina</th>
                          <th className="text-left py-3 px-2 font-semibold text-gray-700 dark:text-gray-200">Docente</th>
                          <th className="text-right py-3 px-2 font-semibold text-gray-700 dark:text-gray-200">Carga Horária</th>
                        </tr>
                      </thead>
                      <tbody>
                        {modulosOpcionais.map((item, index) => (
                          <tr key={index} className="border-b last:border-b-0">
                            <td className="py-3 px-2 text-gray-700 dark:text-gray-200">{item.disciplina}</td>
                            <td className="py-3 px-2 text-gray-600 dark:text-gray-300">{item.docente}</td>
                            <td className="py-3 px-2 text-right text-gray-600 dark:text-gray-300">{item.carga}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="sticky top-24 border-primary/30">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-primary mb-4">Informações</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <BookOpen className="w-5 h-5 text-gray-700 dark:text-gray-200 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Grau</p>
                        <p className="font-medium">Especialização</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="w-5 h-5 text-gray-700 dark:text-gray-200 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Regime</p>
                        <p className="font-medium">Presencial e a distância</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <p className="text-sm font-medium text-gray-700 mb-3 dark:text-gray-200">Coordenação</p>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        Manuel Dala
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        <a href="mailto:manuel.dala@ucan.edu" className="hover:text-primary">manuel.dala@ucan.edu</a>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        +244 923 949 052
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        Secretária: Yola Filipe (eges@ucan.edu)
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

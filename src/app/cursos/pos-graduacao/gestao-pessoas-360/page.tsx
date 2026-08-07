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
  title: 'Pós-Graduação Profissional em Gestão de Pessoas 360º',
  description: 'Programa que integra Gestão de Pessoas, Psicologia Organizacional, Direito do Trabalho e Inteligência Artificial Aplicada à Gestão de Pessoas.',
}

const planoEstudo = [
  { disciplina: 'Fundamentos Estratégicos da Gestão de Pessoas e do Capital Humano', docente: 'Lorena Henriquez', carga: '30H' },
  { disciplina: 'Psicologia Organizacional e do Trabalho: Comportamento, Motivação e Desempenho', docente: 'João Saveia', carga: '30H' },
  { disciplina: 'Desenvolvimento Humano, Liderança e Gestão de Competências Organizacionais', docente: 'Zacarias Samba dos Santos', carga: '30H' },
  { disciplina: 'Saúde Mental, Qualidade de Vida e Psicodinâmica do Trabalho', docente: 'Manuel Dala', carga: '30H' },
  { disciplina: 'Direito do Trabalho Aplicado à Gestão de Pessoas e às Relações Laborais', docente: 'Márcia Nigiolela / Edvaldo Calitamba', carga: '30H' },
  { disciplina: 'Comunicação Estratégica, Cultura Organizacional e Gestão de Conflitos', docente: 'Jeanine Silveira', carga: '30H' },
  { disciplina: 'Inteligência Artificial Aplicada à Gestão de Pessoas', docente: 'Celsio Cosme', carga: '30H' },
  { disciplina: 'Projeto Integrador em Gestão de Pessoas 360º', docente: 'Lorena Henriquez', carga: '30H' },
]

export default async function GestaoPessoas360Page() {
  const curso = await getCursoBySlug('gestao-pessoas-360')

  if (!curso) {
    notFound()
  }

  return (
    <>
      <PageHeader
        eyebrow="Pós-Graduação"
        title={curso.nome}
        description={curso.descricao}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <SectionTitle title="Apresentação" />
              <p className="text-gray-700 dark:text-gray-200 mb-4 leading-relaxed text-justify">
                A Pós-Graduação de Capacitação Profissional em Gestão de Pessoas 360º tem como
                objectivo desenvolver competências avançadas para todos os profissionais que actuam nas
                áreas de Recursos Humanos, Relações Laborais e Desenvolvimento Organizacional. O
                programa integra quatro eixos fundamentais: Gestão de Pessoas, Psicologia
                Organizacional, Direito do Trabalho e Inteligência Artificial Aplicada à Gestão de
                Pessoas.
              </p>
              <p className="text-gray-700 dark:text-gray-200 mb-8 leading-relaxed text-justify">
                Denominação completa: Pós-Graduação Profissional em Gestão de Pessoas 360º com Ênfase em
                Psicologia, Direito do Trabalho e Inteligência Artificial Aplicada ao Capital Humano
                (Decreto Executivo n.º 450/22, de 30 de Setembro).
              </p>

              <SectionTitle title="Plano de Estudo" />
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
                        {planoEstudo.map((item, index) => (
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
                        <p className="font-medium">Pós-Graduação Profissional</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="w-5 h-5 text-gray-700 dark:text-gray-200 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Regime</p>
                        <p className="font-medium">Presencial</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <p className="text-sm font-medium text-gray-700 mb-3 dark:text-gray-200">Coordenação</p>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        Lorena Henriquez
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        <a href="mailto:lorena.henriquez@ucan.edu" className="hover:text-primary">lorena.henriquez@ucan.edu</a>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        +244 928 524 737
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

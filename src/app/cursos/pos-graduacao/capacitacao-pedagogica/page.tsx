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
  title: 'Pós-Graduação Profissional em Capacitação Pedagógica',
  description: 'Programa (PGPCP) que desenvolve as capacidades didáctico-pedagógicas dos docentes do ensino superior.',
}

const planoEstudo = [
  { disciplina: 'Prática Pedagógica I', docente: 'Pedro Fernandes', carga: '15H' },
  { disciplina: 'A Universidade e as Novas Tendências Pedagógicas', docente: 'Nlandu Faustino', carga: '45H' },
  { disciplina: 'Didáctica do Ensino Superior', docente: 'José Gomes', carga: '45H' },
  { disciplina: 'Comunicação Educativa', docente: 'José Chivinda', carga: '30H' },
  { disciplina: 'Métodos e Meios de Ensino', docente: 'José Chivinda', carga: '30H' },
  { disciplina: 'Planificação do Processo de Ensino-Aprendizagem', docente: 'Pedro Fernandes', carga: '45H' },
  { disciplina: 'Questões Normativas do Ensino Superior', docente: 'João Francisco', carga: '15H' },
  { disciplina: 'Questões Éticas no Ensino Superior', docente: 'Nelson Quissungo', carga: '30H' },
  { disciplina: 'Processo de Avaliação das Aprendizagens', docente: 'Maria Helena Miguel', carga: '45H' },
  { disciplina: 'Técnicas de Elaboração de Projectos de Investigação e Extensão', docente: 'Abel Cassule', carga: '45H' },
  { disciplina: 'Tecnologias da Informação e Comunicação no Ensino', docente: 'Adriana Silva', carga: '45H' },
  { disciplina: 'Prática Pedagógica II', docente: 'Pedro Fernandes', carga: '15H' },
]

export default async function PGPCPPage() {
  const curso = await getCursoBySlug('capacitacao-pedagogica')

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
                Este curso foi criado e homologado pelo Decreto Executivo n.º 60/19, de 2019. A
                Universidade Católica de Angola criou este programa de capacitação pedagógica para os
                seus professores, denominado Pós-Graduação Profissional em Capacitação Pedagógica
                (PGPCP), como forma de desenvolver as capacidades didáctico-pedagógicas dos seus
                docentes e garantir que a sua actividade de ensino seja mais eficiente e eficaz. A
                PGPCP tem como finalidade habilitar o formando com competências profissionais para a
                docência universitária, requisito para o acesso e continuação na carreira docente nas
                Instituições de Ensino Superior.
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
              <Card className="sticky top-24 border-secondary/30">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-primary mb-4">Informações</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <BookOpen className="w-5 h-5 text-gray-700 dark:text-gray-200 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Grau</p>
                        <p className="font-medium">Pós-Graduação Profissional</p>
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
                    <p className="text-sm font-medium text-gray-700 mb-3">Coordenação</p>
                    <div className="space-y-2 text-sm text-gray-600">
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
                        Secretária: Paulina da Silva (cpp.fch@ucan.edu)
                      </div>
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

import { Metadata } from 'next'
import Link from 'next/link'
import { Clock, User, Mail, Phone, BookOpen, Briefcase } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { getCursoPosGraduacaoBySlug } from '@/data/cursos'

export const metadata: Metadata = {
  title: 'Pós-Graduação Profissional em Consulta Psicológica',
  description: 'Programa que desenvolve competências avançadas para psicólogos e profissionais de saúde mental nas vertentes Cognitivo-Comportamental e Psicanalítica.',
}

const planoEstudo = [
  { disciplina: 'Metodologia de Investigação Científica', docente: 'Samuel Tumbula', carga: '20H' },
  { disciplina: 'Terapia Psicanalítica: Teoria e Prática', docente: 'Helena Veloso', carga: '—' },
  { disciplina: 'Psicoterapia Cognitivo-Comportamental: Fundamentos Teóricos e Clínicos', docente: 'Evanilse Diogo', carga: '—' },
  { disciplina: 'Ética e Deontologia Profissional', docente: 'José Sebastião', carga: '—' },
  { disciplina: 'Atendimento Clínico Supervisionado em Terapia Psicanalítica I, II e III', docente: 'Helena Veloso', carga: '—' },
  { disciplina: 'Atendimento Clínico Supervisionado em Psicoterapia Cognitivo-Comportamental I, II e III', docente: 'Evanilse Diogo', carga: '—' },
  { disciplina: 'Elaboração de Artigo Científico', docente: 'Anibal Simões', carga: '—' },
  { disciplina: 'Psicoterapias Humanistas e Existenciais: Teoria e Clínica', docente: 'Cátia Pargano', carga: '—' },
]

export default function ConsultaPsicologicaPage() {
  const curso = getCursoPosGraduacaoBySlug('consulta-psicologica')!

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
              <p className="text-gray-700 dark:text-gray-200 mb-8 leading-relaxed text-justify">
                A Pós-Graduação Profissional em Consulta Psicológica tem como objectivo desenvolver
                competências avançadas para psicólogos e profissionais da área da saúde mental que
                pretendam aprimorar a sua prática clínica, fortalecendo a capacidade de avaliação,
                intervenção e acompanhamento psicológico em diferentes contextos e populações. O
                programa integra duas vertentes fundamentais — Cognitivo-Comportamental e
                Psicanalítica — promovendo uma abordagem científica, ética e centrada na pessoa.
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
                        <p className="font-medium">Presencial, aulas aos fins de semana</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <p className="text-sm font-medium text-gray-700 mb-3 dark:text-gray-200">Coordenação</p>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        Helena Veloso
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        <a href="mailto:helena.veloso@ucan.edu" className="hover:text-primary">helena.veloso@ucan.edu</a>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        +244 928 524 737
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        Secretária: Yola Filipe (posgraduacao.fch@ucan.edu)
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

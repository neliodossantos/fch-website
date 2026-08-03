import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Heart, Calendar } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Laboratório de Psicologia',
  description: 'Laboratório de Psicologia (LaP_FCH_UCAN) - formação prática, investigação e intervenção psicológica aplicada, com serviços gratuitos à comunidade.',
}

export default function LaboratorioPsicologiaPage() {
  return (
    <>
      <PageHeader
        title="Laboratório de Psicologia"
        description="Formação prática, investigação e intervenção psicológica aplicada, com serviços gratuitos à comunidade."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
              O Laboratório de Psicologia da Universidade Católica de Angola (LaP_FCH_UCAN) foi criado
              pela Faculdade de Ciências Humanas como resposta à necessidade de articular, num mesmo
              espaço, a formação académica, a investigação científica e a intervenção psicológica
              aplicada. Desde a sua fundação, tem desempenhado um papel central na formação prática dos
              estudantes de Psicologia Clínica, constituindo também um espaço de extensão universitária
              e de prestação gratuita de serviços psicológicos à comunidade.
            </p>
            <div className="bg-primary/5 dark:bg-gray-800 rounded-lg p-6">
              <div className="flex items-start">
                <Heart className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Compromisso com a Comunidade</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Os serviços são prestados de forma 100% gratuita por psicólogos voluntários e por
                    estudantes de Psicologia Clínica sob supervisão docente, ao abrigo dos objectivos de
                    ensino, investigação e extensão da Universidade.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Link href="/laboratorio-psicologia/servicos">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary-dark dark:group-hover:text-blue-300 transition-colors">
                    Serviços
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Conheça os serviços de atendimento psicológico e de extensão oferecidos.
                  </p>
                  <span className="text-primary dark:text-blue-400 text-sm font-medium inline-flex items-center group-hover:text-primary-dark dark:group-hover:text-blue-300 transition-colors">
                    Ver serviços <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>

            <Link href="/laboratorio-psicologia/marcacao">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 dark:bg-gray-700 flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary-dark dark:group-hover:text-blue-300 transition-colors">
                    Marcação
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Contactos e horários para agendar um atendimento.
                  </p>
                  <span className="text-primary dark:text-blue-400 text-sm font-medium inline-flex items-center group-hover:text-primary-dark dark:group-hover:text-blue-300 transition-colors">
                    Marcar atendimento <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-primary mb-4">Equipa</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Coordenação</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Manassés Apolinário (Psicólogo Clínico), Coordenador, e Lisvalda Morais (Psicóloga do
                  Trabalho e das Organizações), Coordenadora Adjunta.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Estudantes Bolseiros</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Waziza Kai, Núria Alves e Nzola Kalumbei.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Colaboração e Voluntariado</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Dra. Vânia Filipe e Dra. Alice Conga, e uma rede de psicólogos voluntários nacionais e
                  internacionais.
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
              O Laboratório dispõe actualmente de mais de quarenta instrumentos de avaliação
              psicológica destinados às áreas Clínica, Escolar e Organizacional.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

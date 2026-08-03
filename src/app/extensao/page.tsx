import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Award } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Extensão',
  description: 'Programas de extensão e cursos complementares da FCH.',
}

export default function ExtensaoPage() {
  return (
    <>
      <PageHeader
        title="Extensão"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed text-justify">
              A Extensão da Faculdade de Ciências Humanas da Universidade Católica de Angola é um pilar fundamental que promove a integração entre o saber académico e as necessidades da comunidade. Por meio de projectos, programas e actividades culturais, sociais e educativas, a Extensão visa contribuir para o desenvolvimento sustentável, a inclusão social e o fortalecimento dos valores humanos. Este pilar estimula o compromisso dos estudantes, docentes e colaboradores com a transformação social, aproximando a universidade da realidade angolana e fomentando uma actuação cidadã responsável, humana e plena.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Link href="/extensao/cursos-complementares">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                    Cursos Complementares
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-200 text-sm mb-4 text-justify">
                    Cursos de curta duração em diversas áreas das Ciências Humanas.
                  </p>
                  <span className="text-primary dark:text-blue-400 text-sm font-medium inline-flex items-center group-hover:text-primary-dark dark:group-hover:text-blue-300 transition-colors">
                    Ver cursos <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/laboratorio-psicologia">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-gray-700 flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-primary dark:text-white" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                    Laboratório de Psicologia
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-200 text-sm mb-4 text-justify">
                    Formação prática, investigação e prestação de serviços psicológicos gratuitos à comunidade.
                  </p>
                  <span className="text-primary dark:text-blue-400 text-sm font-medium inline-flex items-center group-hover:text-primary-dark dark:group-hover:text-blue-300 transition-colors">
                    Saber mais <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>

            <Link href="/estagios">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                    Estágios
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-200 text-sm mb-4 text-justify">
                    Informações sobre os estágios disponíveis e processos relacionados.
                  </p>
                  <span className="text-primary dark:text-blue-400 text-sm font-medium inline-flex items-center group-hover:text-primary-dark dark:group-hover:text-blue-300 transition-colors">
                    Ver estágios <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            
          </div>
          

        </div>
      </section>
    </>
  )
}

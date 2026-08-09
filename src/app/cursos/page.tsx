import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, GraduationCap, Award } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { cursosGraduacao, cursosPosGraduacao } from '@/data/cursos'

export const metadata: Metadata = {
  title: 'Cursos',
  description: 'Conheça os cursos de graduação e pós-graduação da FCH.',
}

export default function CursosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Formação académica"
        title="Nossos Cursos"
        description="A FCH oferece cursos de graduação e pós-graduação nas áreas das Ciências Humanas."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <GraduationCap className="w-8 h-8 text-gray-900 dark:text-white mr-3" />
              <SectionTitle title="Graduação" subtitle="Licenciaturas com duração de 4-5 anos" className="mb-0" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cursosGraduacao.map((curso) => (
                <Link key={curso.id} href={`/cursos/graduacao/${curso.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                        {curso.nome}
                      </CardTitle>
                      {curso.duracao && <p className="text-sm text-gray-500 dark:text-gray-300">Duração: {curso.duracao}</p>}
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-200 text-sm mb-4 line-clamp-3">{curso.descricao}</p>
                      <span className="text-primary dark:text-blue-400 text-sm font-medium inline-flex items-center group-hover:text-primary-dark dark:group-hover:text-blue-300 transition-colors">
                        Ver detalhes <ArrowRight className="ml-2 w-4 h-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/cursos/graduacao"
                className="inline-flex items-center text-primary dark:text-blue-400 hover:text-primary-dark dark:hover:text-blue-300 font-medium"
              >
                Ver todos os cursos de graduação <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          <div>
            <div className="flex items-center mb-8">
              <Award className="w-8 h-8 text-gray-900 dark:text-white mr-3" />
              <SectionTitle title="Pós-Graduação" subtitle="Especializações e pós-graduações profissionais" className="mb-0" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cursosPosGraduacao.map((curso) => (
                <Link key={curso.id} href={`/cursos/pos-graduacao/${curso.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group border-gray-200 dark:border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                        {curso.nome}
                      </CardTitle>
                      {curso.duracao && <p className="text-sm text-gray-500 dark:text-gray-300">Duração: {curso.duracao}</p>}
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-200 text-sm mb-4 line-clamp-3">{curso.descricao}</p>
                      <span className="text-primary dark:text-blue-400 text-sm font-medium inline-flex items-center group-hover:text-primary-dark dark:group-hover:text-blue-300 transition-colors">
                        Ver detalhes <ArrowRight className="ml-2 w-4 h-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/cursos/pos-graduacao"
                className="inline-flex items-center text-primary dark:text-blue-400 hover:text-primary-dark dark:hover:text-blue-300 font-medium"
              >
                Ver todos os mestrados <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

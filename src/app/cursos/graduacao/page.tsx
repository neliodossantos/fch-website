import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, User } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { getCursosGraduacao } from '@/lib/queries/cursos'

export const revalidate = 60 // Revalida cache a cada 60 segundos

export const metadata: Metadata = {
  title: 'Cursos de Graduação',
  description: 'Licenciaturas oferecidas pela FCH - Psicologia do Trabalho e das Organizações, Psicologia Clínica e Línguas.',
}

export default async function GraduacaoPage() {
  const cursosGraduacao = await getCursosGraduacao()

  return (
    <>
      <PageHeader
        title="Cursos de Graduação"
        description="Licenciaturas com duração de 4 anos nas áreas das Ciências Sociais e Humanas."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          {cursosGraduacao.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {cursosGraduacao.map((curso) => (
                <Card key={curso.id} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{curso.nome}</CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {curso.duracao}
                      </span>
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {curso.coordenador}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{curso.descricao}</p>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">Principais áreas:</p>
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
                    <Link href={`/cursos/graduacao/${curso.slug}`}>
                      <Button variant="outline" className="w-full">
                        Ver detalhes do curso <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400">Sem dados disponíveis</p>
          )}
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Interessado em se candidatar a um dos nossos cursos?
            </p>
            <Link href="/admissoes">
              <Button>
                Saiba mais sobre admissões
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

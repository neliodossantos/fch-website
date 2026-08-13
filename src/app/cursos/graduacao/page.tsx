import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, User } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { cursosGraduacao } from '@/data/cursos'

export const metadata: Metadata = {
  title: 'Cursos de Graduação',
  description: 'Licenciaturas oferecidas pela FCH - Psicologia (opções Clínica e do Trabalho e das Organizações) e Línguas e Administração.',
}

export default function GraduacaoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Formação académica"
        title="Cursos de Graduação"
        description="Licenciaturas nas áreas das Ciências Humanas: Psicologia (5 anos) e Línguas e Administração."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cursosGraduacao.map((curso) => (
              <Card key={curso.id} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{curso.nome}</CardTitle>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 mt-2 dark:text-[#b8ab9c]">
                    {curso.duracao && (
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {curso.duracao}
                      </span>
                    )}
                    {curso.coordenador && (
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {curso.coordenador}
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 dark:text-[#d8cfc4]">{curso.descricao}</p>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2 dark:text-[#E4D9CC]">Principais áreas:</p>
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

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4 dark:text-[#d8cfc4]">
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

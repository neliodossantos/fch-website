import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, User } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { getCursosPosGraduacao } from '@/lib/queries/cursos'

export const revalidate = 60 // Revalida cache a cada 60 segundos

export const metadata: Metadata = {
  title: 'Cursos de Pós-Graduação',
  description: 'Mestrados oferecidos pela FCH - Psicologia Clínica e Gestão Social.',
}

export default async function PosGraduacaoPage() {
  const cursosPosGraduacao = await getCursosPosGraduacao()

  return (
    <>
      <PageHeader
        title="Cursos de Pós-Graduação"
        description="Mestrados com duração de 2 anos para aprofundamento de conhecimentos."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          {cursosPosGraduacao.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {cursosPosGraduacao.map((curso) => (
                <Card key={curso.id} className="h-full border-secondary/30">
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
                            className="text-xs bg-primary/10 text-primary dark:bg-gray-700 dark:text-gray-200 px-2 py-1 rounded"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link href={`/cursos/pos-graduacao/${curso.slug}`}>
                      <Button variant="secondary" className="w-full">
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
          
          <div className="mt-12 bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-primary mb-4">Requisitos para Mestrado</h3>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Licenciatura concluída em área afim</li>
              <li>• Média mínima de 14 valores na licenciatura</li>
              <li>• Disponibilidade para dedicação ao programa</li>
              <li>• Projeto de investigação preliminar</li>
            </ul>
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

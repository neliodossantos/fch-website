import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, User } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { cursosPosGraduacao } from '@/data/cursos'

export const metadata: Metadata = {
  title: 'Cursos de Pós-Graduação',
  description: 'Especialização em Gestão do Ensino Superior, Capacitação Pedagógica, Gestão de Pessoas 360º e Consulta Psicológica.',
}

export default function PosGraduacaoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Formação académica"
        title="Cursos de Pós-Graduação"
        description="Especializações e pós-graduações profissionais de capacitação avançada."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cursosPosGraduacao.map((curso) => (
              <Card key={curso.id} className="h-full border-primary/30">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{curso.nome}</CardTitle>
                  {curso.coordenador && (
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2 dark:text-[#b8ab9c]">
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {curso.coordenador}
                      </span>
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 dark:text-[#d8cfc4]">{curso.descricao}</p>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2 dark:text-[#E4D9CC]">Principais áreas:</p>
                    <div className="flex flex-wrap gap-2">
                      {curso.areas.map((area, index) => (
                        <span
                          key={index}
                          className="text-xs bg-primary/10 text-primary dark:bg-[#332a22] dark:text-[#E4D9CC] px-2 py-1 rounded"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link href={`/cursos/pos-graduacao/${curso.slug}`}>
                    <Button variant="outline" className="w-full">
                      Ver detalhes do curso <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 rounded-lg p-8 dark:bg-[#1f1a16]">
            <h3 className="text-xl font-semibold text-primary mb-4">Requisitos Gerais</h3>
            <ul className="text-gray-600 space-y-2 mb-6 dark:text-[#d8cfc4]">
              <li>• Licenciatura concluída em área afim ao programa pretendido</li>
              <li>• Certificado de Habilitações (com homologação pelo INAAREES, quando aplicável)</li>
              <li>• Curriculum vitae actualizado</li>
              <li>• Cópia do Bilhete de Identidade</li>
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

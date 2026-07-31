import { Metadata } from 'next'
import Link from 'next/link'
import { Clock, Users, Calendar } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Cursos Complementares',
  description: 'Cursos complementares e de formação contínua da FCH.',
}

const cursos = [
  {
    titulo: 'Avaliação Psicológica: Técnicas e Instrumentos',
    area: 'Psicologia',
    duracao: '40 horas',
    vagas: 25,
    inicio: 'Março 2024',
    valor: '15.000 Kz',
  },
  {
    titulo: 'Gestão de Projetos Sociais',
    area: 'Serviço Social',
    duracao: '30 horas',
    vagas: 30,
    inicio: 'Abril 2024',
    valor: '12.000 Kz',
  },
  {
    titulo: 'Metodologia de Pesquisa Social',
    area: 'Sociologia',
    duracao: '35 horas',
    vagas: 25,
    inicio: 'Março 2024',
    valor: '14.000 Kz',
  },
  {
    titulo: 'Marketing Digital e Redes Sociais',
    area: 'Comunicação',
    duracao: '25 horas',
    vagas: 35,
    inicio: 'Maio 2024',
    valor: '10.000 Kz',
  },
  {
    titulo: 'Intervenção em Crise',
    area: 'Psicologia',
    duracao: '20 horas',
    vagas: 20,
    inicio: 'Abril 2024',
    valor: '8.000 Kz',
  },
  {
    titulo: 'Redação Jornalística',
    area: 'Comunicação',
    duracao: '30 horas',
    vagas: 25,
    inicio: 'Junho 2024',
    valor: '12.000 Kz',
  },
]

export default function CursosComplementaresPage() {
  return (
    <>
      <PageHeader
        title="Cursos Complementares"
        description="Cursos de curta duração para atualização e formação contínua."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Próximos Cursos" 
            subtitle="Confira os cursos disponíveis para inscrição"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {cursos.map((curso, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded w-fit mb-2">
                    {curso.area}
                  </span>
                  <CardTitle className="text-lg">{curso.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-200 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500" />
                      {curso.duracao}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500" />
                      {curso.vagas} vagas
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500" />
                      Início: {curso.inicio}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">{curso.valor}</span>
                    <Link href="/extensao/inscricao">
                      <Button size="sm">Inscrever-se</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-6 text-center">
            <p className="text-gray-600 dark:text-gray-200 mb-4 text-justify">
              Quer propor um curso ou tem interesse em áreas específicas?
            </p>
            <Link href="/contato">
              <Button variant="outline">Entre em contacto</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

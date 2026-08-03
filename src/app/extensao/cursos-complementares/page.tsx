import { Metadata } from 'next'
import Link from 'next/link'
import { Clock, Globe, Mail } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Cursos Complementares',
  description: 'Cursos complementares e de formação contínua da FCH.',
}

const areasFormacao = [
  'Metodologias de Investigação',
  'Línguas',
  'Linguística',
  'Psicologia',
  'Áreas afins das Ciências Humanas',
]

const formacoesRealizadas = [
  {
    titulo: 'Língua e Cultura Italiana',
    descricao: 'Curso lecionado em parceria com a Embaixada da Itália.',
  },
  {
    titulo: 'Mini-curso de Psicoterapia de Grupo para Pessoas Enlutadas',
    descricao: 'Formação organizada em parceria com o Laboratório de Psicologia, com carga horária de 16 horas.',
  },
  {
    titulo: 'Curso de Avaliação e Intervenção no Abuso Sexual',
    descricao: 'Formação presencial destinada a psicólogos clínicos, organizada em parceria com o Laboratório de Psicologia.',
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
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              No contexto da formação ao longo da vida, além dos cursos de graduação e pós-graduação, a
              FCH também oferece cursos de formação complementar de 16 a 32 horas, no decorrer de cada
              ano académico, nos domínios das Metodologias de Investigação, Línguas, Linguística,
              Psicologia e áreas afins.
            </p>
            <div className="bg-primary/5 rounded-lg p-6 flex items-start">
              <Globe className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
              <p className="text-gray-700 text-sm">
                Em parceria com a Embaixada da Itália, a Faculdade lecciona o curso de Língua e Cultura
                Italiana.
              </p>
            </div>
          </div>

          <SectionTitle
            title="Domínios de Formação"
            subtitle="Áreas em que são organizados cursos de curta duração ao longo do ano académico"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {areasFormacao.map((area, index) => (
              <Card key={index}>
                <CardContent className="py-4 flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-gray-700">{area}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          <SectionTitle title="Exemplos de Formações Realizadas" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {formacoesRealizadas.map((curso, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{curso.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-200 text-sm">{curso.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-6 text-center">
            <p className="text-gray-600 dark:text-gray-200 mb-2">
              A coordenação dos Cursos de Formação Complementar está a cargo do Dr. Manassés Apolinário.
            </p>
            <p className="text-gray-600 dark:text-gray-200 mb-4 text-justify">
              Quer propor um curso ou tem interesse em áreas específicas?
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link href="/contato">
                <Button variant="outline">
                  <Mail className="w-4 h-4 mr-2" />
                  Entre em contacto
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

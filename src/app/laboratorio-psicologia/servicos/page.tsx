import { Metadata } from 'next'
import Link from 'next/link'
import { Clock, Users } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Serviços do Laboratório de Psicologia',
  description: 'Serviços gratuitos de atendimento psicológico e extensão do Laboratório de Psicologia da FCH.',
}

const servicos = [
  {
    titulo: 'Atendimento Psicológico Gratuito Online',
    descricao: 'Apoio psicológico prestado voluntariamente por psicólogos através de chamadas de áudio pelo WhatsApp, com escala organizada por turnos.',
    horario: 'Manhã, tarde e noite (por turnos)',
    publico: 'Comunidade em geral',
  },
  {
    titulo: 'Atendimento Psicológico a Vítimas de Abuso Sexual',
    descricao: 'Serviço gratuito e presencial, prestado por psicólogos voluntários, destinado a vítimas de abuso sexual (crianças, adolescentes e adultos) e aos seus familiares.',
    horario: '3ª a 6ª: 09h30-12h00 | 2ª a 6ª: 15h30-17h00',
    publico: 'Vítimas de abuso sexual e familiares',
  },
  {
    titulo: 'Plantão Psicológico',
    descricao: 'Atendimento imediato, gratuito e presencial para apoio emocional e orientação em situações de dificuldade psicológica, realizado por estudantes do 4º ano de Psicologia Clínica (cadeira de Psicanálise II) sob supervisão da Doutora Helena Veloso.',
    horario: 'Segunda a sexta-feira: 13h00-15h00',
    publico: 'Comunidade académica e público em geral',
  },
  {
    titulo: 'Grupo de Apoio a Pessoas Enlutadas',
    descricao: 'Grupo terapêutico gratuito, com vagas limitadas a 12 participantes por sessão mensal, sob a responsabilidade da Dra. Shendylene Elias.',
    horario: 'Sábados: 09h00-11h00 (sessões mensais)',
    publico: 'Até 12 participantes por grupo',
  },
  {
    titulo: 'Formações de Curta Duração',
    descricao: 'Em parceria com a área de Formação Complementar, o Laboratório organiza formações destinadas a estudantes de Psicologia, psicólogos e profissionais afins (ex.: Psicoterapia de Grupo para Pessoas Enlutadas, Avaliação e Intervenção no Abuso Sexual).',
    horario: 'Calendário variável',
    publico: 'Estudantes, psicólogos e profissionais afins',
  },
  {
    titulo: 'Outras Actividades de Extensão',
    descricao: 'Campanhas de recolha de donativos, visitas guiadas, fóruns e programas dirigidos a problemáticas específicas, como abuso sexual e luto.',
    horario: 'Calendário variável',
    publico: 'Comunidade académica e sociedade angolana',
  },
]

export default function ServicosLabPage() {
  return (
    <>
      <PageHeader
        eyebrow="Laboratório de Psicologia"
        title="Serviços"
        description="Conheça os serviços gratuitos oferecidos pelo Laboratório de Psicologia."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nossos Serviços"
            subtitle="Atendimento especializado e 100% gratuito, prestado por voluntários e estudantes supervisionados"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {servicos.map((servico, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{servico.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4 dark:text-gray-300">{servico.descricao}</p>
                  <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500" />
                      {servico.horario}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500" />
                      {servico.publico}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4 dark:text-gray-300">
              Interessado em algum dos nossos serviços?
            </p>
            <Link href="/laboratorio-psicologia/marcacao">
              <Button>Marcar Atendimento</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

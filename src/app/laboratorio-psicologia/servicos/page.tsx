import { Metadata } from 'next'
import Link from 'next/link'
import { Clock, Users } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Serviços do Laboratório de Psicologia',
  description: 'Serviços de avaliação e acompanhamento psicológico da FCH.',
}

const servicos = [
  {
    titulo: 'Avaliação Psicológica',
    descricao: 'Avaliação cognitiva, emocional e de personalidade utilizando instrumentos validados.',
    duracao: '3-4 sessões',
    publico: 'Todas as idades',
    valor: '5.000 Kz',
  },
  {
    titulo: 'Acompanhamento Psicoterapêutico',
    descricao: 'Psicoterapia individual para tratamento de questões emocionais e comportamentais.',
    duracao: 'Continuado',
    publico: 'Adolescentes e adultos',
    valor: '1.500 Kz/sessão',
  },
  {
    titulo: 'Orientação Vocacional',
    descricao: 'Processo de autoconhecimento e apoio na escolha profissional.',
    duracao: '4-6 sessões',
    publico: 'Estudantes secundário',
    valor: '4.000 Kz',
  },
  {
    titulo: 'Avaliação Neuropsicológica',
    descricao: 'Avaliação das funções cognitivas para diagnóstico e intervenção.',
    duracao: '4-5 sessões',
    publico: 'Todas as idades',
    valor: '8.000 Kz',
  },
  {
    titulo: 'Ludoterapia',
    descricao: 'Intervenção terapêutica através do brincar para crianças.',
    duracao: 'Continuado',
    publico: 'Crianças (3-12 anos)',
    valor: '1.200 Kz/sessão',
  },
  {
    titulo: 'Aconselhamento Psicológico',
    descricao: 'Apoio pontual para situações específicas e tomada de decisões.',
    duracao: '1-3 sessões',
    publico: 'Adolescentes e adultos',
    valor: '1.000 Kz/sessão',
  },
]

export default function ServicosLabPage() {
  return (
    <>
      <PageHeader
        title="Serviços"
        description="Conheça os serviços oferecidos pelo Laboratório de Psicologia."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nossos Serviços" 
            subtitle="Atendimento especializado com valores acessíveis"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {servicos.map((servico, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{servico.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{servico.descricao}</p>
                  <div className="space-y-2 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-gray-400" />
                      {servico.duracao}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-gray-400" />
                      {servico.publico}
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-secondary">{servico.valor}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Interessado em algum dos nossos serviços?
            </p>
            <Link href="/laboratorio-psicologia/marcacao">
              <Button>Marcar Consulta</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

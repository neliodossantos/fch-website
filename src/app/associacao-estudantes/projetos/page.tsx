import { Metadata } from 'next'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Projetos da Associação de Estudantes',
  description: 'Projetos e iniciativas desenvolvidas pela Associação de Estudantes da FCH.',
}

const projetosAtivos = [
  {
    titulo: 'Tutoria Académica',
    descricao: 'Programa de apoio entre estudantes para ajudar em disciplinas com maior taxa de reprovação.',
    status: 'Ativo',
  },
  {
    titulo: 'FCH Cultural',
    descricao: 'Programa de atividades culturais incluindo teatro, música, exposições e cinema.',
    status: 'Ativo',
  },
  {
    titulo: 'Banco de Livros',
    descricao: 'Troca e empréstimo de livros e materiais académicos entre estudantes.',
    status: 'Ativo',
  },
  {
    titulo: 'Voluntariado Social',
    descricao: 'Ações de voluntariado em instituições de solidariedade social da comunidade.',
    status: 'Ativo',
  },
]

const projetosConcluidos = [
  {
    titulo: 'Semana do Caloiro 2023',
    descricao: 'Integração dos novos estudantes com atividades académicas, culturais e desportivas.',
    data: 'Setembro 2023',
  },
  {
    titulo: 'Workshop de Soft Skills',
    descricao: 'Série de workshops sobre competências transversais para o mercado de trabalho.',
    data: 'Novembro 2023',
  },
  {
    titulo: 'Feira de Oportunidades',
    descricao: 'Evento com empresas e instituições para apresentação de oportunidades de emprego e estágio.',
    data: 'Outubro 2023',
  },
]

export default function ProjetosPage() {
  return (
    <>
      <PageHeader
        title="Projetos"
        description="Iniciativas e projetos desenvolvidos pela Associação de Estudantes."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle title="Projetos Ativos" subtitle="Iniciativas em desenvolvimento" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {projetosAtivos.map((projeto, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{projeto.titulo}</CardTitle>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                      {projeto.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{projeto.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <SectionTitle title="Projetos Concluídos" subtitle="Histórico de atividades" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projetosConcluidos.map((projeto, index) => (
              <Card key={index} className="opacity-90">
                <CardHeader>
                  <CardTitle className="text-base">{projeto.titulo}</CardTitle>
                  <p className="text-sm text-gray-500">{projeto.data}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{projeto.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

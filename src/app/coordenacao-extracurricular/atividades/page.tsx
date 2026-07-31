import { Metadata } from 'next'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Atividades Extracurriculares',
  description: 'Atividades desportivas, culturais e de lazer da FCH.',
}

const atividadesDesportivas = [
  { nome: 'Futebol', horario: 'Terças e Quintas - 18:00', local: 'Campo Desportivo' },
  { nome: 'Basquetebol', horario: 'Segundas e Quartas - 17:30', local: 'Pavilhão' },
  { nome: 'Voleibol', horario: 'Sextas - 16:00', local: 'Pavilhão' },
  { nome: 'Ginástica', horario: 'Terças e Quintas - 07:30', local: 'Ginásio' },
]

const atividadesCulturais = [
  { nome: 'Grupo de Teatro', horario: 'Sábados - 10:00', local: 'Auditório' },
  { nome: 'Coral FCH', horario: 'Quartas - 18:00', local: 'Sala de Música' },
  { nome: 'Dança Tradicional', horario: 'Sextas - 17:00', local: 'Sala Multiusos' },
]

const clubes = [
  { nome: 'Clube de Leitura', horario: 'Quintas - 13:00', descricao: 'Discussão de obras literárias' },
  { nome: 'Clube de Debate', horario: 'Segundas - 14:00', descricao: 'Prática de argumentação e oratória' },
  { nome: 'Clube de Cinema', horario: 'Sextas - 18:00', descricao: 'Exibição e discussão de filmes' },
]

export default function AtividadesPage() {
  return (
    <>
      <PageHeader
        title="Atividades Extracurriculares"
        description="Desporto, cultura e lazer para complementar a sua formação."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle title="Atividades Desportivas" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {atividadesDesportivas.map((atividade, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{atividade.nome}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{atividade.horario}</p>
                  <p className="text-sm text-gray-500">{atividade.local}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <SectionTitle title="Atividades Culturais" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {atividadesCulturais.map((atividade, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{atividade.nome}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{atividade.horario}</p>
                  <p className="text-sm text-gray-500">{atividade.local}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <SectionTitle title="Clubes e Grupos" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {clubes.map((clube, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{clube.nome}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{clube.horario}</p>
                  <p className="text-sm text-gray-500">{clube.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-primary mb-4">Quer participar?</h3>
            <p className="text-gray-600 mb-6">
              As inscrições estão abertas durante todo o ano letivo. 
              Procure a Coordenação Extracurricular para mais informações.
            </p>
            <Button>Inscrever-se</Button>
          </div>
        </div>
      </section>
    </>
  )
}

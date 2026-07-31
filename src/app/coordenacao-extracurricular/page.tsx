import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, Music, Trophy, Users } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Card, CardContent } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Coordenação Extracurricular',
  description: 'Atividades extracurriculares da FCH - desporto, cultura e lazer.',
}

const areas = [
  {
    icon: Trophy,
    title: 'Desporto',
    description: 'Atividades desportivas, equipas e torneios universitários.',
  },
  {
    icon: Music,
    title: 'Cultura',
    description: 'Grupos culturais, teatro, música e artes.',
  },
  {
    icon: Users,
    title: 'Grupos Temáticos',
    description: 'Clubes de leitura, debates e outras atividades de interesse.',
  },
  {
    icon: Calendar,
    title: 'Eventos',
    description: 'Organização de eventos e atividades especiais.',
  },
]

export default function CoordenacaoExtracurricularPage() {
  return (
    <>
      <PageHeader
        title="Coordenação Extracurricular"
        description="Atividades extracurriculares que complementam a formação académica."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              A Coordenação Extracurricular organiza atividades que complementam a formação 
              académica dos estudantes. Oferecemos oportunidades nas áreas de desporto, cultura, 
              voluntariado e lazer, promovendo o desenvolvimento integral dos nossos estudantes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {areas.map((area, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <area.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{area.title}</h3>
                  <p className="text-gray-600 text-sm">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/coordenacao-extracurricular/atividades">
              <span className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-light transition-colors font-medium">
                Ver Atividades <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Users, Building2, FileCheck } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Estágios',
  description: 'Coordenação de Estágios da FCH - supervisores, parceiros e candidaturas.',
}

const sections = [
  {
    icon: Users,
    title: 'Supervisores',
    description: 'Conheça os professores supervisores de estágio.',
    href: '/estagios/supervisores',
  },
  {
    icon: Building2,
    title: 'Parceiros',
    description: 'Instituições e empresas parceiras para estágios.',
    href: '/estagios/parceiros',
  },
  {
    icon: FileCheck,
    title: 'Candidatura',
    description: 'Informações e processo de candidatura a estágio.',
    href: '/estagios/candidatura',
  },
]

export default function EstagiosPage() {
  return (
    <>
      <PageHeader
        title="Estágios"
        description="A Coordenação de Estágios facilita a inserção dos estudantes no mercado de trabalho."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              O estágio curricular é uma componente fundamental da formação académica, permitindo 
              aos estudantes aplicar os conhecimentos adquiridos em contexto real de trabalho. 
              A Coordenação de Estágios da FCH estabelece parcerias com diversas instituições 
              e acompanha todo o processo de estágio.
            </p>
            <div className="bg-secondary/10 rounded-lg p-6">
              <h3 className="font-semibold text-primary mb-2">Período de Estágio</h3>
              <p className="text-gray-600">
                Os estágios curriculares decorrem durante o último ano do curso, com duração 
                mínima de um semestre. Os estudantes são acompanhados por um supervisor académico 
                e um orientador na instituição de acolhimento.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sections.map((section) => (
              <Link key={section.href} href={section.href}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <section.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary-dark dark:group-hover:text-blue-300 transition-colors">
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">{section.description}</p>
                    <span className="text-primary dark:text-blue-400 text-sm font-medium inline-flex items-center group-hover:text-primary-dark dark:group-hover:text-blue-300 transition-colors">
                      Saber mais <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

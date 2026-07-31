import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Sobre a FCH',
  description: 'Conheça a Faculdade de Ciências Sociais e Humanas - nossa história, missão, visão e valores.',
}

const sections = [
  {
    title: 'História',
    description: 'Conheça a trajetória da nossa Faculdade desde a sua fundação.',
    href: '/sobre/historia',
  },
  {
    title: 'Missão, Visão e Valores',
    description: 'Os princípios que orientam a nossa atuação académica e social.',
    href: '/sobre/missao-visao-valores',
  },
  {
    title: 'Estrutura Organizacional',
    description: 'Como a FCH está organizada para melhor servir a comunidade.',
    href: '/sobre/estrutura-organizacional',
  },
  {
    title: 'Direção',
    description: 'Conheça a equipa de direção da Faculdade.',
    href: '/sobre/direcao',
  },
  {
    title: 'Secretaria',
    description: 'Informações sobre serviços, formulários e horários de atendimento.',
    href: '/sobre/secretaria',
  },
]

export default function SobrePage() {
  return (
    <>
      <PageHeader
        title="Sobre a FCH"
        description="Conheça a Faculdade de Ciências Sociais e Humanas, uma instituição de referência na formação de profissionais nas áreas sociais e humanas."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              A Faculdade de Ciências Sociais e Humanas (FCH) é uma unidade orgânica da Universidade dedicada 
              ao ensino, investigação e extensão nas áreas das Ciências Sociais e Humanas. Ao longo de mais de 
              três décadas, temos formado profissionais competentes e socialmente responsáveis que atuam em 
              diversas áreas da sociedade.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => (
              <Link key={section.href} href={section.href}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
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

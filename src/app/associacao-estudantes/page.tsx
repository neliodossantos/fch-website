import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Users, FolderOpen, Mail } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Associação de Estudantes',
  description: 'Associação de Estudantes da FCH - Representação e actividades estudantis.',
}

const sections = [
  {
    icon: Users,
    title: 'Membros',
    description: 'Conheça a equipa da Associação de Estudantes.',
    href: '/associacao-estudantes/membros',
  },
  {
    icon: FolderOpen,
    title: 'Projetos',
    description: 'Projetos e iniciativas desenvolvidas pela AE.',
    href: '/associacao-estudantes/projetos',
  },
  {
    icon: Mail,
    title: 'Contactos',
    description: 'Entre em contacto com a Associação de Estudantes.',
    href: '/associacao-estudantes/Contactos',
  },
]

export default function AssociacaoEstudantesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Comunidade estudantil"
        title="Associação de Estudantes"
        description="A voz dos estudantes da FCH - representação, defesa dos interesses e promoção de actividades."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-6 text-justify">
              A Associação de Estudantes da FCH (AE-FCH) é o órgão representativo dos estudantes da 
              Faculdade. A nossa missão é defender os interesses dos estudantes, promover actividades 
              culturais, desportivas e académicas, e contribuir para uma experiência universitária 
              enriquecedora.
            </p>
            <p className="text-gray-600 dark:text-gray-200 text-justify">
              Junte-se a nós e participe activamente na vida da Faculdade!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {sections.map((section) => (
              <Link key={section.href} href={section.href}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <section.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-200 text-sm mb-4 text-justify">{section.description}</p>
                    <span className="text-primary dark:text-blue-400 text-sm font-medium inline-flex items-center group-hover:text-primary-dark dark:group-hover:text-blue-300 transition-colors">
                      Saber mais <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="bg-primary/10 dark:bg-gray-800 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quer fazer parte?</h3>
            <p className="text-gray-600 dark:text-gray-200 mb-6 text-justify">
              A AE-FCH está sempre à procura de estudantes motivados para contribuir. 
              Se tem ideias, energia e vontade de fazer a diferença, junte-se a nós!
            </p>
            <Link href="/associacao-estudantes/Contactos">
              <span className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-light transition-colors font-medium">
                Entre em Contacto
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

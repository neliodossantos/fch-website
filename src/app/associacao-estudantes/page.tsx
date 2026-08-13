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
    href: '/associacao-estudantes/contatos',
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
      
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <div className="lg:pt-4">
              <p className="eyebrow">AE–FCH</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Uma comunidade com voz activa.</h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-700 dark:text-[#E4D9CC]">
              A Associação de Estudantes da FCH (AE-FCH) é o órgão representativo dos estudantes da 
              Faculdade. A nossa missão é defender os interesses dos estudantes, promover actividades 
              culturais, desportivas e académicas, e contribuir para uma experiência universitária 
              enriquecedora.
              </p>
              <p className="mt-4 text-gray-600 dark:text-[#E4D9CC]">
              Junte-se a nós e participe activamente na vida da Faculdade!
              </p>
              <Link href="/associacao-estudantes/contatos" className="mt-7 inline-flex items-center gap-2 rounded-full bg-gray-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-gray-800">
                Entre em contacto <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {sections.map((section) => (
              <Link key={section.href} href={section.href}>
                <Card className="group h-full border-gray-200 transition-all hover:-translate-y-0.5 hover:shadow-lg">
                  <CardHeader className="flex-row items-center gap-4 space-y-0">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15">
                      <section.icon className="h-5 w-5 text-primary-dark" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary-dark transition-colors">
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pl-[5.25rem]">
                    <p className="mb-3 text-sm text-gray-600 dark:text-[#E4D9CC]">{section.description}</p>
                    <span className="inline-flex items-center text-sm font-semibold text-primary-dark">
                      Saber mais <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
            </div>
          </div>
          <div className="mt-12 rounded-2xl border border-primary/25 bg-primary/10 p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quer fazer parte?</h3>
            <p className="mb-6 text-gray-600 dark:text-[#E4D9CC]">
              A AE-FCH está sempre à procura de estudantes motivados para contribuir. 
              Se tem ideias, energia e vontade de fazer a diferença, junte-se a nós!
            </p>
            <Link href="/associacao-estudantes/contatos">
              <span className="inline-flex rounded-full bg-gray-950 px-6 py-3 font-medium text-white transition hover:bg-gray-800">
                Entre em Contacto
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

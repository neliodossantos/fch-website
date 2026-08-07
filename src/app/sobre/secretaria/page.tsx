import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, FileText, Phone } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Secretaria',
  description: 'Secretaria Académica da FCH - Serviços, formulários, horários e Contactos.',
}

const sections = [
  {
    icon: FileText,
    title: 'Serviços',
    description: 'Documentos, certificados, declarações e outros serviços oferecidos.',
    href: '/sobre/secretaria/servicos',
  },
  {
    icon: FileText,
    title: 'Formulários',
    description: 'Formulários para requerimentos e solicitações diversas.',
    href: '/sobre/secretaria/formularios',
  },
  {
    icon: Clock,
    title: 'Horários e Contactos',
    description: 'Horário de funcionamento e formas de contacto.',
    href: '/sobre/secretaria/horarios-Contactos',
  },
]

export default function SecretariaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre a FCH"
        title="Secretaria Académica"
        description="A Secretaria Académica é responsável pelos serviços de apoio administrativo aos estudantes e docentes."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed text-justify">
              A Secretaria Académica da FCH oferece diversos serviços de apoio aos estudantes, docentes 
              e público em geral. Aqui pode encontrar informações sobre documentos, formulários, 
              horários de atendimento e formas de contacto.
            </p>
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
                    <p className="text-gray-600 dark:text-gray-200 text-sm mb-4 text-justify">{section.description}</p>
                    <span className="text-primary dark:text-blue-400 text-sm font-medium inline-flex items-center group-hover:text-primary-dark dark:group-hover:text-blue-300 transition-colors">
                      Aceder <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Precisa de ajuda?</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4 text-justify">
                  Para questões urgentes ou informações adicionais, entre em contacto connosco:
                </p>
                <p className="text-gray-700 dark:text-gray-200">
                  <strong>Telefone:</strong> +244 222 123 456<br />
                  <strong>Email:</strong> secretaria@FCH.edu
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

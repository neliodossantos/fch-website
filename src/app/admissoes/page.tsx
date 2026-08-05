import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, FileText, CreditCard, HelpCircle } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Admissões',
  description: 'Informações sobre o processo de admissão à FCH.',
}

const sections = [
  {
    icon: CheckCircle,
    title: 'Requisitos',
    description: 'Requisitos de admissão para candidatos.',
    href: '/admissoes/requisitos',
  },
  {
    icon: FileText,
    title: 'Documentos',
    description: 'Documentos necessários para candidatura.',
    href: '/admissoes/documentos',
  },
  {
    icon: CreditCard,
    title: 'Taxas',
    description: 'Propinas e taxas académicas.',
    href: '/admissoes/taxas',
  },
  {
    icon: HelpCircle,
    title: 'FAQ',
    description: 'Perguntas frequentes sobre admissões.',
    href: '/admissoes/faq',
  },
]

export default function AdmissoesPage() {
  return (
    <>
      <PageHeader
        title="Admissões"
        description="Venha fazer parte da FCH - conheça o processo de admissão."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
              A Faculdade de Ciências Humanas recebe candidaturas de estudantes que
              desejam ingressar nos cursos de graduação (Psicologia e Línguas e Administração) e
              pós-graduação. O processo de admissão à graduação inclui provas de ingresso em Língua
              Portuguesa e Conhecimentos Gerais.
            </p>
            <div className="bg-primary/10 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Requisitos Gerais de Graduação</h3>
              <p className="text-gray-600 dark:text-gray-200">
                Ter concluído o ensino médio ou equivalente, possuir os documentos originais que
                atestam essa conclusão, apresentar o Bilhete de Identidade e ser aprovado nos exames
                de admissão.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
                    <p className="text-gray-600 dark:text-gray-200 text-sm mb-4">{section.description}</p>
                    <span className="text-primary dark:text-blue-400 text-sm font-medium inline-flex items-center group-hover:text-primary-dark dark:group-hover:text-blue-300 transition-colors">
                      Ver mais <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="bg-primary dark:bg-gray-800 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Pronto para começar?</h3>
            <p className="mb-6 text-white dark:text-gray-100">
              Inicie sua jornada académica na FCH. Escolha seu curso e prepare sua candidatura.
            </p>
            <Link href="/cursos">
              <span className="inline-flex items-center px-6 py-3 bg-white text-primary dark:bg-gray-700 dark:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors font-medium">
                Ver Cursos Disponíveis
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

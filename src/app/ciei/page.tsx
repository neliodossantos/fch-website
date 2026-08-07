import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, FlaskConical, Users, BookOpen } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'CIEI - Centro de Investigação',
  description: 'Centro Interdisciplinar de Estudo e Investigação (CIEI) da Faculdade de Ciências Humanas da UCAN.',
}

const sections = [
  {
    icon: FlaskConical,
    title: 'Projetos',
    description: 'Linhas de investigação e projetos em curso no Centro.',
    href: '/ciei/projetos',
  },
  {
    icon: Users,
    title: 'Investigadores',
    description: 'Coordenação e equipa de investigadores do CIEI.',
    href: '/ciei/investigadores',
  },
  {
    icon: BookOpen,
    title: 'Publicações',
    description: 'Artigos e publicações científicas dos investigadores do CIEI.',
    href: '/ciei/publicacoes',
  },
]

export default function CIEIPage() {
  return (
    <>
      <PageHeader
        eyebrow="Investigação"
        title="CIEI - Centro de Investigação"
        description="Centro Interdisciplinar de Estudo e Investigação da Faculdade de Ciências Humanas da UCAN."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6 dark:text-gray-200">
              O Centro Interdisciplinar de Estudo e Investigação (CIEI) é uma unidade de pesquisa
              vinculada à Faculdade de Ciências Humanas e ao Instituto Superior de Ciências da Saúde
              da Universidade Católica de Angola, criada em parceria entre a Doutora Marli Santana (ISCS)
              e a Dra. Ana Bela Loureiro (FCH). Iniciou as suas actividades em 2018 e foi formalmente
              criada por Despacho Reitoral em Outubro de 2020, sob a direcção da Doutora Helena Veloso.
              Constitui a principal estrutura de investigação científica da Faculdade, investindo no
              Programa de Iniciação Científica (PIC).
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 dark:text-gray-200">
              As suas principais tarefas são investigar e promover eventos sobre fenómenos sociais
              visando o debate e o encaminhamento de soluções; fomentar a literacia científica através
              de formações que envolvem docentes e estudantes; e formar pesquisadores para o futuro por
              meio do PIC, em que estudantes aprendem a construir, executar e divulgar projectos de
              pesquisa, participando em eventos, feiras científicas e na elaboração e submissão de
              artigos em revistas nacionais e internacionais, inclusive indexadas.
            </p>
            <div className="bg-primary/5 rounded-lg p-6">
              <h3 className="font-semibold text-primary mb-2">Linhas de Investigação</h3>
              <ul className="text-gray-600 space-y-1 dark:text-gray-300">
                <li>• Saúde (física e mental, incluindo desnutrição, transtornos mentais, abuso sexual, HIV/SIDA e luto)</li>
                <li>• Estudos sobre Género</li>
                <li>• Construção e Adaptação de Testes à população angolana</li>
                <li>• Ecologia</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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
                    <p className="text-gray-600 text-sm mb-4 dark:text-gray-300">{section.description}</p>
                    <span className="text-primary dark:text-blue-400 text-sm font-medium inline-flex items-center group-hover:text-primary-dark dark:group-hover:text-blue-300 transition-colors">
                      Ver mais <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <p className="text-4xl font-bold text-primary">80</p>
              <p className="text-gray-600 dark:text-gray-300">Publicações (2020-2026)</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-primary">59</p>
              <p className="text-gray-600 dark:text-gray-300">Artigos em Revistas Indexadas</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-primary">4</p>
              <p className="text-gray-600 dark:text-gray-300">Linhas de Investigação</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-12 bg-primary/5 dark:bg-primary/10 rounded-lg p-6 text-center">
            <h3 className="font-semibold text-primary mb-2">Apadrinhe uma Pesquisa</h3>
            <p className="text-gray-600 text-sm dark:text-gray-300">
              O CIEI possui projectos concebidos para melhorar a vida das comunidades angolanas, mas
              cuja execução depende de apoio financeiro. Instituições interessadas em apadrinhar
              pesquisas ou estabelecer parcerias de investigação conjunta podem contactar a directora do
              Centro através de{' '}
              <a href="mailto:helena.veloso@ucan.edu" className="text-primary hover:underline">
                helena.veloso@ucan.edu
              </a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, FlaskConical, Users, BookOpen } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import cieiBackground from './ciei.png'

export const metadata: Metadata = {
  title: 'CIEI - Centro de Investigação',
  description: 'Centro de Investigação e Estudos Interdisciplinares.',
}

const sections = [
  {
    icon: FlaskConical,
    title: 'Projetos',
    description: 'Projetos de investigação em desenvolvimento e concluídos.',
    href: '/ciei/projetos',
  },
  {
    icon: Users,
    title: 'Investigadores',
    description: 'Equipa de investigadores do CIEI.',
    href: '/ciei/investigadores',
  },
  {
    icon: BookOpen,
    title: 'Publicações',
    description: 'Artigos, livros e outras publicações científicas.',
    href: '/ciei/publicacoes',
  },
]

export default function CIEIPage() {
  return (
    <>
      {/* Header com imagem de fundo */}
      <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        {/* Imagem de fundo */}
        <Image
          src={cieiBackground}
          alt="CIEI - Centro de Investigação"
          fill
          className='object-contain'

          priority
        />
        {/* Overlay escuro para legibilidade do texto */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Conteúdo do header */}
      
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              O Centro Interdisciplinar de Estudos e Investigação- CIEI é uma unidade de pesquisa, vinculada a Faculdade de Ciências Humanas e ao Instituto de Ciências da Saúde, recém criada na Universidade Católica de Angola. Criado em Outubro de 2020, suas principais tarefas têm sido a de investigar e promover eventos sobre fenômenos sociais visando o debate e o encaminhamento de soluções, fomentar a literacia científica (através de formações que envolvem docentes e estudantes), e formar pesquisadores para o futuro (por meio de Programas de Iniciação Científica, em que estes aprendem a construir projectos de pesquisa, a os executar e a divulgá-los, por intermédio da participação em eventos, feiras científicas e da elaboração e submissão de artigos em revistas conceituadas nacionais e internacionais).
            </p>
            <div className="bg-primary/5 rounded-lg p-6">
              <h3 className="font-semibold text-primary mb-2">Linhas de Investigação</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Psicologia Clínica e da Saúde</li>
                <li>• Intervenção Social e Políticas Públicas</li>
                <li>• Dinâmicas Sociais e Territoriais</li>
                <li>• Comunicação, Media e Sociedade</li>
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
                    <p className="text-gray-600 text-sm mb-4">{section.description}</p>
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
              <p className="text-4xl font-bold text-primary">15+</p>
              <p className="text-gray-600">Projetos Ativos</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-primary">30+</p>
              <p className="text-gray-600">Investigadores</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-primary">100+</p>
              <p className="text-gray-600">Publicações</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

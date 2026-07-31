import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Heart, Calendar } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Image from 'next/image'
import logo from './lab1.png'
export const metadata: Metadata = {
  title: 'Laboratório de Psicologia',
  description: 'Laboratório de Psicologia da FCH - Serviços de avaliação e acompanhamento psicológico.',
}

export default function LaboratorioPsicologiaPage() {
  return (
    <>
   {/* Header com imagem de fundo */}
      <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        {/* Imagem de fundo */}
        <Image
          src={logo}
          alt="Laboratório de Psicologia"
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
              O Laboratório de Psicologia da FCH é um espaço de prestação de serviços psicológicos 
              à comunidade e de formação prática para os estudantes de Psicologia. Oferecemos 
              avaliação psicológica, acompanhamento terapêutico e orientação vocacional.
            </p>
            <div className="bg-accent/10 rounded-lg p-6">
              <div className="flex items-start">
                <Heart className="w-6 h-6 text-accent mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Compromisso com a Comunidade</h3>
                  <p className="text-gray-600">
                    Os serviços são prestados por estagiários sob supervisão de psicólogos experientes, 
                    com valores acessíveis à comunidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Link href="/laboratorio-psicologia/servicos">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary-dark dark:group-hover:text-blue-300 transition-colors">
                    Serviços
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    Conheça os serviços de avaliação e acompanhamento oferecidos.
                  </p>
                  <span className="text-primary dark:text-blue-400 text-sm font-medium inline-flex items-center group-hover:text-primary-dark dark:group-hover:text-blue-300 transition-colors">
                    Ver serviços <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/laboratorio-psicologia/marcacao">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary-dark dark:group-hover:text-blue-300 transition-colors">
                    Marcação
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    Informações para agendar uma consulta ou avaliação.
                  </p>
                  <span className="text-primary dark:text-blue-400 text-sm font-medium inline-flex items-center group-hover:text-primary-dark dark:group-hover:text-blue-300 transition-colors">
                    Marcar consulta <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-primary mb-4">Público-Alvo</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Crianças e Adolescentes</h4>
                <p className="text-sm text-gray-600">
                  Avaliação e acompanhamento do desenvolvimento, dificuldades de aprendizagem.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Adultos</h4>
                <p className="text-sm text-gray-600">
                  Psicoterapia, avaliação psicológica, orientação profissional.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Idosos</h4>
                <p className="text-sm text-gray-600">
                  Avaliação neuropsicológica, acompanhamento e suporte emocional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

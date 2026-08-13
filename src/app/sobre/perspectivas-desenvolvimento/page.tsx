import { Metadata } from 'next'
import { TrendingUp } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Card, CardContent } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Perspectivas de Desenvolvimento',
  description: 'Plano Estratégico 2022–2026 da Faculdade de Ciências Humanas.',
}

const perspectivas = [
  'Expansão da oferta de cursos de graduação e pós-graduação',
  '(Re)submissão dos cursos de mestrado agendados',
  'Criação de licenciatura em Comunicação Social e em Tradução e Interpretação',
  'Consolidação do ensino a distância',
  'Reforço da investigação científica por via do Programa de Iniciação Científica (PIC)',
  'Criação da Revista Científica da Faculdade de Ciências Humanas',
  'Fortalecimento da mobilidade académica',
  'Ampliação das parcerias nacionais e internacionais',
  'Desenvolvimento de novos serviços comunitários',
  'Modernização das infra-estruturas e dos recursos tecnológicos',
  'Reforço da captação de estudantes e da visibilidade institucional',
]

export default function PerspectivasDesenvolvimentoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre a FCH"
        title="Perspectivas de Desenvolvimento"
        description="Plano Estratégico 2022–2026 da Faculdade de Ciências Humanas."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-12 leading-relaxed dark:text-[#E4D9CC]">
              No âmbito do Plano Estratégico 2022–2026 e dos processos de melhoria contínua da
              qualidade, a Faculdade de Ciências Humanas projecta os seguintes eixos de
              desenvolvimento:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {perspectivas.map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-[#E4D9CC]">{item}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-gray-700 leading-relaxed dark:text-[#E4D9CC]">
              Com uma visão orientada para a excelência académica, a inovação, a investigação
              científica e o serviço à sociedade, a Faculdade de Ciências Humanas da Universidade
              Católica de Angola continua a afirmar-se como um espaço privilegiado de formação,
              produção de conhecimento e promoção do desenvolvimento humano em Angola.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

import { Metadata } from 'next'
import { Target, Eye, Heart } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Card, CardContent } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Missão, Visão e Valores',
  description: 'Conheça a missão, visão e valores da Faculdade de Ciências Humanas.',
}

export default function MissaoVisaoValoresPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre a FCH"
        title="Missão, Visão e Valores"
        description="Os princípios que orientam a nossa atuação académica e social."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="bg-primary text-white border-0">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Missão</h2>
                </div>
                <p className="text-gray-200 leading-relaxed">
                  Formar homens e mulheres plenos de valores humanos, éticos e cristãos, dotados de
                  conhecimentos científicos, técnicos e profissionais inovadores, capazes de servir a
                  sociedade com competência, responsabilidade, rectidão moral, espírito crítico e
                  compromisso com o bem comum.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-200/50 text-white border-0">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl text-black font-bold">Visão</h2>
                </div>
                <p className="text-black leading-relaxed">
                  Afirmar-se como uma referência nacional e internacional nos domínios das Ciências
                  Humanas e Sociais, distinguindo-se pela qualidade do ensino, pela excelência da
                  investigação científica, pela inovação pedagógica, pela relevância social dos seus
                  projectos e pela qualidade dos serviços prestados à comunidade.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 dark:bg-gray-700 mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4">Nossos Valores</h2>
              <p className="text-gray-600 dark:text-gray-300">
                A actuação da Faculdade de Ciências Humanas está alinhada com os valores institucionais
                da Universidade Católica de Angola, devendo estar presentes em todos os seus programas,
                actividades e na sua actuação.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

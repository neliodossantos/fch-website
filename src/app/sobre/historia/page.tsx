import { Metadata } from 'next'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'

export const metadata: Metadata = {
  title: 'História',
  description: 'Conheça a história da Faculdade de Ciências Sociais e Humanas.',
}

export default function HistoriaPage() {
  return (
    <>
      <PageHeader
        title="Nossa História"
        description="Uma trajetória de mais de três décadas dedicada à formação de profissionais de excelência."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle title="Fundação e Primeiros Anos" />
            <p className="text-gray-700 mb-6 leading-relaxed">
              A Faculdade de Ciências Sociais e Humanas foi fundada em 1990, num período de grande transformação 
              social e política. Desde o início, a instituição teve como missão formar profissionais capazes de 
              compreender e intervir positivamente na sociedade.
            </p>
            <p className="text-gray-700 mb-12 leading-relaxed">
              Os primeiros cursos oferecidos foram as licenciaturas em Psicologia e Serviço Social, respondendo 
              a uma demanda crescente por profissionais qualificados nessas áreas. Com um corpo docente dedicado 
              e infraestrutura adequada, a FCH rapidamente se estabeleceu como uma referência na formação de 
              recursos humanos na região.
            </p>
            
            <SectionTitle title="Expansão e Consolidação" />
            <p className="text-gray-700 mb-6 leading-relaxed">
              Na década de 2000, a Faculdade expandiu a sua oferta formativa com a criação dos cursos de 
              Sociologia e Comunicação Social. Esta expansão refletiu o compromisso da instituição em 
              responder às necessidades do mercado de trabalho e da sociedade.
            </p>
            <p className="text-gray-700 mb-12 leading-relaxed">
              Paralelamente, foram criados os primeiros programas de pós-graduação, com destaque para os 
              mestrados em Psicologia Clínica e Gestão Social. A investigação científica também ganhou 
              impulso com a criação do Centro de Investigação e Estudos Interdisciplinares (CIEI).
            </p>
            
            <SectionTitle title="A FCH Hoje" />
            <p className="text-gray-700 mb-6 leading-relaxed">
              Atualmente, a FCH conta com quatro licenciaturas e dois mestrados, um corpo docente altamente 
              qualificado e modernas instalações. O Laboratório de Psicologia presta serviços à comunidade, 
              enquanto os programas de extensão ampliam o alcance da formação oferecida.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Com parcerias nacionais e internacionais, a Faculdade continua a evoluir, mantendo o seu 
              compromisso com a excelência académica, a investigação relevante e a responsabilidade social. 
              Milhares de profissionais formados pela FCH atuam em diversas áreas, contribuindo para o 
              desenvolvimento da sociedade.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

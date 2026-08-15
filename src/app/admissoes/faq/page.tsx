import { Metadata } from 'next'
import { ChevronDown } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Perguntas Frequentes - Admissões',
  description: 'Perguntas frequentes sobre admissões na FCH.',
}

const faqs = [
  {
    pergunta: 'Quando abre o período de candidaturas?',
    resposta: 'O período de candidaturas para graduação geralmente abre em janeiro e vai até março. Para pós-graduação, de fevereiro a abril. Consulte o calendário académico para datas exatas.',
  },
  {
    pergunta: 'Posso me candidatar a mais de um curso?',
    resposta: 'Sim, é possível indicar até duas opções de curso por ordem de preferência no formulário de candidatura.',
  },
  {
    pergunta: 'Como funciona o exame de acesso?',
    resposta: 'O exame de admissão ao curso de Psicologia avalia Língua Portuguesa e Conhecimentos Gerais.',
  },
  {
    pergunta: 'Há bolsas de estudo disponíveis?',
    resposta: 'Sim, a FCH oferece bolsas de mérito e bolsas sociais. Os critérios e processo de candidatura são divulgados no início de cada ano letivo.',
  },
  {
    pergunta: 'Posso transferir de outra instituição?',
    resposta: 'Sim, aceitamos transferências de outras instituições de ensino superior. É necessário apresentar documentação específica e há análise de equivalência das disciplinas.',
  },
  {
    pergunta: 'Qual é a nota mínima para aprovação?',
    resposta: 'A nota mínima para aprovação nas disciplinas é 10 valores (numa escala de 0 a 20).',
  },
  {
    pergunta: 'O curso tem estágio obrigatório?',
    resposta: 'O curso de Psicologia inclui estágio curricular presencial e obrigatório no 5º ano, com duração de 3 meses (288 horas), seguido de relatório final.',
  },
  {
    pergunta: 'Posso trabalhar enquanto estudo?',
    resposta: 'Sim, os horários das aulas são organizados para permitir que os estudantes possam conciliar trabalho e estudos, principalmente nos últimos anos do curso.',
  },
  {
    pergunta: 'Como posso parcelar as propinas?',
    resposta: 'As propinas são pagas mensalmente. Em casos especiais, é possível solicitar um plano de pagamento junto à Secretaria.',
  },
  {
    pergunta: 'A FCH tem acordos de intercâmbio?',
    resposta: 'Sim, temos acordos com universidades em Portugal, Brasil e outros países. Os estudantes com bom desempenho podem candidatar-se a programas de mobilidade.',
  },
]

export default function FAQPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admissões"
        title="Perguntas Frequentes"
        description="Respostas para as dúvidas mais comuns sobre admissões."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-start">
                      <ChevronDown className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      {faq.pergunta}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pl-9">
                    <p className="text-gray-600 dark:text-[#E4D9CC] text-justify">{faq.resposta}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 bg-primary/5 rounded-lg p-6 text-center">
              <h3 className="font-semibold text-primary mb-2">Não encontrou a sua dúvida?</h3>
              <p className="text-gray-600 dark:text-[#E4D9CC] mb-4 text-justify">
                Entre em contacto connosco pelo email{' '}
                <a href="mailto:admissoes@FCH.edu" className="text-primary hover:text-primary-dark dark:hover:text-primary">
                  admissoes@FCH.edu
                </a>{' '}
                ou visite a Secretaria.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

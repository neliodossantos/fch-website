import { Metadata } from 'next'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Serviços da Secretaria',
  description: 'Conheça os serviços oferecidos pela Secretaria Académica da FCH.',
}

const servicos = [
  {
    categoria: 'Documentos Académicos',
    itens: [
      { nome: 'Declaração de Matrícula', prazo: '3 dias úteis', taxa: '500 Kz' },
      { nome: 'Histórico Escolar', prazo: '5 dias úteis', taxa: '1.000 Kz' },
      { nome: 'Certificado de Conclusão', prazo: '10 dias úteis', taxa: '2.500 Kz' },
      { nome: 'Diploma', prazo: '30 dias úteis', taxa: '5.000 Kz' },
    ],
  },
  {
    categoria: 'Declarações',
    itens: [
      { nome: 'Declaração de Frequência', prazo: '2 dias úteis', taxa: '300 Kz' },
      { nome: 'Declaração para Fins de Estágio', prazo: '2 dias úteis', taxa: '300 Kz' },
      { nome: 'Declaração de Aproveitamento', prazo: '3 dias úteis', taxa: '500 Kz' },
    ],
  },
  {
    categoria: 'Outros Serviços',
    itens: [
      { nome: 'Transferência de Curso', prazo: 'Conforme calendário', taxa: '2.000 Kz' },
      { nome: 'Reingresso', prazo: 'Conforme calendário', taxa: '1.500 Kz' },
      { nome: 'Equivalência de Disciplinas', prazo: '15 dias úteis', taxa: '1.000 Kz' },
      { nome: 'Segunda Via de Cartão de Estudante', prazo: '5 dias úteis', taxa: '1.000 Kz' },
    ],
  },
]

export default function ServicosPage() {
  return (
    <>
      <PageHeader
        title="Serviços da Secretaria"
        description="Documentos, certificados, declarações e outros serviços oferecidos pela Secretaria Académica."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          {servicos.map((categoria, index) => (
            <div key={index} className="mb-12 last:mb-0">
              <SectionTitle title={categoria.categoria} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categoria.itens.map((item, i) => (
                  <Card key={i}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">{item.nome}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">
                          <strong>Prazo:</strong> {item.prazo}
                        </span>
                        <span className="text-secondary font-medium">
                          {item.taxa}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
          
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-primary mb-2">Observações Importantes</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Os prazos são contados em dias úteis a partir da data de solicitação.</li>
              <li>• As taxas podem sofrer alterações. Consulte a Secretaria para valores atualizados.</li>
              <li>• Alguns serviços exigem documentação específica. Verifique os requisitos antes de solicitar.</li>
              <li>• O pagamento pode ser feito na tesouraria da Faculdade ou por transferência bancária.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

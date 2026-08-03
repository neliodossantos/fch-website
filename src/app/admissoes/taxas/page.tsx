import { Metadata } from 'next'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Taxas e Propinas',
  description: 'Informações sobre propinas e taxas académicas da FCH.',
}

const propinasGraduacao = [
  { item: 'Taxa de Candidatura', valor: '5.000 Kz' },
  { item: 'Taxa de Matrícula', valor: '15.000 Kz' },
  { item: 'Propina Mensal', valor: '25.000 Kz' },
  { item: 'Taxa de Inscrição em Exames', valor: '2.500 Kz' },
]

const propinasPostgrad = [
  { item: 'Taxa de Candidatura', valor: '10.000 Kz' },
  { item: 'Taxa de Matrícula', valor: '25.000 Kz' },
  { item: 'Propina Mensal', valor: '45.000 Kz' },
  { item: 'Taxa de Dissertação', valor: '50.000 Kz' },
]

const outrasTexas = [
  { item: 'Cartão de Estudante (2ª via)', valor: '1.000 Kz' },
  { item: 'Declaração de Matrícula', valor: '500 Kz' },
  { item: 'Histórico Escolar', valor: '1.000 Kz' },
  { item: 'Certificado de Conclusão', valor: '2.500 Kz' },
]

export default function TaxasPage() {
  return (
    <>
      <PageHeader
        title="Taxas e Propinas"
        description="Informações sobre custos académicos da FCH."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader className="bg-primary/5">
                <CardTitle className="text-xl text-primary">Graduação</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {propinasGraduacao.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                      <span className="text-gray-700">{item.item}</span>
                      <span className="font-semibold text-primary">{item.valor}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="bg-secondary/5">
                <CardTitle className="text-xl text-gray-900 dark:text-white">Pós-Graduação</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {propinasPostgrad.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                      <span className="text-gray-700">{item.item}</span>
                      <span className="font-semibold text-secondary">{item.valor}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <SectionTitle title="Outras Taxas" />
          <Card className="mb-12">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {outrasTexas.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b md:border-b-0">
                    <span className="text-gray-700">{item.item}</span>
                    <span className="font-medium text-gray-900">{item.valor}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold text-primary mb-4">Formas de Pagamento</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Presencial</h4>
                <p className="text-sm text-gray-600">
                  Na tesouraria da Faculdade, das 08:00 às 15:00, de segunda a sexta-feira.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Transferência Bancária</h4>
                <p className="text-sm text-gray-600">
                  Os dados bancários da Faculdade são fornecidos pela Secretaria no acto da
                  candidatura ou matrícula.
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              * Os valores podem sofrer alterações. Consulte a Secretaria para valores atualizados.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

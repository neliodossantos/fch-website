import { Metadata } from 'next'
import { CheckCircle } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Requisitos de Admissão',
  description: 'Requisitos para candidatura aos cursos da FCH.',
}

const requisitosGraduacao = [
  'Certificado de conclusão do Ensino Médio (12ª classe) ou equivalente',
  'Idade mínima de 17 anos completos até à data de início do ano letivo',
  'Aprovação no Exame de Acesso à Universidade',
  'Não ter sido expulso de outra instituição de ensino superior',
]

const requisitosPosgr = [
  'Licenciatura concluída em área afim ao mestrado pretendido',
  'Média mínima de 14 valores na licenciatura',
  'Curriculum vitae documentado',
  'Carta de motivação',
  'Projeto de investigação preliminar',
  'Domínio de língua estrangeira (preferencialmente inglês)',
]

const criteriosSelecao = [
  { criterio: 'Nota do Exame de Acesso', peso: '40%' },
  { criterio: 'Média do Ensino Médio', peso: '30%' },
  { criterio: 'Entrevista (quando aplicável)', peso: '20%' },
  { criterio: 'Outros critérios', peso: '10%' },
]

export default function RequisitosPage() {
  return (
    <>
      <PageHeader
        title="Requisitos de Admissão"
        description="Conheça os requisitos para candidatura aos cursos da FCH."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Graduação (Licenciatura)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requisitosGraduacao.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white">Pós-Graduação (Mestrado)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requisitosPosgr.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gray-700 dark:text-gray-200 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <SectionTitle title="Critérios de Seleção (Graduação)" />
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Critério</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-700">Peso</th>
                    </tr>
                  </thead>
                  <tbody>
                    {criteriosSelecao.map((item, index) => (
                      <tr key={index} className="border-b last:border-b-0">
                        <td className="py-3 px-4 text-gray-600">{item.criterio}</td>
                        <td className="py-3 px-4 text-right font-medium text-primary">{item.peso}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold text-primary mb-2">Observações Importantes</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• O número de vagas é limitado e a seleção é competitiva.</li>
              <li>• Candidatos com necessidades especiais devem indicar no formulário de candidatura.</li>
              <li>• A FCH reserva-se o direito de solicitar documentação adicional.</li>
              <li>• Informações falsas resultam em cancelamento automático da candidatura.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

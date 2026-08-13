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
  'Ter concluído o ensino médio ou equivalente',
  'Ter os documentos originais que atestam a conclusão do ensino médio',
  'Bilhete de Identidade',
  'Aprovar nos exames de admissão',
]

const requisitosPosgr = [
  'Licenciatura concluída em área afim ao programa pretendido',
  'Certificado de Habilitações (com homologação pelo INAAREES, quando aplicável)',
  'Curriculum vitae actualizado',
  'Cópia do Bilhete de Identidade',
]

export default function RequisitosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admissões"
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
                      <span className="text-gray-700 dark:text-[#E4D9CC]">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white">Pós-Graduação</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requisitosPosgr.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gray-700 dark:text-[#E4D9CC] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-[#E4D9CC]">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <SectionTitle title="Provas de Ingresso (Graduação)" />
          <Card className="mb-8">
            <CardContent className="pt-6">
              <p className="text-gray-700 dark:text-[#E4D9CC]">
                O exame de admissão à graduação (curso de Psicologia) inclui provas de{' '}
                <strong>Língua Portuguesa</strong> e <strong>Conhecimentos Gerais</strong>.
              </p>
            </CardContent>
          </Card>

          <div className="bg-gray-50 rounded-lg p-6 dark:bg-[#1f1a16]">
            <h3 className="font-semibold text-primary mb-2">Observações Importantes</h3>
            <ul className="text-sm text-gray-600 space-y-2 dark:text-[#d8cfc4]">
              <li>• O número de vagas é limitado e a selecção é competitiva.</li>
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

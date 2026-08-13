import { Metadata } from 'next'
import { FileText, AlertCircle } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Card, CardContent } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Documentos para  Candidatura',
  description: 'Documentos necessários para candidatura aos cursos da FCH.',
}

const docsGraduacao = [
  'Formulário de candidatura preenchido',
  'Cópia do Bilhete de Identidade',
  'Certificado de habilitações do Ensino Médio (original e cópia)',
  'Certidão de Nascimento',
  'Atestado Médico de saúde',
  '4 fotografias tipo passe',
  'Comprovativo de pagamento da taxa de candidatura',
]

const docsPosgraduacao = [
  'Formulário de candidatura preenchido',
  'Cópia do Bilhete de Identidade',
  'Certificado de Licenciatura (original e cópia)',
  'Histórico escolar da licenciatura',
  'Curriculum Vitae documentado',
  'Carta de motivação',
  'Projeto de investigação preliminar (2-3 páginas)',
  '4 fotografias tipo passe',
  'Comprovativo de pagamento da taxa de candidatura',
]

export default function DocumentosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admissões"
        title="Documentos para Candidatura"
        description="Lista de documentos necessários para sua candidatura."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <SectionTitle title="Graduação" />
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {docsGraduacao.map((doc, index) => (
                      <li key={index} className="flex items-start">
                        <FileText className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-[#E4D9CC]">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <SectionTitle title="Pós-Graduação" />
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {docsPosgraduacao.map((doc, index) => (
                      <li key={index} className="flex items-start">
                        <FileText className="w-5 h-5 text-gray-700 dark:text-[#E4D9CC] mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-[#E4D9CC]">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6">
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Atenção</h3>
                <ul className="text-sm text-yellow-700 dark:text-yellow-400 space-y-1">
                  <li>• Todos os documentos devem estar em bom estado de conservação.</li>
                  <li>• Documentos em língua estrangeira devem ser traduzidos por tradutor juramentado.</li>
                  <li>• Cópias devem ser autenticadas (exceto quando o original for apresentado).</li>
                  <li>• A não apresentação de qualquer documento resulta em indeferimento da candidatura.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import { Metadata } from 'next'
import { CheckCircle, FileText, CreditCard } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Inscrição em Cursos de Extensão',
  description: 'Processo de inscrição nos cursos de extensão da FCH.',
}

const etapas = [
  {
    numero: '1',
    titulo: 'Escolha o Curso',
    descricao: 'Consulte a lista de cursos disponíveis e escolha o de seu interesse.',
  },
  {
    numero: '2',
    titulo: 'Preencha a Ficha',
    descricao: 'Preencha a ficha de inscrição com seus dados pessoais e profissionais.',
  },
  {
    numero: '3',
    titulo: 'Efetue o Pagamento',
    descricao: 'Realize o pagamento do valor do curso na tesouraria ou por transferência.',
  },
  {
    numero: '4',
    titulo: 'Confirme a Inscrição',
    descricao: 'Entregue o comprovativo de pagamento para confirmar sua inscrição.',
  },
]

const documentos = [
  'Cópia do Bilhete de Identidade',
  'Comprovativo de habilitações',
  'Fotografia tipo passe',
  'Comprovativo de pagamento',
]

export default function InscricaoExtensaoPage() {
  return (
    <>
      <PageHeader
        title="Inscrição"
        description="Como se inscrever nos cursos de extensão da FCH."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <SectionTitle title="Como se Inscrever" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {etapas.map((etapa, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-4">
                        {etapa.numero}
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{etapa.titulo}</h3>
                      <p className="text-sm text-gray-600">{etapa.descricao}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <SectionTitle title="Documentos Necessários" />
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {documentos.map((doc, index) => (
                      <li key={index} className="flex items-center">
                        <FileText className="w-5 h-5 text-primary mr-3" />
                        <span className="text-gray-700">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="w-5 h-5 mr-2 text-secondary" />
                    Formas de Pagamento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 text-gray-600">
                    <li>
                      <p className="font-medium">Presencial</p>
                      <p className="text-sm">Na tesouraria da Faculdade</p>
                    </li>
                    <li>
                      <p className="font-medium">Transferência Bancária</p>
                      <p className="text-sm">
                        Banco: Banco XYZ<br />
                        Conta: 1234567890<br />
                        IBAN: AO00 1234 5678 9012 3456
                      </p>
                    </li>
                  </ul>
                  
                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                      <p className="text-sm text-green-800">
                        Descontos especiais para estudantes e ex-alunos da FCH.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button className="w-full">Baixar Ficha de Inscrição</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

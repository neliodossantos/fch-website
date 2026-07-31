import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, FileText, Calendar, AlertCircle } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Candidatura a Estágio',
  description: 'Processo de candidatura a estágio curricular na FCH.',
}

const requisitos = [
  'Estar matriculado no último ano do curso',
  'Ter aprovação em todas as disciplinas até ao 3º ano',
  'Média mínima de 12 valores',
  'Não ter pendências na Secretaria',
]

const documentos = [
  'Ficha de candidatura preenchida',
  'Curriculum Vitae atualizado',
  'Carta de motivação',
  'Declaração de matrícula',
  'Histórico escolar',
  'Cópia do BI/Passaporte',
]

const etapas = [
  { fase: '1ª Fase', titulo: 'Candidatura', descricao: 'Entrega da documentação na Coordenação de Estágios' },
  { fase: '2ª Fase', titulo: 'Análise', descricao: 'Avaliação das candidaturas pela comissão' },
  { fase: '3ª Fase', titulo: 'Colocação', descricao: 'Atribuição de vagas nas instituições parceiras' },
  { fase: '4ª Fase', titulo: 'Início', descricao: 'Início do estágio com acompanhamento' },
]

export default function CandidaturaPage() {
  return (
    <>
      <PageHeader
        title="Candidatura a Estágio"
        description="Informações sobre o processo de candidatura a estágio curricular."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <SectionTitle title="Requisitos" />
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {requisitos.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <SectionTitle title="Documentos Necessários" />
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {documentos.map((doc, index) => (
                      <li key={index} className="flex items-start">
                        <FileText className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <SectionTitle title="Etapas do Processo" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {etapas.map((etapa, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-2">
                      <span className="text-xs text-secondary font-medium">{etapa.fase}</span>
                      <CardTitle className="text-base">{etapa.titulo}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{etapa.descricao}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-secondary" />
                    Calendário
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Período de Candidaturas</p>
                      <p className="text-gray-600">Março a Abril</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Divulgação de Colocações</p>
                      <p className="text-gray-600">Maio</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Início dos Estágios</p>
                      <p className="text-gray-600">Setembro</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0" />
                      <p className="text-sm text-yellow-800">
                        Fique atento aos prazos! Candidaturas fora do período não serão aceites.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-3">
                    <Link href="/sobre/secretaria/formularios" className="block">
                      <Button className="w-full">Baixar Formulários</Button>
                    </Link>
                    <Link href="/contato" className="block">
                      <Button variant="outline" className="w-full">Dúvidas?</Button>
                    </Link>
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

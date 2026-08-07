import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, FileText, Calendar, Info } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Candidatura a Estágio',
  description: 'Processo de candidatura a estágio curricular na FCH.',
}

const requisitos = [
  'Estar matriculado no 5º ano do curso de Psicologia (opção Clínica ou do Trabalho e das Organizações)',
  'Ter concluído as unidades curriculares exigidas pelo plano de estudos',
  'Não ter pendências administrativas na Secretaria',
]

const documentos = [
  'Ficha de candidatura preenchida',
  'Curriculum Vitae actualizado',
  'Declaração de matrícula',
  'Histórico académico',
  'Cópia do Bilhete de Identidade',
]

const etapas = [
  { fase: '1ª Fase', titulo: 'Candidatura', descricao: 'Entrega da documentação na Coordenação de Estágios' },
  { fase: '2ª Fase', titulo: 'Colocação', descricao: 'Atribuição de vagas nas instituições parceiras, com orientador na instituição de acolhimento' },
  { fase: '3ª Fase', titulo: 'Estágio', descricao: 'Realização do estágio com duração de 3 meses (288 horas), supervisionado por docente da UCAN' },
  { fase: '4ª Fase', titulo: 'Relatório', descricao: 'Elaboração e entrega do relatório final de estágio' },
]

export default function CandidaturaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Estágios"
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
                        <span className="text-gray-700 dark:text-gray-200">{req}</span>
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
                        <span className="text-gray-700 dark:text-gray-200">{doc}</span>
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
                      <span className="text-xs text-primary font-medium">{etapa.fase}</span>
                      <CardTitle className="text-base">{etapa.titulo}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{etapa.descricao}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-primary" />
                    Estágio Curricular
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Ano do estágio</p>
                      <p className="text-gray-600 dark:text-gray-400">5º ano do curso de Psicologia</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Duração</p>
                      <p className="text-gray-600 dark:text-gray-400">3 meses (288 horas)</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Regime</p>
                      <p className="text-gray-600 dark:text-gray-400">Presencial e obrigatório</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Acompanhamento</p>
                      <p className="text-gray-600 dark:text-gray-400">Supervisão de docente da UCAN e orientação de profissional da instituição parceira</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-primary/5 dark:bg-primary/10 rounded-lg">
                    <div className="flex items-start">
                      <Info className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                      <p className="text-sm text-gray-700 dark:text-gray-200">
                        A Faculdade tem também apostado na implementação de estágio profissional para
                        o curso de Línguas e Administração.
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

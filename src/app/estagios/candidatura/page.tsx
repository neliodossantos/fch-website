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
                        <span className="text-gray-700 dark:text-[#E4D9CC]">{req}</span>
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
                        <span className="text-gray-700 dark:text-[#E4D9CC]">{doc}</span>
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
                      <p className="text-sm text-gray-600 dark:text-[#d8cfc4]">{etapa.descricao}</p>
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
                      <p className="text-sm font-medium text-gray-700 dark:text-[#d8cfc4]">Ano do estágio</p>
                      <p className="text-gray-600 dark:text-[#b8ab9c]">5º ano do curso de Psicologia</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 dark:text-[#d8cfc4]">Duração</p>
                      <p className="text-gray-600 dark:text-[#b8ab9c]">3 meses (288 horas)</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 dark:text-[#d8cfc4]">Regime</p>
                      <p className="text-gray-600 dark:text-[#b8ab9c]">Presencial e obrigatório</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 dark:text-[#d8cfc4]">Acompanhamento</p>
                      <p className="text-gray-600 dark:text-[#b8ab9c]">Supervisão de docente da UCAN e orientação de profissional da instituição parceira</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-primary/5 dark:bg-primary/10 rounded-lg">
                    <div className="flex items-start">
                      <Info className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                      <p className="text-sm text-gray-700 dark:text-[#E4D9CC]">
                        A Faculdade tem também apostado na implementação de estágio profissional para
                        o curso de Línguas e Administração.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <p className="text-sm font-medium text-gray-700 dark:text-[#d8cfc4] mb-3">Horário de Atendimento</p>
                    <div className="space-y-1 text-sm text-gray-600 dark:text-[#b8ab9c]">
                      <div className="flex justify-between"><span>3ª Feira</span><span>08h–15h</span></div>
                      <div className="flex justify-between"><span>5ª Feira</span><span>8h–16h</span></div>
                      <div className="flex justify-between"><span>6ª Feira</span><span>8h–11h</span></div>
                      <div className="flex justify-between"><span>2ª e 4ª Feira</span><span>Visita de campo</span></div>
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

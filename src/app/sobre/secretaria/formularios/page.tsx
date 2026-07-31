import { Metadata } from 'next'
import { Download, FileText } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Formulários',
  description: 'Formulários para requerimentos e solicitações à Secretaria Académica da FCH.',
}

const formularios = [
  {
    categoria: 'Matrículas e Inscrições',
    itens: [
      { nome: 'Ficha de Matrícula', descricao: 'Para novos estudantes e renovação de matrícula.' },
      { nome: 'Requerimento de Inscrição em Disciplinas', descricao: 'Para inscrição em disciplinas específicas.' },
      { nome: 'Requerimento de Inscrição em Exames', descricao: 'Para inscrição em épocas de exame.' },
    ],
  },
  {
    categoria: 'Documentos e Declarações',
    itens: [
      { nome: 'Requerimento de Documentos', descricao: 'Para solicitar declarações, certificados e outros documentos.' },
      { nome: 'Requerimento de Segunda Via', descricao: 'Para solicitar segunda via de documentos ou cartão.' },
    ],
  },
  {
    categoria: 'Transferências e Equivalências',
    itens: [
      { nome: 'Requerimento de Transferência', descricao: 'Para pedidos de transferência de outra instituição.' },
      { nome: 'Requerimento de Equivalência', descricao: 'Para solicitar equivalência de disciplinas.' },
      { nome: 'Requerimento de Mudança de Curso', descricao: 'Para solicitar mudança de curso interno.' },
    ],
  },
  {
    categoria: 'Estágios e TCC',
    itens: [
      { nome: 'Ficha de Inscrição em Estágio', descricao: 'Para formalizar o início do estágio curricular.' },
      { nome: 'Relatório de Estágio', descricao: 'Modelo para elaboração do relatório de estágio.' },
      { nome: 'Requerimento de Defesa de TCC', descricao: 'Para marcar a defesa do Trabalho de Conclusão de Curso.' },
    ],
  },
  {
    categoria: 'Outros',
    itens: [
      { nome: 'Requerimento Geral', descricao: 'Para solicitações diversas não especificadas.' },
      { nome: 'Justificação de Faltas', descricao: 'Para justificar faltas em aulas ou avaliações.' },
      { nome: 'Pedido de Revisão de Notas', descricao: 'Para solicitar revisão de notas de avaliações.' },
    ],
  },
]

export default function FormulariosPage() {
  return (
    <>
      <PageHeader
        title="Formulários"
        description="Baixe os formulários necessários para suas solicitações à Secretaria Académica."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          {formularios.map((categoria, index) => (
            <div key={index} className="mb-12 last:mb-0">
              <SectionTitle title={categoria.categoria} />
              <div className="space-y-4">
                {categoria.itens.map((item, i) => (
                  <Card key={i}>
                    <CardContent className="py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <FileText className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">{item.nome}</h3>
                            <p className="text-sm text-gray-600">{item.descricao}</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="flex-shrink-0">
                          <Download className="w-4 h-4 mr-2" />
                          PDF
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
          
          <div className="mt-8 p-6 bg-primary/5 rounded-lg">
            <h3 className="font-semibold text-primary mb-2">Como Proceder</h3>
            <ol className="text-sm text-gray-600 space-y-2 list-decimal list-inside">
              <li>Baixe o formulário correspondente à sua solicitação.</li>
              <li>Preencha todos os campos obrigatórios de forma legível.</li>
              <li>Anexe os documentos necessários, quando aplicável.</li>
              <li>Entregue o formulário na Secretaria Académica.</li>
              <li>Guarde o protocolo de atendimento para acompanhamento.</li>
            </ol>
          </div>
        </div>
      </section>
    </>
  )
}

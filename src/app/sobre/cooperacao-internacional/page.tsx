import { Metadata } from 'next'
import { Globe2 } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Card, CardContent } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Cooperação Internacional e Mobilidade Académica',
  description: 'Parcerias, mobilidade de estudantes e docentes da Faculdade de Ciências Humanas.',
}

const estudantesRecebidos = {
  instituicao: 'Universidade Federal Fluminense (Brasil)',
  curso: 'Psicologia',
  desde: 2021,
  total: 5,
}

const estudantesEnviados = [
  { nome: 'Sofia Branco Rangel', curso: 'Psicologia, opção Clínica' },
  { nome: 'Alexandre Justino Dimba', curso: 'Línguas e Administração (bolseiro da UCAN)' },
]

export default function CooperacaoInternacionalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre a FCH"
        title="Cooperação Internacional e Mobilidade Académica"
        description="Parcerias que promovem o intercâmbio de estudantes, docentes e investigadores."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-12 leading-relaxed dark:text-gray-200">
              A Faculdade participa activamente em programas de cooperação e mobilidade académica que
              promovem o intercâmbio de estudantes, docentes e investigadores. Destaca-se o protocolo
              de cooperação com a Universidade Federal Fluminense (Brasil), que tem possibilitado
              experiências de mobilidade internacional. A internacionalização constitui uma das
              prioridades estratégicas da Faculdade, contribuindo para o fortalecimento das redes
              científicas e académicas e para a partilha internacional do conhecimento.
            </p>

            <SectionTitle title="Estudantes Recebidos" />
            <Card className="mb-12">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Globe2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-200">
                    Desde {estudantesRecebidos.desde}, a Faculdade já recebeu {estudantesRecebidos.total} estudantes
                    da {estudantesRecebidos.instituicao}, no curso de {estudantesRecebidos.curso}.
                  </p>
                </div>
              </CardContent>
            </Card>

            <SectionTitle title="Mobilidade de Estudantes da FCH" />
            <p className="text-gray-700 mb-4 leading-relaxed dark:text-gray-200">
              Em acto recíproco, no ano lectivo 2024/2025, dois estudantes finalistas da FCH/UCAN foram
              enviados para a Universidade Federal Fluminense:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {estudantesEnviados.map((estudante) => (
                <Card key={estudante.nome}>
                  <CardContent className="pt-6">
                    <p className="font-semibold text-gray-900 dark:text-gray-100">{estudante.nome}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{estudante.curso}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <SectionTitle title="Mobilidade Docente" />
            <p className="text-gray-700 leading-relaxed dark:text-gray-200">
              No ano lectivo 2025/2026, está prevista a ida da Dra. Edvalda Mendes para a Universidade
              do Minho.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

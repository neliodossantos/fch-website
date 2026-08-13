import { Metadata } from 'next'
import { PageHeader } from '@/components/shared/PageHeader'
import { DocentesDirectory } from '@/components/docentes/DocentesDirectory'
import { docentes } from '@/data/docentes'

export const metadata: Metadata = {
  title: 'Corpo Docente',
  description: 'Conheça o corpo docente, professores e investigadores da Faculdade de Ciências Humanas.',
}

export default function CorpoDocentePage() {
  return (
    <>
      <PageHeader
        eyebrow="Corpo Académico FCH"
        title="Corpo Docente"
        description="Conheça os professores, investigadores e mestres da Faculdade de Ciências Humanas."
      />

      <section className="bg-white py-12 dark:bg-[#151312] sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <DocentesDirectory docentes={docentes} />
        </div>
      </section>
    </>
  )
}

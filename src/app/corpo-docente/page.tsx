import { Metadata } from 'next'
import { PageHeader } from '@/components/shared/PageHeader'
import { TeamMember } from '@/components/shared/TeamMember'
import { docentes } from '@/data/docentes'

export const metadata: Metadata = {
  title: 'Corpo Docente',
  description: 'Conheça o corpo docente da Faculdade de Ciências Humanas.',
}

export default function CorpoDocentePage() {
  return (
    <>
      <PageHeader
        eyebrow="Pessoas FCH"
        title="Corpo Docente"
        description="Conheça os professores e investigadores da FCH."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {docentes.map((docente) => (
              <TeamMember
                key={docente.slug}
                nome={docente.nome}
                titulacao={docente.titulo}
                email={docente.email}
                foto_url={docente.foto_url}
                departamento={docente.departamento}
                slug={docente.slug}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

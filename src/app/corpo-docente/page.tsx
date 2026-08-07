import { Metadata } from 'next'
import { PageHeader } from '@/components/shared/PageHeader'
import { TeamMember } from '@/components/shared/TeamMember'
import { getProfessores } from '@/lib/queries/professores'

export const revalidate = 60 // Revalida cache a cada 60 segundos

export const metadata: Metadata = {
  title: 'Corpo Docente',
  description: 'Conheça o corpo docente da Faculdade de Ciências Humanas.',
}

export default async function CorpoDocentePage() {
  const professores = await getProfessores()

  return (
    <>
      <PageHeader
        eyebrow="Pessoas FCH"
        title="Corpo Docente"
        description="Conheça os professores e investigadores da FCH."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          {professores.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {professores.map((docente) => (
                <TeamMember
                  key={docente.id}
                  nome={docente.nome}
                  titulacao={docente.titulacao}
                  areas={docente.areas}
                  email={docente.email}
                  foto_url={docente.foto_url}
                  departamento={docente.departamento}
                  slug={docente.slug}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400">Sem dados disponíveis</p>
          )}
        </div>
      </section>
    </>
  )
}

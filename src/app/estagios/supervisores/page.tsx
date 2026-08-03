import { Metadata } from 'next'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { TeamMember } from '@/components/shared/TeamMember'

export const metadata: Metadata = {
  title: 'Supervisores de Estágio',
  description: 'Professores supervisores de estágio da FCH.',
}

const supervisores = {
  psicologiaClinica: [
    { nome: 'Dra. Helena Veloso', foto_url: undefined },
    { nome: 'Dr. Artur Luciano', foto_url: '/images/professores/ArturLuciano.png' },
    { nome: 'Dra. Evanilse Diogo', foto_url: '/images/professores/Evanilse.PNG' },
    { nome: 'Dra. Vânia Filipe', foto_url: undefined },
    { nome: 'Dra. Mangani Lopes', foto_url: '/images/professores/Mangani.png' },
  ],
  psicologiaTrabalho: [
    { nome: 'Dr. João Saveia', foto_url: '/images/professores/Jsaveia.jpg' },
    { nome: 'Dra. Ana Rocha', foto_url: '/images/professores/AnaRocha.jpeg' },
    { nome: 'Dr. Armando Dala', foto_url: '/images/professores/mdala.jpg' },
  ],
}

export default function SupervisoresPage() {
  return (
    <>
      <PageHeader
        title="Supervisores de Estágio"
        description="Professores responsáveis pelo acompanhamento académico dos estágios."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle title="Psicologia Clínica" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {supervisores.psicologiaClinica.map((sup, index) => (
              <TeamMember key={index} nome={sup.nome} foto_url={sup.foto_url} />
            ))}
          </div>

          <SectionTitle title="Psicologia, Organizacional e do Trabalho" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supervisores.psicologiaTrabalho.map((sup, index) => (
              <TeamMember key={index} nome={sup.nome} foto_url={sup.foto_url} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

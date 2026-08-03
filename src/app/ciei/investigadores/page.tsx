import { Metadata } from 'next'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { TeamMember } from '@/components/shared/TeamMember'

export const metadata: Metadata = {
  title: 'Investigadores',
  description: 'Coordenação e investigadores do CIEI - FCH/UCAN.',
}

const coordenacao = [
  {
    nome: 'Doutora Helena Veloso',
    cargo: 'Directora do CIEI',
    areas: ['Psicologia Clínica', 'Saúde Mental'],
    email: 'helena.veloso@ucan.edu',
  },
  {
    nome: 'Doutora Marli Santana',
    cargo: 'Parceira Institucional (Instituto Superior de Ciências da Saúde)',
    areas: ['Nutrição', 'Saúde Pública'],
  },
]

const investigadores = [
  { nome: 'Mangani Lopes', areas: ['Psicologia Clínica', 'Saúde Mental e Família'] },
  { nome: 'Lucrécia Massanga', areas: ['Nutrição', 'Saúde e Desporto'] },
  { nome: 'Ovídio A. Oliveira', areas: ['Saúde Pública', 'Nutrição Infantojuvenil'] },
  { nome: 'Maria Eduarda J. Filipe', areas: ['Nutrição', 'Saúde Materno-Infantil'] },
  { nome: 'Ivo Sobral', areas: ['Saúde Pública', 'Prevenção de Doenças'] },
  { nome: 'António S. C. Maquengo', areas: ['Saúde Pública', 'Cuidados Primários de Saúde'] },
  { nome: 'Ana M. Bastos', areas: ['Saúde Pública'] },
]

export default function InvestigadoresPage() {
  return (
    <>
      <PageHeader
        title="Investigadores"
        description="Coordenação e equipa de investigadores do CIEI."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle title="Coordenação" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {coordenacao.map((membro, index) => (
              <TeamMember
                key={index}
                nome={membro.nome}
                cargo={membro.cargo}
                areas={membro.areas}
                email={membro.email}
              />
            ))}
          </div>

          <SectionTitle
            title="Investigadores Associados"
            subtitle="Autores de publicações desenvolvidas no âmbito do CIEI (2020-2026)"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {investigadores.map((inv, index) => (
              <TeamMember
                key={index}
                nome={inv.nome}
                areas={inv.areas}
              />
            ))}
          </div>

          <p className="text-sm text-gray-500 mt-8 max-w-3xl">
            O CIEI conta ainda com a participação de docentes e estudantes do Programa de Iniciação
            Científica (PIC), que desenvolvem e apresentam as suas pesquisas em eventos, feiras
            científicas e jornadas da Faculdade.
          </p>
        </div>
      </section>
    </>
  )
}

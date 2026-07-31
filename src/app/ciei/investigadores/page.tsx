import { Metadata } from 'next'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { TeamMember } from '@/components/shared/TeamMember'

export const metadata: Metadata = {
  title: 'Investigadores',
  description: 'Equipa de investigadores do CIEI - FCH.',
}

const coordenacao = [
  {
    nome: 'Prof.ª Dr.ª Teresa Oliveira',
    cargo: 'Coordenadora do CIEI',
    areas: ['Psicologia Clínica', 'Neuropsicologia'],
    email: 'ciei@FCH.edu',
  },
]

const investigadores = [
  { nome: 'Prof. Dr. António Silva', areas: ['Psicologia Clínica', 'Avaliação Psicológica'], email: 'antonio.silva@FCH.edu' },
  { nome: 'Prof.ª Dr.ª Maria Santos', areas: ['Política Social', 'Direitos Humanos'], email: 'maria.santos@FCH.edu' },
  { nome: 'Prof. Dr. João Costa', areas: ['Sociologia Urbana', 'Teoria Social'], email: 'joao.costa@FCH.edu' },
  { nome: 'Prof.ª Dr.ª Ana Rodrigues', areas: ['Comunicação Digital', 'Jornalismo'], email: 'ana.rodrigues@FCH.edu' },
  { nome: 'Prof. Dr. Carlos Ferreira', areas: ['Gestão Social', 'Políticas Públicas'], email: 'carlos.ferreira@FCH.edu' },
  { nome: 'Prof. Dr. Pedro Martins', areas: ['Psicologia Social', 'Psicologia Comunitária'], email: 'pedro.martins@FCH.edu' },
  { nome: 'Prof.ª Dr.ª Luísa Fernandes', areas: ['Sociologia da Educação', 'Género'], email: 'luisa.fernandes@FCH.edu' },
  { nome: 'Prof. Dr. Ricardo Almeida', areas: ['Publicidade', 'Marketing Digital'], email: 'ricardo.almeida@FCH.edu' },
  { nome: 'Prof.ª Dr.ª Carla Mendes', areas: ['Gerontologia Social', 'Família e Infância'], email: 'carla.mendes@FCH.edu' },
  { nome: 'Prof. Dr. Miguel Sousa', areas: ['Psicologia Organizacional', 'Liderança'], email: 'miguel.sousa@FCH.edu' },
  { nome: 'Prof.ª Dr.ª Sofia Pereira', areas: ['Sociologia do Trabalho', 'Movimentos Sociais'], email: 'sofia.pereira@FCH.edu' },
]

export default function InvestigadoresPage() {
  return (
    <>
      <PageHeader
        title="Investigadores"
        description="Equipa de investigadores do CIEI."
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
          
          <SectionTitle title="Investigadores Integrados" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {investigadores.map((inv, index) => (
              <TeamMember
                key={index}
                nome={inv.nome}
                areas={inv.areas}
                email={inv.email}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

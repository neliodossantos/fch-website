import { Metadata } from 'next'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { TeamMember } from '@/components/shared/TeamMember'

export const metadata: Metadata = {
  title: 'Membros da Associação de Estudantes',
  description: 'Conheça a equipa da Associação de Estudantes da FCH.',
}

const direcao = [
  { nome: 'João Pedro Silva', cargo: 'Presidente', curso: 'Psicologia', email: 'presidente@ae-FCH.edu' },
  { nome: 'Maria Ana Costa', cargo: 'Vice-Presidente', curso: 'Serviço Social', email: 'vicepresidente@ae-FCH.edu' },
  { nome: 'Carlos Manuel Ferreira', cargo: 'Tesoureiro', curso: 'Sociologia', email: 'tesoureiro@ae-FCH.edu' },
  { nome: 'Ana Sofia Martins', cargo: 'Secretária', curso: 'Comunicação Social', email: 'secretaria@ae-FCH.edu' },
]

const departamentos = [
  { nome: 'Pedro António Santos', cargo: 'Coordenador Académico', curso: 'Psicologia' },
  { nome: 'Luísa Maria Oliveira', cargo: 'Coordenadora Cultural', curso: 'Comunicação Social' },
  { nome: 'Ricardo José Almeida', cargo: 'Coordenador Desportivo', curso: 'Serviço Social' },
  { nome: 'Carla Beatriz Mendes', cargo: 'Coordenadora de Comunicação', curso: 'Comunicação Social' },
]

export default function MembrosPage() {
  return (
    <>
      <PageHeader
        title="Membros da AE-FCH"
        description="Conheça a equipa que representa os estudantes da Faculdade."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle title="Direção" subtitle="Mandato 2023/2024" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {direcao.map((membro, index) => (
              <TeamMember
                key={index}
                nome={membro.nome}
                cargo={membro.cargo}
                email={membro.email}
              />
            ))}
          </div>
          
          <SectionTitle title="Coordenadores de Departamento" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departamentos.map((membro, index) => (
              <TeamMember
                key={index}
                nome={membro.nome}
                cargo={membro.cargo}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

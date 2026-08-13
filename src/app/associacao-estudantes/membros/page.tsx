import { Metadata } from 'next'
import { PageHeader } from '@/components/shared/PageHeader'
import { OrgChart, type OrgNode } from '@/components/shared/OrgChart'

export const metadata: Metadata = {
  title: 'Membros da Associação de Estudantes',
  description: 'Conheça a equipa da Associação de Estudantes da FCH.',
}

const presidente = { nome: 'João Pedro Silva', cargo: 'Presidente', email: 'presidente@ae-FCH.edu' }

const direcao = [
  { nome: 'Maria Ana Costa', cargo: 'Vice-Presidente', email: 'vicepresidente@ae-FCH.edu' },
  { nome: 'Carlos Manuel Ferreira', cargo: 'Tesoureiro', email: 'tesoureiro@ae-FCH.edu' },
  { nome: 'Ana Sofia Martins', cargo: 'Secretária', email: 'secretaria@ae-FCH.edu' },
]

const coordenadores = [
  { nome: 'Pedro António Santos', cargo: 'Coordenador Académico' },
  { nome: 'Luísa Maria Oliveira', cargo: 'Coordenadora Cultural' },
  { nome: 'Ricardo José Almeida', cargo: 'Coordenador Desportivo' },
  { nome: 'Carla Beatriz Mendes', cargo: 'Coordenadora de Comunicação' },
]

const tree: OrgNode = {
  type: 'person',
  id: 'presidente',
  nome: presidente.nome,
  cargo: presidente.cargo,
  email: presidente.email,
  children: [
    ...direcao.map((membro, index) => ({
      type: 'person' as const,
      id: `direcao-${index}`,
      nome: membro.nome,
      cargo: membro.cargo,
    })),
    {
      type: 'group',
      id: 'coordenadores',
      label: 'Coordenadores de Departamento',
      children: coordenadores.map((membro, index) => ({
        type: 'person' as const,
        id: `coordenador-${index}`,
        nome: membro.nome,
        cargo: membro.cargo,
      })),
    },
  ],
}

export default function MembrosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Associação de Estudantes"
        title="Membros da AE-FCH"
        description="Conheça a equipa que representa os estudantes da Faculdade. Mandato 2023/2024."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <OrgChart root={tree} />
        </div>
      </section>
    </>
  )
}

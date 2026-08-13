import { Metadata } from 'next'
import { PageHeader } from '@/components/shared/PageHeader'
import { OrgChart, type OrgNode, type OrgPersonNode } from '@/components/shared/OrgChart'
import { docentes, type Docente } from '@/data/docentes'

export const metadata: Metadata = {
  title: 'Corpo Docente',
  description: 'Conheça o corpo docente da Faculdade de Ciências Humanas.',
}

function toPersonNode(docente: Docente): OrgPersonNode {
  return {
    type: 'person',
    id: docente.slug,
    nome: docente.nome,
    cargo: docente.titulo,
    foto_url: docente.foto_url,
    href: `/corpo-docente/${docente.slug}`,
  }
}

function buildTree(): OrgNode {
  const decano = docentes.find(docente => docente.departamento === 'Decanato')
  const resto = docentes.filter(docente => docente !== decano)

  const porDepartamento = new Map<string, Docente[]>()
  const semDepartamento: Docente[] = []

  for (const docente of resto) {
    if (docente.departamento) {
      const membros = porDepartamento.get(docente.departamento) ?? []
      membros.push(docente)
      porDepartamento.set(docente.departamento, membros)
    } else {
      semDepartamento.push(docente)
    }
  }

  const grupos: OrgNode[] = Array.from(porDepartamento.entries()).map(([departamento, membros]) => ({
    type: 'group',
    id: departamento,
    label: departamento,
    children: membros.map(toPersonNode),
  }))

  if (semDepartamento.length > 0) {
    grupos.push({
      type: 'group',
      id: 'corpo-docente-geral',
      label: 'Corpo Docente Geral',
      dense: true,
      children: semDepartamento.map(toPersonNode),
    })
  }

  return {
    type: 'person',
    id: decano?.slug ?? 'decanato',
    nome: decano?.nome ?? 'Decanato',
    cargo: decano?.titulo,
    foto_url: decano?.foto_url,
    href: decano ? `/corpo-docente/${decano.slug}` : undefined,
    children: grupos,
  }
}

export default function CorpoDocentePage() {
  const tree = buildTree()

  return (
    <>
      <PageHeader
        eyebrow="Pessoas FCH"
        title="Corpo Docente"
        description="Conheça os professores e investigadores da FCH."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <OrgChart root={tree} />
        </div>
      </section>
    </>
  )
}

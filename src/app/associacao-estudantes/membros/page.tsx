import { Metadata } from 'next'
import { Mail, Users } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Card, CardContent } from '@/components/ui/Card'

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

function MemberCard({ nome, cargo, email }: { nome: string; cargo: string; email?: string }) {
  return (
    <Card className="h-full min-h-64 transition-all hover:-translate-y-0.5 hover:shadow-lg">
      <CardContent className="flex h-full flex-col items-center p-6 pt-6 text-center">
        <div className="grid h-20 w-20 place-items-center rounded-full bg-primary/15 ring-2 ring-primary/20"><Users className="h-8 w-8 text-primary-dark" /></div>
        <h2 className="mt-5 text-lg font-bold text-gray-900 dark:text-[#F5F0EA]">{nome}</h2>
        <p className="mt-1 min-h-10 text-sm font-medium leading-snug text-primary-dark">{cargo}</p>
        {email && <a href={`mailto:${email}`} className="mt-auto inline-flex items-center gap-2 pt-5 text-sm text-gray-600 transition hover:text-primary-dark dark:text-[#d8cfc4] dark:hover:text-primary-light"><Mail className="h-4 w-4" />{email}</a>}
      </CardContent>
    </Card>
  )
}

export default function MembrosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Associação de Estudantes"
        title="Membros da AE-FCH"
        description="Conheça a equipa que representa os estudantes da Faculdade. Mandato 2023/2024."
      />

      <section className="bg-white py-12 dark:bg-[#151312] sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <section>
            <div className="mb-6 border-b border-gray-200 pb-4 dark:border-[#332a22]"><p className="eyebrow">Associação de Estudantes</p><h2 className="mt-2 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-[#F5F0EA]">Direção</h2><p className="mt-1 text-sm text-gray-500 dark:text-[#9c8d7d]">Mandato 2023/2024</p></div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"><MemberCard {...presidente} />{direcao.map(membro => <MemberCard key={membro.email} {...membro} />)}</div>
          </section>

          <section className="mt-14">
            <div className="mb-6 border-b border-gray-200 pb-4 dark:border-[#332a22]"><p className="eyebrow">Áreas de actuação</p><h2 className="mt-2 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-[#F5F0EA]">Coordenadores de Departamento</h2></div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{coordenadores.map(membro => <MemberCard key={membro.nome} {...membro} />)}</div>
          </section>
        </div>
      </section>
    </>
  )
}

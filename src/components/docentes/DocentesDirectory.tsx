'use client'

import { useMemo, useState } from 'react'
import { Users } from 'lucide-react'
import { TeamMember } from '@/components/shared/TeamMember'
import { cn } from '@/lib/utils'
import type { Docente } from '@/data/docentes'

interface DocentesDirectoryProps {
  docentes: Docente[]
}

const categories = [
  { id: 'todos', label: 'Todos' },
  { id: 'graduacao', label: 'Graduação' },
  { id: 'pos-graduacao', label: 'Pós-graduação' },
]

function isPosGraduacao(docente: Docente) {
  const content = [docente.departamento, ...docente.disciplinas.map(({ curso }) => curso)].join(' ').toLowerCase()
  return ['pós-graduação', 'especialização', 'capacitação', 'gestão de pessoas', 'consulta psicológica', 'pgpcp'].some(term => content.includes(term))
}

export function DocentesDirectory({ docentes }: DocentesDirectoryProps) {
  const [category, setCategory] = useState('todos')
  const filteredDocentes = useMemo(() => docentes.filter(docente => {
    if (category === 'todos') return true
    return category === 'pos-graduacao' ? isPosGraduacao(docente) : !isPosGraduacao(docente) || docente.disciplinas.length === 0
  }), [category, docentes])

  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-5 rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-[#332a22] dark:bg-[#1a1512] sm:flex-row sm:items-center sm:p-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-500 dark:text-[#9c8d7d]">Filtrar por formação</p>
          <div className="mt-3 flex flex-wrap gap-2" role="tablist" aria-label="Filtrar docentes">
            {categories.map(item => (
              <button key={item.id} type="button" role="tab" aria-selected={category === item.id} onClick={() => setCategory(item.id)} className={cn(
                'rounded-full px-4 py-2 text-sm font-semibold transition',
                category === item.id ? 'bg-gray-950 text-white dark:bg-primary' : 'bg-white text-gray-700 ring-1 ring-gray-200 hover:ring-primary dark:bg-[#1f1a16] dark:text-[#d8cfc4] dark:ring-[#332a22]'
              )}>{item.label}</button>
            ))}
          </div>
        </div>
        <div className="inline-flex items-center gap-2 self-start rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-200 dark:bg-[#1f1a16] dark:text-[#d8cfc4] dark:ring-[#332a22] sm:self-auto">
          <Users className="h-4 w-4 text-primary-dark" />
          {filteredDocentes.length} {filteredDocentes.length === 1 ? 'docente' : 'docentes'}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredDocentes.map(docente => <TeamMember key={docente.slug} nome={docente.nome} titulacao={docente.titulo} email={docente.email} foto_url={docente.foto_url} departamento={docente.departamento} slug={docente.slug} />)}
      </div>
    </div>
  )
}

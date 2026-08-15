'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Calendar, Pencil, Plus, Trash2 } from 'lucide-react'
import { useAdminToken, adminRequest } from '../shared/adminApi'

type EventoListItem = { id: string; titulo: string; slug: string; descricao?: string; data: string; featured: boolean }

export default function EventosListPage() {
  const [token] = useAdminToken()
  const [items, setItems] = useState<EventoListItem[]>([])
  const [error, setError] = useState('')

  const load = async () => {
    if (!token) return
    try { setItems(await adminRequest<EventoListItem[]>(token, '/eventos?all=true')) } catch (err) { setError(err instanceof Error ? err.message : 'Erro ao carregar eventos.') }
  }
  useEffect(() => { load() }, [token])

  const remove = async (item: EventoListItem) => {
    if (!token || !confirm(`Apagar "${item.titulo}"?`)) return
    try { await adminRequest(token, `/eventos/${item.id}`, { method: 'DELETE' }); await load() } catch (err) { setError(err instanceof Error ? err.message : 'Erro ao apagar.') }
  }

  if (!token) return null
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm dark:bg-[#151312]">
      <div className="mb-5 flex items-center justify-between">
        <div><h2 className="text-xl font-bold">Eventos</h2><p className="text-sm text-gray-500">{items.length} evento(s)</p></div>
        <Link href="/admin/eventos/novo" className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary-dark"><Plus size={16} /> Novo evento</Link>
      </div>
      {error && <p className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}
      <div className="space-y-3">
        {items.map(item => (
          <article key={item.id} className="rounded-xl border p-4">
            <div className="flex gap-3">
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center gap-2 text-xs text-gray-400"><Calendar size={14} /> {new Date(item.data).toLocaleDateString('pt-PT')}</div>
                <h3 className="truncate font-semibold">{item.titulo}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-gray-500">{item.descricao || 'Sem descrição.'}</p>
              </div>
              <div className="flex shrink-0 gap-1">
                <Link href={`/admin/eventos/${item.id}/editar`} className="rounded-lg p-2 text-primary-dark hover:bg-amber-50" title="Editar"><Pencil size={17} /></Link>
                <button onClick={() => remove(item)} className="rounded-lg p-2 text-red-600 hover:bg-red-50" title="Apagar"><Trash2 size={17} /></button>
              </div>
            </div>
          </article>
        ))}
        {items.length === 0 && <p className="py-10 text-center text-gray-500">Ainda não há eventos.</p>}
      </div>
    </section>
  )
}

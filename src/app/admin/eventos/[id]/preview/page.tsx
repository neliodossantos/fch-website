/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowLeft, Calendar, MapPin } from 'lucide-react'
import { useAdminToken, adminRequest, resolveMediaUrl } from '../../../shared/adminApi'
import { SectionsRenderer } from '../../../shared/SectionsRenderer'
import type { EventoAdmin } from '../../EventoForm'

export default function PreviewEventoPage() {
  const { id } = useParams<{ id: string }>()
  const [token] = useAdminToken()
  const [item, setItem] = useState<EventoAdmin | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!token) return
    adminRequest<EventoAdmin[]>(token, '/eventos?all=true')
      .then(items => { const found = items.find(candidate => candidate.id === id); if (!found) throw new Error('Evento não encontrado.'); setItem(found) })
      .catch(err => setError(err instanceof Error ? err.message : 'Erro ao carregar evento.'))
  }, [token, id])

  if (!token) return null
  if (error) return <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>
  if (!item) return <p className="text-gray-500">A carregar…</p>

  return (
    <article className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-900">
      <Link href={`/admin/eventos/${item.id}/editar`} className="mb-6 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary-dark"><ArrowLeft size={16} /> Voltar ao editor</Link>
      {!item.published && <p className="mb-3 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">Rascunho — ainda não publicado</p>}
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{item.titulo}</h1>
      <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-500">
        <span className="inline-flex items-center gap-1"><Calendar size={14} /> {new Date(item.data).toLocaleDateString('pt-PT')}{item.data_fim ? ` – ${new Date(item.data_fim).toLocaleDateString('pt-PT')}` : ''}{item.hora ? ` · ${item.hora}` : ''}</span>
        {item.local && <span className="inline-flex items-center gap-1"><MapPin size={14} /> {item.local}</span>}
      </div>
      {item.organizadores && item.organizadores.length > 0 && <p className="mt-2 text-sm text-gray-500">Organização: {item.organizadores.join(', ')}</p>}
      {item.descricao && <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{item.descricao}</p>}
      {item.imagem_url && <img src={resolveMediaUrl(item.imagem_url)} alt={item.titulo} className="mt-6 w-full rounded-xl object-cover" style={{ maxHeight: 420 }} />}
      {item.agenda && item.agenda.length > 0 && (
        <div className="mt-6">
          <h2 className="mb-2 text-lg font-bold">Programa</h2>
          <ul className="space-y-1 text-sm">
            {item.agenda.map((row, index) => <li key={index}><strong>{row.time ? `${row.time} — ` : ''}{row.title}</strong>{row.description ? ` — ${row.description}` : ''}</li>)}
          </ul>
        </div>
      )}
      {item.link_externo && <a href={item.link_externo} target="_blank" rel="noreferrer" className="mt-4 inline-block font-semibold text-primary-dark hover:underline">Mais informações / inscrições →</a>}
      {item.informacoes_adicionais && <p className="mt-4 whitespace-pre-line text-sm text-gray-600 dark:text-gray-300">{item.informacoes_adicionais}</p>}
      <div className="mt-8"><SectionsRenderer sections={item.sections} /></div>
    </article>
  )
}

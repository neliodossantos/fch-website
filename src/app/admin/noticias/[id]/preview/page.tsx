/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { useAdminToken, adminRequest, resolveMediaUrl } from '../../../shared/adminApi'
import { SectionsRenderer } from '../../../shared/SectionsRenderer'
import type { ContentAdmin } from '../../NoticiaForm'

export default function PreviewNoticiaPage() {
  const { id } = useParams<{ id: string }>()
  const [token] = useAdminToken()
  const [item, setItem] = useState<ContentAdmin | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!token) return
    adminRequest<ContentAdmin[]>(token, '/content?all=true')
      .then(items => { const found = items.find(candidate => candidate.id === id); if (!found) throw new Error('Notícia não encontrada.'); setItem(found) })
      .catch(err => setError(err instanceof Error ? err.message : 'Erro ao carregar notícia.'))
  }, [token, id])

  if (!token) return null
  if (error) return <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>
  if (!item) return <p className="text-gray-500">A carregar…</p>

  return (
    <article className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-900">
      <Link href={`/admin/noticias/${item.id}/editar`} className="mb-6 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary-dark"><ArrowLeft size={16} /> Voltar ao editor</Link>
      {!item.published && <p className="mb-3 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">Rascunho — ainda não publicado</p>}
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{item.title}</h1>
      {item.author && <p className="mt-2 text-sm text-gray-500">Por {item.author}</p>}
      {item.excerpt && <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{item.excerpt}</p>}
      {item.media[0] && <img src={resolveMediaUrl(item.media[0].url)} alt={item.title} className="mt-6 w-full rounded-xl object-cover" style={{ maxHeight: 420 }} />}
      {item.body && <p className="mt-6 whitespace-pre-line text-gray-700 dark:text-gray-300">{item.body}</p>}
      <div className="mt-8"><SectionsRenderer sections={item.sections} /></div>
    </article>
  )
}

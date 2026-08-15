/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowLeft, CalendarDays } from 'lucide-react'
import { useAdminToken, adminRequest, resolveMediaUrl } from '../../../shared/adminApi'
import { SectionsRenderer } from '@/components/shared/SectionsRenderer'
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
  if (error) return <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-[#3b1d1d] dark:text-[#fca5a5]">{error}</p>
  if (!item) return <p className="text-gray-500 dark:text-[#9c8d7d]">A carregar…</p>

  return (
    <section className="rounded-2xl bg-white py-10 shadow-sm dark:bg-[#151312]">
      <div className="container mx-auto max-w-3xl px-4">
        <Link href={`/admin/noticias/${item.id}/editar`} className="mb-8 inline-flex items-center text-primary hover:text-primary-dark dark:text-primary-light dark:hover:text-primary">
          <ArrowLeft className="mr-2 h-4 w-4" /> Voltar ao editor
        </Link>

        {!item.published && <p className="mb-4 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700 dark:bg-[#443116] dark:text-[#fcd34d]">Rascunho — ainda não publicado</p>}

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">{item.title}</h1>

        {item.media[0] && (
          <div className="mb-8 mt-6 overflow-hidden rounded-lg">
            <img src={resolveMediaUrl(item.media[0].url)} alt={item.title} className="h-auto max-h-[420px] w-full object-cover" />
          </div>
        )}

        <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-[#b8ab9c]">
          <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" /> {item.author ? `Por ${item.author}` : 'Rascunho'}</span>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {item.excerpt && <p className="text-gray-600 dark:text-[#d8cfc4]">{item.excerpt}</p>}
          {item.body && <p className="whitespace-pre-line text-gray-700 dark:text-[#E4D9CC]">{item.body}</p>}
        </div>

        <div className="mt-8"><SectionsRenderer sections={item.sections} /></div>
      </div>
    </section>
  )
}

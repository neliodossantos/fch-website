'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Pencil, Plus, Trash2 } from 'lucide-react'
import { useAdminToken, adminRequest } from '../shared/adminApi'

type ContentType = 'news' | 'post' | 'section'
type ContentListItem = { id: string; type: ContentType; title: string; slug: string; excerpt?: string; body?: string; featured: boolean; published: boolean; media: { id: string }[] }

const labels: Record<'news' | 'post', string> = { news: 'Notícia', post: 'Post' }

export default function NoticiasListPage() {
  const [token] = useAdminToken()
  const [items, setItems] = useState<ContentListItem[]>([])
  const [error, setError] = useState('')

  const load = async () => {
    if (!token) return
    try {
      const all = await adminRequest<ContentListItem[]>(token, '/content?all=true')
      setItems(all.filter(item => item.type === 'news' || item.type === 'post'))
    } catch (err) { setError(err instanceof Error ? err.message : 'Erro ao carregar notícias.') }
  }
  useEffect(() => { load() }, [token])

  const remove = async (item: ContentListItem) => {
    if (!token || !confirm(`Apagar "${item.title}" e as suas imagens?`)) return
    try { await adminRequest(token, `/content/${item.id}`, { method: 'DELETE' }); await load() } catch (err) { setError(err instanceof Error ? err.message : 'Erro ao apagar.') }
  }

  if (!token) return null
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-900">
      <div className="mb-5 flex items-center justify-between">
        <div><h2 className="text-xl font-bold">Notícias</h2><p className="text-sm text-gray-500">{items.length} notícia(s)</p></div>
        <Link href="/admin/noticias/novo" className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary-dark"><Plus size={16} /> Nova notícia</Link>
      </div>
      {error && <p className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}
      <div className="space-y-3">
        {items.map(item => (
          <article key={item.id} className="rounded-xl border p-4">
            <div className="flex gap-3">
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex flex-wrap gap-2">
                  <span className="rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-primary-dark dark:bg-amber-950/30 dark:text-primary-light">{labels[item.type as 'news' | 'post']}</span>
                  {!item.published && <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-700">Rascunho</span>}
                  <span className="text-xs text-gray-400">{item.media?.length || 0} foto(s)</span>
                </div>
                <h3 className="truncate font-semibold">{item.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-gray-500">{item.excerpt || item.body || 'Sem resumo.'}</p>
              </div>
              <div className="flex shrink-0 gap-1">
                <Link href={`/admin/noticias/${item.id}/editar`} className="rounded-lg p-2 text-primary-dark hover:bg-amber-50" title="Editar"><Pencil size={17} /></Link>
                <button onClick={() => remove(item)} className="rounded-lg p-2 text-red-600 hover:bg-red-50" title="Apagar"><Trash2 size={17} /></button>
              </div>
            </div>
          </article>
        ))}
        {items.length === 0 && <p className="py-10 text-center text-gray-500">Ainda não há notícias.</p>}
      </div>
    </section>
  )
}

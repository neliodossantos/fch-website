'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowLeft, CalendarRange } from 'lucide-react'
import { useAdminToken, adminRequest, resolveMediaUrl } from '../../../shared/adminApi'
import { DesfileGallery } from '@/components/shared/DesfileGallery'
import type { DesfileAdmin } from '../../DesfileForm'

export default function PreviewDesfilePage() {
  const { id } = useParams<{ id: string }>()
  const [token] = useAdminToken()
  const [item, setItem] = useState<DesfileAdmin | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!token) return
    adminRequest<DesfileAdmin[]>(token, '/desfiles?all=true')
      .then(items => { const found = items.find(candidate => candidate.id === id); if (!found) throw new Error('Desfile não encontrado.'); setItem(found) })
      .catch(err => setError(err instanceof Error ? err.message : 'Erro ao carregar desfile.'))
  }, [token, id])

  if (!token) return null
  if (error) return <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-[#3b1d1d] dark:text-[#fca5a5]">{error}</p>
  if (!item) return <p className="text-gray-500 dark:text-[#9c8d7d]">A carregar…</p>

  return (
    <section className="rounded-2xl bg-white py-10 shadow-sm dark:bg-[#151312]">
      <div className="container mx-auto max-w-4xl px-4">
        <Link href={`/admin/desfiles/${item.id}/editar`} className="mb-8 inline-flex items-center text-primary hover:text-primary-dark dark:text-primary-light dark:hover:text-primary">
          <ArrowLeft className="mr-2 h-4 w-4" /> Voltar ao editor
        </Link>

        {!item.published && <p className="mb-4 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700 dark:bg-[#443116] dark:text-[#fcd34d]">Rascunho — ainda não publicado</p>}

        <div className="mb-4 flex items-center gap-2 text-sm text-gray-500 dark:text-[#b8ab9c]">
          <CalendarRange className="h-4 w-4" /> Edição de {item.ano}
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">{item.titulo}</h1>

        {item.descricao && <p className="mt-4 text-lg text-gray-600 dark:text-[#d8cfc4]">{item.descricao}</p>}

        {item.pontos && item.pontos.length > 0 && (
          <ul className="mt-6 list-disc space-y-1 pl-5 text-gray-700 dark:text-[#E4D9CC]">
            {item.pontos.map((ponto, index) => <li key={index}>{ponto}</li>)}
          </ul>
        )}

        {item.media.length > 0 && (
          <div className="mt-8">
            <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-[#F5F0EA]">Galeria</h2>
            <DesfileGallery media={item.media.map(m => ({ id: m.id, url: resolveMediaUrl(m.url), alt: m.alt }))} mediaLayout={item.mediaLayout ?? 'grid'} />
          </div>
        )}
      </div>
    </section>
  )
}

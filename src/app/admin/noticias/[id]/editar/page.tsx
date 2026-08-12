'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useAdminToken, adminRequest } from '../../../shared/adminApi'
import { NoticiaForm, ContentAdmin } from '../../NoticiaForm'

export default function EditarNoticiaPage() {
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
  return <NoticiaForm token={token} item={item} />
}

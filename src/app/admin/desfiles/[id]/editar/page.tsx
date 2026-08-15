'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useAdminToken, adminRequest } from '../../../shared/adminApi'
import { DesfileForm, DesfileAdmin } from '../../DesfileForm'

export default function EditarDesfilePage() {
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
  return <DesfileForm token={token} item={item} />
}

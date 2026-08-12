'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useAdminToken, adminRequest } from '../../../shared/adminApi'
import { EventoForm, EventoAdmin } from '../../EventoForm'

export default function EditarEventoPage() {
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
  return <EventoForm token={token} item={item} />
}

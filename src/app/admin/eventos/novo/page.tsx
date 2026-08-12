'use client'

import { useAdminToken } from '../../shared/adminApi'
import { EventoForm } from '../EventoForm'

export default function NovoEventoPage() {
  const [token] = useAdminToken()
  if (!token) return null
  return <EventoForm token={token} />
}

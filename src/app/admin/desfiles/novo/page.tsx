'use client'

import { useAdminToken } from '../../shared/adminApi'
import { DesfileForm } from '../DesfileForm'

export default function NovoDesfilePage() {
  const [token] = useAdminToken()
  if (!token) return null
  return <DesfileForm token={token} />
}

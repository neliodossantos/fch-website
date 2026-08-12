'use client'

import { useAdminToken } from './shared/adminApi'
import { DestaquesPanel } from './DestaquesPanel'

export default function AdminPage() {
  const [token] = useAdminToken()
  if (!token) return null
  return <DestaquesPanel token={token} />
}

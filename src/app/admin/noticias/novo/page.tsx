'use client'

import { useAdminToken } from '../../shared/adminApi'
import { NoticiaForm } from '../NoticiaForm'

export default function NovaNoticiaPage() {
  const [token] = useAdminToken()
  if (!token) return null
  return <NoticiaForm token={token} />
}

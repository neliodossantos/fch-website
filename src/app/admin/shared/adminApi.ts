import { useEffect, useState } from 'react'

const API_URL = process.env.NEXT_PUBLIC_FCH_API_URL || 'http://localhost:3005/api'
const API_ORIGIN = API_URL.replace(/\/api\/?$/, '')
const TOKEN_KEY = 'fch_admin_token'

export function resolveMediaUrl(url?: string): string {
  if (!url) return ''
  return url.startsWith('http') ? url : `${API_ORIGIN}${url}`
}

export function slugify(value: string): string {
  return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export async function adminRequest<T>(token: string, path: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, { ...options, headers: { Authorization: `Bearer ${token}`, ...(options.headers || {}) } })
  const data = await response.json().catch(() => null)
  if (!response.ok) throw new Error(Array.isArray(data?.message) ? data.message.join(', ') : data?.message || 'Não foi possível concluir a operação.')
  return data as T
}

export function useAdminToken(): [string, (token: string) => void] {
  const [token, setTokenState] = useState('')
  useEffect(() => { setTokenState(localStorage.getItem(TOKEN_KEY) || '') }, [])
  const setToken = (value: string) => {
    if (value) localStorage.setItem(TOKEN_KEY, value)
    else localStorage.removeItem(TOKEN_KEY)
    setTokenState(value)
  }
  return [token, setToken]
}

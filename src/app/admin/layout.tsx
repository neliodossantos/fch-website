'use client'

import { FormEvent, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LogIn, LogOut } from 'lucide-react'
import { useAdminToken } from './shared/adminApi'

const logo = '/images/logo/FCH.png'
const API_URL = process.env.NEXT_PUBLIC_FCH_API_URL || 'http://localhost:3005/api'
const NAV = [
  { href: '/admin', label: 'Destaques' },
  { href: '/admin/noticias', label: 'Notícias' },
  { href: '/admin/eventos', label: 'Eventos' },
] as const

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useAdminToken()
  const [email, setEmail] = useState('admin@fch.ucan.edu.ao')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const pathname = usePathname()

  const login = async (event: FormEvent) => {
    event.preventDefault(); setError(''); setBusy(true)
    try {
      const response = await fetch(`${API_URL}/auth/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) })
      const data = await response.json()
      if (!response.ok) throw new Error(data.message || 'Credenciais inválidas.')
      setToken(data.accessToken); setPassword('')
    } catch (err) { setError(err instanceof Error ? err.message : 'Não foi possível iniciar sessão.') } finally { setBusy(false) }
  }

  if (!token) return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-10 dark:bg-gray-950">
      <section className="w-full max-w-sm overflow-hidden rounded-2xl border-t-4 border-primary bg-white shadow-sm dark:bg-gray-900">
        <form onSubmit={login} className="p-8 sm:p-10">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gray-50 p-2 dark:bg-gray-800"><Image src={logo} alt="Logótipo da Faculdade de Ciências Humanas" width={56} height={56} className="h-full w-full rounded-full object-contain" /></div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-dark dark:text-primary-light">Área reservada · FCH</p>
            <h1 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">Iniciar sessão</h1>
          </div>
          {error && <p role="alert" className="mb-5 rounded-lg border border-red-100 bg-red-50 p-3 text-sm text-red-700">{error}</p>}
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
          <input className="mb-5 w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white" value={email} type="email" onChange={event => setEmail(event.target.value)} required autoComplete="email" />
          <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-200">Palavra-passe</label>
          <input className="mb-6 w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white" value={password} type="password" onChange={event => setPassword(event.target.value)} required autoComplete="current-password" />
          <button disabled={busy} className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 font-bold text-white transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"><LogIn size={18} />{busy ? 'A entrar…' : 'Entrar'}</button>
        </form>
      </section>
    </main>
  )

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <header className="border-b bg-white dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image src={logo} alt="Logótipo da Faculdade de Ciências Humanas" width={36} height={36} className="rounded-full object-contain" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-dark dark:text-primary-light">Faculdade de Ciências Humanas · UCAN</p>
              <h1 className="text-lg font-bold text-gray-900 dark:text-white">Dashboard de conteúdos</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <nav className="flex gap-2 overflow-x-auto">
              {NAV.map(item => {
                const active = item.href === '/admin' ? pathname === '/admin' : pathname.startsWith(item.href)
                return <Link key={item.href} href={item.href} className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${active ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'}`}>{item.label}</Link>
              })}
            </nav>
            <button onClick={() => setToken('')} className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"><LogOut size={16} /> Terminar sessão</button>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8">{children}</main>
    </div>
  )
}

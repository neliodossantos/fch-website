'use client'

import { FormEvent, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Eye, EyeOff, LockKeyhole, LogIn, LogOut, Mail, ShieldCheck } from 'lucide-react'
import { useAdminToken } from './shared/adminApi'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { toast, ToastViewport } from '@/components/ui/Toast'

const logo = '/images/logo/FCH.png'
const API_URL = process.env.NEXT_PUBLIC_FCH_API_URL || 'http://localhost:3005/api'
const NAV = [
  { href: '/admin/noticias', label: 'Notícias' },
  { href: '/admin/eventos', label: 'Eventos' },
  { href: '/admin/desfiles', label: 'Desfile Académico' },
] as const

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useAdminToken()
  const [email, setEmail] = useState('admin@fch.ucan.edu.ao')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const logout = () => { setToken(''); router.replace('/admin') }

  const login = async (event: FormEvent) => {
    event.preventDefault(); setError(''); setBusy(true)
    try {
      const response = await fetch(`${API_URL}/auth/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) })
      const data = await response.json()
      if (!response.ok) throw new Error(data.message || 'Credenciais inválidas.')
      setToken(data.accessToken); setPassword(''); toast.success('Sessão iniciada com sucesso.')
    } catch (err) { const message = err instanceof Error ? err.message : 'Não foi possível iniciar sessão.'; setError(message); toast.error(message) } finally { setBusy(false) }
  }

  if (!token) return (
    <><ToastViewport /><main className="admin-shell flex min-h-screen items-center justify-center bg-gray-50 p-4 sm:p-8 dark:bg-[#0d0b0a]">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-gray-900/5 lg:grid-cols-[1.05fr_0.95fr] dark:border-[#332a22] dark:bg-[#151312] dark:shadow-black/30">
        <aside className="relative hidden overflow-hidden bg-[#271c10] p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/25 blur-2xl" />
          <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full border-[28px] border-primary/20" />
          <div className="relative">
            <Image src={logo} alt="Logótipo da Faculdade de Ciências Humanas" width={58} height={58} className="rounded-full bg-white/95 p-1.5 object-contain" />
            <p className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-primary-light">Área reservada · FCH</p>
            <h1 className="mt-3 max-w-sm text-4xl font-bold leading-tight">Gestão de conteúdos, num só lugar.</h1>
            <p className="mt-4 max-w-sm text-sm leading-6 text-[#eadfd2]">Publique notícias, eventos e destaques com controlo total sobre o que chega ao site da Faculdade.</p>
          </div>
          <div className="relative flex items-center gap-3 text-sm text-[#eadfd2]"><ShieldCheck size={19} className="text-primary-light" /> Acesso exclusivo para a equipa FCH</div>
        </aside>

        <section className="relative p-7 sm:p-10">
          <div className="absolute right-5 top-5"><ThemeToggle /></div>
          <form onSubmit={login} className="mx-auto max-w-sm pt-8 lg:pt-5">
            <div className="mb-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary-dark dark:text-primary-light lg:hidden"><Image src={logo} alt="Logótipo da Faculdade de Ciências Humanas" width={44} height={44} className="h-full w-full rounded-xl object-contain" /></div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-dark dark:text-primary-light">Administração</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Bem-vindo de volta</h2>
              <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-[#d8cfc4]">Introduza as suas credenciais para aceder ao painel.</p>
            </div>

            {error && <p role="alert" aria-live="polite" className="mb-5 rounded-xl border border-red-100 bg-red-50 p-3 text-sm text-red-700 dark:border-[#7f3030] dark:bg-[#3b1d1d] dark:text-[#fca5a5]">{error}</p>}

            <div className="space-y-5">
              <label className="block text-sm font-semibold text-gray-700 dark:text-[#E4D9CC]">
                Email
                <span className="relative mt-1.5 block">
                  <Mail aria-hidden="true" size={18} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-11 pr-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-4 focus:ring-primary/15 dark:border-[#332a22] dark:bg-[#1f1a16] dark:text-white" value={email} type="email" onChange={event => setEmail(event.target.value)} required autoComplete="email" placeholder="nome@fch.ucan.edu.ao" />
                </span>
              </label>
              <label className="block text-sm font-semibold text-gray-700 dark:text-[#E4D9CC]">
                Palavra-passe
                <span className="relative mt-1.5 block">
                  <LockKeyhole aria-hidden="true" size={18} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-11 pr-12 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-4 focus:ring-primary/15 dark:border-[#332a22] dark:bg-[#1f1a16] dark:text-white" value={password} type={showPassword ? 'text' : 'password'} onChange={event => setPassword(event.target.value)} required autoComplete="current-password" placeholder="A sua palavra-passe" />
                  <button type="button" onClick={() => setShowPassword(current => !current)} className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-gray-500 transition hover:bg-gray-100 hover:text-gray-800 dark:text-[#d8cfc4] dark:hover:bg-[#332a22] dark:hover:text-white" aria-label={showPassword ? 'Ocultar palavra-passe' : 'Mostrar palavra-passe'}>
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </span>
              </label>
            </div>
            <button disabled={busy} className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 font-bold text-white shadow-lg shadow-primary/20 transition hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primary/25 disabled:cursor-not-allowed disabled:opacity-60"><LogIn size={18} />{busy ? 'A entrar…' : 'Entrar no painel'}</button>
            <p className="mt-6 text-center text-xs leading-5 text-gray-500 dark:text-[#aaa097]">Em caso de dificuldade no acesso, contacte a equipa responsável pelo site.</p>
          </form>
        </section>
      </div>
    </main></>
  )

  return (
    <><ToastViewport /><div className="admin-shell min-h-screen bg-gray-50 dark:bg-[#0d0b0a]">
      <header className="border-b bg-white dark:border-[#1f1a16] dark:bg-[#151312]">
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
                const active = pathname.startsWith(item.href)
                return <Link key={item.href} href={item.href} className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${active ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-[#1f1a16] dark:text-[#d8cfc4] dark:hover:bg-[#332a22]'}`}>{item.label}</Link>
              })}
            </nav>
            <ThemeToggle />
            <button onClick={logout} className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:border-[#332a22] dark:text-[#E4D9CC] dark:hover:bg-[#1f1a16]"><LogOut size={16} /> Terminar sessão</button>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8">{children}</main>
    </div></>
  )
}

'use client'
/* eslint-disable @next/next/no-img-element */

import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { FileImage, ImagePlus, LogIn, LogOut, Pencil, Plus, Trash2, X } from 'lucide-react'
import logo from '@/components/layout/FCH.png'

type ContentType = 'news' | 'post' | 'section' | 'agreement'
type Media = { id: string; url: string; alt?: string; caption?: string }
type Content = { id: string; type: ContentType; title: string; slug: string; excerpt?: string; body?: string; sectionKey?: string; partnerName?: string; agreementDate?: string; featured: boolean; published: boolean; media: Media[] }
type FormData = Omit<Content, 'id' | 'media'>

const API_URL = process.env.NEXT_PUBLIC_FCH_API_URL || 'http://localhost:3005/api'
const API_ORIGIN = API_URL.replace(/\/api\/?$/, '')
const initialForm: FormData = { type: 'section', title: '', slug: '', excerpt: '', body: '', sectionKey: '', partnerName: '', agreementDate: '', featured: false, published: true }
const labels: Record<ContentType, string> = { news: 'Notícias', post: 'Posts', section: 'Secções', agreement: 'Acordos' }

function imageUrl(url: string) { return url.startsWith('http') ? url : `${API_ORIGIN}${url}` }

export default function AdminPage() {
  const [token, setToken] = useState('')
  const [email, setEmail] = useState('admin@fch.ucan.edu.ao')
  const [password, setPassword] = useState('')
  const [items, setItems] = useState<Content[]>([])
  const [filter, setFilter] = useState<'all' | ContentType>('all')
  const [form, setForm] = useState<FormData>(initialForm)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageAlt, setImageAlt] = useState('')
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')
  const [busy, setBusy] = useState(false)

  const counts = useMemo(() => Object.fromEntries((Object.keys(labels) as ContentType[]).map(type => [type, items.filter(item => item.type === type).length])), [items])
  const request = async <T,>(path: string, options: RequestInit = {}): Promise<T> => {
    const response = await fetch(`${API_URL}${path}`, { ...options, headers: { Authorization: `Bearer ${token}`, ...(options.headers || {}) } })
    const data = await response.json().catch(() => null)
    if (!response.ok) throw new Error(Array.isArray(data?.message) ? data.message.join(', ') : data?.message || 'Não foi possível concluir a operação.')
    return data as T
  }
  const load = async () => {
    if (!token) return
    try { setItems(await request<Content[]>('/content?all=true')) } catch (err) { setError(err instanceof Error ? err.message : 'Erro ao carregar conteúdos.') }
  }
  useEffect(() => { setToken(localStorage.getItem('fch_admin_token') || '') }, [])
  useEffect(() => { load() }, [token])

  const login = async (event: FormEvent) => {
    event.preventDefault(); setError(''); setBusy(true)
    try {
      const response = await fetch(`${API_URL}/auth/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) })
      const data = await response.json()
      if (!response.ok) throw new Error(data.message || 'Credenciais inválidas.')
      localStorage.setItem('fch_admin_token', data.accessToken); setToken(data.accessToken); setPassword('')
    } catch (err) { setError(err instanceof Error ? err.message : 'Não foi possível iniciar sessão.') } finally { setBusy(false) }
  }
  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => setForm(current => ({ ...current, [key]: value }))
  const reset = () => { setForm(initialForm); setEditingId(null); setSelectedImage(null); setImageAlt(''); setError(''); setNotice('') }
  const edit = (item: Content) => { setEditingId(item.id); setForm({ type: item.type, title: item.title, slug: item.slug, excerpt: item.excerpt || '', body: item.body || '', sectionKey: item.sectionKey || '', partnerName: item.partnerName || '', agreementDate: item.agreementDate || '', featured: item.featured, published: item.published }); setNotice('A editar: faça alterações e guarde.'); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const save = async (event: FormEvent) => {
    event.preventDefault(); setError(''); setNotice(''); setBusy(true)
    try {
      const payload = Object.fromEntries(Object.entries(form).filter(([, value]) => value !== ''))
      await request<Content>(`/content${editingId ? `/${editingId}` : ''}`, { method: editingId ? 'PATCH' : 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      setNotice(editingId ? 'Conteúdo actualizado.' : 'Conteúdo criado. Agora pode adicionar imagens.'); await load(); if (!editingId) reset()
    } catch (err) { setError(err instanceof Error ? err.message : 'Erro ao guardar.') } finally { setBusy(false) }
  }
  const remove = async (item: Content) => { if (!confirm(`Apagar “${item.title}” e as suas imagens?`)) return; try { await request<void>(`/content/${item.id}`, { method: 'DELETE' }); if (editingId === item.id) reset(); await load() } catch (err) { setError(err instanceof Error ? err.message : 'Erro ao apagar.') } }
  const uploadImage = async () => {
    if (!editingId || !selectedImage) return setError('Guarde o conteúdo e seleccione uma imagem antes de enviar.')
    setBusy(true); setError('')
    try {
      const data = new window.FormData(); data.append('file', selectedImage)
      const upload = await request<{ url: string }>('/media/upload', { method: 'POST', body: data })
      await request(`/content/${editingId}/media`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ url: upload.url, alt: imageAlt }) })
      setSelectedImage(null); setImageAlt(''); setNotice('Imagem adicionada.'); await load()
    } catch (err) { setError(err instanceof Error ? err.message : 'Erro ao enviar imagem.') } finally { setBusy(false) }
  }
  const deleteImage = async (mediaId: string) => { if (!confirm('Remover esta imagem?')) return; try { await request<void>(`/content/media/${mediaId}`, { method: 'DELETE' }); await load() } catch (err) { setError(err instanceof Error ? err.message : 'Erro ao remover imagem.') } }
  const currentMedia = items.find(item => item.id === editingId)?.media || []

  if (!token) return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#063565] px-4 py-10">
      <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full border-[42px] border-primary/90" />
      <div className="absolute -bottom-48 -right-28 h-[34rem] w-[34rem] rounded-full border-[70px] border-[#0f528e]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(2,27,57,.22)_25%,transparent_25%,transparent_50%,rgba(2,27,57,.22)_50%,rgba(2,27,57,.22)_75%,transparent_75%)] bg-[length:32px_32px] opacity-30" />
      <section className="relative grid w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-[0_25px_80px_rgba(0,16,43,.45)] lg:grid-cols-[0.9fr_1.1fr] dark:bg-gray-900">
        <aside className="relative hidden overflow-hidden bg-[#073a73] p-12 text-white lg:flex lg:flex-col lg:justify-between">
          <div className="absolute -right-20 -top-16 h-64 w-64 rounded-full bg-primary/95" />
          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full border-[34px] border-white/10" />
          <div className="relative">
            <div className="mb-12 flex h-24 w-24 items-center justify-center rounded-full bg-white p-2 shadow-xl"><Image src={logo} alt="Logótipo da Faculdade de Ciências Humanas" width={82} height={82} className="h-full w-full rounded-full object-contain" /></div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-light">Universidade Católica de Angola</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight">Faculdade de<br />Ciências Humanas</h1>
            <div className="mt-7 h-1 w-16 rounded-full bg-primary" />
            <p className="mt-7 max-w-xs text-sm leading-6 text-blue-100">Gestão editorial do site institucional, publicações, notícias, acordos e galerias de imagens.</p>
          </div>
          <p className="relative text-xs text-blue-200">Plataforma de gestão de conteúdos · FCH</p>
        </aside>
        <form onSubmit={login} className="flex min-h-[540px] flex-col justify-center p-8 sm:p-12">
          <div className="mb-8 text-center lg:text-left">
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border-4 border-primary/20 bg-white p-1 shadow-lg lg:hidden"><Image src={logo} alt="Logótipo da Faculdade de Ciências Humanas" width={68} height={68} className="h-full w-full rounded-full object-contain" /></div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Área reservada</p>
            <h2 className="mt-2 text-3xl font-bold text-[#073a73] dark:text-white">Iniciar sessão</h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Use as suas credenciais administrativas para continuar.</p>
          </div>
          {error && <p role="alert" className="mb-5 rounded-xl border border-red-100 bg-red-50 p-3 text-sm text-red-700">{error}</p>}
          <label className="mb-1.5 block text-sm font-semibold text-gray-700 dark:text-gray-200">Email</label>
          <input className="mb-5 w-full rounded-xl border border-gray-300 bg-white p-3.5 text-gray-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white" value={email} type="email" onChange={event => setEmail(event.target.value)} required autoComplete="email" />
          <label className="mb-1.5 block text-sm font-semibold text-gray-700 dark:text-gray-200">Palavra-passe</label>
          <input className="mb-7 w-full rounded-xl border border-gray-300 bg-white p-3.5 text-gray-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white" value={password} type="password" onChange={event => setPassword(event.target.value)} required autoComplete="current-password" />
          <button disabled={busy} className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 font-semibold text-white shadow-lg shadow-primary/25 transition hover:-translate-y-0.5 hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"><LogIn size={18} />{busy ? 'A entrar…' : 'Entrar na dashboard'}</button>
          <p className="mt-7 text-center text-xs text-gray-400">Acesso reservado à equipa administrativa da FCH.</p>
        </form>
      </section>
    </main>
  )

  return <main className="min-h-screen bg-slate-100 py-8 dark:bg-gray-950"><div className="mx-auto max-w-7xl px-4"><header className="mb-8 flex flex-col justify-between gap-4 rounded-2xl bg-[#073a73] p-6 text-white sm:flex-row sm:items-center"><div><p className="text-sm text-blue-100">Faculdade de Ciências Humanas · UCAN</p><h1 className="text-2xl font-bold">Dashboard de conteúdos</h1></div><button onClick={() => { localStorage.removeItem('fch_admin_token'); setToken(''); reset() }} className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-4 py-2 text-sm hover:bg-white/10"><LogOut size={16} /> Terminar sessão</button></header>
    <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">{(Object.keys(labels) as ContentType[]).map(type => <button key={type} onClick={() => setFilter(type)} className={`rounded-xl border p-4 text-left shadow-sm ${filter === type ? 'border-primary bg-amber-50 dark:bg-amber-950/20' : 'bg-white dark:bg-gray-900'}`}><span className="block text-2xl font-bold">{counts[type]}</span><span className="text-sm text-gray-500 dark:text-gray-400">{labels[type]}</span></button>)}</div>
    <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]"><section className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-900"><div className="mb-5 flex items-center justify-between"><div><h2 className="text-xl font-bold">{editingId ? 'Editar conteúdo' : 'Novo conteúdo'}</h2><p className="text-sm text-gray-500">Todos os campos podem ser actualizados.</p></div><button onClick={reset} className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-red-600"><X size={16} /> Limpar</button></div>{error && <p className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}{notice && <p className="mb-4 rounded-lg bg-green-50 p-3 text-sm text-green-700">{notice}</p>}
      <form onSubmit={save} className="space-y-4"><div className="grid gap-4 sm:grid-cols-2"><Field label="Tipo"><select value={form.type} onChange={event => update('type', event.target.value as ContentType)}>{(Object.keys(labels) as ContentType[]).map(type => <option key={type} value={type}>{labels[type].slice(0, -1)}</option>)}</select></Field><Field label="Chave da secção"><input value={form.sectionKey} onChange={event => update('sectionKey', event.target.value)} placeholder="ex.: home-hero-banner (banner da homepage), about-history" /></Field></div><Field label="Título"><input value={form.title} onChange={event => { update('title', event.target.value); if (!editingId) update('slug', event.target.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')) }} required /></Field><Field label="Slug (URL)"><input value={form.slug} onChange={event => update('slug', event.target.value)} required /></Field><Field label="Resumo"><textarea value={form.excerpt} onChange={event => update('excerpt', event.target.value)} rows={3} /></Field><Field label="Conteúdo"><textarea value={form.body} onChange={event => update('body', event.target.value)} rows={8} /></Field>{form.type === 'agreement' && <div className="grid gap-4 sm:grid-cols-2"><Field label="Nome do parceiro"><input value={form.partnerName} onChange={event => update('partnerName', event.target.value)} /></Field><Field label="Data do acordo"><input type="date" value={form.agreementDate} onChange={event => update('agreementDate', event.target.value)} /></Field></div>}<div className="flex flex-wrap gap-5 text-sm"><Check label="Publicado" checked={form.published} onChange={value => update('published', value)} /><Check label="Em destaque" checked={form.featured} onChange={value => update('featured', value)} /></div><button disabled={busy} className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-white hover:bg-primary-dark disabled:opacity-60"><Plus size={18} /> {busy ? 'A guardar…' : editingId ? 'Guardar alterações' : 'Criar conteúdo'}</button></form>
      <div className="mt-8 border-t pt-6"><h3 className="mb-1 flex items-center gap-2 font-bold"><ImagePlus size={19} /> Imagens do conteúdo</h3><p className="mb-4 text-sm text-gray-500">Guarde o conteúdo antes de enviar imagens. Pode adicionar várias fotos.</p><div className="grid grid-cols-2 gap-3 sm:grid-cols-3">{currentMedia.map(media => <div key={media.id} className="group relative overflow-hidden rounded-lg border bg-gray-100"><img src={imageUrl(media.url)} alt={media.alt || ''} className="h-28 w-full object-cover" /><button onClick={() => deleteImage(media.id)} className="absolute right-2 top-2 rounded-full bg-red-600 p-1.5 text-white opacity-90 hover:bg-red-700"><Trash2 size={14} /></button></div>)}</div><div className="mt-4 grid gap-3 sm:grid-cols-[1fr_1fr_auto]"><input type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={(event: ChangeEvent<HTMLInputElement>) => setSelectedImage(event.target.files?.[0] || null)} className="block w-full text-sm" /><input value={imageAlt} onChange={event => setImageAlt(event.target.value)} placeholder="Descrição da imagem" className="rounded-lg border bg-white px-3 py-2 dark:bg-gray-800" /><button onClick={uploadImage} disabled={!editingId || !selectedImage || busy} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#073a73] px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"><FileImage size={16} /> Enviar</button></div></div></section>
      <section className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-900"><div className="mb-5 flex items-center justify-between"><div><h2 className="text-xl font-bold">Conteúdos</h2><p className="text-sm text-gray-500">Seleccione um item para editar.</p></div><select value={filter} onChange={event => setFilter(event.target.value as 'all' | ContentType)} className="rounded-lg border bg-white px-3 py-2 text-sm dark:bg-gray-800"><option value="all">Todos</option>{(Object.keys(labels) as ContentType[]).map(type => <option key={type} value={type}>{labels[type]}</option>)}</select></div><div className="space-y-3">{items.filter(item => filter === 'all' || item.type === filter).map(item => <article key={item.id} className="rounded-xl border p-4"><div className="flex gap-3"><div className="min-w-0 flex-1"><div className="mb-1 flex flex-wrap gap-2"><span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 dark:bg-gray-800 dark:text-gray-300">{labels[item.type]}</span>{!item.published && <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-700">Rascunho</span>}<span className="text-xs text-gray-400">{item.media?.length || 0} foto(s)</span></div><h3 className="truncate font-semibold">{item.title}</h3><p className="mt-1 line-clamp-2 text-sm text-gray-500">{item.excerpt || item.body || 'Sem resumo.'}</p></div><div className="flex shrink-0 gap-1"><button onClick={() => edit(item)} className="rounded-lg p-2 text-[#073a73] hover:bg-blue-50" title="Editar"><Pencil size={17} /></button><button onClick={() => remove(item)} className="rounded-lg p-2 text-red-600 hover:bg-red-50" title="Apagar"><Trash2 size={17} /></button></div></div></article>)}{items.filter(item => filter === 'all' || item.type === filter).length === 0 && <p className="py-10 text-center text-gray-500">Não existem conteúdos neste filtro.</p>}</div></section></div></div></main>
}

function Field({ label, children }: { label: string; children: React.ReactNode }) { return <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">{label}<span className="mt-1 block [&_input]:w-full [&_input]:rounded-lg [&_input]:border [&_input]:bg-white [&_input]:p-3 [&_select]:w-full [&_select]:rounded-lg [&_select]:border [&_select]:bg-white [&_select]:p-3 [&_textarea]:w-full [&_textarea]:rounded-lg [&_textarea]:border [&_textarea]:bg-white [&_textarea]:p-3 dark:[&_input]:bg-gray-800 dark:[&_select]:bg-gray-800 dark:[&_textarea]:bg-gray-800">{children}</span></label> }
function Check({ label, checked, onChange }: { label: string; checked: boolean; onChange: (value: boolean) => void }) { return <label className="flex items-center gap-2"><input className="h-4 w-4 accent-primary" type="checkbox" checked={checked} onChange={event => onChange(event.target.checked)} />{label}</label> }

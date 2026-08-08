'use client'

import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Calendar, Pencil, Plus, Trash2, X } from 'lucide-react'
import { Field, Check } from './AdminFormControls'

type EventoAdmin = { id: string; titulo: string; slug: string; descricao?: string; data: string; hora?: string; local?: string; tipo: string; imagem_url?: string; video_url?: string; featured?: boolean }
type FormData = { title: string; slug: string; description: string; date: string; time: string; location: string; type: string; imageUrl: string; videoUrl: string; featured: boolean }

const API_URL = process.env.NEXT_PUBLIC_FCH_API_URL || 'http://localhost:3005/api'
const initialForm: FormData = { title: '', slug: '', description: '', date: '', time: '', location: '', type: 'conferencia', imageUrl: '', videoUrl: '', featured: false }

export function EventosPanel({ token }: { token: string }) {
  const [items, setItems] = useState<EventoAdmin[]>([])
  const [form, setForm] = useState<FormData>(initialForm)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<File | null>(null)
  const [uploadingVideo, setUploadingVideo] = useState(false)
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')
  const [busy, setBusy] = useState(false)

  const request = async <T,>(path: string, options: RequestInit = {}): Promise<T> => {
    const response = await fetch(`${API_URL}${path}`, { ...options, headers: { Authorization: `Bearer ${token}`, ...(options.headers || {}) } })
    const data = await response.json().catch(() => null)
    if (!response.ok) throw new Error(Array.isArray(data?.message) ? data.message.join(', ') : data?.message || 'Não foi possível concluir a operação.')
    return data as T
  }
  const load = async () => { try { setItems(await request<EventoAdmin[]>('/eventos?all=true')) } catch (err) { setError(err instanceof Error ? err.message : 'Erro ao carregar eventos.') } }
  useEffect(() => { load() }, [])

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => setForm(current => ({ ...current, [key]: value }))
  const reset = () => { setForm(initialForm); setEditingId(null); setSelectedImage(null); setSelectedVideo(null); setError(''); setNotice('') }
  const edit = (item: EventoAdmin) => {
    setEditingId(item.id)
    setForm({ title: item.titulo, slug: item.slug, description: item.descricao || '', date: item.data.slice(0, 10), time: item.hora || '', location: item.local || '', type: item.tipo || 'conferencia', imageUrl: item.imagem_url || '', videoUrl: item.video_url || '', featured: item.featured || false })
    setNotice('A editar: faça alterações e guarde.')
  }
  const save = async (event: FormEvent) => {
    event.preventDefault(); setError(''); setNotice(''); setBusy(true)
    try {
      let imageUrl = form.imageUrl
      if (selectedImage) {
        const data = new window.FormData(); data.append('file', selectedImage)
        const upload = await request<{ url: string }>('/media/upload', { method: 'POST', body: data })
        imageUrl = upload.url
      }
      const payload = { title: form.title, slug: form.slug, description: form.description || undefined, date: form.date, time: form.time || undefined, location: form.location || undefined, type: form.type, imageUrl: imageUrl || undefined, videoUrl: form.videoUrl || undefined, featured: form.featured }
      await request(`/eventos${editingId ? `/${editingId}` : ''}`, { method: editingId ? 'PATCH' : 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      setNotice(editingId ? 'Evento actualizado.' : 'Evento criado.'); await load(); reset()
    } catch (err) { setError(err instanceof Error ? err.message : 'Erro ao guardar.') } finally { setBusy(false) }
  }
  const uploadVideoFile = async () => {
    if (!selectedVideo) return
    setUploadingVideo(true); setError('')
    try {
      const data = new window.FormData(); data.append('file', selectedVideo)
      const upload = await request<{ url: string }>('/media/upload-video', { method: 'POST', body: data })
      update('videoUrl', upload.url); setSelectedVideo(null); setNotice('Vídeo carregado — não esqueça de guardar o evento.')
    } catch (err) { setError(err instanceof Error ? err.message : 'Erro ao enviar vídeo.') } finally { setUploadingVideo(false) }
  }
  const remove = async (item: EventoAdmin) => {
    if (!confirm(`Apagar "${item.titulo}"?`)) return
    try { await request<void>(`/eventos/${item.id}`, { method: 'DELETE' }); if (editingId === item.id) reset(); await load() } catch (err) { setError(err instanceof Error ? err.message : 'Erro ao apagar.') }
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
      <section className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-900">
        <div className="mb-5 flex items-center justify-between">
          <div><h2 className="text-xl font-bold">{editingId ? 'Editar evento' : 'Novo evento'}</h2><p className="text-sm text-gray-500">Aparece na Agenda do site.</p></div>
          <button onClick={reset} className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-red-600"><X size={16} /> Limpar</button>
        </div>
        {error && <p className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}
        {notice && <p className="mb-4 rounded-lg bg-green-50 p-3 text-sm text-green-700">{notice}</p>}
        <form onSubmit={save} className="space-y-4">
          <Field label="Título"><input value={form.title} onChange={e => { update('title', e.target.value); if (!editingId) update('slug', e.target.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')) }} required /></Field>
          <Field label="Slug (URL)"><input value={form.slug} onChange={e => update('slug', e.target.value)} required /></Field>
          <Field label="Descrição"><textarea value={form.description} onChange={e => update('description', e.target.value)} rows={4} /></Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Data"><input type="date" value={form.date} onChange={e => update('date', e.target.value)} required /></Field>
            <Field label="Hora"><input value={form.time} onChange={e => update('time', e.target.value)} placeholder="ex.: 14h00" /></Field>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Local"><input value={form.location} onChange={e => update('location', e.target.value)} /></Field>
            <Field label="Tipo"><select value={form.type} onChange={e => update('type', e.target.value)}><option value="conferencia">Conferência</option><option value="seminario">Seminário</option><option value="workshop">Workshop</option><option value="cultural">Cultural</option></select></Field>
          </div>
          <Field label="Link do vídeo (YouTube, opcional)"><input value={form.videoUrl} onChange={e => update('videoUrl', e.target.value)} placeholder="https://youtube.com/watch?v=..." /></Field>
          <div className="flex items-center gap-3"><input type="file" accept="video/mp4,video/webm,video/quicktime" onChange={(e: ChangeEvent<HTMLInputElement>) => setSelectedVideo(e.target.files?.[0] || null)} className="block flex-1 text-sm" /><button type="button" onClick={uploadVideoFile} disabled={!selectedVideo || uploadingVideo} className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-white disabled:opacity-50">{uploadingVideo ? 'A enviar…' : 'Enviar vídeo'}</button></div>
          <Check label="Em destaque" checked={form.featured} onChange={value => update('featured', value)} />
          <Field label="Imagem">
            <input type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={(e: ChangeEvent<HTMLInputElement>) => setSelectedImage(e.target.files?.[0] || null)} className="block w-full text-sm" />
            {form.imageUrl && !selectedImage && <p className="mt-1 text-xs text-gray-500">Imagem actual mantida se não seleccionar outra.</p>}
          </Field>
          <button disabled={busy} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-bold text-white hover:bg-primary-dark disabled:opacity-60"><Plus size={18} /> {busy ? 'A guardar…' : editingId ? 'Guardar alterações' : 'Criar evento'}</button>
        </form>
      </section>
      <section className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-900">
        <h2 className="mb-5 text-xl font-bold">Eventos</h2>
        <div className="space-y-3">
          {items.map(item => (
            <article key={item.id} className="rounded-xl border p-4">
              <div className="flex gap-3">
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center gap-2 text-xs text-gray-400"><Calendar size={14} /> {new Date(item.data).toLocaleDateString('pt-PT')}</div>
                  <h3 className="truncate font-semibold">{item.titulo}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-gray-500">{item.descricao || 'Sem descrição.'}</p>
                </div>
                <div className="flex shrink-0 gap-1">
                  <button onClick={() => edit(item)} className="rounded-lg p-2 text-primary-dark hover:bg-amber-50" title="Editar"><Pencil size={17} /></button>
                  <button onClick={() => remove(item)} className="rounded-lg p-2 text-red-600 hover:bg-red-50" title="Apagar"><Trash2 size={17} /></button>
                </div>
              </div>
            </article>
          ))}
          {items.length === 0 && <p className="py-10 text-center text-gray-500">Ainda não há eventos.</p>}
        </div>
      </section>
    </div>
  )
}

'use client'

import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Plus, Trash2 } from 'lucide-react'
import { Field, Check } from '../AdminFormControls'
import { TagInput } from '../shared/TagInput'
import { MediaGallery, MediaAdmin } from '../shared/MediaGallery'
import { VideoField } from '../shared/VideoField'
import type { SectionAdmin } from '../shared/SectionsEditor'
import { SectionsEditor } from '../shared/SectionsEditor'
import { adminRequest, slugify } from '../shared/adminApi'

export type AgendaItem = { time?: string; title: string; description?: string }
export type EventoAdmin = {
  id: string; titulo: string; slug: string; descricao?: string; data: string; data_fim?: string; hora?: string; local?: string; tipo: string
  imagem_url?: string; video_url?: string; organizadores?: string[]; link_externo?: string; informacoes_adicionais?: string; agenda?: AgendaItem[]
  media: MediaAdmin[]; sections: SectionAdmin[]; featured: boolean; published: boolean; created_at: string
}

type FormData = { title: string; slug: string; description: string; date: string; endDate: string; time: string; location: string; type: string; videoUrl: string; organizer: string[]; externalUrl: string; additionalInfo: string; agenda: AgendaItem[]; featured: boolean; published: boolean }
const initialForm: FormData = { title: '', slug: '', description: '', date: '', endDate: '', time: '', location: '', type: 'conferencia', videoUrl: '', organizer: [], externalUrl: '', additionalInfo: '', agenda: [], featured: false, published: true }

export function EventoForm({ token, item }: { token: string; item?: EventoAdmin }) {
  const router = useRouter()
  const [form, setForm] = useState<FormData>(initialForm)
  const [id, setId] = useState<string | undefined>(item?.id)
  const [media, setMedia] = useState<MediaAdmin[]>(item?.media || [])
  const [sections, setSections] = useState<SectionAdmin[]>(item?.sections || [])
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imageUrl, setImageUrl] = useState(item?.imagem_url || '')
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    if (!item) return
    setForm({ title: item.titulo, slug: item.slug, description: item.descricao || '', date: item.data.slice(0, 10), endDate: item.data_fim ? item.data_fim.slice(0, 10) : '', time: item.hora || '', location: item.local || '', type: item.tipo || 'conferencia', videoUrl: item.video_url || '', organizer: item.organizadores || [], externalUrl: item.link_externo || '', additionalInfo: item.informacoes_adicionais || '', agenda: item.agenda || [], featured: item.featured, published: item.published })
    setId(item.id)
    setMedia(item.media || [])
    setSections(item.sections || [])
    setImageUrl(item.imagem_url || '')
  }, [item])

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => setForm(current => ({ ...current, [key]: value }))
  const addAgendaRow = () => update('agenda', [...form.agenda, { time: '', title: '', description: '' }])
  const updateAgendaRow = (index: number, patch: Partial<AgendaItem>) => update('agenda', form.agenda.map((row, i) => i === index ? { ...row, ...patch } : row))
  const removeAgendaRow = (index: number) => update('agenda', form.agenda.filter((_, i) => i !== index))

  const save = async (event: FormEvent) => {
    event.preventDefault(); setError(''); setNotice(''); setBusy(true)
    try {
      let nextImageUrl = imageUrl
      if (selectedImage) {
        const data = new window.FormData(); data.append('file', selectedImage)
        const upload = await adminRequest<{ url: string }>(token, '/media/upload', { method: 'POST', body: data })
        nextImageUrl = upload.url
      }
      const payload = { title: form.title, slug: form.slug, description: form.description || undefined, date: form.date, endDate: form.endDate || undefined, time: form.time || undefined, location: form.location || undefined, type: form.type, imageUrl: nextImageUrl || undefined, videoUrl: form.videoUrl || undefined, organizer: form.organizer.length ? form.organizer : undefined, externalUrl: form.externalUrl || undefined, additionalInfo: form.additionalInfo || undefined, agenda: form.agenda.length ? form.agenda : undefined, featured: form.featured, published: form.published }
      const saved = await adminRequest<{ id: string }>(token, `/eventos${id ? `/${id}` : ''}`, { method: id ? 'PATCH' : 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      setImageUrl(nextImageUrl); setSelectedImage(null)
      setNotice(id ? 'Evento actualizado.' : 'Evento criado. Já pode adicionar galeria e secções.')
      if (!id) { setId(saved.id); router.replace(`/admin/eventos/${saved.id}/editar`) }
    } catch (err) { setError(err instanceof Error ? err.message : 'Erro ao guardar.') } finally { setBusy(false) }
  }

  const uploadGalleryImage = async (file: File) => {
    const data = new window.FormData(); data.append('file', file)
    const upload = await adminRequest<{ url: string }>(token, '/media/upload', { method: 'POST', body: data })
    const created = await adminRequest<MediaAdmin>(token, `/eventos/${id}/media`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ url: upload.url }) })
    setMedia(current => [...current, created])
  }
  const removeGalleryImage = async (mediaId: string) => {
    await adminRequest(token, `/eventos/media/${mediaId}`, { method: 'DELETE' })
    setMedia(current => current.filter(item => item.id !== mediaId))
  }

  return (
    <div className="space-y-6">
      <section className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-900">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold">{id ? 'Editar evento' : 'Novo evento'}</h2>
          {id && <Link href={`/admin/eventos/${id}/preview`} target="_blank" className="text-sm font-semibold text-primary-dark hover:underline">Pré-visualizar →</Link>}
        </div>
        {error && <p className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}
        {notice && <p className="mb-4 rounded-lg bg-green-50 p-3 text-sm text-green-700">{notice}</p>}
        <form onSubmit={save} className="space-y-4">
          <Field label="Título"><input value={form.title} onChange={e => { update('title', e.target.value); if (!id) update('slug', slugify(e.target.value)) }} required /></Field>
          <Field label="Slug (URL)"><input value={form.slug} onChange={e => update('slug', e.target.value)} required /></Field>
          <Field label="Descrição"><textarea value={form.description} onChange={e => update('description', e.target.value)} rows={4} /></Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Data de início"><input type="date" value={form.date} onChange={e => update('date', e.target.value)} required /></Field>
            <Field label="Data de término (opcional)"><input type="date" value={form.endDate} onChange={e => update('endDate', e.target.value)} /></Field>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Hora"><input value={form.time} onChange={e => update('time', e.target.value)} placeholder="ex.: 14h00" /></Field>
            <Field label="Local"><input value={form.location} onChange={e => update('location', e.target.value)} /></Field>
          </div>
          <Field label="Tipo"><select value={form.type} onChange={e => update('type', e.target.value)}><option value="conferencia">Conferência</option><option value="seminario">Seminário</option><option value="workshop">Workshop</option><option value="cultural">Cultural</option></select></Field>
          <Field label="Organizadores"><TagInput value={form.organizer} onChange={value => update('organizer', value)} placeholder="Escreva e prima Enter" /></Field>
          <Field label="Link externo (inscrições, etc.)"><input value={form.externalUrl} onChange={e => update('externalUrl', e.target.value)} placeholder="https://..." /></Field>
          <Field label="Informações adicionais"><textarea value={form.additionalInfo} onChange={e => update('additionalInfo', e.target.value)} rows={3} /></Field>
          <VideoField token={token} value={form.videoUrl} onChange={value => update('videoUrl', value)} />
          <Field label="Imagem de capa">
            <input type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={(e: ChangeEvent<HTMLInputElement>) => setSelectedImage(e.target.files?.[0] || null)} />
            {imageUrl && !selectedImage && <p className="mt-1 text-xs text-gray-500">Imagem actual mantida se não seleccionar outra.</p>}
          </Field>

          <div>
            <span className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200">Agenda / Programa</span>
            <div className="space-y-2">
              {form.agenda.map((row, index) => (
                <div key={index} className="grid grid-cols-[100px_1fr_1fr_auto] gap-2">
                  <input value={row.time || ''} onChange={e => updateAgendaRow(index, { time: e.target.value })} placeholder="09h00" className="rounded-lg border bg-white p-2 text-sm dark:bg-gray-800" />
                  <input value={row.title} onChange={e => updateAgendaRow(index, { title: e.target.value })} placeholder="Título" className="rounded-lg border bg-white p-2 text-sm dark:bg-gray-800" required />
                  <input value={row.description || ''} onChange={e => updateAgendaRow(index, { description: e.target.value })} placeholder="Descrição (opcional)" className="rounded-lg border bg-white p-2 text-sm dark:bg-gray-800" />
                  <button type="button" onClick={() => removeAgendaRow(index)} className="rounded-lg p-2 text-red-600 hover:bg-red-50"><Trash2 size={16} /></button>
                </div>
              ))}
            </div>
            <button type="button" onClick={addAgendaRow} className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-primary-dark hover:underline"><Plus size={14} /> Adicionar linha</button>
          </div>

          <div className="flex flex-wrap gap-6">
            <Check label="Em destaque" checked={form.featured} onChange={value => update('featured', value)} />
            <Check label="Publicado" checked={form.published} onChange={value => update('published', value)} />
          </div>
          <button disabled={busy} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-bold text-white hover:bg-primary-dark disabled:opacity-60">{busy ? 'A guardar…' : id ? 'Guardar alterações' : 'Criar evento'}</button>
        </form>
      </section>

      <section className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-900">
        <h3 className="mb-1 text-lg font-bold">Galeria</h3>
        {!id ? <p className="text-sm text-gray-500">Guarde o evento antes de adicionar imagens.</p> : <MediaGallery items={media} onUpload={uploadGalleryImage} onRemove={removeGalleryImage} />}
      </section>

      <section className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-900">
        <h3 className="mb-4 text-lg font-bold">Secções</h3>
        {!id ? <p className="text-sm text-gray-500">Guarde o evento antes de adicionar secções.</p> : <SectionsEditor token={token} ownerType="event" ownerId={id} sections={sections} onChange={setSections} />}
      </section>
    </div>
  )
}

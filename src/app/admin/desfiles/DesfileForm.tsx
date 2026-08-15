'use client'

import { FormEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { LayoutGrid, GalleryHorizontal } from 'lucide-react'
import { Field, Check } from '../AdminFormControls'
import { TagInput } from '../shared/TagInput'
import type { MediaAdmin } from '../shared/MediaGallery'
import { DesfileMediaGallery } from './DesfileMediaGallery'
import { adminRequest, slugify } from '../shared/adminApi'
import { toast } from '@/components/ui/Toast'

export type DesfileAdmin = {
  id: string; titulo: string; slug: string; descricao?: string; ano: number; pontos?: string[]
  media: MediaAdmin[]; mediaLayout?: 'grid' | 'slider'; published: boolean; created_at: string
}

type FormData = { title: string; slug: string; description: string; year: string; highlights: string[]; published: boolean }
const currentYear = new Date().getFullYear()
const initialForm: FormData = { title: '', slug: '', description: '', year: String(currentYear), highlights: [], published: true }

export function DesfileForm({ token, item }: { token: string; item?: DesfileAdmin }) {
  const router = useRouter()
  const [form, setForm] = useState<FormData>(initialForm)
  const [id, setId] = useState<string | undefined>(item?.id)
  const [media, setMedia] = useState<MediaAdmin[]>(item?.media || [])
  const [mediaLayout, setMediaLayout] = useState<'grid' | 'slider'>(item?.mediaLayout ?? 'grid')
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    if (!item) return
    setForm({ title: item.titulo, slug: item.slug, description: item.descricao || '', year: String(item.ano), highlights: item.pontos || [], published: item.published })
    setId(item.id)
    setMedia(item.media || [])
    setMediaLayout(item.mediaLayout ?? 'grid')
  }, [item])

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => setForm(current => ({ ...current, [key]: value }))

  const save = async (event: FormEvent) => {
    event.preventDefault(); setError(''); setNotice(''); setBusy(true)
    try {
      const payload = { title: form.title, slug: form.slug, description: form.description, year: Number(form.year), highlights: form.highlights, published: form.published }
      const saved = await adminRequest<{ id: string }>(token, `/desfiles${id ? `/${id}` : ''}`, { method: id ? 'PATCH' : 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      const message = id ? 'Desfile actualizado.' : 'Desfile criado. Já pode adicionar a galeria.'
      setNotice(message); toast.success(message)
      if (!id) { setId(saved.id); router.replace(`/admin/desfiles/${saved.id}/editar`) }
    } catch (err) { const message = err instanceof Error ? err.message : 'Erro ao guardar.'; setError(message); toast.error(message) } finally { setBusy(false) }
  }

  const uploadPhoto = async (file: File) => {
    const data = new window.FormData(); data.append('file', file)
    const upload = await adminRequest<{ url: string }>(token, '/media/upload', { method: 'POST', body: data })
    const created = await adminRequest<MediaAdmin>(token, `/desfiles/${id}/media`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ url: upload.url }) })
    setMedia(current => [...current, created])
  }
  const uploadVideo = async (file: File) => {
    const data = new window.FormData(); data.append('file', file)
    const upload = await adminRequest<{ url: string }>(token, '/media/upload-video', { method: 'POST', body: data })
    const created = await adminRequest<MediaAdmin>(token, `/desfiles/${id}/media`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ url: upload.url }) })
    setMedia(current => [...current, created])
  }
  const removeMedia = async (mediaId: string) => {
    await adminRequest(token, `/desfiles/media/${mediaId}`, { method: 'DELETE' })
    setMedia(current => current.filter(item => item.id !== mediaId))
  }

  const updateMediaLayout = async (value: 'grid' | 'slider') => {
    setMediaLayout(value)
    try { await adminRequest(token, `/desfiles/${id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ mediaLayout: value }) }) }
    catch (err) { toast.error(err instanceof Error ? err.message : 'Erro ao guardar o modo de visualização.') }
  }

  return (
    <div className="space-y-6">
      <section className="rounded-2xl bg-white p-6 shadow-sm dark:bg-[#151312]">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold">{id ? 'Editar desfile' : 'Novo desfile académico'}</h2>
          {id && <Link href={`/admin/desfiles/${id}/preview`} target="_blank" className="text-sm font-semibold text-primary-dark hover:underline">Pré-visualizar →</Link>}
        </div>
        {error && <p className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-[#3b1d1d] dark:text-[#fca5a5]">{error}</p>}
        {notice && <p className="mb-4 rounded-lg bg-green-50 p-3 text-sm text-green-700 dark:bg-[#193326] dark:text-[#86efac]">{notice}</p>}
        <form onSubmit={save} className="space-y-4">
          <Field label="Título"><input value={form.title} onChange={e => { update('title', e.target.value); if (!id) update('slug', slugify(e.target.value)) }} required /></Field>
          <Field label="Slug (URL)"><input value={form.slug} onChange={e => update('slug', e.target.value)} required /></Field>
          <Field label="Ano"><input type="number" value={form.year} onChange={e => update('year', e.target.value)} required /></Field>
          <Field label="Descrição"><textarea value={form.description} onChange={e => update('description', e.target.value)} rows={4} /></Field>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-[#E4D9CC]">Pontos importantes</label>
            <TagInput value={form.highlights} onChange={value => update('highlights', value)} placeholder="Escreva e prima Enter" />
          </div>
          <Check label="Publicado" checked={form.published} onChange={value => update('published', value)} />
          <button disabled={busy} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-bold text-white hover:bg-primary-dark disabled:opacity-60">{busy ? 'A guardar…' : id ? 'Guardar alterações' : 'Criar desfile'}</button>
        </form>
      </section>

      <section className="rounded-2xl bg-white p-6 shadow-sm dark:bg-[#151312]">
        <div className="mb-1 flex items-center justify-between">
          <h3 className="text-lg font-bold">Galeria de fotos e vídeos</h3>
          {id && (
            <div className="flex items-center overflow-hidden rounded-lg border border-gray-200 dark:border-[#332a22]">
              <button
                type="button"
                onClick={() => updateMediaLayout('grid')}
                title="Mostrar em bloco"
                className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold transition-colors ${mediaLayout === 'grid' ? 'bg-primary text-white' : 'text-gray-500 hover:bg-gray-100 dark:text-[#9c8d7d] dark:hover:bg-[#332a22]'}`}
              >
                <LayoutGrid size={14} /> Bloco
              </button>
              <button
                type="button"
                onClick={() => updateMediaLayout('slider')}
                title="Mostrar em slider"
                className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold transition-colors ${mediaLayout === 'slider' ? 'bg-primary text-white' : 'text-gray-500 hover:bg-gray-100 dark:text-[#9c8d7d] dark:hover:bg-[#332a22]'}`}
              >
                <GalleryHorizontal size={14} /> Slider
              </button>
            </div>
          )}
        </div>
        {!id ? <p className="text-sm text-gray-500 dark:text-[#9c8d7d]">Guarde o desfile antes de adicionar fotos e vídeos.</p> : <DesfileMediaGallery items={media} onUploadPhotos={uploadPhoto} onUploadVideos={uploadVideo} onRemove={removeMedia} />}
      </section>
    </div>
  )
}

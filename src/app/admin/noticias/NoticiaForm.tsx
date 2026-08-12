'use client'

import { FormEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Field, Check } from '../AdminFormControls'
import { TagInput } from '../shared/TagInput'
import { MediaGallery, MediaAdmin } from '../shared/MediaGallery'
import { VideoField } from '../shared/VideoField'
import { SectionsEditor, SectionAdmin } from '../shared/SectionsEditor'
import { adminRequest, slugify } from '../shared/adminApi'

type NewsCategory = 'institucional' | 'investigacao' | 'academico' | 'comunidade'
const CATEGORIES: { value: NewsCategory; label: string }[] = [
  { value: 'institucional', label: 'Institucional' },
  { value: 'investigacao', label: 'Investigação' },
  { value: 'academico', label: 'Académico' },
  { value: 'comunidade', label: 'Comunidade' },
]

export type ContentAdmin = {
  id: string; type: 'news' | 'post'; title: string; slug: string; excerpt?: string; body?: string
  category?: NewsCategory; author?: string; tags?: string[]; metaTitle?: string; metaDescription?: string
  videoUrl?: string; featured: boolean; published: boolean; media: MediaAdmin[]; sections: SectionAdmin[]
}

type FormData = { title: string; slug: string; excerpt: string; body: string; category: NewsCategory | ''; author: string; tags: string[]; metaTitle: string; metaDescription: string; videoUrl: string; featured: boolean; published: boolean }
const initialForm: FormData = { title: '', slug: '', excerpt: '', body: '', category: '', author: '', tags: [], metaTitle: '', metaDescription: '', videoUrl: '', featured: false, published: true }

export function NoticiaForm({ token, item }: { token: string; item?: ContentAdmin }) {
  const router = useRouter()
  const [form, setForm] = useState<FormData>(initialForm)
  const [id, setId] = useState<string | undefined>(item?.id)
  const [media, setMedia] = useState<MediaAdmin[]>(item?.media || [])
  const [sections, setSections] = useState<SectionAdmin[]>(item?.sections || [])
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    if (!item) return
    setForm({ title: item.title, slug: item.slug, excerpt: item.excerpt || '', body: item.body || '', category: item.category || '', author: item.author || '', tags: item.tags || [], metaTitle: item.metaTitle || '', metaDescription: item.metaDescription || '', videoUrl: item.videoUrl || '', featured: item.featured, published: item.published })
    setId(item.id)
    setMedia(item.media || [])
    setSections(item.sections || [])
  }, [item])

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => setForm(current => ({ ...current, [key]: value }))

  const save = async (event: FormEvent) => {
    event.preventDefault(); setError(''); setNotice(''); setBusy(true)
    try {
      const payload = { type: 'news', title: form.title, slug: form.slug, excerpt: form.excerpt || undefined, body: form.body || undefined, category: form.category || undefined, author: form.author || undefined, tags: form.tags.length ? form.tags : undefined, metaTitle: form.metaTitle || undefined, metaDescription: form.metaDescription || undefined, videoUrl: form.videoUrl || undefined, featured: form.featured, published: form.published }
      const saved = await adminRequest<{ id: string }>(token, `/content${id ? `/${id}` : ''}`, { method: id ? 'PATCH' : 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      setNotice(id ? 'Notícia actualizada.' : 'Notícia criada. Já pode adicionar imagens e secções.')
      if (!id) { setId(saved.id); router.replace(`/admin/noticias/${saved.id}/editar`) }
    } catch (err) { setError(err instanceof Error ? err.message : 'Erro ao guardar.') } finally { setBusy(false) }
  }

  const uploadCover = async (file: File) => {
    const data = new window.FormData(); data.append('file', file)
    const upload = await adminRequest<{ url: string }>(token, '/media/upload', { method: 'POST', body: data })
    const created = await adminRequest<MediaAdmin>(token, `/content/${id}/media`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ url: upload.url }) })
    setMedia(current => [...current, created])
  }
  const removeCover = async (mediaId: string) => {
    await adminRequest(token, `/content/media/${mediaId}`, { method: 'DELETE' })
    setMedia(current => current.filter(item => item.id !== mediaId))
  }

  return (
    <div className="space-y-6">
      <section className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-900">
        <h2 className="mb-5 text-xl font-bold">{id ? 'Editar notícia' : 'Nova notícia'}</h2>
        {error && <p className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}
        {notice && <p className="mb-4 rounded-lg bg-green-50 p-3 text-sm text-green-700">{notice}</p>}
        <form onSubmit={save} className="space-y-4">
          <Field label="Título"><input value={form.title} onChange={e => { update('title', e.target.value); if (!id) update('slug', slugify(e.target.value)) }} required /></Field>
          <Field label="Slug (URL)"><input value={form.slug} onChange={e => update('slug', e.target.value)} required /></Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Categoria"><select value={form.category} onChange={e => update('category', e.target.value as NewsCategory | '')}><option value="">Sem categoria</option>{CATEGORIES.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}</select></Field>
            <Field label="Autor"><input value={form.author} onChange={e => update('author', e.target.value)} /></Field>
          </div>
          <Field label="Resumo"><textarea value={form.excerpt} onChange={e => update('excerpt', e.target.value)} rows={3} /></Field>
          <Field label="Conteúdo principal"><textarea value={form.body} onChange={e => update('body', e.target.value)} rows={6} /></Field>
          <Field label="Tags"><TagInput value={form.tags} onChange={value => update('tags', value)} placeholder="Escreva e prima Enter" /></Field>
          <VideoField token={token} value={form.videoUrl} onChange={value => update('videoUrl', value)} />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Meta título (SEO)"><input value={form.metaTitle} onChange={e => update('metaTitle', e.target.value)} /></Field>
            <Field label="Meta descrição (SEO)"><input value={form.metaDescription} onChange={e => update('metaDescription', e.target.value)} /></Field>
          </div>
          <div className="flex flex-wrap gap-6">
            <Check label="Em destaque" checked={form.featured} onChange={value => update('featured', value)} />
            <Check label="Publicado" checked={form.published} onChange={value => update('published', value)} />
          </div>
          <button disabled={busy} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-bold text-white hover:bg-primary-dark disabled:opacity-60">{busy ? 'A guardar…' : id ? 'Guardar alterações' : 'Criar notícia'}</button>
        </form>
      </section>

      <section className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-900">
        <h3 className="mb-1 text-lg font-bold">Galeria de capa</h3>
        {!id ? <p className="text-sm text-gray-500">Guarde a notícia antes de adicionar imagens.</p> : <MediaGallery items={media} onUpload={uploadCover} onRemove={removeCover} />}
      </section>

      <section className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-900">
        <h3 className="mb-4 text-lg font-bold">Secções</h3>
        {!id ? <p className="text-sm text-gray-500">Guarde a notícia antes de adicionar secções.</p> : <SectionsEditor token={token} ownerType="content" ownerId={id} sections={sections} onChange={setSections} />}
      </section>
    </div>
  )
}

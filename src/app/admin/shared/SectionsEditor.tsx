'use client'

import { Dispatch, SetStateAction, useState } from 'react'
import { DndContext, DragEndEvent, PointerSensor, closestCenter, useSensor, useSensors } from '@dnd-kit/core'
import { SortableContext, arrayMove, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { GripVertical, Plus, Trash2 } from 'lucide-react'
import { Field } from '../AdminFormControls'
import { MediaGallery, MediaAdmin } from './MediaGallery'
import { VideoField } from './VideoField'
import { adminRequest } from './adminApi'

export type SectionAdmin = { id: string; title?: string; text?: string; order: number; videoUrl?: string; caption?: string; media: MediaAdmin[] }

export function SectionsEditor({ token, ownerType, ownerId, sections, onChange }: { token: string; ownerType: 'content' | 'event'; ownerId: string; sections: SectionAdmin[]; onChange: Dispatch<SetStateAction<SectionAdmin[]>> }) {
  const [error, setError] = useState('')
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }))
  const ordered = [...sections].sort((a, b) => a.order - b.order)

  const persist = async (next: SectionAdmin[]) => {
    const renumbered = next.map((section, index) => ({ ...section, order: index }))
    onChange(renumbered)
    try { await adminRequest(token, '/sections/reorder', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ids: renumbered.map(section => section.id) }) }) }
    catch (err) { setError(err instanceof Error ? err.message : 'Erro ao reordenar.') }
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over || active.id === over.id) return
    const oldIndex = ordered.findIndex(section => section.id === active.id)
    const newIndex = ordered.findIndex(section => section.id === over.id)
    persist(arrayMove(ordered, oldIndex, newIndex))
  }

  const addSection = async () => {
    setError('')
    try {
      const created = await adminRequest<SectionAdmin>(token, '/sections', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ownerType, ownerId }) })
      onChange(current => [...current, { ...created, media: [] }])
    } catch (err) { setError(err instanceof Error ? err.message : 'Erro ao criar secção.') }
  }

  const updateSection = async (id: string, patch: Partial<Pick<SectionAdmin, 'title' | 'text' | 'videoUrl' | 'caption'>>) => {
    onChange(current => current.map(section => section.id === id ? { ...section, ...patch } : section))
    try { await adminRequest(token, `/sections/${id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(patch) }) }
    catch (err) { setError(err instanceof Error ? err.message : 'Erro ao guardar secção.') }
  }

  const removeSection = async (id: string) => {
    if (!confirm('Remover esta secção e as suas imagens?')) return
    try { await adminRequest(token, `/sections/${id}`, { method: 'DELETE' }); onChange(current => current.filter(section => section.id !== id)) }
    catch (err) { setError(err instanceof Error ? err.message : 'Erro ao remover secção.') }
  }

  const uploadSectionMedia = async (sectionId: string, file: File) => {
    const data = new window.FormData(); data.append('file', file)
    const upload = await adminRequest<{ url: string }>(token, '/media/upload', { method: 'POST', body: data })
    const created = await adminRequest<MediaAdmin>(token, `/sections/${sectionId}/media`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ url: upload.url }) })
    onChange(current => current.map(section => section.id === sectionId ? { ...section, media: [...section.media, created] } : section))
  }
  const removeSectionMedia = async (sectionId: string, mediaId: string) => {
    await adminRequest(token, `/sections/media/${mediaId}`, { method: 'DELETE' })
    onChange(current => current.map(section => section.id === sectionId ? { ...section, media: section.media.filter(item => item.id !== mediaId) } : section))
  }

  return (
    <div>
      {error && <p className="mb-3 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={ordered.map(section => section.id)} strategy={verticalListSortingStrategy}>
          <div className="space-y-4">
            {ordered.map((section, index) => (
              <SectionCard key={section.id} token={token} section={section} index={index} onUpdate={patch => updateSection(section.id, patch)} onRemove={() => removeSection(section.id)} onUpload={file => uploadSectionMedia(section.id, file)} onRemoveMedia={mediaId => removeSectionMedia(section.id, mediaId)} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
      <button type="button" onClick={addSection} className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary px-4 py-2 text-sm font-bold text-primary-dark hover:bg-amber-50"><Plus size={16} /> Adicionar secção</button>
    </div>
  )
}

function SectionCard({ token, section, index, onUpdate, onRemove, onUpload, onRemoveMedia }: { token: string; section: SectionAdmin; index: number; onUpdate: (patch: Partial<Pick<SectionAdmin, 'title' | 'text' | 'videoUrl' | 'caption'>>) => void; onRemove: () => void; onUpload: (file: File) => Promise<void>; onRemoveMedia: (mediaId: string) => Promise<void> }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: section.id })
  const style = { transform: CSS.Transform.toString(transform), transition, opacity: isDragging ? 0.5 : 1 }
  return (
    <div ref={setNodeRef} style={style} className="rounded-xl border bg-gray-50 p-4 dark:bg-gray-800/50">
      <div className="flex items-start gap-3">
        <button type="button" {...attributes} {...listeners} className="mt-2 cursor-grab touch-none text-gray-400 hover:text-gray-600" title="Arrastar para reordenar"><GripVertical size={18} /></button>
        <div className="flex-1 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wide text-gray-400">Secção {index + 1}</span>
            <button type="button" onClick={onRemove} className="rounded-lg p-1.5 text-red-600 hover:bg-red-50" title="Remover secção"><Trash2 size={16} /></button>
          </div>
          <Field label="Título da secção"><input defaultValue={section.title || ''} onBlur={e => onUpdate({ title: e.target.value })} /></Field>
          <Field label="Texto"><textarea defaultValue={section.text || ''} onBlur={e => onUpdate({ text: e.target.value })} rows={4} /></Field>
          <Field label="Legenda"><input defaultValue={section.caption || ''} onBlur={e => onUpdate({ caption: e.target.value })} /></Field>
          <VideoField token={token} value={section.videoUrl || ''} onChange={value => onUpdate({ videoUrl: value })} />
          <div>
            <span className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">Imagens</span>
            <MediaGallery items={section.media} onUpload={onUpload} onRemove={onRemoveMedia} />
          </div>
        </div>
      </div>
    </div>
  )
}

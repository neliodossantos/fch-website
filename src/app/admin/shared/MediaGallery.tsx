/* eslint-disable @next/next/no-img-element */
'use client'

import { ChangeEvent, useState } from 'react'
import { Trash2 } from 'lucide-react'
import { resolveMediaUrl } from './adminApi'

export type MediaAdmin = { id: string; url: string; alt?: string; caption?: string }

export function MediaGallery({ items, onUpload, onRemove }: { items: MediaAdmin[]; onUpload: (file: File) => Promise<void>; onRemove: (id: string) => Promise<void> }) {
  const [uploading, setUploading] = useState(false)

  const handleFiles = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    event.target.value = ''
    if (files.length === 0) return
    setUploading(true)
    try { for (const file of files) await onUpload(file) } finally { setUploading(false) }
  }

  return (
    <div>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
        {items.map(item => (
          <div key={item.id} className="group relative overflow-hidden rounded-lg border bg-gray-100">
            <img src={resolveMediaUrl(item.url)} alt={item.alt || ''} className="h-24 w-full object-cover" />
            <button type="button" onClick={() => onRemove(item.id)} className="absolute right-1 top-1 rounded-full bg-red-600 p-1 text-white opacity-90 hover:bg-red-700"><Trash2 size={13} /></button>
          </div>
        ))}
      </div>
      <input type="file" accept="image/jpeg,image/png,image/webp,image/gif" multiple onChange={handleFiles} disabled={uploading} className="mt-3 block w-full text-sm" />
      {uploading && <p className="mt-1 text-xs text-gray-500">A enviar imagens…</p>}
    </div>
  )
}

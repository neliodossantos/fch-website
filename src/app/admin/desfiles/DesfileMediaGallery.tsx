/* eslint-disable @next/next/no-img-element */
'use client'

import { ChangeEvent, useState } from 'react'
import { Trash2, Video } from 'lucide-react'
import { resolveMediaUrl } from '../shared/adminApi'
import { isVideoUrl } from '@/lib/api'
import type { MediaAdmin } from '../shared/MediaGallery'

interface DesfileMediaGalleryProps {
  items: MediaAdmin[]
  onUploadPhotos: (file: File) => Promise<void>
  onUploadVideos: (file: File) => Promise<void>
  onRemove: (id: string) => Promise<void>
}

export function DesfileMediaGallery({ items, onUploadPhotos, onUploadVideos, onRemove }: DesfileMediaGalleryProps) {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')

  const handleFiles = async (event: ChangeEvent<HTMLInputElement>, upload: (file: File) => Promise<void>) => {
    const files = Array.from(event.target.files || [])
    event.target.value = ''
    if (files.length === 0) return
    setUploading(true); setError('')
    const failed: string[] = []
    for (const file of files) {
      try { await upload(file) } catch { failed.push(file.name) }
    }
    if (failed.length > 0) setError(`Não foi possível enviar: ${failed.join(', ')}`)
    setUploading(false)
  }

  const handleRemove = async (id: string) => {
    setError('')
    try { await onRemove(id) } catch (err) { setError(err instanceof Error ? err.message : 'Erro ao remover ficheiro.') }
  }

  return (
    <div>
      {error && <p className="mb-2 rounded-lg bg-red-50 p-2 text-xs text-red-700 dark:bg-[#3b1d1d] dark:text-[#fca5a5]">{error}</p>}
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
        {items.map(item => {
          const url = resolveMediaUrl(item.url)
          const video = isVideoUrl(item.url)
          return (
            <div key={item.id} className="group relative overflow-hidden rounded-lg border bg-gray-100 dark:border-[#332a22] dark:bg-[#1f1a16]">
              {video ? (
                <>
                  <video src={url} className="h-24 w-full object-cover" muted />
                  <span className="absolute bottom-1 left-1 grid h-5 w-5 place-items-center rounded-full bg-black/60 text-white"><Video size={11} /></span>
                </>
              ) : (
                <img src={url} alt={item.alt || ''} className="h-24 w-full object-cover" />
              )}
              <button type="button" onClick={() => handleRemove(item.id)} className="absolute right-1 top-1 rounded-full bg-red-600 p-1 text-white opacity-90 hover:bg-red-700"><Trash2 size={13} /></button>
            </div>
          )
        })}
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <label className="block text-xs font-medium text-gray-700 dark:text-[#E4D9CC]">
          Fotos
          <input type="file" accept="image/jpeg,image/png,image/webp,image/gif" multiple onChange={e => handleFiles(e, onUploadPhotos)} disabled={uploading} className="mt-1 block w-full text-sm" />
        </label>
        <label className="block text-xs font-medium text-gray-700 dark:text-[#E4D9CC]">
          Vídeos
          <input type="file" accept="video/mp4,video/webm,video/quicktime" multiple onChange={e => handleFiles(e, onUploadVideos)} disabled={uploading} className="mt-1 block w-full text-sm" />
        </label>
      </div>
      {uploading && <p className="mt-1 text-xs text-gray-500 dark:text-[#9c8d7d]">A enviar…</p>}
    </div>
  )
}

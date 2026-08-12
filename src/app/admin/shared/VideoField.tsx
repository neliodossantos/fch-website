'use client'

import { ChangeEvent, useEffect, useState } from 'react'
import { adminRequest } from './adminApi'

export function VideoField({ token, value, onChange, label = 'Vídeo (link ou upload)' }: { token: string; value: string; onChange: (url: string) => void; label?: string }) {
  const [draft, setDraft] = useState(value)
  const [selected, setSelected] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => { setDraft(value) }, [value])

  const upload = async () => {
    if (!selected) return
    setUploading(true); setError('')
    try {
      const data = new window.FormData(); data.append('file', selected)
      const result = await adminRequest<{ url: string }>(token, '/media/upload-video', { method: 'POST', body: data })
      setDraft(result.url); onChange(result.url); setSelected(null)
    } catch (err) { setError(err instanceof Error ? err.message : 'Erro ao enviar vídeo.') } finally { setUploading(false) }
  }

  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-200">{label}</label>
      <input value={draft} onChange={event => setDraft(event.target.value)} onBlur={() => onChange(draft)} placeholder="https://youtube.com/watch?v=..." className="w-full rounded-lg border bg-white p-3 dark:bg-gray-800" />
      <div className="mt-2 flex items-center gap-3">
        <input type="file" accept="video/mp4,video/webm,video/quicktime" onChange={(event: ChangeEvent<HTMLInputElement>) => setSelected(event.target.files?.[0] || null)} className="block flex-1 text-sm" disabled={uploading} />
        <button type="button" onClick={upload} disabled={!selected || uploading} className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-white disabled:opacity-50">{uploading ? 'A enviar…' : 'Enviar vídeo'}</button>
      </div>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  )
}

'use client'

import { KeyboardEvent, useState } from 'react'
import { X } from 'lucide-react'

export function TagInput({ value, onChange, placeholder }: { value: string[]; onChange: (value: string[]) => void; placeholder?: string }) {
  const [draft, setDraft] = useState('')

  const add = () => {
    const tag = draft.trim()
    if (tag && !value.includes(tag)) onChange([...value, tag])
    setDraft('')
  }
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' || event.key === ',') { event.preventDefault(); add() }
  }
  const remove = (tag: string) => onChange(value.filter(item => item !== tag))

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {value.map(tag => (
          <span key={tag} className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-primary-dark dark:bg-amber-950/30 dark:text-primary-light">
            {tag}
            <button type="button" onClick={() => remove(tag)} className="hover:text-red-600 dark:hover:text-[#f87171]"><X size={12} /></button>
          </span>
        ))}
      </div>
      <input value={draft} onChange={event => setDraft(event.target.value)} onKeyDown={handleKeyDown} onBlur={add} placeholder={placeholder} className="mt-2 w-full rounded-lg border bg-white p-3 dark:bg-[#1f1a16]" />
    </div>
  )
}

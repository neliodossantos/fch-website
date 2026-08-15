'use client'

import { CheckCircle2, Info, X, XCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

type ToastVariant = 'success' | 'error' | 'info'
type ToastItem = { id: string; message: string; variant: ToastVariant }

const toastEvent = 'fch:toast'

function show(message: string, variant: ToastVariant) {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent<ToastItem>(toastEvent, { detail: { id: crypto.randomUUID(), message, variant } }))
}

export const toast = {
  success: (message: string) => show(message, 'success'),
  error: (message: string) => show(message, 'error'),
  info: (message: string) => show(message, 'info'),
}

const styles = {
  success: { icon: CheckCircle2, className: 'border-emerald-200 bg-emerald-50 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-50' },
  error: { icon: XCircle, className: 'border-red-200 bg-red-50 text-red-950 dark:border-red-900 dark:bg-red-950 dark:text-red-50' },
  info: { icon: Info, className: 'border-amber-200 bg-amber-50 text-amber-950 dark:border-amber-900 dark:bg-[#302416] dark:text-amber-50' },
} as const

export function ToastViewport() {
  const [items, setItems] = useState<ToastItem[]>([])

  useEffect(() => {
    const receive = (event: Event) => {
      const item = (event as CustomEvent<ToastItem>).detail
      setItems(current => [...current.slice(-3), item])
      window.setTimeout(() => setItems(current => current.filter(toast => toast.id !== item.id)), 5000)
    }
    window.addEventListener(toastEvent, receive)
    return () => window.removeEventListener(toastEvent, receive)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-x-4 top-4 z-50 flex flex-col items-end gap-3 sm:left-auto sm:w-full sm:max-w-sm" aria-live="polite" aria-relevant="additions">
      {items.map(item => {
        const { icon: Icon, className } = styles[item.variant]
        return <div key={item.id} role={item.variant === 'error' ? 'alert' : 'status'} className={`pointer-events-auto flex w-full items-start gap-3 rounded-xl border p-4 shadow-lg ${className}`}>
          <Icon size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
          <p className="flex-1 text-sm font-medium leading-5">{item.message}</p>
          <button type="button" onClick={() => setItems(current => current.filter(toast => toast.id !== item.id))} className="rounded-md p-0.5 opacity-70 transition hover:bg-black/10 hover:opacity-100 dark:hover:bg-white/10" aria-label="Fechar notificação"><X size={18} /></button>
        </div>
      })}
    </div>
  )
}

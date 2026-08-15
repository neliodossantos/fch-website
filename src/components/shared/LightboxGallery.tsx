/* eslint-disable @next/next/no-img-element */
'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Expand, Images, Play, X } from 'lucide-react'
import { isVideoUrl } from '@/lib/api'

export interface LightboxGalleryItem {
  id: string
  url: string
  alt?: string
}

interface LightboxGalleryProps {
  items: LightboxGalleryItem[]
  layout?: 'grid' | 'slider'
  thumbClassName?: string
}

const ITEMS_PER_BATCH = 9

export function LightboxGallery({ items, layout = 'grid', thumbClassName }: LightboxGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_BATCH)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const previousOverflowRef = useRef('')

  useEffect(() => {
    setVisibleCount(ITEMS_PER_BATCH)
    setOpenIndex(null)
  }, [items])

  useEffect(() => {
    if (openIndex === null) return
    previousOverflowRef.current = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenIndex(null)
      if (event.key === 'ArrowRight') setOpenIndex(current => current === null ? null : (current + 1) % items.length)
      if (event.key === 'ArrowLeft') setOpenIndex(current => current === null ? null : (current - 1 + items.length) % items.length)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflowRef.current
      window.removeEventListener('keydown', onKeyDown)
      triggerRef.current?.focus()
    }
  }, [openIndex, items.length])

  if (items.length === 0) return null

  const active = openIndex !== null ? items[openIndex] : null
  const shownItems = items.slice(0, visibleCount)
  const remaining = items.length - shownItems.length
  const go = (direction: -1 | 1) => setOpenIndex(current => current === null ? null : (current + direction + items.length) % items.length)
  const open = (index: number, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger
    setOpenIndex(index)
  }

  const thumb = (item: LightboxGalleryItem, index: number, className: string, featured = false) => {
    const video = isVideoUrl(item.url)
    const label = item.alt || `${video ? 'Vídeo' : 'Imagem'} ${index + 1}`
    return (
      <button
        key={item.id}
        type="button"
        onClick={event => open(index, event.currentTarget)}
        aria-label={`Abrir ${label}`}
        className={`group relative isolate overflow-hidden rounded-2xl bg-gray-100 text-left shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:bg-[#332a22] dark:ring-white/10 dark:focus-visible:ring-offset-[#151312] ${className}`}
      >
        {video
          ? <video src={item.url} muted playsInline preload="metadata" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          : <img src={item.url} alt={item.alt || ''} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />}
        <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-80 transition group-hover:opacity-100" />
        <span className="absolute bottom-3 left-3 inline-flex max-w-[calc(100%-1.5rem)] items-center gap-2 rounded-full bg-black/45 px-2.5 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
          {video ? <Play className="h-3.5 w-3.5 fill-current" /> : <Expand className="h-3.5 w-3.5" />}
          <span className="truncate">{featured && item.alt ? item.alt : `${index + 1} de ${items.length}`}</span>
        </span>
        <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-gray-900 opacity-0 shadow-sm transition group-hover:opacity-100 group-focus-visible:opacity-100">
          <Expand className="h-4 w-4" />
        </span>
      </button>
    )
  }

  return (
    <>
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="eyebrow">Registo visual</p>
          <p className="mt-1 text-sm text-gray-600 dark:text-[#d8cfc4]">Seleccione uma imagem para ampliar e navegar pela colecção.</p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-bold text-primary-dark dark:bg-primary/15 dark:text-primary-light">
          <Images className="h-4 w-4" aria-hidden="true" />
          {items.length} {items.length === 1 ? 'ficheiro' : 'ficheiros'}
        </span>
      </div>

      {layout === 'slider' ? (
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:thin]">
          {items.map((item, index) => thumb(item, index, `h-64 w-[84%] shrink-0 snap-center sm:w-[44%] ${thumbClassName || ''}`))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {shownItems.map((item, index) => thumb(item, index, `${index === 0 && shownItems.length > 1 ? 'col-span-2 row-span-2 min-h-64 sm:min-h-[25rem]' : 'min-h-36 sm:min-h-48'} ${thumbClassName || ''}`, index === 0))}
          </div>
          {remaining > 0 && (
            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => setVisibleCount(current => Math.min(current + ITEMS_PER_BATCH, items.length))}
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white px-5 py-2.5 text-sm font-bold text-primary-dark transition hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:bg-[#211d1a] dark:text-primary-light dark:hover:text-[#211d1a] dark:focus-visible:ring-offset-[#151312]"
              >
                Mostrar mais {Math.min(remaining, ITEMS_PER_BATCH)} {remaining === 1 ? 'ficheiro' : 'ficheiros'}
              </button>
              <p className="mt-2 text-xs text-gray-500 dark:text-[#9c8d7d]">A mostrar {shownItems.length} de {items.length}</p>
            </div>
          )}
        </>
      )}

      {active && (
        <div role="dialog" aria-modal="true" aria-label={`Visualização ampliada: ${active.alt || `ficheiro ${openIndex! + 1}`}`} className="fixed inset-0 z-50 flex items-center justify-center bg-[#100e0d]/95 p-4 sm:p-6" style={{ animation: 'lightbox-backdrop-in 200ms ease-out both' }} onClick={() => setOpenIndex(null)}>
          <div className="absolute left-4 top-4 rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold text-white/85 backdrop-blur sm:left-6 sm:top-6">
            {openIndex! + 1} <span className="text-white/50">/</span> {items.length}
          </div>
          <button ref={closeButtonRef} type="button" onClick={() => setOpenIndex(null)} aria-label="Fechar galeria" className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:right-6 sm:top-6">
            <X className="h-5 w-5" />
          </button>

          {items.length > 1 && (
            <>
              <button type="button" onClick={event => { event.stopPropagation(); go(-1) }} aria-label="Ficheiro anterior" className="absolute left-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:left-6">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button type="button" onClick={event => { event.stopPropagation(); go(1) }} aria-label="Ficheiro seguinte" className="absolute right-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:right-6">
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          <div key={active.id} className="flex max-h-full max-w-full flex-col items-center" style={{ animation: 'lightbox-media-in 220ms cubic-bezier(0.16,1,0.3,1) both' }} onClick={event => event.stopPropagation()}>
            {isVideoUrl(active.url)
              ? <video src={active.url} controls autoPlay className="max-h-[72vh] max-w-[88vw] rounded-xl object-contain shadow-2xl sm:max-h-[76vh]" />
              : <img src={active.url} alt={active.alt || ''} className="max-h-[72vh] max-w-[88vw] rounded-xl object-contain shadow-2xl sm:max-h-[76vh]" />}
            {active.alt && <p className="mt-4 max-w-2xl text-center text-sm text-white/75">{active.alt}</p>}
            {items.length > 1 && <p className="mt-2 text-xs text-white/45">Use as setas do teclado para navegar</p>}
          </div>
        </div>
      )}
    </>
  )
}

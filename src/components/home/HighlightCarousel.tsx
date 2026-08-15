'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronLeft, ChevronRight, type LucideIcon } from 'lucide-react'

export interface HighlightMeta {
  icon: LucideIcon
  label: string
}

export interface HighlightItem {
  id: string
  href: string
  title: string
  description: string
  image?: string | null
  date: string
  featured?: boolean
  meta: HighlightMeta[]
}

interface HighlightCarouselProps {
  eyebrow: string
  title: string
  subtitle?: string
  viewAllHref: string
  viewAllLabel: string
  ctaLabel: string
  emptyMessage: string
  items: HighlightItem[]
  className?: string
}

const PAGE_SIZE = 3

function FeaturedBadge() {
  return (
    <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
      Em destaque
    </span>
  )
}

function MetaRow({ meta, className = '' }: { meta: HighlightMeta[]; className?: string }) {
  if (meta.length === 0) return null
  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-xs ${className}`}>
      {meta.map(({ icon: Icon, label }, index) => (
        <span key={index} className="inline-flex items-center gap-1.5">
          <Icon className="h-3.5 w-3.5 shrink-0" />
          {label}
        </span>
      ))}
    </div>
  )
}

function FeaturedCard({ item, ctaLabel }: { item: HighlightItem; ctaLabel: string }) {
  return (
    <Link
      href={item.href}
      className="group relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-2xl bg-gray-900"
    >
      {item.image && (
        <Image src={item.image} alt="" fill unoptimized className="object-cover transition duration-500 group-hover:scale-105" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
      {item.featured && <div className="absolute left-5 top-5"><FeaturedBadge /></div>}
      <span className="absolute right-5 top-5 text-xs font-semibold text-white/80">{item.date}</span>
      <div className="relative p-6">
        <h3 className="text-2xl font-bold leading-snug text-white">{item.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/80">{item.description}</p>
        <MetaRow meta={item.meta} className="mt-4 text-white/70" />
        <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-gray-900 transition group-hover:bg-primary group-hover:text-white">
          {ctaLabel} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}

function SmallCard({ item, ctaLabel }: { item: HighlightItem; ctaLabel: string }) {
  return (
    <Link
      href={item.href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-[#332a22] dark:bg-[#1f1a16]"
    >
      <div className="relative h-32 w-full shrink-0 bg-gray-100 dark:bg-[#332a22]">
        {item.image && <Image src={item.image} alt="" fill unoptimized className="object-cover transition duration-500 group-hover:scale-105" />}
        {item.featured && <div className="absolute left-3 top-3"><FeaturedBadge /></div>}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-2 text-sm font-bold leading-snug text-gray-900 dark:text-[#F5F0EA]">{item.title}</h3>
        <MetaRow meta={item.meta} className="mt-2 text-gray-500 dark:text-[#9c8d7d]" />
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-dark dark:text-primary-light">
            {ctaLabel} <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
          </span>
          <span className="text-xs text-gray-400 dark:text-[#9c8d7d]">{item.date}</span>
        </div>
      </div>
    </Link>
  )
}

export function HighlightCarousel({ eyebrow, title, subtitle, viewAllHref, viewAllLabel, ctaLabel, emptyMessage, items, className = '' }: HighlightCarouselProps) {
  const [pageIndex, setPageIndex] = useState(0)
  const pageCount = Math.ceil(items.length / PAGE_SIZE)
  const goTo = (direction: -1 | 1) => setPageIndex(current => (current + direction + pageCount) % pageCount)
  const page = items.slice(pageIndex * PAGE_SIZE, pageIndex * PAGE_SIZE + PAGE_SIZE)
  const [featured, ...rest] = page

  return (
    <section className={`py-20 sm:py-24 ${className}`}>
      <div className="container mx-auto px-5 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="section-heading">{title}</h2>
            {subtitle && <p className="mt-2 max-w-lg text-sm leading-relaxed text-gray-600 dark:text-[#d8cfc4]">{subtitle}</p>}
          </div>
          <Link href={viewAllHref} className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-gray-800 transition hover:text-primary-dark dark:text-[#E4D9CC] dark:hover:text-primary-light">
            {viewAllLabel} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {items.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-[#9c8d7d]">{emptyMessage}</p>
        ) : (
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.6fr_1fr_1fr]">
            {featured && <FeaturedCard item={featured} ctaLabel={ctaLabel} />}
            {rest.map(item => <SmallCard key={item.id} item={item} ctaLabel={ctaLabel} />)}
          </div>
        )}

        {pageCount > 1 && (
          <div className="mt-6 flex justify-end">
            <div className="flex items-center overflow-hidden rounded-full border border-gray-200 dark:border-[#332a22]">
              <button type="button" onClick={() => goTo(-1)} aria-label="Anterior" className="grid h-9 w-9 place-items-center text-gray-600 transition hover:bg-gray-100 dark:text-[#d8cfc4] dark:hover:bg-[#332a22]"><ChevronLeft className="h-4 w-4" /></button>
              <div className="h-5 w-px bg-gray-200 dark:bg-[#332a22]" />
              <button type="button" onClick={() => goTo(1)} aria-label="Seguinte" className="grid h-9 w-9 place-items-center text-gray-600 transition hover:bg-gray-100 dark:text-[#d8cfc4] dark:hover:bg-[#332a22]"><ChevronRight className="h-4 w-4" /></button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

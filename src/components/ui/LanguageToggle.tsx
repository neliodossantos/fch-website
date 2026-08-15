'use client'

import Link from 'next/link'
import { Languages } from 'lucide-react'
import { getLocale, localizePath } from '@/lib/i18n'
import { usePathname } from 'next/navigation'

export function LanguageToggle() {
  const pathname = usePathname()
  const locale = getLocale(pathname)
  const nextLocale = locale === 'en' ? 'pt' : 'en'

  return (
    <Link href={localizePath(pathname, nextLocale)} className="inline-flex items-center gap-1.5 rounded-md px-2 py-2 text-xs font-bold text-gray-700 transition-colors hover:bg-gray-100 dark:text-[#d8cfc4] dark:hover:bg-[#332a22]" aria-label={locale === 'en' ? 'Mudar para Português' : 'Switch to English'}>
      <Languages size={17} aria-hidden="true" /> {locale === 'en' ? 'PT' : 'EN'}
    </Link>
  )
}

'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useCallback } from 'react'
import { Input } from '@/components/ui/Input'

interface LibraryFiltersProps {
  defaultQ: string
  defaultType: string
  defaultYear: string
}

export function LibraryFilters({ defaultQ, defaultType, defaultYear }: LibraryFiltersProps) {
  const router = useRouter()
  const pathname = usePathname()

  const updateParams = useCallback(
    (updates: Record<string, string>) => {
      const params = new URLSearchParams()
      if (defaultQ) params.set('q', defaultQ)
      if (defaultType) params.set('type', defaultType)
      if (defaultYear) params.set('year', defaultYear)
      Object.entries(updates).forEach(([key, value]) => {
        if (value) params.set(key, value)
        else params.delete(key)
      })
      router.push(`${pathname}?${params.toString()}`)
    },
    [router, pathname, defaultQ, defaultType, defaultYear]
  )

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <div className="flex-1">
        <Input
          placeholder="Pesquisar por título ou resumo…"
          defaultValue={defaultQ}
          onChange={(e) => updateParams({ q: e.target.value })}
          type="search"
        />
      </div>
      <select
        className="h-10 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
        defaultValue={defaultType}
        onChange={(e) => updateParams({ type: e.target.value })}
      >
        <option value="">Todos os tipos</option>
        <option value="book">Livros</option>
        <option value="thesis">Dissertações</option>
      </select>
      <Input
        type="number"
        placeholder="Ano"
        defaultValue={defaultYear}
        min={1900}
        max={new Date().getFullYear()}
        onChange={(e) => updateParams({ year: e.target.value })}
        className="w-28"
      />
    </div>
  )
}

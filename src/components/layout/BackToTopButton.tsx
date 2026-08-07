'use client'

import { ArrowUp } from 'lucide-react'

export function BackToTopButton() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className="fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-primary shadow-lg transition-transform hover:-translate-y-0.5 dark:bg-gray-950"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  )
}

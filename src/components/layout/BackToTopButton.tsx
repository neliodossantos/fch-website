'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUp } from 'lucide-react'

export function BackToTopButton() {
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    const updateDirection = () => setIsAtTop(window.scrollY < 40)

    updateDirection()
    window.addEventListener('scroll', updateDirection, { passive: true })
    return () => window.removeEventListener('scroll', updateDirection)
  }, [])

  const navigatePage = () => {
    if (isAtTop) {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={navigatePage}
      aria-label={isAtTop ? 'Ir para o fim da página' : 'Voltar ao topo'}
      title={isAtTop ? 'Ir para o fim da página' : 'Voltar ao topo'}
      className="fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-primary shadow-lg transition-transform hover:-translate-y-0.5 dark:bg-[#0d0b0a]"
    >
      {isAtTop ? <ArrowDown className="h-4 w-4" /> : <ArrowUp className="h-4 w-4" />}
    </button>
  )
}

'use client'

import { ArrowRight } from 'lucide-react'
import { FormEvent } from 'react'

export function NewsletterForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // Envio real fica para trabalho futuro — não existe endpoint no backend hoje.
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-[230px] overflow-hidden rounded-md border border-gray-300 dark:border-gray-600">
      <input
        type="email"
        name="email"
        required
        placeholder="Insira o seu email"
        className="w-full min-w-0 bg-transparent px-3 py-2 text-sm text-gray-900 outline-none dark:text-white"
      />
      <button
        type="submit"
        aria-label="Subscrever"
        className="flex w-10 flex-shrink-0 items-center justify-center bg-primary text-white transition-colors hover:bg-primary-dark"
      >
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  )
}

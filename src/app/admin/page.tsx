'use client'

import Link from 'next/link'
import { ArrowRight, CalendarDays, CalendarRange, Newspaper } from 'lucide-react'
import { useAdminToken } from './shared/adminApi'

const SHORTCUTS = [
  { href: '/admin/noticias', label: 'Notícias', description: 'Criar, editar e publicar notícias e posts.', icon: Newspaper },
  { href: '/admin/eventos', label: 'Eventos', description: 'Gerir a agenda de conferências, seminários e workshops.', icon: CalendarDays },
  { href: '/admin/desfiles', label: 'Desfile Académico', description: 'Registar cada edição do desfile, com pontos importantes e galeria.', icon: CalendarRange },
] as const

export default function AdminPage() {
  const [token] = useAdminToken()
  if (!token) return null

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">Bem-vindo ao painel</h2>
      <p className="mt-1 text-sm text-gray-500 dark:text-[#9c8d7d]">Escolha o que quer gerir.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {SHORTCUTS.map(({ href, label, description, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="group rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md dark:bg-[#151312]"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary-dark dark:text-primary-light">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 flex items-center justify-between text-lg font-bold text-gray-900 dark:text-white">
              {label}
              <ArrowRight className="h-4 w-4 text-primary transition group-hover:translate-x-1" />
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-[#9c8d7d]">{description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

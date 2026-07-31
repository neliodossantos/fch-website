import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { createSupabaseServerClient } from '@/lib/supabase-server'
import { LogoutButton } from './LogoutButton'

export const metadata: Metadata = {
  title: 'Portal do Estudante',
  description: 'Acesso exclusivo para estudantes da FCH',
}

export default async function PortalPage() {
  const supabase = await createSupabaseServerClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Portal do Estudante</h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Bem-vindo(a), {user.email}
          </p>
        </div>
        <LogoutButton />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          href="/portal/biblioteca"
          className="group block rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 hover:shadow-md hover:border-primary transition-all"
        >
          <div className="mb-4 text-4xl">📚</div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors">
            Biblioteca
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
            Aceda a dissertações, teses e livros académicos disponibilizados pela FCH.
          </p>
        </Link>
      </div>
    </div>
  )
}

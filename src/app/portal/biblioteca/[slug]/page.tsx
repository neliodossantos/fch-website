import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { createSupabaseServerClient } from '@/lib/supabase-server'
import { getLibraryItemBySlug } from '@/lib/queries/library'
import { Button } from '@/components/ui/Button'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const supabase = await createSupabaseServerClient()
  const { slug } = await params
  const item = await getLibraryItemBySlug(supabase, slug)
  if (!item) return { title: 'Item não encontrado' }
  return {
    title: item.title,
    description: item.abstract ?? undefined,
  }
}

export default async function BibliotecaItemPage({ params }: PageProps) {
  const supabase = await createSupabaseServerClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const { slug } = await params
  const item = await getLibraryItemBySlug(supabase, slug)

  if (!item) {
    notFound()
  }

  const typeLabel = item.type === 'book' ? 'Livro' : 'Dissertação'

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="flex items-center gap-4 mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/portal" className="hover:text-primary transition-colors">Portal</Link>
        <span>›</span>
        <Link href="/portal/biblioteca" className="hover:text-primary transition-colors">Biblioteca</Link>
        <span>›</span>
        <span className="text-gray-700 dark:text-gray-300 truncate">{item.title}</span>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
            {typeLabel}
          </span>
          {item.year && (
            <span className="text-xs text-gray-500 dark:text-gray-400">{item.year}</span>
          )}
          {item.language && (
            <span className="text-xs text-gray-500 dark:text-gray-400 uppercase">{item.language}</span>
          )}
        </div>

        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">{item.title}</h1>

        {item.authors && item.authors.length > 0 && (
          <div className="mb-6">
            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
              {item.authors.length === 1 ? 'Autor' : 'Autores'}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {item.authors.map((a) => a.name).join(', ')}
            </p>
          </div>
        )}

        {item.abstract && (
          <div className="mb-6">
            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Resumo</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {item.abstract}
            </p>
          </div>
        )}

        {item.tags && item.tags.length > 0 && (
          <div className="mb-8">
            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Palavras-chave</h2>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
          <Button asChild>
            <Link href={`/portal/biblioteca/${item.slug}/download`}>
              Descarregar PDF
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/portal/biblioteca">← Voltar à lista</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

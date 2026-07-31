import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { createSupabaseServerClient } from '@/lib/supabase-server'
import { getLibraryItems } from '@/lib/queries/library'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { LibraryFilters } from './LibraryFilters'

export const metadata: Metadata = {
  title: 'Biblioteca',
  description: 'Acervo de dissertações e livros da FCH',
}

interface PageProps {
  searchParams: Promise<{ q?: string; type?: string; year?: string }>
}

export default async function BibliotecaPage({ searchParams }: PageProps) {
  const supabase = await createSupabaseServerClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const params = await searchParams
  const q = params.q ?? ''
  const type = params.type === 'book' || params.type === 'thesis' ? params.type : undefined
  const year = params.year ? parseInt(params.year, 10) : undefined

  const items = await getLibraryItems(supabase, { q, type, year })

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-center gap-4 mb-2">
        <Link href="/portal" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
          ← Portal
        </Link>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Biblioteca</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Pesquise no acervo de dissertações e livros académicos.
      </p>

      <LibraryFilters defaultQ={q} defaultType={params.type ?? ''} defaultYear={params.year ?? ''} />

      {items.length === 0 ? (
        <div className="text-center py-16 text-gray-500 dark:text-gray-400">
          <p className="text-lg">Nenhum item encontrado.</p>
          {(q || type || year) && (
            <p className="mt-2 text-sm">Tente alterar os filtros ou a pesquisa.</p>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {items.map((item) => (
            <Card key={item.id} className="flex flex-col">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                    {item.type === 'book' ? 'Livro' : 'Dissertação'}
                  </span>
                  {item.year && (
                    <span className="text-xs text-gray-500 dark:text-gray-400">{item.year}</span>
                  )}
                </div>
                <CardTitle className="text-base leading-snug line-clamp-2">{item.title}</CardTitle>
                {item.authors && item.authors.length > 0 && (
                  <CardDescription className="text-xs">
                    {item.authors.map((a) => a.name).join(', ')}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                {item.abstract && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-4 flex-1">
                    {item.abstract}
                  </p>
                )}
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag.id}
                        className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                )}
                <Button asChild variant="outline" size="sm" className="mt-auto">
                  <Link href={`/portal/biblioteca/${item.slug}`}>Ver detalhes</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

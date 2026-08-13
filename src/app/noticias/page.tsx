import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CalendarDays } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { getNoticias } from '@/lib/queries/noticias'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Notícias',
  description: 'Notícias e novidades da Faculdade de Ciências Humanas.',
}

export default async function NoticiasPage() {
  const noticias = await getNoticias()

  return (
    <>
      <PageHeader eyebrow="Acontece na FCH" title="Notícias" description="Fique a par das novidades da Faculdade de Ciências Humanas." />

      <section className="py-16">
        <div className="container mx-auto px-4">
          {noticias.length ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {noticias.map(noticia => (
                <Link
                  key={noticia.id}
                  href={`/noticias/${noticia.slug}`}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-[#332a22] dark:bg-[#151312]"
                >
                  {noticia.imagem_url && (
                    <div className="relative mb-4 h-40 w-full overflow-hidden rounded-xl">
                      <Image src={noticia.imagem_url} alt={noticia.titulo} fill unoptimized className="object-cover" />
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary-dark dark:text-primary-light">
                    <CalendarDays className="h-4 w-4" />
                    {new Date(noticia.data_publicacao).toLocaleDateString('pt-PT', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </div>
                  <h2 className="mt-3 text-lg font-bold text-gray-900 dark:text-white">{noticia.titulo}</h2>
                  <p className="mt-2 line-clamp-3 text-sm text-gray-600 dark:text-[#d8cfc4]">{noticia.resumo}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary-dark dark:text-primary-light">
                    Ler notícia <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 dark:text-[#b8ab9c]">Sem notícias disponíveis.</p>
          )}
        </div>
      </section>
    </>
  )
}

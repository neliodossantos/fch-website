import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarRange } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { getDesfiles } from '@/lib/queries/desfiles'
import { isVideoUrl } from '@/lib/api'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Desfile Académico',
  description: 'Edições do Desfile Académico da Faculdade de Ciências Humanas.',
}

export default async function DesfileAcademicoPage() {
  const desfiles = await getDesfiles()

  return (
    <>
      <PageHeader eyebrow="Tradição FCH" title="Desfile Académico" description="Reveja as edições do Desfile Académico, ano a ano." />

      <section className="py-16">
        <div className="container mx-auto px-4">
          {desfiles.length ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {desfiles.map(desfile => (
                <Link
                  key={desfile.id}
                  href={`/desfile-academico/${desfile.slug}`}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-[#332a22] dark:bg-[#151312]"
                >
                  {desfile.media[0] && !isVideoUrl(desfile.media[0].url) && (
                    <div className="relative mb-4 h-40 w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-[#332a22]">
                      <Image src={desfile.media[0].url} alt={desfile.titulo} fill unoptimized className="object-cover" />
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary-dark dark:text-primary-light">
                    <CalendarRange className="h-4 w-4" /> {desfile.ano}
                  </div>
                  <h2 className="mt-3 text-lg font-bold text-gray-900 dark:text-white">{desfile.titulo}</h2>
                  <p className="mt-2 line-clamp-3 text-sm text-gray-600 dark:text-[#d8cfc4]">{desfile.descricao}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary-dark dark:text-primary-light">
                    Ver edição <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 dark:text-[#b8ab9c]">Sem edições publicadas.</p>
          )}
        </div>
      </section>
    </>
  )
}

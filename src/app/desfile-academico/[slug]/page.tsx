import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { DesfileGallery } from '@/components/shared/DesfileGallery'
import { getDesfileBySlug, getDesfiles } from '@/lib/queries/desfiles'

export const revalidate = 60

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const desfiles = await getDesfiles()
  return desfiles.map(desfile => ({ slug: desfile.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const desfile = await getDesfileBySlug(slug)

  if (!desfile) {
    return { title: 'Desfile não encontrado' }
  }

  return {
    title: `${desfile.titulo} — Desfile Académico ${desfile.ano}`,
    description: desfile.descricao,
  }
}

export default async function DesfileDetalhePage({ params }: Props) {
  const { slug } = await params
  const desfile = await getDesfileBySlug(slug)

  if (!desfile) {
    notFound()
  }

  return (
    <>
      <PageHeader eyebrow="Tradição FCH" title={desfile.titulo} description={`Edição de ${desfile.ano}`} />

      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <Link
            href="/desfile-academico"
            className="mb-8 inline-flex items-center text-primary hover:text-primary-dark dark:text-primary-light dark:hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar ao Desfile Académico
          </Link>

          {desfile.descricao && (
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="whitespace-pre-line text-gray-700 dark:text-[#E4D9CC]">{desfile.descricao}</p>
            </div>
          )}

          {desfile.pontos.length > 0 && (
            <ul className="mt-6 list-disc space-y-1 pl-5 text-gray-700 dark:text-[#E4D9CC]">
              {desfile.pontos.map((ponto, index) => <li key={index}>{ponto}</li>)}
            </ul>
          )}

          {desfile.media.length > 0 && (
            <div className="mt-10">
              <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-[#F5F0EA]">Galeria</h2>
              <DesfileGallery media={desfile.media} mediaLayout={desfile.mediaLayout} />
            </div>
          )}
        </div>
      </section>
    </>
  )
}

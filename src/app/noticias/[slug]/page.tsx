import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, CalendarDays } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionsRenderer } from '@/components/shared/SectionsRenderer'
import { getNoticiaBySlug, getNoticias } from '@/lib/queries/noticias'

export const revalidate = 60

interface Props {
  params: Promise<{ slug: string }>
}

function getYouTubeEmbedUrl(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/)
  return match ? `https://www.youtube.com/embed/${match[1]}` : null
}

export async function generateStaticParams() {
  const noticias = await getNoticias()
  return noticias.map(noticia => ({ slug: noticia.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const noticia = await getNoticiaBySlug(slug)

  if (!noticia) {
    return { title: 'Notícia não encontrada' }
  }

  return {
    title: noticia.titulo,
    description: noticia.resumo,
  }
}

export default async function NoticiaDetalhePage({ params }: Props) {
  const { slug } = await params
  const noticia = await getNoticiaBySlug(slug)

  if (!noticia) {
    notFound()
  }

  const formattedDate = new Date(noticia.data_publicacao).toLocaleDateString('pt-PT', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })

  return (
    <>
      <PageHeader eyebrow="Acontece na FCH" title={noticia.titulo} description={formattedDate} />

      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <Link
            href="/noticias"
            className="mb-8 inline-flex items-center text-primary hover:text-primary-dark dark:text-primary-light dark:hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar às notícias
          </Link>

          {noticia.imagem_url && (
            <div className="mb-8 overflow-hidden rounded-lg">
              <Image
                src={noticia.imagem_url}
                alt={noticia.titulo}
                width={800}
                height={400}
                unoptimized
                className="h-auto w-full max-h-[420px] object-cover"
              />
            </div>
          )}

          {noticia.video_url && (
            <div className="mb-8 aspect-video overflow-hidden rounded-lg">
              {getYouTubeEmbedUrl(noticia.video_url) ? (
                <iframe
                  src={getYouTubeEmbedUrl(noticia.video_url)!}
                  title={`Vídeo: ${noticia.titulo}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              ) : (
                <video controls src={noticia.video_url} className="h-full w-full" />
              )}
            </div>
          )}

          <div className="mb-6 flex items-center gap-2 text-sm text-gray-500 dark:text-[#b8ab9c]">
            <CalendarDays className="h-4 w-4" />
            <span className="capitalize">{formattedDate}</span>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="whitespace-pre-line text-gray-700 dark:text-[#E4D9CC]">{noticia.conteudo || noticia.resumo}</p>
          </div>

          {noticia.sections.length > 0 && (
            <div className="mt-10">
              <SectionsRenderer sections={noticia.sections} />
            </div>
          )}
        </div>
      </section>
    </>
  )
}

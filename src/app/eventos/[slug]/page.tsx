import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Button } from '@/components/ui/Button'
import { getEventoBySlug, getEventos } from '@/lib/queries/eventos'

export const revalidate = 60

function getYouTubeEmbedUrl(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/)
  return match ? `https://www.youtube.com/embed/${match[1]}` : null
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const eventos = await getEventos()
  return eventos.map((evento) => ({
    slug: evento.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const evento = await getEventoBySlug(slug)
  
  if (!evento) {
    return {
      title: 'Evento não encontrado',
    }
  }

  return {
    title: evento.titulo,
    description: evento.descricao,
  }
}

export default async function EventoDetalhePage({ params }: Props) {
  const { slug } = await params
  const evento = await getEventoBySlug(slug)

  if (!evento) {
    notFound()
  }

  const formattedDate = new Date(evento.data).toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })

  const tipoLabel = evento.tipo.charAt(0).toUpperCase() + evento.tipo.slice(1)
  const tipoColors =
    evento.tipo === 'conferencia'
      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
      : evento.tipo === 'seminario'
      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
      : evento.tipo === 'workshop'
      ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400'
      : 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400'

  return (
    <>
      <PageHeader eyebrow="Evento" title={evento.titulo} description={tipoLabel} />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Link
            href="/eventos"
            className="inline-flex items-center text-primary hover:text-primary-dark dark:text-blue-400 dark:hover:text-blue-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar aos eventos
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Event Image */}
              <div className="rounded-lg overflow-hidden mb-8">
                {evento.imagem_url ? (
                  <Image
                    src={evento.imagem_url}
                    alt={evento.titulo}
                    width={800}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                ) : (
                  <div className="bg-gray-200 dark:bg-gray-700 h-64 flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-300">
                      Sem imagem disponível
                    </span>
                  </div>
                )}
              </div>

              {evento.video_url && (
                <div className="mb-8 aspect-video overflow-hidden rounded-lg">
                  {getYouTubeEmbedUrl(evento.video_url) ? (
                    <iframe
                      src={getYouTubeEmbedUrl(evento.video_url)!}
                      title={`Vídeo: ${evento.titulo}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full"
                    />
                  ) : (
                    <video controls src={evento.video_url} className="h-full w-full" />
                  )}
                </div>
              )}

              {/* Event Description */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Sobre o Evento
                </h2>
                <p className="text-gray-700 dark:text-gray-200 whitespace-pre-line">
                  {evento.descricao}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 sticky top-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Detalhes do Evento
                </h3>

                <div className="space-y-4">
                  {/* Event Type */}
                  <div>
                    <span
                      className={`inline-block text-sm px-3 py-1 rounded ${tipoColors}`}
                    >
                      {tipoLabel}
                    </span>
                  </div>

                  {/* Date */}
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-300">
                        Data
                      </p>
                      <p className="text-gray-900 dark:text-gray-100 capitalize">
                        {formattedDate}
                      </p>
                    </div>
                  </div>

                  {/* Time */}
                  {evento.hora && (
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-300">
                          Horário
                        </p>
                        <p className="text-gray-900 dark:text-gray-100">
                          {evento.hora}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Location */}
                  {evento.local && (
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-300">
                          Local
                        </p>
                        <p className="text-gray-900 dark:text-gray-100">
                          {evento.local}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <Button className="w-full" variant="default">
                    Inscrever-se
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock, MapPin } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { getEventosFuturos, getEventosRealizados } from '@/lib/queries/eventos'

export const revalidate = 60 // Revalida cache a cada 60 segundos

export const metadata: Metadata = {
  title: 'Eventos',
  description: 'Conferências, seminários, workshops e eventos culturais da FCH.',
}

export default async function EventosPage() {
  const eventosFuturos = await getEventosFuturos()
  const eventosRealizados = await getEventosRealizados()

  return (
    <>
      <PageHeader
        eyebrow="Agenda FCH"
        title="Eventos"
        description="Conferências, seminários, workshops e eventos culturais promovidos pela FCH."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <SectionTitle title="Próximos Eventos" className="mb-0" />
              <Link href="/eventos/futuros" className="text-primary dark:text-blue-400 hover:text-primary-dark dark:hover:text-blue-300 font-medium inline-flex items-center">
                Ver todos <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventosFuturos.slice(0, 3).map((evento) => (
                <Card key={evento.id} className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                  {/* Event Image */}
                  <div className="relative h-48 w-full">
                    {evento.imagem_url ? (
                      <Image
                        src={evento.imagem_url}
                        alt={evento.titulo}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    ) : (
                      <div className="bg-gray-200 dark:bg-[#332a22] h-full flex items-center justify-center">
                        <span className="text-gray-500 dark:text-[#d8cfc4]">Sem imagem</span>
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-2 text-sm text-gray-700 dark:text-[#E4D9CC] mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(evento.data).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
                    </div>
                    <CardTitle className="text-lg">{evento.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-[#E4D9CC] text-sm mb-4">{evento.descricao}</p>
                    <div className="space-y-2 text-sm text-gray-500 dark:text-[#d8cfc4] mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {evento.hora}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {evento.local}
                      </div>
                    </div>
                    <Link href={`/eventos/${evento.slug}`}>
                      <Button variant="outline" size="sm" className="w-full">
                        Mais informações
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-8">
              <SectionTitle title="Eventos Realizados" className="mb-0" />
              <Link href="/eventos/realizados" className="text-primary dark:text-blue-400 hover:text-primary-dark dark:hover:text-blue-300 font-medium inline-flex items-center">
                Ver todos <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventosRealizados.slice(0, 3).map((evento) => (
                <Card key={evento.id} className="h-full opacity-90 overflow-hidden">
                  {/* Event Image */}
                  <div className="relative h-48 w-full">
                    {evento.imagem_url ? (
                      <Image
                        src={evento.imagem_url}
                        alt={evento.titulo}
                        fill
                        unoptimized
                        className="object-cover opacity-75"
                      />
                    ) : (
                      <div className="bg-gray-200 dark:bg-[#332a22] h-full flex items-center justify-center">
                        <span className="text-gray-500 dark:text-[#d8cfc4]">Sem imagem</span>
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-[#d8cfc4] mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(evento.data).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
                    </div>
                    <CardTitle className="text-lg">{evento.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-[#E4D9CC] text-sm">{evento.descricao}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

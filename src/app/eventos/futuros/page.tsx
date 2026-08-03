import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, MapPin } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { getEventosFuturos } from '@/lib/queries/eventos'

export const revalidate = 60 // Revalida cache a cada 60 segundos

export const metadata: Metadata = {
  title: 'Eventos Futuros',
  description: 'Próximos eventos da FCH - Conferências, seminários, workshops e eventos culturais.',
}

export default async function EventosFuturosPage() {
  const eventosFuturos = await getEventosFuturos()

  return (
    <>
      <PageHeader
        title="Eventos Futuros"
        description="Confira os próximos eventos da Faculdade de Ciências Humanas."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          {eventosFuturos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventosFuturos.map((evento) => (
                <Card key={evento.id} className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                  {/* Event Image */}
                  <div className="relative h-48 w-full">
                    {evento.imagem_url ? (
                      <Image
                        src={evento.imagem_url}
                        alt={evento.titulo}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="bg-gray-200 dark:bg-gray-700 h-full flex items-center justify-center">
                        <span className="text-gray-500 dark:text-gray-300">Sem imagem</span>
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs px-2 py-1 rounded ${
                        evento.tipo === 'conferencia' ? 'bg-blue-100 text-blue-700' :
                        evento.tipo === 'seminario' ? 'bg-green-100 text-green-700' :
                        evento.tipo === 'workshop' ? 'bg-purple-100 text-purple-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {evento.tipo.charAt(0).toUpperCase() + evento.tipo.slice(1)}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-secondary mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(evento.data).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
                    </div>
                    <CardTitle className="text-lg">{evento.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">{evento.descricao}</p>
                    <div className="space-y-2 text-sm text-gray-500 mb-4">
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
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Não há eventos programados no momento.</p>
              <p className="text-gray-400">Volte em breve para conferir as novidades.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

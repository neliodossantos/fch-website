import { MapPin, Clock } from 'lucide-react'
import { getEventosFuturos } from '@/lib/queries/eventos'
import { HighlightCarousel, type HighlightItem, type HighlightMeta } from './HighlightCarousel'

export async function Eventos() {
  const eventos = await getEventosFuturos(8)

  const items: HighlightItem[] = eventos.map(evento => {
    const meta: HighlightMeta[] = []
    if (evento.local) meta.push({ icon: MapPin, label: evento.local })
    if (evento.hora) meta.push({ icon: Clock, label: evento.hora })

    return {
      id: evento.id,
      href: `/eventos/${evento.slug}`,
      title: evento.titulo,
      description: evento.descricao,
      image: evento.imagem_url,
      date: new Date(evento.data).toLocaleDateString('pt-PT', { day: '2-digit', month: 'short', year: 'numeric' }),
      featured: evento.featured,
      meta,
    }
  })

  return (
    <HighlightCarousel
      eyebrow="Agenda FCH"
      title="Próximos eventos"
      subtitle="Conferências, seminários, workshops e outros momentos da comunidade FCH."
      viewAllHref="/eventos"
      viewAllLabel="Ver todos os eventos"
      ctaLabel="Saber mais"
      emptyMessage="Não há eventos programados no momento."
      items={items}
      className="bg-white dark:bg-[#151312]"
    />
  )
}

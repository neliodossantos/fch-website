import { getNoticias } from '@/lib/queries/noticias'
import { HighlightCarousel, type HighlightItem } from './HighlightCarousel'

export async function Noticias() {
  const noticias = await getNoticias(8)

  const items: HighlightItem[] = noticias.map(noticia => ({
    id: noticia.id,
    href: `/noticias/${noticia.slug}`,
    title: noticia.titulo,
    description: noticia.resumo,
    image: noticia.imagem_url,
    date: new Date(noticia.data_publicacao).toLocaleDateString('pt-PT', { day: '2-digit', month: 'short', year: 'numeric' }),
    featured: noticia.featured,
    meta: [],
  }))

  return (
    <HighlightCarousel
      eyebrow="Acontece na FCH"
      title="Notícias e destaques"
      subtitle="Fique a par das últimas novidades da Faculdade de Ciências Humanas."
      viewAllHref="/noticias"
      viewAllLabel="Ver todas as novidades"
      ctaLabel="Ler notícia"
      emptyMessage="Novidades em breve."
      items={items}
      className="bg-[#f6f6f4] dark:bg-[#1a1512]"
    />
  )
}

import Link from 'next/link'
import { ArrowRight, CalendarDays } from 'lucide-react'
import { getNoticias } from '@/lib/queries/noticias'

export async function Noticias() {
  const noticias = await getNoticias(3)
  return (
    <section className="bg-[#f6f6f4] py-20 sm:py-24">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow">Acontece na FCH</p><h2 className="section-heading">Notícias e destaques</h2></div><Link href="/eventos" className="inline-flex items-center gap-2 text-sm font-bold text-gray-800 hover:text-primary-dark">Ver todas as novidades <ArrowRight className="h-4 w-4" /></Link></div>
        {noticias?.length ? <div className="grid gap-5 md:grid-cols-3">{noticias.map((noticia, index) => <article key={noticia.id} className={`relative rounded-2xl p-7 ${index === 0 ? 'bg-primary text-gray-950' : 'bg-white text-gray-900'}`}>{noticia.video_url && <span className="absolute right-5 top-5 flex h-6 w-6 items-center justify-center rounded-full bg-gray-950/80 text-[11px] text-white">▶</span>}<div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider opacity-70"><CalendarDays className="h-4 w-4" />{new Date(noticia.data_publicacao).toLocaleDateString('pt-PT', { day: '2-digit', month: 'short', year: 'numeric' })}</div><h3 className="mt-12 text-xl font-bold leading-snug">{noticia.titulo}</h3><p className="mt-3 line-clamp-3 text-sm leading-relaxed opacity-75">{noticia.resumo}</p><Link href={`/noticias/${noticia.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-bold">Ler notícia <ArrowRight className="h-4 w-4" /></Link></article>)}</div> : <div className="rounded-2xl bg-white p-8 text-gray-500">Novidades em breve.</div>}
      </div>
    </section>
  )
}

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getHeroBanner } from '@/lib/queries'
import { HeroCarousel } from './HeroCarousel'

const slideImages = [
  {
    src: '/images/home/slide/image1.png',
    alt: 'Estudantes da Faculdade de Ciências Humanas',
  },
  {
    src: '/images/home/slide/image4.jpg',
    alt: 'Estudantes em atividade na Universidade Católica de Angola',
  },
  {
    src: '/images/home/slide/image5.jpg',
    alt: 'Comunidade académica da Faculdade de Ciências Humanas',
  },
  {
    src: '/images/home/slide/image6.png',
    alt: 'Momento de convívio da comunidade universitária',
  },
]

export async function HeroBanner() {
  const cmsImage = await getHeroBanner()
  const slides = cmsImage
    ? [
        {
          src: cmsImage.url,
          fallbackSrc: slideImages[0].src,
          alt: cmsImage.alt || 'Estudantes da Faculdade de Ciências Humanas',
          unoptimized: true,
        },
        ...slideImages,
      ]
    : slideImages

  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] dark:bg-[#151312] lg:min-h-[calc(100svh-7rem)]">
      <div className="absolute left-0 top-0 h-full w-full bg-primary lg:w-[58%]" />
      <div className="relative container mx-auto grid items-center gap-10 px-5 py-12 sm:px-6 lg:min-h-[calc(100svh-7rem)] lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:px-8 lg:py-16">
        <div className="max-w-xl motion-safe:animate-[hero-content-in_700ms_ease-out_both]">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/40 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-gray-800">
            Universidade Católica de Angola
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.06] tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
            Uma formação que transforma pessoas e comunidades.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-gray-800 sm:text-lg">
            Na Faculdade de Ciências Humanas, conhecimento, investigação e compromisso social caminham lado a lado.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/admissoes" className="inline-flex items-center gap-2 rounded-full bg-gray-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-gray-800">
              Candidaturas <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/cursos" className="inline-flex items-center gap-2 rounded-full border border-gray-900/20 bg-white/70 px-6 py-3.5 text-sm font-bold text-gray-900 transition hover:bg-white">
              Explorar cursos
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-7 border-t border-gray-900/15 pt-6 text-gray-900">
            <div><strong className="block text-2xl font-extrabold">20+</strong><span className="text-sm">anos de excelência</span></div>
            <div><strong className="block text-2xl font-extrabold">7</strong><span className="text-sm">programas de formação</span></div>
            <div><strong className="block text-2xl font-extrabold">1</strong><span className="text-sm">comunidade FCH</span></div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[600px] py-2 lg:ml-auto lg:mr-0 lg:py-8">
          <div className="relative aspect-[4/4.15] overflow-hidden rounded-[1.75rem] bg-gray-200 shadow-[0_24px_60px_-28px_rgba(17,24,39,0.35)] motion-safe:animate-[hero-image-in_900ms_cubic-bezier(0.16,1,0.3,1)_both] dark:bg-[#332a22] dark:shadow-black/40">
            <HeroCarousel slides={slides} />
          </div>
          <div className="hidden mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 2xl:absolute 2xl:right-[-15rem] 2xl:top-1/2 2xl:mt-0 2xl:w-48 2xl:-translate-y-1/2 2xl:grid-cols-1">
            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <p className="text-2xl font-extrabold tracking-tight text-gray-950">20+</p>
              <p className="mt-1 text-xs font-medium leading-relaxed text-gray-500">anos de excelência</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <p className="text-2xl font-extrabold tracking-tight text-gray-950">7</p>
              <p className="mt-1 text-xs font-medium leading-relaxed text-gray-500">programas de formação</p>
            </div>
            <div className="col-span-2 rounded-2xl border border-primary/30 bg-primary/10 p-4 sm:col-span-1 2xl:col-span-1">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary-dark">Faculdade de Ciências Humanas</p>
              <p className="mt-2 text-sm font-semibold leading-snug text-gray-800">Conhecimento com impacto na comunidade.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

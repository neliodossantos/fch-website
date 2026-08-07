import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen, Brain,  Users } from 'lucide-react'
import banner from './PRINCIPAL-5.png'
import { getHeroBanner } from '@/lib/queries'

export async function HeroBanner() {
  const cmsImage = await getHeroBanner()
  const image = cmsImage?.url || banner

  return (
    <section className="relative overflow-hidden bg-[#f7f7f5]">
      <div className="absolute left-0 top-0 h-full w-full bg-primary lg:w-[58%]" />
      <div className="relative container mx-auto grid min-h-[590px] items-center gap-10 px-5 py-14 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-16">
        <div className="max-w-xl">
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
            <div><strong className="block text-2xl font-extrabold">5</strong><span className="text-sm">programas de formação</span></div>
            <div><strong className="block text-2xl font-extrabold">1</strong><span className="text-sm">comunidade FCH</span></div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:mx-0">
          <div className="relative aspect-[4/4.6] overflow-hidden rounded-[2rem] bg-gray-200 shadow-2xl shadow-gray-900/20 lg:ml-auto">
            <Image src={image} alt={cmsImage?.alt || 'Estudantes da Faculdade de Ciências Humanas'} fill unoptimized={Boolean(cmsImage)} className="object-cover" priority />
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-gray-950/75 to-transparent" />
            <p className="absolute hidden bottom-7 left-7 right-7 text-xl font-lighter leading-tight text-white sm:text-xl">Ensinar, aprender pesquisar para um futuro mais humano.</p>
          </div>
          <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl bg-white p-4 shadow-xl sm:flex lg:-left-10">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-primary"><BookOpen className="h-5 w-5 text-gray-950" /></span>
            <span className="text-sm font-semibold text-gray-800">Ensinar, aprender<br /> e pesquisar para um futuro mais humano.</span>
          </div>
          <div className="absolute -right-24 top-8 hidden rounded-2xl bg-gray-50 py-2 px-4 text-white shadow-xl lg:block">
            <Brain className="mb-2 h-5 w-5 mx-auto text-primary" /><span className="text-xs text-black font-semibold uppercase tracking-wider">Conhecimento<br />com propósito</span>
          </div>
        </div>
      </div>
    </section>
  )
}
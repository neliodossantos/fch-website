import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, BookOpen, CalendarDays, BriefcaseBusiness, FlaskConical, Users, Brain, type LucideIcon } from 'lucide-react'

interface Destaque {
  id: string
  icon: string
  title: string
  description: string
  href: string
  imageUrl?: string
  videoUrl?: string
}

const iconMap: Record<string, LucideIcon> = {
  'book-open': BookOpen,
  'calendar-days': CalendarDays,
  'users': Users,
  'briefcase-business': BriefcaseBusiness,
  'flask-conical': FlaskConical,
  'brain': Brain,
}

const DESTAQUES: Destaque[] = [
  { id: 'cursos', icon: 'book-open', title: 'Cursos', description: 'Licenciaturas e mestrados para construir o seu percurso.', href: '/cursos' },
  { id: 'eventos', icon: 'calendar-days', title: 'Eventos', description: 'Debates, conferências e experiências que aproximam ideias.', href: '/eventos' },
  { id: 'extensao', icon: 'users', title: 'Extensão', description: 'Formação contínua para a comunidade e profissionais.', href: '/extensao' },
  { id: 'estagios', icon: 'briefcase-business', title: 'Estágios', description: 'Pontes entre a formação, as organizações e o futuro.', href: '/estagios' },
  { id: 'ciei', icon: 'flask-conical', title: 'CIEI', description: 'Investigação interdisciplinar com impacto social.', href: '/ciei' },
  { id: 'laboratorio', icon: 'brain', title: 'Laboratório', description: 'Apoio, avaliação e acompanhamento em Psicologia.', href: '/laboratorio-psicologia' },
]

export function Destaques() {
  const destaques = DESTAQUES

  return (
    <section className="bg-white py-20 dark:bg-[#151312] sm:py-24">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="mb-11 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl"><p className="eyebrow">Descubra a FCH</p><h2 className="section-heading">O seu próximo capítulo começa aqui.</h2></div>
          <p className="max-w-sm text-sm leading-relaxed text-gray-600 dark:text-[#d8cfc4]">Conheça os caminhos que ligam a formação académica à experiência prática e à transformação da sociedade.</p>
        </div>
        <div className="grid gap-px overflow-hidden rounded-3xl border border-gray-200 bg-gray-200 dark:border-[#332a22] dark:bg-[#332a22] md:grid-cols-2 lg:grid-cols-3">
          {destaques.map((item) => {
            const Icon = iconMap[item.icon] || BookOpen
            return (
              <Link key={item.href} href={item.href} className="group min-h-[220px] bg-white p-7 transition hover:bg-[#fff9ed] dark:bg-[#1f1a16] dark:hover:bg-[#241d15]">
                <div className="mb-8 flex items-start justify-between">
                  <span className="relative">
                    {item.imageUrl ? (
                      <span className="relative block h-12 w-12 overflow-hidden rounded-2xl">
                        <Image src={item.imageUrl} alt="" fill unoptimized className="object-cover" />
                      </span>
                    ) : (
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#fff1cf] text-primary-dark dark:bg-primary/15 dark:text-primary-light"><Icon className="h-6 w-6" /></span>
                    )}
                    {item.videoUrl && (
                      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-white">▶</span>
                    )}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-gray-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary-dark dark:text-[#9c8d7d] dark:group-hover:text-primary-light" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-[#F5F0EA]">{item.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-600 dark:text-[#d8cfc4]">{item.description}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

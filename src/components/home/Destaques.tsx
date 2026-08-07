import Link from 'next/link'
import { ArrowUpRight, BookOpen, CalendarDays, BriefcaseBusiness, FlaskConical, Users, Brain } from 'lucide-react'

const destaques = [
  { icon: BookOpen, title: 'Cursos', description: 'Licenciaturas e mestrados para construir o seu percurso.', href: '/cursos' },
  { icon: CalendarDays, title: 'Eventos', description: 'Debates, conferências e experiências que aproximam ideias.', href: '/eventos' },
  { icon: Users, title: 'Extensão', description: 'Formação contínua para a comunidade e profissionais.', href: '/extensao' },
  { icon: BriefcaseBusiness, title: 'Estágios', description: 'Pontes entre a formação, as organizações e o futuro.', href: '/estagios' },
  { icon: FlaskConical, title: 'CIEI', description: 'Investigação interdisciplinar com impacto social.', href: '/ciei' },
  { icon: Brain, title: 'Laboratório', description: 'Apoio, avaliação e acompanhamento em Psicologia.', href: '/laboratorio-psicologia' },
]

export function Destaques() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="mb-11 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl"><p className="eyebrow">Descubra a FCH</p><h2 className="section-heading">O seu próximo capítulo começa aqui.</h2></div>
          <p className="max-w-sm text-sm leading-relaxed text-gray-600">Conheça os caminhos que ligam a formação académica à experiência prática e à transformação da sociedade.</p>
        </div>
        <div className="grid gap-px overflow-hidden rounded-3xl border border-gray-200 bg-gray-200 md:grid-cols-2 lg:grid-cols-3">
          {destaques.map((item) => (
            <Link key={item.href} href={item.href} className="group min-h-[220px] bg-white p-7 transition hover:bg-[#fff9ed]">
              <div className="mb-8 flex items-start justify-between"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#fff1cf] text-primary-dark"><item.icon className="h-6 w-6" /></span><ArrowUpRight className="h-5 w-5 text-gray-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary-dark" /></div>
              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3><p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-600">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

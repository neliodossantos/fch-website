import Link from 'next/link'
import { ArrowRight, FileText, HelpCircle, Phone } from 'lucide-react'

const acessosRapidos = [
  { icon: FileText, title: 'Candidaturas', description: 'Tudo o que precisa para começar.', href: '/admissoes' },
  { icon: FileText, title: 'Secretaria', description: 'Serviços, horários e formulários.', href: '/sobre/secretaria' },
  { icon: HelpCircle, title: 'Perguntas frequentes', description: 'Encontre respostas rapidamente.', href: '/admissoes/faq' },
  { icon: Phone, title: 'Fale connosco', description: 'Estamos aqui para ajudar.', href: '/contato' },
]

export function AcessoRapido() {
  return <section className="bg-gray-950 py-16 text-white"><div className="container mx-auto px-5 lg:px-8"><div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="eyebrow text-primary-light">Informação útil</p><h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Como podemos ajudar?</h2></div><p className="max-w-sm text-sm leading-relaxed text-gray-400">Aceda aos serviços mais procurados por estudantes, candidatos e comunidade.</p></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{acessosRapidos.map((item) => <Link key={item.href} href={item.href} className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-primary/60 hover:bg-white/10"><item.icon className="mb-8 h-6 w-6 text-primary" /><h3 className="flex items-center justify-between font-bold">{item.title}<ArrowRight className="h-4 w-4 text-primary transition group-hover:translate-x-1" /></h3><p className="mt-2 text-sm text-gray-400">{item.description}</p></Link>)}</div></div></section>
}

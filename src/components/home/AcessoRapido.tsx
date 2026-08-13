import Link from 'next/link'
import { ArrowRight, FileText, HelpCircle, Phone } from 'lucide-react'

const acessosRapidos = [
  { icon: FileText, title: 'Candidaturas', description: 'Tudo o que precisa para começar.', href: '/admissoes' },
  { icon: FileText, title: 'Secretaria', description: 'Serviços, horários e formulários.', href: '/sobre/secretaria' },
  { icon: HelpCircle, title: 'Perguntas frequentes', description: 'Encontre respostas rapidamente.', href: '/admissoes/faq' },
  { icon: Phone, title: 'Fale connosco', description: 'Estamos aqui para ajudar.', href: '/contato' },
]

export function AcessoRapido() {
  return <section className="bg-white py-16 dark:bg-gray-900"><div className="container mx-auto px-5 lg:px-8"><div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="eyebrow">Informação útil</p><h2 className="text-3xl text-gray-900 font-extrabold tracking-tight dark:text-white sm:text-4xl">Como podemos ajudar?</h2></div><p className="max-w-sm text-sm leading-relaxed text-gray-600 dark:text-gray-300">Aceda aos serviços mais procurados por estudantes, candidatos e comunidade.</p></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{acessosRapidos.map((item) => <Link key={item.href} href={item.href} className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"><item.icon className="mb-8 h-6 w-6 text-primary" /><h3 className="flex items-center text-gray-900 justify-between font-bold dark:text-white">{item.title}<ArrowRight className="h-4 w-4 text-primary transition group-hover:translate-x-1" /></h3><p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{item.description}</p></Link>)}</div></div></section>
}

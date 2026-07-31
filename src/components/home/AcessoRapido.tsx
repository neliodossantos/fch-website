import Link from 'next/link'
import { GraduationCap, FileText, HelpCircle, Phone } from 'lucide-react'

const acessosRapidos = [
  {
    icon: GraduationCap,
    title: 'Candidaturas',
    description: 'Informações sobre admissões',
    href: '/admissoes',
  },
  {
    icon: FileText,
    title: 'Secretaria',
    description: 'Serviços e formulários',
    href: '/sobre/secretaria',
  },
  {
    icon: HelpCircle,
    title: 'FAQ',
    description: 'Perguntas frequentes',
    href: '/admissoes/faq',
  },
  {
    icon: Phone,
    title: 'Contato',
    description: 'Fale connosco',
    href: '/contato',
  },
]

export function AcessoRapido() {
  return (
    <section className="py-12 bg-primary dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {acessosRapidos.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center p-6 rounded-lg bg-white/10 hover:bg-white/20 dark:bg-gray-700/50 dark:hover:bg-gray-700 transition-colors text-center group"
            >
              <item.icon className="w-8 h-8 text-white mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-semibold mb-1">{item.title}</h3>
              <p className="text-white dark:text-gray-200 text-sm">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

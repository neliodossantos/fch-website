import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import { NewsletterForm } from './NewsletterForm'
import { BackToTopButton } from './BackToTopButton'

const logo = '/images/logo/FCH.png'

const quickLinks = [
  { href: '/cursos', label: 'Cursos' },
  { href: '/admissoes', label: 'Admissões' },
  { href: '/eventos', label: 'Eventos' },
  { href: '/corpo-docente', label: 'Corpo Docente' },
  { href: '/estagios', label: 'Estágios' },
  { href: 'https://ucan.persistec.com/', label: 'Ucan' },
]

const resourceLinks = [
  { href: '/sobre/secretaria', label: 'Secretaria' },
  { href: '/laboratorio-psicologia', label: 'Laboratório de Psicologia' },
  { href: '/extensao', label: 'Extensão' },
  { href: '/links-uteis', label: 'Links Úteis' },
  { href: '/admissoes/faq', label: 'FAQ' },
]

const socialLinks = [
  { href: 'https://www.facebook.com/ucan', label: 'Facebook', Icon: Facebook },
  { href: 'https://www.instagram.com/ucan', label: 'Instagram', Icon: Instagram },
]

export function Footer() {
  return (
    <footer className="border-t-4 border-primary bg-white text-gray-900 dark:bg-gray-800 dark:text-white">
      <span className="sr-only">
        Faculdade de Ciências Humanas da Universidade Católica de Angola - unidade orgânica dedicada à formação superior, investigação científica e extensão universitária desde 2003.
      </span>

      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 px-4 py-6 dark:border-gray-700">
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} alt="Logo UCAN - Faculdade de Ciências Humanas" width={44} height={44} className="rounded-full object-cover" />
          <span className="text-base font-semibold text-gray-600 dark:text-white">Faculdade de Ciências Humanas</span>
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">Siga-nos</span>
          <div className="flex gap-2">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-xl border-none bg-primary text-white transition-colors hover:bg-primary-dark"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.1fr] lg:gap-x-12">
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-primary-dark dark:text-primary-light">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-600 transition-colors hover:text-primary dark:text-gray-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-primary-dark dark:text-primary-light">Recursos</h3>
            <ul className="space-y-2">
              {resourceLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-600 transition-colors hover:text-primary dark:text-gray-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-primary-dark dark:text-primary-light">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm text-gray-600 dark:text-gray-200">
                  Av. Pedro de Castro Van-Dúnem, 24<br />
                  Palanca, Kilamba Kiaxi<br />
                  C.P. 2064, Luanda
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm text-gray-600 dark:text-gray-200">+244 923 820 314</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
                <a href="mailto:fch@ucan.edu" className="text-sm text-gray-600 transition-colors hover:text-primary dark:text-gray-200">
                  fch@ucan.edu
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start lg:items-end lg:text-right">
            <h3 className="mb-4 text-sm font-bold self-start uppercase tracking-wide text-primary-dark dark:text-primary-light">Subscreva a Newsletter</h3>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6 text-center dark:border-gray-700">
          <p className="text-sm text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} Faculdade de Ciências Humanas. Todos os direitos reservados.
          </p>
        </div>
      </div>

      <BackToTopButton />
    </footer>
  )
}

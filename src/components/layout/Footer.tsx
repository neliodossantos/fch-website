'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react'
import { FacebookIcon, InstagramIcon } from '@/components/icons/SocialIcons'
import { NewsletterForm } from './NewsletterForm'
import { BackToTopButton } from './BackToTopButton'
import { usePathname } from 'next/navigation'
import { getLocale, localizePath } from '@/lib/i18n'

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
  { href: 'https://www.facebook.com/ucan', label: 'Facebook', Icon: FacebookIcon },
  { href: 'https://www.instagram.com/ucan', label: 'Instagram', Icon: InstagramIcon },
]

export function Footer() {
  const locale = getLocale(usePathname())
  const localize = (href: string) => href.startsWith('/') ? localizePath(href, locale) : href
  const text = locale === 'en' ? {
    quickLinks: 'Quick links', resources: 'Resources', contact: 'Contact', follow: 'Follow us', newsletter: 'Subscribe to our newsletter', rights: 'All rights reserved.', faculty: 'Faculty of Human Sciences', address: 'Pedro de Castro Van-Dúnem Avenue, 24',
    labels: { Cursos: 'Courses', Admissões: 'Admissions', Eventos: 'Events', 'Corpo Docente': 'Faculty', Estágios: 'Internships', Secretaria: 'Secretariat', 'Laboratório de Psicologia': 'Psychology Laboratory', Extensão: 'Extension', 'Links Úteis': 'Useful Links' },
  } : {
    quickLinks: 'Links Rápidos', resources: 'Recursos', contact: 'Contacto', follow: 'Siga-nos', newsletter: 'Subscreva a Newsletter', rights: 'Todos os direitos reservados.', faculty: 'Faculdade de Ciências Humanas', address: 'Av. Pedro de Castro Van-Dúnem, 24', labels: {},
  }
  const label = (value: string) => text.labels[value as keyof typeof text.labels] || value

  return (
    <footer className="border-t-4 border-primary bg-white text-gray-900 dark:bg-[#1f1a16] dark:text-white">
      <span className="sr-only">
        {locale === 'en' ? 'Faculty of Human Sciences of the Catholic University of Angola.' : 'Faculdade de Ciências Humanas da Universidade Católica de Angola - unidade orgânica dedicada à formação superior, investigação científica e extensão universitária desde 2003.'}
      </span>

      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 px-4 py-6 dark:border-[#332a22]">
        <Link href={localizePath('/', locale)} className="flex items-center gap-3">
          <Image src={logo} alt="Logo UCAN - Faculdade de Ciências Humanas" width={44} height={44} className="rounded-full object-cover" />
          <span className="text-base font-semibold text-gray-600 dark:text-white">{text.faculty}</span>
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-gray-600 dark:text-[#d8cfc4]">{text.follow}</span>
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
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-primary-dark dark:text-primary-light">{text.quickLinks}</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link href={localize(link.href)} className="text-sm text-gray-600 transition-colors hover:text-primary dark:text-[#E4D9CC]">
                    {label(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-primary-dark dark:text-primary-light">{text.resources}</h3>
            <ul className="space-y-2">
              {resourceLinks.map(link => (
                <li key={link.href}>
                  <Link href={localize(link.href)} className="text-sm text-gray-600 transition-colors hover:text-primary dark:text-[#E4D9CC]">
                    {label(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-primary-dark dark:text-primary-light">{text.contact}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm text-gray-600 dark:text-[#E4D9CC]">
                  {text.address}<br />
                  Palanca, Kilamba Kiaxi<br />
                  C.P. 2064, Luanda
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm text-gray-600 dark:text-[#E4D9CC]">+244 923 820 314</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
                <a href="mailto:fch@ucan.edu" className="text-sm text-gray-600 transition-colors hover:text-primary dark:text-[#E4D9CC]">
                  fch@ucan.edu
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start lg:items-end lg:text-right">
            <h3 className="mb-4 text-sm font-bold self-start uppercase tracking-wide text-primary-dark dark:text-primary-light">{text.newsletter}</h3>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6 text-center dark:border-[#332a22]">
          <p className="text-sm text-gray-400 dark:text-[#9c8d7d]">
            © {new Date().getFullYear()} {text.faculty}. {text.rights}
          </p>
        </div>
      </div>

      <BackToTopButton />
    </footer>
  )
}

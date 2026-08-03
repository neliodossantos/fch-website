import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react'
import logo from './FCH.png'

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-white border-t-4 border-primary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image 
                src={logo} 
                alt="Logo UCAN - Faculdade de Ciências Humanas" 
                width={200} 
                height={200}
                className="rounded-full object-cover"
              />
              <span className="text-xl font-bold text-primary">FCH</span>
            </Link>
            <p className="text-gray-300 dark:text-gray-200 text-sm mb-4">
              Faculdade de Ciências Humanas da Universidade Católica de Angola - unidade orgânica dedicada à formação superior, investigação científica e extensão universitária desde 2003.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 dark:text-gray-200 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 dark:text-gray-200 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 dark:text-gray-200 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 dark:text-gray-200 hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cursos" className="text-gray-300 dark:text-gray-200 hover:text-primary transition-colors text-sm">
                  Cursos
                </Link>
              </li>
              <li>
                <Link href="/admissoes" className="text-gray-300 dark:text-gray-200 hover:text-primary transition-colors text-sm">
                  Admissões
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="text-gray-300 dark:text-gray-200 hover:text-primary transition-colors text-sm">
                  Eventos
                </Link>
              </li>
              <li>
                <Link href="/corpo-docente" className="text-gray-300 dark:text-gray-200 hover:text-primary transition-colors text-sm">
                  Corpo Docente
                </Link>
              </li>
              <li>
                <Link href="/estagios" className="text-gray-300 dark:text-gray-200 hover:text-primary transition-colors text-sm">
                  Estágios
                </Link>
              </li>
              <li>
                <Link href="https://ucan.persistec.com/" className="text-gray-300 dark:text-gray-200 hover:text-primary transition-colors text-sm">
                  UCAN
                </Link>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre/secretaria" className="text-gray-300 dark:text-gray-200 hover:text-primary transition-colors text-sm">
                  Secretaria
                </Link>
              </li>
              <li>
                <Link href="/laboratorio-psicologia" className="text-gray-300 dark:text-gray-200 hover:text-primary transition-colors text-sm">
                  Laboratório de Psicologia
                </Link>
              </li>
              <li>
                <Link href="/extensao" className="text-gray-300 dark:text-gray-200 hover:text-primary transition-colors text-sm">
                  Extensão
                </Link>
              </li>
              <li>
                <Link href="/links-uteis" className="text-gray-300 dark:text-gray-200 hover:text-primary transition-colors text-sm">
                  Links Úteis
                </Link>
              </li>
              <li>
                <Link href="/admissoes/faq" className="text-gray-300 dark:text-gray-200 hover:text-primary transition-colors text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 dark:text-gray-200 text-sm">
                  Av. Pedro de Castro<br />
                  Van-Dúnem, 24 <br />
                  Palanca, Kilamba Kiaxi<br />
                  C.P. 2064, Luanda
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-300 dark:text-gray-200 text-sm">+244 923 820 314</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:fch@ucan.edu" className="text-gray-300 dark:text-gray-200 hover:text-primary transition-colors text-sm">
                  fch@ucan.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm dark:text-gray-500">
            © {new Date().getFullYear()} Faculdade de Ciências Humanas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
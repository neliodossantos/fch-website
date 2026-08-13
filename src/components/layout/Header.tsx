'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { navigationItems } from '@/data/navigation'
import { MobileMenu } from './MobileMenu'
import { NavDropdown } from './NavDropdown'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

const logo = '/images/logo/FCH.png'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md border-b-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Logo UCAN - Faculdade de Ciências Humanas"
              width={60}
              height={60}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navigationItems.slice(0, 8).map((item, index) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="whitespace-nowrap px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary-dark dark:hover:text-primary-light hover:bg-primary/10 dark:hover:bg-gray-700 rounded-md inline-flex items-center transition-colors"
                >
                  {item.title}
                  {item.children && <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />}
                </Link>
                <NavDropdown item={item} align={index < 4 ? 'left' : 'right'} />
              </div>
            ))}
            <ThemeToggle />
            <Link
              href="/contato"
              className="ml-4 px-4 py-2 bg-primary text-white text-sm font-bold rounded-full hover:bg-primary-dark transition-colors"
            >
              Contacto
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center xl:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              aria-label="Menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  )
}

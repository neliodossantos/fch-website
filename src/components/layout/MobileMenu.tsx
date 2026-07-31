'use client'

import Link from 'next/link'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { navigationItems } from '@/data/navigation'
import { useState } from 'react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (href: string) => {
    setOpenItems(prev => 
      prev.includes(href) 
        ? prev.filter(item => item !== href)
        : [...prev, href]
    )
  }

  if (!isOpen) return null

  return (
    <div className="lg:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <nav className="container mx-auto px-4 py-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
        {navigationItems.map((item) => {
          const isOpen = openItems.includes(item.href)
          const hasChildren = item.children && item.children.length > 0

          return (
            <div key={item.href} className="border-b border-gray-100 dark:border-gray-700 last:border-b-0">
              <div className="flex items-center justify-between py-3">
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-blue-400 font-medium"
                >
                  {item.title}
                </Link>
                {hasChildren && (
                  <button
                    onClick={() => toggleItem(item.href)}
                    className="p-2 text-gray-500 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400"
                    aria-label={isOpen ? 'Fechar submenu' : 'Abrir submenu'}
                  >
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                )}
              </div>
              {hasChildren && isOpen && (
                <div className="pl-4 pb-3 space-y-2">
                  {item.children!.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={onClose}
                      className="block py-2 text-sm text-gray-600 dark:text-gray-200 hover:text-primary dark:hover:text-blue-400"
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )
        })}
        <div className="pt-4 space-y-2">
          <Link
            href="/contato"
            onClick={onClose}
            className="block w-full text-center px-4 py-3 bg-primary text-white dark:bg-gray-700 dark:text-white font-medium rounded-md hover:bg-primary-dark dark:hover:bg-gray-600 transition-colors"
          >
            Contato
          </Link>
          <Link
            href="/portal"
            onClick={onClose}
            className="block w-full text-center px-4 py-3 bg-accent text-white font-medium rounded-md hover:bg-accent/80 transition-colors"
          >
            Portal do Estudante
          </Link>
        </div>
      </nav>
    </div>
  )
}

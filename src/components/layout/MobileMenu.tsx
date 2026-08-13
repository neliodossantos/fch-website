'use client'

import Link from 'next/link'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { navigationItems } from '@/data/navigation'
import { NavItem } from '@/types'
import { useState } from 'react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

interface MobileNavItemProps {
  item: NavItem
  onClose: () => void
  depth?: number
}

function MobileNavItem({ item, onClose, depth = 0 }: MobileNavItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const hasChildren = Boolean(item.children && item.children.length > 0)

  return (
    <div className={depth === 0 ? 'border-b border-gray-100 dark:border-[#332a22] last:border-b-0' : ''}>
      <div className="flex items-center justify-between py-3">
        <Link
          href={item.href}
          onClick={onClose}
          className={
            depth === 0
              ? 'text-gray-700 dark:text-[#E4D9CC] hover:text-primary-dark dark:hover:text-primary-light font-medium'
              : depth === 1
                ? 'text-sm font-semibold text-gray-700 dark:text-[#E4D9CC] hover:text-primary-dark dark:hover:text-primary-light'
                : 'text-sm text-gray-600 dark:text-[#d8cfc4] hover:text-primary-dark dark:hover:text-primary-light'
          }
        >
          {item.title}
        </Link>
        {hasChildren && (
          <button
            onClick={() => setIsExpanded(prev => !prev)}
            className="p-2 text-gray-500 dark:text-[#d8cfc4] hover:text-primary-dark dark:hover:text-primary-light"
            aria-label={isExpanded ? `Fechar submenu de ${item.title}` : `Abrir submenu de ${item.title}`}
            aria-expanded={isExpanded}
          >
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        )}
      </div>
      {hasChildren && isExpanded && (
        <div className="pl-4 pb-3 space-y-1 border-l border-gray-100 dark:border-[#332a22]">
          {item.children!.map(child => (
            <MobileNavItem key={child.href} item={child} onClose={onClose} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className="xl:hidden bg-white dark:bg-[#1f1a16] border-t border-gray-200 dark:border-[#332a22]">
      <nav className="container mx-auto px-4 py-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
        {navigationItems.filter(item => item.href !== '/contato').map((item) => (
          <MobileNavItem key={item.href} item={item} onClose={onClose} />
        ))}
        <div className="pt-4 space-y-2">
          <Link
            href="/contato"
            onClick={onClose}
            className="block w-full text-center px-4 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-colors"
          >
            Contacto
          </Link>
        </div>
      </nav>
    </div>
  )
}

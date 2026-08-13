'use client'

import Link from 'next/link'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { navigationItems } from '@/data/navigation'
import { NavItem } from '@/types'
import { useState } from 'react'

interface NavigationProps {
  items?: NavItem[]
  className?: string
}

export function Navigation({ items = navigationItems, className }: NavigationProps) {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (href: string) => {
    setOpenItems(prev => 
      prev.includes(href) 
        ? prev.filter(item => item !== href)
        : [...prev, href]
    )
  }

  const renderNavItem = (item: NavItem, level = 0) => {
    const isOpen = openItems.includes(item.href)
    const hasChildren = item.children && item.children.length > 0

    return (
      <div key={item.href} className={level > 0 ? 'ml-4' : ''}>
        <div className="flex items-center justify-between">
          <Link
            href={item.href}
            className={`block py-2 text-gray-700 dark:text-[#d8cfc4] hover:text-primary dark:hover:text-blue-400 ${
              level === 0 ? 'font-medium' : 'text-sm'
            }`}
          >
            {item.title}
          </Link>
          {hasChildren && (
            <button
              onClick={() => toggleItem(item.href)}
              className="p-1 text-gray-500 dark:text-[#d8cfc4] hover:text-primary dark:hover:text-blue-400"
              aria-label={isOpen ? 'Fechar submenu' : 'Abrir submenu'}
            >
              {isOpen ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          )}
        </div>
        {hasChildren && isOpen && (
          <div className="border-l border-gray-200 dark:border-[#332a22] pl-2">
            {item.children!.map(child => renderNavItem(child, level + 1))}
          </div>
        )}
      </div>
    )
  }

  return (
    <nav className={className}>
      {items.map(item => renderNavItem(item))}
    </nav>
  )
}

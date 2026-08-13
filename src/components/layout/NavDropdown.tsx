import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { NavItem } from '@/types'

function NavMenuList({ items }: { items: NavItem[] }) {
  return (
    <div className="w-64 rounded-xl border border-gray-200 bg-white py-2 shadow-xl dark:border-[#332a22] dark:bg-[#1f1a16]">
      {items.map(item => {
        const hasChildren = Boolean(item.children && item.children.length > 0)

        if (!hasChildren) {
          return (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-primary/10 hover:text-primary-dark dark:text-[#E4D9CC] dark:hover:bg-[#332a22] dark:hover:text-primary-light"
            >
              {item.title}
            </Link>
          )
        }

        return (
          <div key={item.href} className="group/l2 relative">
            <Link
              href={item.href}
              className="flex items-center justify-between gap-2 px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-primary/10 hover:text-primary-dark dark:text-[#E4D9CC] dark:hover:bg-[#332a22] dark:hover:text-primary-light"
            >
              {item.title}
              <ChevronRight className="h-3.5 w-3.5 flex-shrink-0" />
            </Link>
            <div className="absolute left-full top-0 origin-top-left scale-95 pl-1 opacity-0 invisible transition-all duration-150 group-hover/l2:visible group-hover/l2:scale-100 group-hover/l2:opacity-100">
              <NavMenuList items={item.children!} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

interface NavDropdownProps {
  item: NavItem
  align?: 'left' | 'right'
}

export function NavDropdown({ item, align = 'left' }: NavDropdownProps) {
  if (!item.children || item.children.length === 0) return null

  return (
    <div
      className={
        'absolute top-full scale-95 opacity-0 invisible transition-all duration-150 group-hover:visible group-hover:scale-100 group-hover:opacity-100 ' +
        (align === 'right' ? 'right-0 origin-top-right' : 'left-0 origin-top-left')
      }
    >
      <div className="mt-2">
        <NavMenuList items={item.children} />
      </div>
    </div>
  )
}

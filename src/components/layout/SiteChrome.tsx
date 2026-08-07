'use client'

import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import { TopBar } from './TopBar'
import { Header } from './Header'
import { Footer } from './Footer'

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  if (pathname.startsWith('/admin')) {
    return <main className="flex-grow">{children}</main>
  }

  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  )
}

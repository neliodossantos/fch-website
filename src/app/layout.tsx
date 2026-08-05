import type { Metadata } from 'next'
import { TopBar } from '@/components/layout/TopBar'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'FCH - Faculdade de Ciências Humanas',
    template: '%s | FCH',
  },
  description: 'Faculdade de Ciências Humanas da Universidade Católica de Angola - formação superior, investigação e extensão universitária. Cursos de Psicologia (Clínica e do Trabalho e das Organizações) e Línguas e Administração.',
  keywords: ['faculdade', 'ciências humanas', 'UCAN', 'psicologia', 'línguas e administração', 'universidade católica de angola'],
  authors: [{ name: 'FCH' }],
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    siteName: 'FCH - Faculdade de Ciências Humanas',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <ThemeProvider>
          <TopBar />
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

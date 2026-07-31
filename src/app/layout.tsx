import type { Metadata } from 'next'
import { TopBar } from '@/components/layout/TopBar'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'FCH - Faculdade de Ciências Sociais e Humanas',
    template: '%s | FCH',
  },
  description: 'Faculdade de Ciências Sociais e Humanas - Formando profissionais que transformam a sociedade. Cursos de Psicologia, Serviço Social, Sociologia e Comunicação Social.',
  keywords: ['faculdade', 'ciências sociais', 'ciências humanas', 'psicologia', 'serviço social', 'sociologia', 'comunicação social', 'universidade'],
  authors: [{ name: 'FCH' }],
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    siteName: 'FCH - Faculdade de Ciências Sociais e Humanas',
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

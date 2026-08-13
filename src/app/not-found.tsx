import Link from 'next/link'
import { Home } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-4 mb-2">
          Página não encontrada
        </h2>
        <p className="text-gray-600 dark:text-[#E4D9CC] mb-8 max-w-md mx-auto text-justify">
          Pedimos desculpa, a página que está à procura não existe ou foi movida.
        </p>
        <Link href="/">
          <Button className="inline-flex items-center">
            <Home className="w-4 h-4 mr-2" />
            Voltar ao início
          </Button>
        </Link>
      </div>
    </div>
  )
}

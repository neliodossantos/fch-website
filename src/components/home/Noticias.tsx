import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Button } from '@/components/ui/Button'
import { getNoticias } from '@/lib/queries/noticias'

export async function Noticias() {
  const noticias = await getNoticias(3)

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <SectionTitle
            title="Notícias"
            subtitle="Fique por dentro das novidades da Faculdade"
          />
          <Link href="/eventos">
            <Button variant="ghost" className="hidden sm:flex items-center">
              Ver todas <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
        
        {noticias && noticias.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {noticias.map((noticia) => (
              <Card key={noticia.id} className="h-full">
                <CardHeader>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-300 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(noticia.data_publicacao).toLocaleDateString('pt-PT', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </div>
                  <CardTitle className="text-base hover:text-primary dark:hover:text-blue-400 transition-colors cursor-pointer">
                    {noticia.titulo}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-200 text-sm text-justify">{noticia.resumo}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">Sem dados disponíveis</p>
        )}
        
        <div className="mt-6 text-center sm:hidden">
          <Link href="/eventos">
            <Button variant="ghost" className="flex items-center mx-auto">
              Ver todas as notícias <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent } from '@/components/ui/Card'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Avatar } from '@/components/shared/Avatar'
import { getDecana } from '@/lib/queries/decana'

export default async function MensagemDecana() {
  const decana = await getDecana()

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Mensagem do Decano"
          subtitle="Palavras de boas-vindas do nosso Decano"
          centered
        />

        {decana ? (
          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-full md:w-1/2 flex flex-col items-center">
                  <Avatar src={decana.foto_url} name={decana.nome} size="xl" className="mb-4" />
                  <h3 className="text-lg font-semibold text-center text-gray-900 dark:text-white">
                    {decana.nome}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-200 text-center">
                    {decana.titulo}
                  </p>
                </div>

                <div className="w-full md:w-2/3">
                  <div className="prose dark:prose-invert max-w-none">
                    {decana.mensagem?.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4 last:mb-0 text-justify">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-8">Sem dados disponíveis</p>
        )}
      </div>
    </section>
  )
}

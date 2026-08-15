import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Quote } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { decano } from '@/data/decano'

export const metadata: Metadata = {
  title: 'Mensagem do Decano',
  description: 'Mensagem de boas-vindas do Decano da Faculdade de Ciências Humanas.',
}

export default function MensagemDecanoPage() {
  const [lede, ...corpo] = decano.mensagem

  return (
    <>
      <PageHeader
        eyebrow="Sobre a FCH"
        title="Mensagem do Decano"
        description="Boas-vindas à Faculdade de Ciências Humanas."
      />

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <Link
            href="/sobre/direcao"
            className="mb-10 inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark dark:text-primary-light dark:hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar à Direcção
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[.8fr_1.2fr] gap-12 items-start">
            <div className="lg:sticky lg:top-24">
              <div className="relative mx-auto w-full max-w-sm">
                <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] bg-primary" />
                <div className="relative aspect-[4/4.4] overflow-hidden rounded-[2rem] bg-gray-300 shadow-xl">
                  <Image
                    src={decano.foto_url}
                    alt={decano.nome}
                    fill
                    priority
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="relative mt-8 max-w-sm border-l-2 border-primary pl-4">
                <p className="text-lg font-bold text-gray-900 dark:text-white">{decano.nome}</p>
                <p className="mt-1 text-sm text-gray-600 dark:text-[#d8cfc4]">{decano.titulo}</p>
              </div>
            </div>

            <article>
              <Quote className="h-10 w-10 text-primary" />
              <p className="mt-4 text-2xl sm:text-3xl font-semibold leading-snug tracking-tight text-gray-900 dark:text-white">
                {lede}
              </p>

              <div className="mt-8 space-y-6 border-t border-gray-200 pt-8 dark:border-[#332a22]">
                {corpo.map((paragrafo, index) => (
                  <p key={index} className="text-gray-700 dark:text-[#E4D9CC] leading-relaxed text-justify">
                    {paragrafo}
                  </p>
                ))}
              </div>

              <div className="mt-12 rounded-2xl bg-primary px-8 py-4 text-center">
                <p className="text-lg sm:text-xl font-bold tracking-tight text-gray-950">
                  {decano.saudacaoFinal}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

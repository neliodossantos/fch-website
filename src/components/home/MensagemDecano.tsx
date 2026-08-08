import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Quote } from 'lucide-react'
import { getDecano } from '@/lib/queries/decano'

export default async function MensagemDecano() {
  const decano = await getDecano()
  if (!decano) return null

  const firstParagraph = decano.mensagem?.split('\n\n')[0] || 'A Faculdade de Ciências Humanas acolhe cada estudante para uma jornada de aprendizagem, descoberta e realização.'
  return (
    <section className="bg-[#f6f6f4] py-20 sm:py-24">
      <div className="container mx-auto grid items-center gap-10 px-5 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
        <div className="relative mx-auto w-full max-w-md"><div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] bg-primary" /><div className="relative aspect-[4/4.4] overflow-hidden rounded-[2rem] bg-gray-300"><Image src={decano.foto_url || '/images/decano/decano.jpg'} alt={decano.nome} fill className="object-cover object-top" /></div></div>
        <div className="max-w-2xl lg:pl-8"><p className="eyebrow">Mensagem do decano</p><Quote className="mt-7 h-9 w-9 text-primary" /><p className="mt-4 text-2xl font-semibold leading-snug tracking-tight text-gray-900 sm:text-3xl">{firstParagraph}</p><div className="mt-7 border-l-2 border-primary pl-4"><p className="font-bold text-gray-900">{decano.nome}</p><p className="mt-1 text-sm text-gray-600">{decano.titulo}</p></div><Link href="/sobre/direcao" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-gray-800 transition hover:text-primary-dark">Conheça a Direção <ArrowRight className="h-4 w-4" /></Link></div>
      </div>
    </section>
  )
}

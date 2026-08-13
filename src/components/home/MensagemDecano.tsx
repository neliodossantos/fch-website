import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Quote } from 'lucide-react'
import { decano } from '@/data/decano'

export default function MensagemDecano() {
  return (
    <section className="bg-[#f6f6f4] py-20 dark:bg-[#1a1512] sm:py-24">
      <div className="container mx-auto grid items-center gap-10 px-5 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
        <div className="relative mx-auto w-full max-w-md"><div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] bg-primary" /><div className="relative aspect-[4/4.4] overflow-hidden rounded-[2rem] bg-gray-300 dark:bg-[#332a22]"><Image src={decano.foto_url} alt={decano.nome} fill className="object-cover object-top" /></div></div>
        <div className="max-w-2xl lg:pl-8"><p className="eyebrow">Mensagem do decano</p><Quote className="mt-7 h-9 w-9 text-primary" /><p className="mt-4 text-2xl font-semibold leading-snug tracking-tight text-gray-900 dark:text-[#F5F0EA] sm:text-3xl">{decano.mensagem[0]}</p><div className="mt-7 border-l-2 border-primary pl-4"><p className="font-bold text-gray-900 dark:text-[#F5F0EA]">{decano.nome}</p><p className="mt-1 text-sm text-gray-600 dark:text-[#d8cfc4]">{decano.titulo}</p></div><div className="mt-8 flex flex-wrap items-center gap-6"><Link href="/sobre/mensagem-do-decano" className="inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-primary-dark dark:hover:text-primary-light">Ler mensagem completa <ArrowRight className="h-4 w-4" /></Link><Link href="/sobre/direcao" className="inline-flex items-center gap-2 text-sm font-bold text-gray-800 transition hover:text-primary-dark dark:text-[#E4D9CC] dark:hover:text-primary-light">Conheça a Direção <ArrowRight className="h-4 w-4" /></Link></div></div>
      </div>
    </section>
  )
}

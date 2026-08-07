import Image from 'next/image'
import banner from './PRINCIPAL-5.png'
import { getHeroBanner } from '@/lib/queries'

export async function HeroBanner() {
  const cmsImage = await getHeroBanner()

  return (
    <section className="relative bg-accent dark:bg-gray-800 min-h-[500px] lg:min-h-[600px] flex items-center">
      {cmsImage ? (
        <Image
          src={cmsImage.url}
          alt={cmsImage.alt}
          fill
          unoptimized
          className="object-cover"
          priority
        />
      ) : (
        <Image
          src={banner}
          alt="Logo UCAN - Faculdade de Ciências Humanas"
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
        <div className="container mx-auto px-4 py-8 text-white z-10">
          <p className="text-lg mb-2">Ensinar, aprender e pesquisar</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">Faculdade de Ciências Humanas</h1>
        </div>
      </div>
    </section>
  )
}

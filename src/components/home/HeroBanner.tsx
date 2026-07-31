import Image from 'next/image'
import anner from './PRINCIPAL-5.jpg' // Presumindo que este é o nome da imagem

export function HeroBanner() {
  return (
    <section className="relative bg-accent dark:bg-gray-800 min-h-[500px] lg:min-h-[600px] flex items-center">
      {/* Imagem de Fundo */}
      <Image 
        src={anner} 
        alt="Logo UCAN - Faculdade de Ciências Humanas" 
        fill
        className="object-cover"
        priority
      />

      {/* Overlay de Gradiente e Conteúdo de Texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
        <div className="container mx-auto px-4 py-8 text-white z-10">
          {/* Mensagem */}
          <p className="text-lg mb-2">
            Ensinar, aprender e pesquisar
          </p>
          
          {/* Título Principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Faculdade de Ciências Humanas
          </h1>

          {/* Você pode adicionar um botão ou outros elementos aqui se desejar */}
          {/* <Link href="#" passHref>
            <Button variant="default" size="lg" className="mt-4">
              Saiba Mais
            </Button>
          </Link> */}
        </div>
      </div>
    </section>
  )
}
import { HeroBanner } from '@/components/home/HeroBanner'
import MensagemDecano from '@/components/home/MensagemDecano'
import { Destaques } from '@/components/home/Destaques'
import { Noticias } from '@/components/home/Noticias'
import { AcessoRapido } from '@/components/home/AcessoRapido'

export const revalidate = 60 // Revalida cache a cada 60 segundos

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <MensagemDecano />
      <Destaques />
      <Noticias />
      <AcessoRapido />
    </>
  )
}

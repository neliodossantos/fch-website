'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export interface HeroSlide {
  src: string
  fallbackSrc?: string
  alt: string
  unoptimized?: boolean
}

interface HeroCarouselProps {
  slides: HeroSlide[]
}

const SLIDE_INTERVAL = 6000

export function HeroCarousel({ slides }: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [failedSlides, setFailedSlides] = useState<number[]>([])

  const goToSlide = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length)
  }

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || isPaused || slides.length < 2) return

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, SLIDE_INTERVAL)

    return () => window.clearInterval(timer)
  }, [isPaused, slides.length])

  return (
    <div
      className="group relative h-full w-full"
      aria-roledescription="carousel"
      aria-label="Momentos da Faculdade de Ciências Humanas"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => {
        const failed = failedSlides.includes(index)
        const source = failed && slide.fallbackSrc ? slide.fallbackSrc : slide.src

        return (
          <div
            key={`${slide.src}-${index}`}
            aria-hidden={index !== activeIndex}
            className={`absolute inset-0 transition-all duration-1000 ease-out motion-reduce:transition-none ${
              index === activeIndex ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
            }`}
          >
            <Image
              src={source}
              alt={index === activeIndex ? slide.alt : ''}
              fill
              priority={index === 0}
              sizes="(max-width: 1023px) 100vw, 46vw"
              unoptimized={failed ? false : slide.unoptimized}
              className="object-cover transition-transform duration-[7000ms] ease-out motion-reduce:transition-none"
              style={{ transform: index === activeIndex ? 'scale(1.07)' : 'scale(1)' }}
              onError={() => {
                if (!failed && slide.fallbackSrc) {
                  setFailedSlides((current) => [...current, index])
                }
              }}
            />
          </div>
        )
      })}

      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-950/75 via-gray-950/10 to-transparent" />

      <div className="absolute bottom-5 right-5 flex items-center gap-2 opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">
        <button
          type="button"
          aria-label="Imagem anterior"
          onClick={() => goToSlide(activeIndex - 1)}
          className="grid h-9 w-9 place-items-center rounded-full border border-white/30 bg-gray-950/40 text-white backdrop-blur transition hover:bg-white hover:text-gray-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label="Próxima imagem"
          onClick={() => goToSlide(activeIndex + 1)}
          className="grid h-9 w-9 place-items-center rounded-full border border-white/30 bg-gray-950/40 text-white backdrop-blur transition hover:bg-white hover:text-gray-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="absolute bottom-6 left-6 flex gap-2" role="tablist" aria-label="Selecionar imagem">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Ver imagem ${index + 1}`}
            onClick={() => goToSlide(index)}
            className={`h-1.5 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
              index === activeIndex ? 'w-8 bg-primary' : 'w-3 bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

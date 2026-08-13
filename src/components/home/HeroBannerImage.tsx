'use client'

import { useState } from 'react'
import Image from 'next/image'

interface HeroBannerImageProps {
  src: string
  fallbackSrc: string
  alt: string
  unoptimized: boolean
}

export function HeroBannerImage({ src, fallbackSrc, alt, unoptimized }: HeroBannerImageProps) {
  const [failed, setFailed] = useState(false)
  const resolvedSrc = failed ? fallbackSrc : src

  return (
    <Image
      src={resolvedSrc}
      alt={alt}
      fill
      unoptimized={failed ? false : unoptimized}
      className="object-cover"
      priority
      onError={() => setFailed(true)}
    />
  )
}

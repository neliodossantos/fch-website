import Image from 'next/image'

interface AvatarProps {
  src?: string | null
  name: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const dimensionClasses = {
  sm: 'w-12 h-12',
  md: 'w-24 h-24',
  lg: 'w-32 h-32',
  xl: 'w-40 h-40',
}

const textClasses = {
  sm: 'text-lg',
  md: 'text-2xl',
  lg: 'text-3xl',
  xl: 'text-4xl',
}

const imageSizes = {
  sm: 48,
  md: 96,
  lg: 128,
  xl: 160,
}

export function Avatar({ src, name, size = 'md', className = '' }: AvatarProps) {
  const initials = name
    .split(' ')
    .filter(n => n.length > 0)
    .map(n => n[0])
    .slice(0, 2)
    .join('') || '?'
  const dimensionClass = dimensionClasses[size]
  const textClass = textClasses[size]
  const imageSize = imageSizes[size]

  if (src) {
    return (
      <Image
        src={src}
        alt={name}
        width={imageSize}
        height={imageSize}
        className={`rounded-full object-cover ${dimensionClass} ${className}`}
      />
    )
  }

  return (
    <div className={`rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center ${dimensionClass} ${textClass} ${className}`}>
      <span className="font-bold text-white">
        {initials}
      </span>
    </div>
  )
}

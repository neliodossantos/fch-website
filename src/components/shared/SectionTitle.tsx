import { cn } from '@/lib/utils'

interface SectionTitleProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionTitle({ eyebrow, title, subtitle, centered = false, className }: SectionTitleProps) {
  return (
    <div className={cn('mb-8', centered && 'text-center', className)}>
      {eyebrow && (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-primary-dark dark:text-primary-light">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-gray-600 dark:text-gray-200">{subtitle}</p>
      )}
    </div>
  )
}

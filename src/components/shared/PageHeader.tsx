import { cn } from '@/lib/utils'

interface PageHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}

export function PageHeader({ eyebrow, title, description, className }: PageHeaderProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark dark:from-gray-800 dark:to-gray-900 text-white py-16 sm:py-20',
        className
      )}
    >
      <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-white/10 dark:bg-white/5" />
      <div className="pointer-events-none absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-gray-950/10" />
      <div className="relative container mx-auto px-4">
        {eyebrow && (
          <p className="mb-3 inline-flex items-center rounded-full bg-gray-950/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white dark:bg-white/10 dark:text-primary-light">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">{title}</h1>
        {description && (
          <p className="text-lg text-white dark:text-gray-100 max-w-3xl leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  )
}

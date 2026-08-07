import { cn } from '@/lib/utils'

interface PageHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}

export function PageHeader({ eyebrow, title, description, className }: PageHeaderProps) {
  return (
    <div className={cn('bg-primary dark:bg-gray-800 text-white py-16 sm:py-20', className)}>
      <div className="container mx-auto px-4">
        {eyebrow && (
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-gray-950/70 dark:text-primary-light">
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

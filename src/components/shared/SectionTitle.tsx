import { cn } from '@/lib/utils'

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionTitle({ title, subtitle, centered = false, className }: SectionTitleProps) {
  return (
    <div className={cn('mb-8', centered && 'text-center', className)}>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">{title}</h2>
      {subtitle && (
        <p className="text-gray-600 dark:text-gray-200">{subtitle}</p>
      )}
      <div className={cn('w-20 h-1 bg-primary dark:bg-primary mt-4', centered && 'mx-auto')} />
    </div>
  )
}

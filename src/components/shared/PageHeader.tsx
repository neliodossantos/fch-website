import { cn } from '@/lib/utils'

interface PageHeaderProps {
  title: string
  description?: string
  className?: string
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={cn('bg-primary dark:bg-gray-800 text-white py-16', className)}>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        {description && (
          <p className="text-lg text-white dark:text-gray-100 max-w-3xl">{description}</p>
        )}
      </div>
    </div>
  )
}

import Link from 'next/link'
import { Mail } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Avatar } from '@/components/shared/Avatar'

interface TeamMemberProps {
  nome: string
  cargo?: string
  titulacao?: string
  areas?: string[]
  email?: string
  foto?: string
  foto_url?: string | null
  departamento?: string
  slug?: string
}

export function TeamMember({ nome, cargo, titulacao, areas, email, foto_url, departamento, slug }: TeamMemberProps) {
  const cardContent = (
    <Card className={`h-full transition-shadow ${slug ? 'hover:shadow-lg cursor-pointer' : ''}`}>
      <CardContent className="pt-6">
        <div className="flex justify-center mb-4">
          <Avatar src={foto_url} name={nome} size="xl" className="!w-60 !h-60" />
        </div>
        <h3 className="text-lg font-semibold text-center text-gray-900 dark:text-white mb-1 hover:text-primary dark:hover:text-blue-400 transition-colors">
          {nome}
        </h3>
        {cargo && <p className="text-sm text-gray-700 dark:text-gray-100 text-center font-medium">{cargo}</p>}
        {titulacao && <p className="text-sm text-gray-600 dark:text-gray-200 text-center">{titulacao}</p>}
        {departamento && <p className="text-sm text-gray-500 dark:text-gray-300 text-center">Departamento de {departamento}</p>}
        {Array.isArray(areas) && areas.length > 0 && (
          <div className="mt-3">
            <p className="text-xs text-gray-500 dark:text-gray-300 text-center mb-1">Áreas de atuação:</p>
            <div className="flex flex-wrap gap-1 justify-center">
              {areas.map((area, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 px-2 py-1 rounded"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        )}
        {email && (
          <div className="mt-4 flex items-center justify-center text-sm text-gray-600 dark:text-gray-200">
            <Mail className="w-4 h-4 mr-2" />
            {slug ? (
              <span>{email}</span>
            ) : (
              <a href={`mailto:${email}`} className="hover:text-primary dark:hover:text-blue-400">{email}</a>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )

  if (slug) {
    return (
      <Link href={`/corpo-docente/${slug}`} className="block">
        {cardContent}
      </Link>
    )
  }

  return cardContent
}

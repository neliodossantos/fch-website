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
    <Card className={`h-full min-h-[320px] transition-all ${slug ? 'cursor-pointer hover:-translate-y-0.5 hover:shadow-lg' : ''}`}>
      <CardContent className="flex h-full flex-col p-6 pt-6">
        <div className="flex h-20 items-center justify-center">
          <Avatar src={foto_url} name={nome} size="md" className="!h-20 !w-20 ring-2 ring-primary/20" />
        </div>
        <h3 className="mt-5 min-h-12 text-center text-lg font-bold text-gray-900 transition-colors hover:text-primary dark:text-white dark:hover:text-blue-400">
          {nome}
        </h3>
        <div className="min-h-16">
          {cargo && <p className="text-center text-sm font-medium leading-snug text-primary-dark">{cargo}</p>}
          {titulacao && <p className="mt-1 text-center text-sm text-gray-600 dark:text-[#E4D9CC]">{titulacao}</p>}
          {departamento && <p className="text-center text-sm text-gray-500 dark:text-[#d8cfc4]">{departamento}</p>}
        </div>
        {Array.isArray(areas) && areas.length > 0 && (
          <div className="mt-3">
            <p className="text-xs text-gray-500 dark:text-[#d8cfc4] text-center mb-1">Áreas de atuação:</p>
            <div className="flex flex-wrap gap-1 justify-center">
              {areas.map((area, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-100 dark:bg-[#332a22] text-gray-600 dark:text-[#E4D9CC] px-2 py-1 rounded"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        )}
        {email && (
          <div className="mt-auto flex min-h-10 items-center justify-center pt-5 text-center text-xs text-gray-600 dark:text-[#E4D9CC]">
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

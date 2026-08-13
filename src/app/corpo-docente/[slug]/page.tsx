import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Mail, BookOpen, GraduationCap, ArrowLeft } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Avatar } from '@/components/shared/Avatar'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { docentes, getDocenteBySlug } from '@/data/docentes'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return docentes.map((docente) => ({ slug: docente.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const docente = getDocenteBySlug(slug)

  if (!docente) {
    return { title: 'Docente não encontrado' }
  }

  return {
    title: docente.nome,
    description: `${docente.nome} - ${docente.titulo}${docente.departamento ? ` - ${docente.departamento}` : ''}`,
  }
}

export default async function DocentePage({ params }: PageProps) {
  const { slug } = await params
  const docente = getDocenteBySlug(slug)

  if (!docente) {
    notFound()
  }

  return (
    <>
      <PageHeader eyebrow="Corpo Docente" title={docente.nome} />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Link href="/corpo-docente" className="inline-flex items-center text-primary hover:text-primary-dark mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Corpo Docente
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <Avatar src={docente.foto_url} name={docente.nome} size="lg" />
                  </div>

                  <h2 className="text-xl font-semibold text-center text-primary dark:text-primary mb-1">
                    {docente.nome}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-[#E4D9CC] text-center mb-4">
                    {docente.titulo}
                  </p>
                  {docente.departamento && (
                    <p className="text-sm text-gray-500 dark:text-[#d8cfc4] text-center mb-4">
                      {docente.departamento}
                    </p>
                  )}

                  {docente.email && (
                    <div className="border-t pt-4 space-y-3">
                      <h3 className="font-semibold text-gray-900 dark:text-[#F5F0EA] mb-3">Contacto</h3>
                      <div className="flex items-center text-sm">
                        <Mail className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        <a href={`mailto:${docente.email}`} className="text-gray-600 dark:text-[#E4D9CC] hover:text-primary">
                          {docente.email}
                        </a>
                      </div>
                    </div>
                  )}

                  {docente.email && (
                    <div className="mt-6">
                      <a href={`mailto:${docente.email}`}>
                        <Button className="w-full">Enviar Mensagem</Button>
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-8">
              {docente.formacao.length > 0 && (
                <div>
                  <SectionTitle title="Formação Académica" />
                  <Card>
                    <CardContent className="pt-6">
                      <ul className="space-y-3">
                        {docente.formacao.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <GraduationCap className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-[#E4D9CC]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              )}

              {docente.disciplinas.length > 0 && (
                <div>
                  <SectionTitle title="Disciplinas Leccionadas" />
                  <Card>
                    <CardContent className="pt-6">
                      <ul className="space-y-3">
                        {docente.disciplinas.map((disciplina, index) => (
                          <li key={index} className="flex items-start">
                            <BookOpen className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-[#E4D9CC]">
                              {disciplina.nome} — {disciplina.curso}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

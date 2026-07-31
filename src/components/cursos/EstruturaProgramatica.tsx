'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Download, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { EstruturaCurricular } from '@/lib/queries/cursos'
import { cn } from '@/lib/utils'

interface EstruturaProgramaticaProps {
  estrutura: EstruturaCurricular
}

export function EstruturaProgramatica({ estrutura }: EstruturaProgramaticaProps) {
  const [expandedYears, setExpandedYears] = useState<number[]>([1])

  const toggleYear = (ano: number) => {
    setExpandedYears(prev =>
      prev.includes(ano)
        ? prev.filter(y => y !== ano)
        : [...prev, ano]
    )
  }

  return (
    <section className="py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <SectionTitle title="Estrutura Programática" className="mb-0" />
        {estrutura.pdfUrl && (
          <a href={estrutura.pdfUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Plano Curricular
            </Button>
          </a>
        )}
      </div>

      <div className="space-y-4">
        {estrutura.anos.map((anoCurricular) => (
          <Card key={anoCurricular.ano} className="overflow-hidden">
            <button
              onClick={() => toggleYear(anoCurricular.ano)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <span className="text-lg font-semibold text-primary dark:text-primary">
                  {anoCurricular.ano}º Ano
                </span>
              </div>
              <ChevronDown
                className={cn(
                  'w-5 h-5 text-gray-500 transition-transform duration-200',
                  expandedYears.includes(anoCurricular.ano) && 'rotate-180'
                )}
              />
            </button>

            {expandedYears.includes(anoCurricular.ano) && (
              <CardContent className="pt-0 pb-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {anoCurricular.semestres.map((semestre) => (
                    <div key={semestre.semestre} className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        {semestre.semestre}
                      </h4>
                      <div className="space-y-3">
                        {semestre.disciplinas.map((disciplina, index) => (
                          <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-md p-3 shadow-sm"
                          >
                            <div className="flex justify-between items-start gap-2">
                              <div className="flex-1">
                                <p className="font-medium text-gray-900 dark:text-gray-100">
                                  {disciplina.nome}
                                </p>
                                <Link
                                  href={`/corpo-docente/${disciplina.professorSlug}`}
                                  className="text-sm text-primary hover:text-primary-dark dark:hover:text-primary-light transition-colors"
                                >
                                  {disciplina.professor}
                                </Link>
                              </div>
                              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded whitespace-nowrap">
                                {disciplina.creditos} créditos
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </section>
  )
}

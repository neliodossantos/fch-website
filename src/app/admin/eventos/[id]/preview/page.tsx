/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowLeft, Calendar, Clock, MapPin, Users } from 'lucide-react'
import { useAdminToken, adminRequest, resolveMediaUrl } from '../../../shared/adminApi'
import { SectionsRenderer } from '@/components/shared/SectionsRenderer'
import type { EventoAdmin } from '../../EventoForm'

export default function PreviewEventoPage() {
  const { id } = useParams<{ id: string }>()
  const [token] = useAdminToken()
  const [item, setItem] = useState<EventoAdmin | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!token) return
    adminRequest<EventoAdmin[]>(token, '/eventos?all=true')
      .then(items => { const found = items.find(candidate => candidate.id === id); if (!found) throw new Error('Evento não encontrado.'); setItem(found) })
      .catch(err => setError(err instanceof Error ? err.message : 'Erro ao carregar evento.'))
  }, [token, id])

  if (!token) return null
  if (error) return <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-[#3b1d1d] dark:text-[#fca5a5]">{error}</p>
  if (!item) return <p className="text-gray-500 dark:text-[#9c8d7d]">A carregar…</p>

  return (
    <section className="rounded-2xl bg-white py-10 shadow-sm dark:bg-[#151312]">
      <div className="container mx-auto px-4">
        <Link href={`/admin/eventos/${item.id}/editar`} className="mb-8 inline-flex items-center text-primary hover:text-primary-dark dark:text-primary-light dark:hover:text-primary">
          <ArrowLeft className="mr-2 h-4 w-4" /> Voltar ao editor
        </Link>

        {!item.published && <p className="mb-4 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700 dark:bg-[#443116] dark:text-[#fcd34d]">Rascunho — ainda não publicado</p>}

        <h1 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">{item.titulo}</h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-8 overflow-hidden rounded-lg">
              {item.imagem_url ? (
                <img src={resolveMediaUrl(item.imagem_url)} alt={item.titulo} className="h-auto max-h-[420px] w-full object-cover" />
              ) : (
                <div className="flex h-64 items-center justify-center bg-gray-200 dark:bg-[#332a22]">
                  <span className="text-gray-500 dark:text-[#d8cfc4]">Sem imagem disponível</span>
                </div>
              )}
            </div>

            {item.descricao && (
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-[#F5F0EA]">Sobre o Evento</h2>
                <p className="whitespace-pre-line text-gray-700 dark:text-[#E4D9CC]">{item.descricao}</p>
              </div>
            )}

            {item.agenda && item.agenda.length > 0 && (
              <div className="mt-6">
                <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-[#F5F0EA]">Programa</h2>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-[#E4D9CC]">
                  {item.agenda.map((row, index) => <li key={index}><strong>{row.time ? `${row.time} — ` : ''}{row.title}</strong>{row.description ? ` — ${row.description}` : ''}</li>)}
                </ul>
              </div>
            )}

            {item.link_externo && <a href={item.link_externo} target="_blank" rel="noreferrer" className="mt-6 inline-block font-semibold text-primary-dark hover:underline dark:text-primary-light">Mais informações / inscrições →</a>}

            {item.informacoes_adicionais && <p className="mt-6 whitespace-pre-line text-sm text-gray-600 dark:text-[#d8cfc4]">{item.informacoes_adicionais}</p>}

            <div className="mt-8"><SectionsRenderer sections={item.sections} /></div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 rounded-lg bg-gray-50 p-6 dark:bg-[#1f1a16]">
              <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-[#F5F0EA]">Detalhes do Evento</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Calendar className="mr-3 mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-[#d8cfc4]">Data</p>
                    <p className="capitalize text-gray-900 dark:text-[#F5F0EA]">
                      {new Date(item.data).toLocaleDateString('pt-PT', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' })}
                      {item.data_fim ? ` – ${new Date(item.data_fim).toLocaleDateString('pt-PT')}` : ''}
                    </p>
                  </div>
                </div>

                {item.hora && (
                  <div className="flex items-start">
                    <Clock className="mr-3 mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-[#d8cfc4]">Horário</p>
                      <p className="text-gray-900 dark:text-[#F5F0EA]">{item.hora}</p>
                    </div>
                  </div>
                )}

                {item.local && (
                  <div className="flex items-start">
                    <MapPin className="mr-3 mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-[#d8cfc4]">Local</p>
                      <p className="text-gray-900 dark:text-[#F5F0EA]">{item.local}</p>
                    </div>
                  </div>
                )}

                {item.organizadores && item.organizadores.length > 0 && (
                  <div className="flex items-start">
                    <Users className="mr-3 mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-[#d8cfc4]">Organização</p>
                      <p className="text-gray-900 dark:text-[#F5F0EA]">{item.organizadores.join(', ')}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, LayoutGrid, Mail, Network } from 'lucide-react'
import { Avatar } from '@/components/shared/Avatar'

export interface DirectionMember {
  nome: string
  cargo: string
  titulacao?: string
  email?: string
  foto_url?: string
}

export interface HistoryMember {
  nome: string
  cargo: string
  destaque?: string
  foto_url?: string
}

interface DirecaoStructureProps {
  decano: DirectionMember
  vicedecanos: DirectionMember[]
  apoio: DirectionMember[]
  chefes: DirectionMember[]
  decanosHistorico: HistoryMember[]
  vicedecanosHistorico: HistoryMember[]
}

function MemberCard({ member, compact = false }: { member: DirectionMember; compact?: boolean }) {
  return (
    <article className={`h-full rounded-2xl border border-gray-200 bg-white text-center shadow-sm dark:border-[#332a22] dark:bg-[#1f1a16] ${compact ? 'p-4' : 'p-5'}`}>
      <Avatar src={member.foto_url} name={member.nome} size={compact ? 'md' : 'lg'} className={compact ? 'mx-auto mb-3' : 'mx-auto mb-4'} />
      <h3 className={`font-bold leading-snug text-gray-900 dark:text-[#F5F0EA] ${compact ? 'text-sm' : 'text-base'}`}>{member.nome}</h3>
      <p className={`mt-1 font-medium leading-snug text-primary-dark ${compact ? 'text-xs' : 'text-sm'}`}>{member.cargo}</p>
      {member.titulacao && <p className="mt-1 text-xs text-gray-500 dark:text-[#9c8d7d]">{member.titulacao}</p>}
      {member.email && <a className="mt-3 inline-flex max-w-full items-center gap-1 break-all text-xs text-gray-500 hover:text-primary-dark dark:text-[#9c8d7d] dark:hover:text-primary-light" href={`mailto:${member.email}`}><Mail className="h-3.5 w-3.5 shrink-0" />{member.email}</a>}
    </article>
  )
}

function Organigrama({ decano, vicedecanos, apoio, chefes }: Omit<DirecaoStructureProps, 'decanosHistorico' | 'vicedecanosHistorico'>) {
  return (
    <div className="space-y-5 overflow-x-auto pb-2">
      <div className="min-w-[760px] space-y-5 px-2">
        <div className="mx-auto max-w-sm text-center"><p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-primary-dark">Decano</p><MemberCard member={decano} /></div>
        <div className="mx-auto h-7 w-px bg-primary/50" />
        <section><p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-primary-dark">Vice-Decanos</p><div className="grid grid-cols-2 gap-5 border-t border-primary/40 pt-5"><MemberCard member={vicedecanos[0]} /><MemberCard member={vicedecanos[1]} /></div></section>
        <div className="mx-auto h-7 w-px bg-primary/50" />
        <section><p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-primary-dark">Serviços de Apoio à Direção</p><div className="grid grid-cols-5 gap-3 border-t border-primary/40 pt-5">{apoio.map(member => <MemberCard key={member.email} member={member} compact />)}</div></section>
        <div className="mx-auto h-7 w-px bg-primary/50" />
        <section><p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-primary-dark">Chefes de Departamento</p><div className="grid grid-cols-4 gap-4 border-t border-primary/40 pt-5">{chefes.map(member => <MemberCard key={member.email} member={member} compact />)}</div></section>
      </div>
    </div>
  )
}

export function DirecaoStructure(props: DirecaoStructureProps) {
  const [view, setView] = useState<'organigrama' | 'grelha'>('organigrama')
  const [history, setHistory] = useState<'decanos' | 'vicedecanos'>('decanos')
  const [historyIndex, setHistoryIndex] = useState(0)
  const historicItems = history === 'decanos' ? props.decanosHistorico : props.vicedecanosHistorico
  const historicMember = historicItems[historyIndex] ?? historicItems[0]
  const setHistoryTab = (tab: 'decanos' | 'vicedecanos') => { setHistory(tab); setHistoryIndex(0) }
  const moveHistory = (direction: -1 | 1) => setHistoryIndex(current => (current + direction + historicItems.length) % historicItems.length)

  return (
    <div className="space-y-14">
      <div className="flex justify-center"><div className="inline-flex rounded-xl border border-gray-200 bg-gray-100 p-1 dark:border-[#332a22] dark:bg-[#1f1a16]">
        <button type="button" onClick={() => setView('organigrama')} className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold ${view === 'organigrama' ? 'bg-white text-gray-950 shadow-sm dark:bg-[#332a22] dark:text-[#F5F0EA]' : 'text-gray-600 dark:text-[#d8cfc4]'}`}><Network className="h-4 w-4" />Organograma</button>
        <button type="button" onClick={() => setView('grelha')} className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold ${view === 'grelha' ? 'bg-white text-gray-950 shadow-sm dark:bg-[#332a22] dark:text-[#F5F0EA]' : 'text-gray-600 dark:text-[#d8cfc4]'}`}><LayoutGrid className="h-4 w-4" />Grelha</button>
      </div></div>

      {view === 'organigrama' ? <Organigrama decano={props.decano} vicedecanos={props.vicedecanos} apoio={props.apoio} chefes={props.chefes} /> : (
        <div className="space-y-10">
          <section><h2 className="mb-5 border-b border-gray-200 pb-3 text-xl font-bold text-gray-900 dark:border-[#332a22] dark:text-[#F5F0EA]">Decano</h2><div className="mx-auto max-w-sm"><MemberCard member={props.decano} /></div></section>
          <section><h2 className="mb-5 border-b border-gray-200 pb-3 text-xl font-bold text-gray-900 dark:border-[#332a22] dark:text-[#F5F0EA]">Vice-Decanos</h2><div className="grid gap-6 md:grid-cols-2">{props.vicedecanos.map(member => <MemberCard key={member.email} member={member} />)}</div></section>
          <section><h2 className="mb-5 border-b border-gray-200 pb-3 text-xl font-bold text-gray-900 dark:border-[#332a22] dark:text-[#F5F0EA]">Serviços de Apoio à Direção</h2><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{props.apoio.map(member => <MemberCard key={member.email} member={member} compact />)}</div></section>
          <section><h2 className="mb-5 border-b border-gray-200 pb-3 text-xl font-bold text-gray-900 dark:border-[#332a22] dark:text-[#F5F0EA]">Chefes de Departamento</h2><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{props.chefes.map(member => <MemberCard key={member.email} member={member} compact />)}</div></section>
        </div>
      )}

      <section className="rounded-3xl border border-gray-200 bg-gray-50 p-6 dark:border-[#332a22] dark:bg-[#1a1512] sm:p-9"><p className="text-xs font-bold uppercase tracking-[0.16em] text-primary-dark">Galeria de memória</p><div className="mt-3 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-[#F5F0EA]">Direções ao Longo dos Anos</h2><p className="mt-2 max-w-2xl text-gray-600 dark:text-[#d8cfc4]">Conheça os académicos e gestores que marcaram a história da Faculdade de Ciências Humanas.</p></div><div className="inline-flex rounded-xl border border-gray-200 bg-white p-1 dark:border-[#332a22] dark:bg-[#1f1a16]"><button type="button" onClick={() => setHistoryTab('decanos')} className={`rounded-lg px-3 py-2 text-sm font-semibold ${history === 'decanos' ? 'bg-primary text-gray-950' : 'text-gray-600 dark:text-[#d8cfc4]'}`}>Decanos ({props.decanosHistorico.length})</button><button type="button" onClick={() => setHistoryTab('vicedecanos')} className={`rounded-lg px-3 py-2 text-sm font-semibold ${history === 'vicedecanos' ? 'bg-primary text-gray-950' : 'text-gray-600 dark:text-[#d8cfc4]'}`}>Vice-Decanos ({props.vicedecanosHistorico.length})</button></div></div>
        <div className="mt-7 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-[#332a22] dark:bg-[#1f1a16] sm:p-7"><div className="flex items-center justify-between border-b border-gray-100 pb-4 dark:border-[#332a22]"><p className="text-xs font-bold uppercase tracking-[0.12em] text-primary-dark">{history === 'decanos' ? 'Galeria histórica do Decanato' : 'Galeria histórica da Vice-Decania'}</p><div className="flex items-center gap-2"><span className="text-xs text-gray-500 dark:text-[#9c8d7d]">{historyIndex + 1} de {historicItems.length}</span><button type="button" aria-label="Anterior" onClick={() => moveHistory(-1)} className="grid h-8 w-8 place-items-center rounded-lg bg-gray-100 text-gray-700 hover:bg-primary dark:bg-[#332a22] dark:text-[#d8cfc4] dark:hover:text-white"><ChevronLeft className="h-4 w-4" /></button><button type="button" aria-label="Próximo" onClick={() => moveHistory(1)} className="grid h-8 w-8 place-items-center rounded-lg bg-gray-100 text-gray-700 hover:bg-primary dark:bg-[#332a22] dark:text-[#d8cfc4] dark:hover:text-white"><ChevronRight className="h-4 w-4" /></button></div></div>
          {historicMember && <div className="flex min-h-52 flex-col items-center gap-6 py-6 sm:flex-row sm:items-center"><Avatar src={historicMember.foto_url} name={historicMember.nome} size="xl" className="shrink-0 ring-2 ring-primary/30" /><div className="text-center sm:text-left">{historicMember.destaque && <span className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-bold text-primary-dark">{historicMember.destaque}</span>}<h3 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-[#F5F0EA]">{historicMember.nome}</h3><p className="mt-1 text-gray-600 dark:text-[#d8cfc4]">{historicMember.cargo}</p></div></div>}
          <div className="flex justify-center gap-2 border-t border-gray-100 pt-4 dark:border-[#332a22]">{historicItems.map((item, index) => <button type="button" key={item.nome} aria-label={`Ver ${item.nome}`} onClick={() => setHistoryIndex(index)} className={`h-2 rounded-full transition-all ${index === historyIndex ? 'w-7 bg-primary' : 'w-2 bg-gray-300 dark:bg-[#4a3c30]'}`} />)}</div></div>
        <p className="mt-6 rounded-xl border border-primary/25 bg-primary/10 p-4 text-sm leading-relaxed text-gray-700 dark:text-[#d8cfc4]"><strong>Tradição de Formação FCH:</strong> Com excepção da Doutora Elizabeth Ceita, os restantes gestores acima, incluindo os actuais Vice-Decanos, concluíram a Licenciatura na Faculdade de Ciências Humanas da Universidade Católica de Angola.</p>
      </section>
    </div>
  )
}

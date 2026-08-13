'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { Mail } from 'lucide-react'
import { Avatar } from '@/components/shared/Avatar'

export interface OrgPersonNode {
  type: 'person'
  id: string
  nome: string
  cargo?: string
  foto_url?: string | null
  email?: string
  href?: string
  children?: OrgNode[]
}

export interface OrgGroupNode {
  type: 'group'
  id: string
  label: string
  /** Quando true, os filhos aparecem agrupados numa grelha compacta em vez de ramos individuais — evita árvores demasiado largas quando um grupo tem muitos membros. */
  dense?: boolean
  children: OrgNode[]
}

export type OrgNode = OrgPersonNode | OrgGroupNode

function PersonCard({ node, isRoot }: { node: OrgPersonNode; isRoot?: boolean }) {
  const card = (
    <div
      className={
        isRoot
          ? 'relative flex flex-col items-center rounded-2xl border border-gray-200 bg-white px-7 py-6 text-center shadow-sm dark:border-[#332a22] dark:bg-[#1f1a16]'
          : 'flex w-36 flex-col items-center rounded-2xl border border-gray-200 bg-white px-3 py-4 text-center shadow-sm transition-shadow hover:shadow-lg dark:border-[#332a22] dark:bg-[#1f1a16]'
      }
    >
      {isRoot && (
        <span className="pointer-events-none absolute -inset-4 -z-10 rounded-full bg-gradient-to-br from-primary/25 via-primary-light/15 to-transparent blur-xl" />
      )}
      <Avatar
        src={node.foto_url}
        name={node.nome}
        size={isRoot ? 'xl' : 'md'}
        className={isRoot ? '!h-28 !w-28' : '!h-16 !w-16'}
      />
      <p className={isRoot ? 'mt-4 text-lg font-bold text-gray-900 dark:text-white' : 'mt-3 text-sm font-semibold leading-snug text-gray-900 dark:text-white'}>
        {node.nome}
      </p>
      {node.cargo && (
        <p className={isRoot ? 'mt-1 text-sm font-medium text-primary-dark dark:text-primary-light' : 'mt-0.5 text-xs text-gray-500 dark:text-[#d8cfc4]'}>
          {node.cargo}
        </p>
      )}
      {isRoot && node.email && (
        <div className="mt-3 flex items-center gap-1.5 text-xs text-gray-500 dark:text-[#d8cfc4]">
          <Mail className="h-3.5 w-3.5" />
          {node.email}
        </div>
      )}
    </div>
  )

  return node.href ? (
    <Link href={node.href} className="block">
      {card}
    </Link>
  ) : (
    card
  )
}

function GroupPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center whitespace-nowrap rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-dark dark:border-primary-light/30 dark:bg-primary-light/10 dark:text-primary-light">
      {label}
    </span>
  )
}

function DenseCluster({ children }: { children: OrgNode[] }) {
  return (
    <div className="flex max-w-3xl flex-wrap justify-center gap-3">
      {children.map(child =>
        child.type === 'person' ? <PersonCard key={child.id} node={child} /> : <GroupPill key={child.id} label={child.label} />
      )}
    </div>
  )
}

function TreeNode({ node, isRoot }: { node: OrgNode; isRoot?: boolean }) {
  const hasChildren = node.children && node.children.length > 0

  return (
    <li>
      {node.type === 'person' ? <PersonCard node={node} isRoot={isRoot} /> : <GroupPill label={node.label} />}
      {hasChildren && (
        <ul>
          {node.type === 'group' && node.dense ? (
            <li>
              <DenseCluster children={node.children!} />
            </li>
          ) : (
            node.children!.map(child => <TreeNode key={child.id} node={child} />)
          )}
        </ul>
      )}
    </li>
  )
}

export function OrgChart({ root }: { root: OrgNode }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (el) {
      el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2
    }
  }, [])

  return (
    <div ref={containerRef} className="org-tree overflow-x-auto pb-4">
      <ul className="min-w-max">
        <TreeNode node={root} isRoot />
      </ul>
    </div>
  )
}

import type { SupabaseClient } from '@supabase/supabase-js'

export interface LibraryItem {
  id: string
  type: 'book' | 'thesis'
  title: string
  slug: string
  abstract: string | null
  year: number | null
  language: string | null
  cover_path: string | null
  file_path: string
  published: boolean
  created_at: string
  updated_at: string
  authors?: LibraryAuthor[]
  tags?: LibraryTag[]
}

export interface LibraryAuthor {
  id: string
  name: string
  slug: string
  author_order?: number
}

export interface LibraryTag {
  id: string
  name: string
  slug: string
}

interface GetLibraryItemsParams {
  q?: string
  type?: 'book' | 'thesis'
  year?: number
  limit?: number
  offset?: number
}

export async function getLibraryItems(
  supabase: SupabaseClient,
  params: GetLibraryItemsParams = {}
): Promise<LibraryItem[]> {
  const { q, type, year, limit = 20, offset = 0 } = params

  let query = supabase
    .from('library_items')
    .select(`
      *,
      library_item_authors (
        author_order,
        library_authors ( id, name, slug )
      ),
      library_item_tags (
        library_tags ( id, name, slug )
      )
    `)
    .eq('published', true)
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1)

  if (type) {
    query = query.eq('type', type)
  }

  if (year) {
    query = query.eq('year', year)
  }

  if (q) {
    query = query.or(`title.ilike.%${q}%,abstract.ilike.%${q}%`)
  }

  const { data, error } = await query

  if (error || !data) return []

  return data.map(normalizeItem)
}

export async function getLibraryItemBySlug(
  supabase: SupabaseClient,
  slug: string
): Promise<LibraryItem | null> {
  const { data, error } = await supabase
    .from('library_items')
    .select(`
      *,
      library_item_authors (
        author_order,
        library_authors ( id, name, slug )
      ),
      library_item_tags (
        library_tags ( id, name, slug )
      )
    `)
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (error || !data) return null

  return normalizeItem(data)
}

interface RawItemAuthorRelation {
  author_order: number
  library_authors: LibraryAuthor | null
}

interface RawItemTagRelation {
  library_tags: LibraryTag | null
}

interface RawLibraryItem {
  id: string
  type: 'book' | 'thesis'
  title: string
  slug: string
  abstract: string | null
  year: number | null
  language: string | null
  cover_path: string | null
  file_path: string
  published: boolean
  created_at: string
  updated_at: string
  library_item_authors?: RawItemAuthorRelation[]
  library_item_tags?: RawItemTagRelation[]
}

function normalizeItem(raw: RawLibraryItem): LibraryItem {
  const authors: LibraryAuthor[] = (raw.library_item_authors ?? [])
    .filter((rel) => rel.library_authors !== null)
    .map((rel) => ({
      ...(rel.library_authors as LibraryAuthor),
      author_order: rel.author_order,
    }))
    .sort((a, b) => (a.author_order ?? 1) - (b.author_order ?? 1))

  const tags: LibraryTag[] = (raw.library_item_tags ?? [])
    .filter((rel) => rel.library_tags !== null)
    .map((rel) => rel.library_tags as LibraryTag)

  return {
    id: raw.id,
    type: raw.type,
    title: raw.title,
    slug: raw.slug,
    abstract: raw.abstract ?? null,
    year: raw.year ?? null,
    language: raw.language ?? null,
    cover_path: raw.cover_path ?? null,
    file_path: raw.file_path,
    published: raw.published,
    created_at: raw.created_at,
    updated_at: raw.updated_at,
    authors,
    tags,
  }
}

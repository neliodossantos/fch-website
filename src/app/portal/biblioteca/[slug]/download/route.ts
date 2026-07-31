import { NextResponse } from 'next/server'
import { createSupabaseServerClient } from '@/lib/supabase-server'
import { getLibraryItemBySlug } from '@/lib/queries/library'

interface RouteParams {
  params: Promise<{ slug: string }>
}

export async function GET(request: Request, { params }: RouteParams) {
  const supabase = await createSupabaseServerClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  const { slug } = await params
  const item = await getLibraryItemBySlug(supabase, slug)

  if (!item) {
    return NextResponse.json({ error: 'Item não encontrado' }, { status: 404 })
  }

  const { data: signedUrlData, error } = await supabase.storage
    .from('library-files')
    .createSignedUrl(item.file_path, 60 * 60) // 1 hour expiry

  if (error || !signedUrlData?.signedUrl) {
    return NextResponse.json({ error: 'Não foi possível gerar o link de download' }, { status: 500 })
  }

  // Log download event (fire-and-forget)
  void supabase
    .from('library_events')
    .insert({ item_id: item.id, user_id: user.id, event_type: 'download' })

  return NextResponse.redirect(signedUrlData.signedUrl)
}

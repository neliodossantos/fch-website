import { NextRequest, NextResponse } from 'next/server'
import { toPortuguesePath } from './src/lib/i18n'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (pathname !== '/en' && !pathname.startsWith('/en/')) return NextResponse.next()

  const url = request.nextUrl.clone()
  url.pathname = toPortuguesePath(pathname)
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ['/en', '/en/:path*'],
}

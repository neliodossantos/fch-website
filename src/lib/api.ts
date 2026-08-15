/** Cliente público da API NestJS da FCH. */
const apiUrl = process.env.FCH_API_URL || process.env.NEXT_PUBLIC_FCH_API_URL || 'http://localhost:3005/api'
const apiOrigin = apiUrl.replace(/\/api\/?$/, '')

export async function apiGet<T>(path: string): Promise<T | null> {
  if (!apiUrl) return null

  try {
    const response = await fetch(`${apiUrl}${path}`, { next: { revalidate: 60 } })
    return response.ok ? (await response.json()) as T : null
  } catch {
    return null
  }
}

/** Resolve um URL de imagem/vídeo devolvido pela API (`/uploads/...`) para um endereço absoluto do backend. Links externos (YouTube, etc.) já são absolutos e ficam inalterados. */
export function resolveMediaUrl(url?: string | null): string | undefined {
  if (!url) return undefined
  return url.startsWith('http') ? url : `${apiOrigin}${url}`
}

/** Distingue vídeo de imagem numa galeria mista, pela extensão do ficheiro. */
export function isVideoUrl(url: string): boolean {
  return /\.(mp4|webm|mov|m4v)$/i.test(url)
}

/** Cliente público da API NestJS da FCH. */
const apiUrl = process.env.FCH_API_URL || process.env.NEXT_PUBLIC_FCH_API_URL || 'http://localhost:3005/api'

export async function apiGet<T>(path: string): Promise<T | null> {
  if (!apiUrl) return null

  try {
    const response = await fetch(`${apiUrl}${path}`, { next: { revalidate: 60 } })
    return response.ok ? (await response.json()) as T : null
  } catch {
    return null
  }
}

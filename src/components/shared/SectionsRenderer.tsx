import { resolveMediaUrl } from '@/lib/api'
import { LightboxGallery } from './LightboxGallery'

export interface SectionMedia {
  id: string
  url: string
  alt?: string
}

export interface SectionData {
  id: string
  title?: string
  text?: string
  order: number
  videoUrl?: string
  caption?: string
  media: SectionMedia[]
  mediaLayout?: 'grid' | 'slider'
}

function isYouTube(url: string): boolean {
  return /youtube\.com|youtu\.be/.test(url)
}
function youTubeEmbedUrl(url: string): string {
  const match = url.match(/(?:v=|youtu\.be\/)([\w-]{11})/)
  return match ? `https://www.youtube.com/embed/${match[1]}` : url
}

export function SectionsRenderer({ sections }: { sections: SectionData[] }) {
  const ordered = [...sections].sort((a, b) => a.order - b.order)
  return (
    <div className="space-y-8">
      {ordered.map(section => (
        <div key={section.id}>
          {section.title && <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-[#F5F0EA]">{section.title}</h2>}
          {section.text && <p className="whitespace-pre-line text-gray-700 dark:text-[#E4D9CC]">{section.text}</p>}
          {section.media.length > 0 && (
            <div className="mt-4">
              <LightboxGallery
                items={section.media.map(item => ({ id: item.id, url: resolveMediaUrl(item.url) || item.url, alt: item.alt }))}
                layout={section.mediaLayout === 'slider' ? 'slider' : 'grid'}
              />
            </div>
          )}
          {section.videoUrl && (
            <div className="mt-4 aspect-video overflow-hidden rounded-lg">
              {isYouTube(section.videoUrl)
                ? <iframe src={youTubeEmbedUrl(section.videoUrl)} className="h-full w-full" allowFullScreen />
                : <video src={resolveMediaUrl(section.videoUrl)} controls className="h-full w-full" />}
            </div>
          )}
          {section.caption && <p className="mt-2 text-sm text-gray-500 dark:text-[#9c8d7d]">{section.caption}</p>}
        </div>
      ))}
    </div>
  )
}

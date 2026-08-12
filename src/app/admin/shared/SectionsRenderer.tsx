/* eslint-disable @next/next/no-img-element */
import { resolveMediaUrl } from './adminApi'
import type { SectionAdmin } from './SectionsEditor'

function isYouTube(url: string): boolean {
  return /youtube\.com|youtu\.be/.test(url)
}
function youTubeEmbedUrl(url: string): string {
  const match = url.match(/(?:v=|youtu\.be\/)([\w-]{11})/)
  return match ? `https://www.youtube.com/embed/${match[1]}` : url
}

export function SectionsRenderer({ sections }: { sections: SectionAdmin[] }) {
  const ordered = [...sections].sort((a, b) => a.order - b.order)
  return (
    <div className="space-y-8">
      {ordered.map(section => (
        <div key={section.id}>
          {section.title && <h2 className="mb-2 text-xl font-bold">{section.title}</h2>}
          {section.text && <p className="whitespace-pre-line text-gray-700 dark:text-gray-300">{section.text}</p>}
          {section.media.length > 0 && (
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {section.media.map(item => <img key={item.id} src={resolveMediaUrl(item.url)} alt={item.alt || ''} className="h-40 w-full rounded-lg object-cover" />)}
            </div>
          )}
          {section.videoUrl && (
            <div className="mt-4 aspect-video overflow-hidden rounded-lg">
              {isYouTube(section.videoUrl)
                ? <iframe src={youTubeEmbedUrl(section.videoUrl)} className="h-full w-full" allowFullScreen />
                : <video src={resolveMediaUrl(section.videoUrl)} controls className="h-full w-full" />}
            </div>
          )}
          {section.caption && <p className="mt-2 text-sm text-gray-500">{section.caption}</p>}
        </div>
      ))}
    </div>
  )
}

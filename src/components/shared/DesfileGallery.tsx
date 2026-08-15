import { LightboxGallery, type LightboxGalleryItem } from './LightboxGallery'

export type DesfileGalleryItem = LightboxGalleryItem

interface DesfileGalleryProps {
  media: DesfileGalleryItem[]
  mediaLayout?: 'grid' | 'slider'
}

export function DesfileGallery({ media, mediaLayout = 'grid' }: DesfileGalleryProps) {
  return <LightboxGallery items={media} layout={mediaLayout} />
}

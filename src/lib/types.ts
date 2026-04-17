import type { PortableTextBlock } from '@portabletext/types'

export interface SanityImage {
  asset: { _ref: string; _type: 'reference' }
  hotspot?: { x: number; y: number }
  alt?: string
}

export interface Category {
  _id: string
  title: string
  slug: { current: string }
  description?: string
  coverImage?: SanityImage
}

export interface HairType {
  _id: string
  title: string
  slug: { current: string }
  description?: string
  enabled: boolean
}

export interface AffiliateLink {
  _id: string
  productName: string
  brand: string
  url: string
  image?: SanityImage
  description?: string
}

export interface PostCard {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  coverImage?: SanityImage
  excerpt: string
  readTime: number
  category: Pick<Category, '_id' | 'title' | 'slug'>
}

export interface PostFull extends PostCard {
  body: PortableTextBlock[]
  pinnedToWhatIUse?: boolean
  hairTypes?: Pick<HairType, '_id' | 'title' | 'slug'>[]
  seo?: { title?: string; description?: string }
}

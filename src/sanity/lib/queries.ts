import { client } from './client'
import type { PostCard, PostFull, Category, HairType } from '@/lib/types'

const postCardFields = `
  _id,
  title,
  slug,
  publishedAt,
  coverImage { ..., alt },
  excerpt,
  readTime,
  "category": category->{ _id, title, slug }
`

export async function getAllPosts(): Promise<PostCard[]> {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) { ${postCardFields} }`
  )
}

export async function getPostBySlug(slug: string): Promise<PostFull | null> {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      ${postCardFields},
      pinnedToWhatIUse,
      body[] {
        ...,
        _type == "affiliateCardEmbed" => {
          ...,
          "product": product->{ _id, productName, brand, url, image { ..., alt }, description }
        }
      },
      "hairTypes": hairTypes[]->{ _id, title, slug },
      seo
    }`,
    { slug }
  )
}

export async function getPostsByCategory(categorySlug: string): Promise<PostCard[]> {
  return client.fetch(
    `*[_type == "post" && category->slug.current == $categorySlug] | order(publishedAt desc) { ${postCardFields} }`,
    { categorySlug }
  )
}

export async function getPostsByHairType(hairTypeSlug: string): Promise<PostCard[]> {
  return client.fetch(
    `*[_type == "post" && $hairTypeSlug in hairTypes[]->slug.current] | order(publishedAt desc) { ${postCardFields} }`,
    { hairTypeSlug }
  )
}

export async function getPinnedWhatIUsePosts(): Promise<PostCard[]> {
  return client.fetch(
    `*[_type == "post" && pinnedToWhatIUse == true] | order(publishedAt desc) { ${postCardFields} }`
  )
}

export async function getAllCategories(): Promise<Category[]> {
  return client.fetch(
    `*[_type == "category"] | order(title asc) { _id, title, slug, description, coverImage { ..., alt } }`
  )
}

export async function getEnabledHairTypes(): Promise<HairType[]> {
  return client.fetch(
    `*[_type == "hairType" && enabled == true] | order(title asc) { _id, title, slug, description, enabled }`
  )
}

export async function getHairTypeBySlug(slug: string): Promise<HairType | null> {
  return client.fetch(
    `*[_type == "hairType" && slug.current == $slug][0] { _id, title, slug, description, enabled }`,
    { slug }
  )
}

export async function getAllPostSlugs(): Promise<{ slug: string }[]> {
  return client.fetch(`*[_type == "post"]{ "slug": slug.current }`)
}

export async function getAllCategorySlugs(): Promise<{ slug: string }[]> {
  return client.fetch(`*[_type == "category"]{ "slug": slug.current }`)
}

export async function getAllHairTypeSlugs(): Promise<{ slug: string }[]> {
  return client.fetch(`*[_type == "hairType" && enabled == true]{ "slug": slug.current }`)
}

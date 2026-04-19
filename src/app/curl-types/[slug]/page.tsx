import { notFound } from 'next/navigation'
import { getHairTypeBySlug, getPostsByHairType, getAllHairTypeSlugs } from '@/sanity/lib/queries'
import { ArticleGrid } from '@/components/home/ArticleGrid'
import type { Metadata } from 'next'


export const dynamicParams = false

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getAllHairTypeSlugs()
  return slugs.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const hairType = await getHairTypeBySlug(slug)
  if (!hairType?.enabled) return {}
  return { title: `${hairType.title} Hair`, description: hairType.description }
}

export default async function HairTypePage({ params }: Props) {
  const { slug } = await params
  const hairType = await getHairTypeBySlug(slug)

  if (!hairType || !hairType.enabled) notFound()

  const posts = await getPostsByHairType(slug)

  return (
    <>
      <div className="border-b border-ink">
        <div className="px-8 py-12 md:px-12 md:py-14">
          <p className="text-[11px] tracking-[0.25em] uppercase text-gray font-semibold mb-3">Curl Type</p>
          <h1 className="font-display text-[20px] text-ink md:text-[32px]">
            {hairType.title} Hair
          </h1>
          {hairType.description && (
            <p className="font-body text-[14px] text-gray mt-3 max-w-lg leading-[135%] md:text-[16px]">
              {hairType.description}
            </p>
          )}
        </div>
      </div>
      <ArticleGrid posts={posts} />
    </>
  )
}

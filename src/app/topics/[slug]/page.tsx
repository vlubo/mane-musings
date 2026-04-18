import { notFound } from 'next/navigation'
import { getAllCategories, getPostsByCategory, getAllCategorySlugs } from '@/sanity/lib/queries'
import { TopicsStrip } from '@/components/home/TopicsStrip'
import { ArticleGrid } from '@/components/home/ArticleGrid'
import type { Metadata } from 'next'

export const revalidate = 60

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getAllCategorySlugs()
  return slugs.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const categories = await getAllCategories()
  const category = categories.find((c) => c.slug.current === slug)
  if (!category) return {}
  return { title: category.title, description: category.description }
}

export default async function TopicPage({ params }: Props) {
  const { slug } = await params
  const [categories, posts] = await Promise.all([
    getAllCategories(),
    getPostsByCategory(slug),
  ])

  const category = categories.find((c) => c.slug.current === slug)
  if (!category) notFound()

  return (
    <>
      <div className="border-b border-sage">
        <div className="px-8 py-12 md:px-12 md:py-14">
          <h1 className="font-display text-[20px] text-ink md:text-[32px]">
            {category.title}
          </h1>
          {category.description && (
            <p className="font-body text-[14px] text-gray mt-3 max-w-lg leading-[135%] md:text-[16px]">
              {category.description}
            </p>
          )}
        </div>
      </div>
      <TopicsStrip categories={categories} activeSlug={slug} />
      <ArticleGrid posts={posts} />
    </>
  )
}

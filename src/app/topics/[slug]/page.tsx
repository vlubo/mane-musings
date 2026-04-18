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
      <section className="border-b border-ink flex flex-col justify-end min-h-[311px] md:h-[320px] px-8 pb-12 md:px-16 md:pb-16 gap-[10px]">
        <h1 className="text-[24px] md:text-[32px] font-normal leading-none text-ink">
          {category.title}
        </h1>
        {category.description && (
          <p className="text-[16px] leading-[135%] text-body max-w-[600px]">
            {category.description}
          </p>
        )}
      </section>
      <TopicsStrip categories={categories} activeSlug={slug} />
      <ArticleGrid posts={posts} />
    </>
  )
}

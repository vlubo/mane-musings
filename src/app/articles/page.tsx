import { getAllPosts, getAllCategories } from '@/sanity/lib/queries'
import { TopicsStrip } from '@/components/home/TopicsStrip'
import { ArticleGrid } from '@/components/home/ArticleGrid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Articles',
  description: 'All articles — guides, routines, and product reviews for every curl type.',
}

export const revalidate = 60

export default async function ArticlesPage() {
  const [posts, categories] = await Promise.all([getAllPosts(), getAllCategories()])

  return (
    <>
      <div className="border-b border-sage">
        <div className="px-8 py-12 md:px-12 md:py-14">
          <h1 className="font-display text-[20px] text-ink md:text-[32px]">Articles</h1>
          <p className="font-body text-[14px] text-gray mt-3 max-w-lg leading-[135%] md:text-[16px]">
            Guides, routines, and honest product reviews for every curl type.
          </p>
        </div>
      </div>
      <TopicsStrip categories={categories} />
      <ArticleGrid posts={posts} />
    </>
  )
}

import { getAllPosts, getAllCategories } from '@/sanity/lib/queries'
import { TopicsStrip } from '@/components/home/TopicsStrip'
import { ArticleGrid } from '@/components/home/ArticleGrid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Articles',
  description: 'All articles — guides, routines, and product reviews for every curl type.',
}


export default async function ArticlesPage() {
  const [posts, categories] = await Promise.all([getAllPosts(), getAllCategories()])

  return (
    <>
      <section className="border-b border-ink flex flex-col justify-end min-h-[311px] md:h-[320px] px-8 pb-12 md:px-16 md:pb-16 gap-[10px]">
        <h1 className="text-[24px] md:text-[32px] font-normal leading-none text-ink">Articles</h1>
        <p className="text-[16px] leading-[135%] text-body">
          A growing library of notes on curl care, product experiments and the little things that made my routine quieter.
        </p>
      </section>
      <TopicsStrip categories={categories} />
      <ArticleGrid posts={posts} />
    </>
  )
}

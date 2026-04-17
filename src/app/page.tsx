import { getAllPosts } from '@/sanity/lib/queries'
import { HeroStatement } from '@/components/home/HeroStatement'
import { ArticleGrid } from '@/components/home/ArticleGrid'

export const revalidate = 60

export default async function HomePage() {
  const posts = await getAllPosts()

  return (
    <>
      <HeroStatement />
      <ArticleGrid posts={posts} />
    </>
  )
}

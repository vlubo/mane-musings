import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPostSlugs, getPostsByCategory } from '@/sanity/lib/queries'
import { ArticleHeader } from '@/components/article/ArticleHeader'
import { ArticleBody } from '@/components/article/ArticleBody'
import { RelatedArticles } from '@/components/article/RelatedArticles'
import type { Metadata } from 'next'


interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs()
  return slugs.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.seo?.title ?? post.title,
    description: post.seo?.description ?? post.excerpt,
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const related = await getPostsByCategory(post.category.slug.current)
  const relatedPosts = related.filter((p) => p._id !== post._id).slice(0, 3)
  const hairTypeLabels = post.hairTypes?.map((h) => h.title) ?? []

  return (
    <>
      <ArticleHeader
        title={post.title}
        excerpt={post.excerpt}
        categoryTitle={post.category.title}
        hairTypeLabels={hairTypeLabels}
        readTime={post.readTime}
        publishedAt={post.publishedAt}
      />
      <ArticleBody body={post.body ?? []} />
      <RelatedArticles posts={relatedPosts} />
    </>
  )
}

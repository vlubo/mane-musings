import { ArticleCard } from '@/components/shared/ArticleCard'
import type { PostCard } from '@/lib/types'

interface Props {
  posts: PostCard[]
}

export function RelatedArticles({ posts }: Props) {
  if (posts.length === 0) return null

  return (
    <section className="border-t border-ink" aria-label="Related articles">
      <div className="flex flex-col items-center px-8 pt-10 pb-0 md:px-12 md:pt-12">
        <p className="text-[11px] tracking-[0.25em] uppercase text-gray font-semibold">More to Read</p>
        <div className="w-full border-t border-ink mt-6 mb-0" />
      </div>
      <div className="grid grid-cols-1 gap-px bg-ink sm:grid-cols-2 md:grid-cols-3">
        {posts.slice(0, 3).map((post, i) => (
          <ArticleCard key={post._id} post={post} colIndex={(i % 3) as 0 | 1 | 2} />
        ))}
      </div>
    </section>
  )
}

import { ArticleCard } from '@/components/shared/ArticleCard'
import type { PostCard } from '@/lib/types'

interface Props {
  posts: PostCard[]
}

export function RelatedArticles({ posts }: Props) {
  if (posts.length === 0) return null

  return (
    <section className="border-t border-sage">
      <div className="px-8 pt-10 pb-6 md:px-12 md:pt-12 md:pb-7">
        <p className="text-[11px] tracking-[0.25em] uppercase text-gray font-semibold">More to Read</p>
      </div>
      <div className="grid grid-cols-1 gap-px bg-sage border-t border-sage sm:grid-cols-2 md:grid-cols-3">
        {posts.slice(0, 3).map((post) => (
          <ArticleCard key={post._id} post={post} />
        ))}
      </div>
    </section>
  )
}

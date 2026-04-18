import Link from 'next/link'
import { ArticleCard } from '@/components/shared/ArticleCard'
import type { PostCard } from '@/lib/types'

interface Props {
  posts: PostCard[]
  showMoreLink?: boolean
}

export function ArticleGrid({ posts, showMoreLink = false }: Props) {
  const fillers3 = posts.length % 3 === 0 ? 0 : 3 - (posts.length % 3)
  const fillers2 = posts.length % 2 === 0 ? 0 : 1

  return (
    <div>
      <div className="grid gap-px bg-ink grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-b border-ink">
        {posts.map((post) => (
          <ArticleCard key={post._id} post={post} />
        ))}
        {Array.from({ length: fillers2 }).map((_, i) => (
          <div key={`filler2-${i}`} className="bg-canvas hidden sm:block md:hidden" />
        ))}
        {Array.from({ length: fillers3 }).map((_, i) => (
          <div key={`filler3-${i}`} className="bg-canvas hidden md:block" />
        ))}
      </div>
      {showMoreLink && (
        <Link
          href="/articles"
          className="flex items-center justify-center w-full h-[65px] text-[14px] tracking-[0.04em] text-body hover:bg-sage-light transition-colors"
        >
          More articles →
        </Link>
      )}
    </div>
  )
}

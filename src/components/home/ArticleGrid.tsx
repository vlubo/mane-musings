import { ArticleCard } from '@/components/shared/ArticleCard'
import type { PostCard } from '@/lib/types'

interface Props {
  posts: PostCard[]
}

function chunk<T>(arr: T[], sizes: number[]): T[][] {
  if (!sizes.length) return []
  const result: T[][] = []
  let i = 0
  let sizeIndex = 0
  while (i < arr.length) {
    const size = sizes[sizeIndex % sizes.length]
    result.push(arr.slice(i, i + size))
    i += size
    sizeIndex++
  }
  return result
}

export function ArticleGrid({ posts }: Props) {
  const rows = chunk(posts, [3, 2])

  return (
    <div>
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`grid gap-px bg-sage border-t border-sage grid-cols-1 sm:grid-cols-2 ${
            row.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'
          }`}
        >
          {row.map((post) => (
            <ArticleCard key={post._id} post={post} />
          ))}
        </div>
      ))}
    </div>
  )
}

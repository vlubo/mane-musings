import Link from 'next/link'
import type { Category } from '@/lib/types'

interface Props {
  categories: Category[]
  activeSlug?: string
}

export function TopicsStrip({ categories, activeSlug }: Props) {
  if (!categories.length) return null
  return (
    <div className="flex items-center gap-3 flex-wrap px-8 py-5 border-b border-ink md:px-16 md:py-6">
      <Link
        href="/articles"
        className={`text-[14px] tracking-[0.04em] px-2 py-1 border rounded-[4px] transition-colors ${
          !activeSlug
            ? 'bg-gray text-canvas border-gray'
            : 'border-gray text-body hover:bg-sage-light'
        }`}
      >
        All
      </Link>
      {categories.map((cat) => (
        <Link
          key={cat._id}
          href={`/topics/${cat.slug.current}`}
          className={`text-[14px] tracking-[0.04em] px-2 py-1 border rounded-[4px] transition-colors ${
            activeSlug === cat.slug.current
              ? 'bg-gray text-canvas border-gray'
              : 'border-gray text-body hover:bg-sage-light'
          }`}
        >
          {cat.title}
        </Link>
      ))}
    </div>
  )
}

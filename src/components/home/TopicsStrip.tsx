import Link from 'next/link'
import type { Category } from '@/lib/types'

interface Props {
  categories: Category[]
  activeSlug?: string
}

export function TopicsStrip({ categories, activeSlug }: Props) {
  if (!categories.length) return null
  return (
    <div className="flex items-center gap-3 flex-wrap px-8 py-5 border-b border-sage md:px-12">
      <span className="text-[10px] tracking-[0.25em] uppercase text-gray font-bold mr-2">
        Browse
      </span>
      <Link
        href="/articles"
        className={`text-[11px] tracking-[0.1em] uppercase font-semibold px-4 py-2 border transition-colors ${
          !activeSlug
            ? 'bg-ink text-canvas border-ink'
            : 'bg-transparent text-ink border-sage hover:border-ink'
        }`}
      >
        All
      </Link>
      {categories.map((cat) => (
        <Link
          key={cat._id}
          href={`/topics/${cat.slug.current}`}
          className={`text-[11px] tracking-[0.1em] uppercase font-semibold px-4 py-2 border transition-colors ${
            activeSlug === cat.slug.current
              ? 'bg-ink text-canvas border-ink'
              : 'bg-transparent text-ink border-sage hover:border-ink'
          }`}
        >
          {cat.title}
        </Link>
      ))}
    </div>
  )
}

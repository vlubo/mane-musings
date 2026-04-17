import Link from 'next/link'
import Image from 'next/image'
import type { PostCard } from '@/lib/types'

interface Props {
  post: PostCard
}

export function ArticleCard({ post }: Props) {
  return (
    <Link href={`/articles/${post.slug.current}`} className="group block bg-canvas">
      <div className="aspect-[4/3] bg-sage-light overflow-hidden">
        {post.coverImage && (
          <Image
            src={`https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/${post.coverImage.asset._ref.replace('image-', '').replace(/-(\w+)$/, '.$1')}`}
            alt={post.title}
            width={600}
            height={450}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
      </div>
      <div className="p-5 pb-7">
        <p className="text-[11px] tracking-[0.2em] uppercase text-gray font-semibold mb-2">
          {post.category.title}
        </p>
        <h3 className="font-display text-[20px] leading-[135%] text-ink mb-2 sm:text-[16px]">
          {post.title}
        </h3>
        <p className="text-[12px] text-gray">{post.readTime} min read</p>
      </div>
    </Link>
  )
}

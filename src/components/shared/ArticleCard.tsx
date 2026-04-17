import Link from 'next/link'
import Image from 'next/image'
import type { PostCard } from '@/lib/types'
import { urlFor } from '@/sanity/lib/image'

interface Props {
  post: PostCard
}

export function ArticleCard({ post }: Props) {
  return (
    <Link href={`/articles/${post.slug.current}`} className="group block bg-canvas">
      <div className="aspect-[4/3] bg-sage-light overflow-hidden">
        {post.coverImage && (
          <Image
            src={urlFor(post.coverImage).width(600).height(450).url()}
            alt={post.coverImage.alt ?? post.title}
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
        <h3 className="font-display text-[16px] leading-[135%] text-ink mb-2 sm:text-[20px]">
          {post.title}
        </h3>
        <p className="text-[12px] text-gray">{post.readTime} min read</p>
      </div>
    </Link>
  )
}

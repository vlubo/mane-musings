import Link from 'next/link'
import Image from 'next/image'
import type { PostCard } from '@/lib/types'
import { urlFor } from '@/sanity/lib/image'

interface Props {
  post: PostCard
  colIndex?: 0 | 1 | 2
}

export function ArticleCard({ post }: Props) {
  return (
    <Link
      href={`/articles/${post.slug.current}`}
      className="group block bg-canvas hover:bg-sage-light transition-colors duration-200"
    >
      <div className="px-8 pt-8 pb-10 flex flex-col justify-between min-h-[487px]">
        {/* Top: image + meta */}
        <div className="flex flex-col gap-10">
          <div className="w-full aspect-[250/163] bg-sage-light overflow-hidden">
            {post.coverImage && (
              <Image
                src={urlFor(post.coverImage).width(600).height(391).url()}
                alt={post.coverImage.alt ?? post.title}
                width={600}
                height={391}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-meta text-[12px] leading-none tracking-[0.04em] text-body uppercase">
              {post.category.title}
            </p>
            <div className="flex flex-col gap-3">
              <h3 className="text-[20px] font-medium leading-[135%] text-body">
                {post.title}
              </h3>
              {post.excerpt && (
                <p className="text-[16px] text-gray leading-[135%]">
                  {post.excerpt}
                </p>
              )}
            </div>
          </div>
        </div>
        {/* Bottom: CTA */}
        <span className="text-[14px] tracking-[0.04em] text-body underline underline-offset-4 decoration-[1px] self-start mt-10">
          Read more
        </span>
      </div>
    </Link>
  )
}

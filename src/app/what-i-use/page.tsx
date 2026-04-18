import { getPinnedWhatIUsePosts } from '@/sanity/lib/queries'
import { ArticleCard } from '@/components/shared/ArticleCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What I Use',
  description: "The creator's current go-to curl routine — products and methods she actually uses.",
}

export const revalidate = 60

export default async function WhatIUsePage() {
  const posts = await getPinnedWhatIUsePosts()

  return (
    <>
      <section className="flex flex-col justify-end min-h-[311px] md:h-[320px] px-8 pb-12 md:px-16 md:pb-16 gap-[10px] border-b border-ink">
        <h1 className="text-[24px] md:text-[32px] font-normal leading-none text-ink">What I Use</h1>
        <p className="text-[16px] leading-[135%] text-body max-w-[600px]">
          My current routine — the exact products and methods I use. Updated whenever my routine changes.
        </p>
      </section>
      <div className="grid gap-px bg-ink grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {posts.map((post) => (
          <ArticleCard key={post._id} post={post} />
        ))}
      </div>
    </>
  )
}

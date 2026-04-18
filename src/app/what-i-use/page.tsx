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
      <div className="border-b border-sage">
        <div className="px-8 py-12 md:px-12 md:py-14">
          <h1 className="font-display text-[20px] text-ink md:text-[32px]">What I Use</h1>
          <p className="font-body text-[14px] text-gray mt-3 max-w-lg leading-[135%] md:text-[16px]">
            My current routine — the exact products and methods I use. Updated whenever my routine changes.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-px bg-sage border-t border-sage sm:grid-cols-2 md:grid-cols-3">
        {posts.map((post) => (
          <ArticleCard key={post._id} post={post} />
        ))}
      </div>
    </>
  )
}

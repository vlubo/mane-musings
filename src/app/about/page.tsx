import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'About Mane Musings — curl care guides for every texture.',
}

export default function AboutPage() {
  return (
    <div className="max-w-[740px] mx-auto px-8 py-16 md:px-12 md:py-20">
      <h1 className="font-display text-[20px] text-ink mb-6 md:text-[32px]">About</h1>
      <p className="font-body text-[16px] text-body leading-[135%]">
        Mane Musings is a curly hair blog — placeholder content. Update this in{' '}
        <code className="text-sm bg-cream px-1 py-0.5">src/app/about/page.tsx</code> or
        migrate to a Sanity document type when more dynamic content is needed.
      </p>
    </div>
  )
}

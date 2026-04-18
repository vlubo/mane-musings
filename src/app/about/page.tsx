import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description: 'About Mane Musings — curl care guides for every texture.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="flex flex-col justify-end min-h-[200px] md:min-h-[280px] px-8 pb-12 md:px-16 md:pb-16 border-b border-ink bg-sage-light">
        <h1 className="text-[24px] md:text-[28px] font-normal leading-[1.2] text-ink">
          Curl care that fits your life, not the other way around.
        </h1>
      </section>

      {/* Section 1: A new approach */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b border-ink bg-sage-light">
        <div className="bg-sage-light min-h-[300px] md:min-h-[480px]" />
        <div className="px-8 py-10 md:px-12 md:py-16 flex flex-col gap-6">
          <h2 className="text-[20px] font-medium leading-[135%] text-ink">A new approach</h2>
          <div className="flex flex-col gap-4 text-[16px] leading-[135%] text-body">
            <p>
              At some point, curly hair care stopped being something you did and became something
              you were. A whole identity. A hobby you never quite signed up for. Products lined up
              on the shelf, routines that took over your Sunday, content that made you feel guilty
              for wearing your hair in a bun for most of the week.
            </p>
            <p>
              Mane Musings offers a calm, considered space for people with wavy and curly hair who
              want simpler curl care that fits their life, not the other way around.
            </p>
            <p>
              Here you will find simplified routines, honest and curated product guidance as well as
              understated inspiration that aligns with a life that already has a lot going on.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: About the author */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b border-ink bg-sage-light">
        <div className="bg-sage-light min-h-[300px] md:min-h-[600px]" />
        <div className="px-8 py-10 md:px-12 md:py-16 flex flex-col gap-6">
          <h2 className="text-[20px] font-medium leading-[135%] text-ink">About the author</h2>
          <div className="flex flex-col gap-4 text-[16px] leading-[135%] text-body">
            <p>
              Hi! I&apos;m Michelle, a fellow wavy-curly haired human. 2b/2c/3a, thick, high density
              hair with over a decade of living, researching and writing about wavy curls.
            </p>
            <p>
              In 2019, I shared the{' '}
              <a
                href="https://medium.com"
                className="underline underline-offset-2 hover:text-ink transition-colors"
              >
                story of my hair on Medium
              </a>
              , where the pieces resonated with more people than I expected. Since then, life got
              busy. Career changes, a mortgage, a marriage. I went quiet for a few years.
            </p>
            <p>
              What didn&apos;t go quiet was the hair. Every Wednesday, every Sunday, wash day still
              came. Every few months, a haircut. The routine kept happening even when I stopped
              talking about it, and somewhere in the years of silence I accumulated something more
              useful than enthusiasm: real, settled knowledge and a repeatable approach to figure
              out what actually works and what doesn&apos;t.
            </p>
            <p>
              This website is where I&apos;m sharing it all. The kind of guidance I wish had existed
              when I started, and occasionally still need myself, even decades since my last
              chemical straightening appointment.
            </p>
            <p>Wherever you are in your hair journey, I am so happy you are here.x</p>
          </div>
        </div>
      </section>

      {/* Topics strip */}
      <div className="flex justify-center gap-3 flex-wrap px-8 py-5 bg-sage-light md:py-6">
        <Link
          href="/topics/curl-care"
          className="text-[14px] tracking-[0.04em] uppercase px-2 py-1 border border-gray rounded-[4px] text-body hover:bg-sage transition-colors"
        >
          Curl care
        </Link>
        <Link
          href="/topics/product-reviews"
          className="text-[14px] tracking-[0.04em] uppercase px-2 py-1 border border-gray rounded-[4px] text-body hover:bg-sage transition-colors"
        >
          Product reviews
        </Link>
        <Link
          href="/topics/look-books"
          className="text-[14px] tracking-[0.04em] uppercase px-2 py-1 border border-gray rounded-[4px] text-body hover:bg-sage transition-colors"
        >
          Look books
        </Link>
      </div>

    </>
  )
}

import { PortableText } from '@portabletext/react'
import type { PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import { AffiliateCard } from './AffiliateCard'
import { SplitSection } from './SplitSection'
import type { AffiliateLink } from '@/lib/types'

interface SanityImageBlock {
  _type: 'image'
  caption?: string
}

const components: PortableTextComponents = {
  types: {
    image: ({ value }: { value: SanityImageBlock }) => (
      <figure className="my-9">
        <div className="w-full aspect-video bg-sage-light" />
        {value.caption && (
          <figcaption className="text-center text-[13px] text-gray mt-2 leading-[140%]">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
    affiliateCardEmbed: ({ value }: { value: { product: AffiliateLink } }) => (
      <AffiliateCard product={value.product} />
    ),
    splitSection: ({ value }: { value: { heading: string; content: PortableTextBlock[] } }) => (
      <SplitSection heading={value.heading} content={value.content ?? []} />
    ),
  },
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="font-display text-[24px] leading-[135%] text-ink mt-12 mb-4">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="font-display text-[20px] leading-[135%] text-ink mt-10 mb-3">{children}</h3>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="font-body text-[16px] text-body leading-[135%] mb-5">{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-[3px] border-sage pl-7 my-10">
        <p className="font-display text-[20px] italic text-gray leading-[135%]">{children}</p>
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-semibold text-ink">{children}</strong>
    ),
    link: ({ value, children }: { value?: { href: string }; children?: React.ReactNode }) => {
      const isExternal = value?.href?.startsWith('http')
      return (
        <a
          href={value?.href}
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="underline underline-offset-2 text-body hover:text-ink transition-colors"
        >
          {children}
        </a>
      )
    },
  },
}

interface Props {
  body: PortableTextBlock[]
}

export function ArticleBody({ body }: Props) {
  return (
    <div className="max-w-[740px] mx-auto px-8 py-12 md:px-12">
      <PortableText value={body} components={components} />
    </div>
  )
}

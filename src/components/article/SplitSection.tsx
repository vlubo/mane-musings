import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'

interface Props {
  heading: string
  content: PortableTextBlock[]
}

export function SplitSection({ heading, content }: Props) {
  return (
    <div className="grid grid-cols-1 gap-6 my-10 md:grid-cols-2 md:gap-12">
      <div>
        <h3 className="font-display text-[20px] leading-[135%] text-ink">{heading}</h3>
      </div>
      <div className="font-body text-[16px] text-body leading-[135%]">
        <PortableText value={content} />
      </div>
    </div>
  )
}

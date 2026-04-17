import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import type { AffiliateLink } from '@/lib/types'

interface Props {
  product: AffiliateLink
}

export function AffiliateCard({ product }: Props) {
  return (
    <div className="flex gap-5 items-center bg-cream border border-sage p-5 my-9">
      <div className="w-20 h-20 bg-sage-light flex-shrink-0 overflow-hidden">
        {product.image && (
          <Image
            src={urlFor(product.image).width(80).height(80).url()}
            alt={product.image.alt ?? product.productName}
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] tracking-[0.25em] uppercase text-gray font-bold mb-1">
          {product.brand}
        </p>
        <p className="font-display text-[18px] text-ink mb-1">{product.productName}</p>
        {product.description && (
          <p className="text-[13px] text-gray leading-[140%]">{product.description}</p>
        )}
      </div>
      <a
        href={product.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 bg-ink text-canvas text-[11px] tracking-[0.15em] uppercase font-bold px-5 py-3 hover:opacity-80 transition-opacity"
      >
        Shop Now
      </a>
    </div>
  )
}

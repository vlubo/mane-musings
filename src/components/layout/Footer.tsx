import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-warm-white px-8 py-12 md:px-16 md:py-12">
      <div className="flex flex-col gap-10 md:flex-row md:justify-between">
        {/* Left: about + copyright */}
        <div className="max-w-[395px] flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p className="font-meta text-[12px] leading-none tracking-[0.04em] text-body">ABOUT</p>
            <p className="text-[14px] leading-[135%] text-body">
              Mane Musings offers a calm, considered space for people with wavy and curly hair who want simpler curl care that fits their life, not the other way around.
            </p>
          </div>
          <p className="text-[14px] leading-[135%] text-gray">
            © Mane Musings {new Date().getFullYear()}
          </p>
        </div>

        {/* Right: Explore + Social */}
        <div className="flex gap-12">
          <div className="flex flex-col gap-3 min-w-[100px]">
            <p className="font-meta text-[12px] leading-none tracking-[0.04em] text-body">EXPLORE</p>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/topics/curl-care" className="text-[14px] leading-[135%] text-body hover:text-ink transition-colors">
                  Curl care
                </Link>
              </li>
              <li>
                <Link href="/topics/product-reviews" className="text-[14px] leading-[135%] text-body hover:text-ink transition-colors">
                  Product reviews
                </Link>
              </li>
              <li>
                <Link href="/topics/look-books" className="text-[14px] leading-[135%] text-body hover:text-ink transition-colors">
                  Look books
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 min-w-[100px]">
            <p className="font-meta text-[12px] leading-none tracking-[0.04em] text-body">SOCIAL</p>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#" className="text-[14px] leading-[135%] text-body hover:text-ink transition-colors">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] leading-[135%] text-body hover:text-ink transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

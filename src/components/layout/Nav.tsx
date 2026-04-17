import Link from 'next/link'

export function Nav() {
  const navLinkClass = "text-[11px] tracking-[0.2em] uppercase text-ink font-semibold hover:text-gray transition-colors"

  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between px-8 py-4 border-b border-sage bg-canvas md:px-12 md:py-5">
      {/* Left links — hidden on mobile */}
      <div className="hidden md:flex gap-7">
        <Link href="/articles" className={navLinkClass}>
          Articles
        </Link>
        <Link href="/what-i-use" className={navLinkClass}>
          What I Use
        </Link>
        <Link href="/about" className={navLinkClass}>
          About
        </Link>
      </div>

      {/* Wordmark — centered on desktop, left-aligned on mobile */}
      <Link href="/" className="md:absolute md:left-1/2 md:-translate-x-1/2 font-display text-[20px] text-ink tracking-wide">
        Mane Musings
      </Link>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <button type="button" aria-label="Search" className="hidden md:block text-[11px] tracking-[0.2em] uppercase text-gray font-semibold cursor-pointer">
          Search
        </button>
        {/* Mobile hamburger — visual only */}
        <button className="md:hidden flex flex-col gap-1.5 p-1" aria-label="Open menu">
          <span className="block w-5 h-px bg-ink" />
          <span className="block w-5 h-px bg-ink" />
          <span className="block w-5 h-px bg-ink" />
        </button>
      </div>
    </nav>
  )
}

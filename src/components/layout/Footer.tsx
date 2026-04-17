import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-sage px-8 py-8 flex flex-col gap-4 md:flex-row md:justify-between md:items-center md:px-12">
      <span className="text-[11px] text-gray tracking-wide">
        © {new Date().getFullYear()} Mane Musings
      </span>
      <Link href="/" className="font-display text-base text-ink tracking-wide">
        Mane Musings
      </Link>
      {/* TODO: replace with real social media links */}
      <div className="flex gap-4 text-[11px] text-gray tracking-wide uppercase">
        <span>Instagram</span>
        <span>·</span>
        <span>YouTube</span>
        <span>·</span>
        <span>Pinterest</span>
      </div>
    </footer>
  )
}

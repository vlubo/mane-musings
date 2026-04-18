import Link from 'next/link'
import Image from 'next/image'
import { NavLinks } from './NavLinks'

function InstagramIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M6.667 2.5h6.666a4.167 4.167 0 0 1 4.167 4.167v6.666a4.167 4.167 0 0 1-4.167 4.167H6.667A4.167 4.167 0 0 1 2.5 13.333V6.667A4.167 4.167 0 0 1 6.667 2.5Z"
        stroke="currentColor" strokeWidth="1.25"
      />
      <circle cx="10" cy="10" r="3.333" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="14.583" cy="5.417" r="0.833" fill="currentColor" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg width={20} height={14} viewBox="0 0 20 14" fill="none" aria-hidden="true">
      <path
        d="M18.5 2.1A2.17 2.17 0 0 0 17 .58C15.67.2 10 .2 10 .2s-5.67 0-7 .38A2.17 2.17 0 0 0 1.5 2.1 22.5 22.5 0 0 0 1.12 7a22.5 22.5 0 0 0 .38 4.9A2.17 2.17 0 0 0 3 13.42c1.33.38 7 .38 7 .38s5.67 0 7-.38a2.17 2.17 0 0 0 1.5-1.52A22.5 22.5 0 0 0 18.88 7a22.5 22.5 0 0 0-.38-4.9Z"
        stroke="currentColor" strokeWidth="1.1"
      />
      <path d="M8.2 9.8 12.9 7 8.2 4.2v5.6Z" fill="currentColor" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" aria-hidden="true">
      <line x1="3" y1="8" x2="17" y2="8" stroke="currentColor" strokeWidth="1.25" />
      <line x1="3" y1="12" x2="17" y2="12" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  )
}

export function Nav() {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between px-8 md:px-12 border-b border-ink bg-canvas h-[80px] md:h-[95px]">
      {/* Left: logo + nav links */}
      <div className="flex items-center gap-12">
        <Link href="/" aria-label="Mane Musings — home">
          <Image
            src="/logo-lg.svg"
            alt="Mane Musings"
            width={161}
            height={15}
            priority
            className="hidden md:block"
          />
          <Image
            src="/logo-sm.svg"
            alt="Mane Musings"
            width={129}
            height={12}
            priority
            className="md:hidden"
          />
        </Link>
        <NavLinks />
      </div>

      {/* Right: vertical divider + social icons (desktop) | hamburger (mobile) */}
      <div className="hidden md:flex self-stretch items-stretch">
        <div className="w-px bg-ink opacity-50" />
        <div className="flex items-center gap-4 pl-8 text-gray">
          <a href="#" aria-label="Instagram" className="hover:text-ink transition-colors">
            <InstagramIcon />
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-ink transition-colors">
            <YouTubeIcon />
          </a>
        </div>
      </div>

      <button className="md:hidden text-ink" aria-label="Open menu">
        <MenuIcon />
      </button>
    </nav>
  )
}

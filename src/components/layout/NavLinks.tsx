'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/articles', label: 'Articles' },
  { href: '/what-i-use', label: 'What I Use' },
  { href: '/about', label: 'About' },
]

export function NavLinks() {
  const pathname = usePathname()

  return (
    <div className="hidden md:flex gap-8">
      {links.map(({ href, label }) => {
        const isActive = pathname === href || pathname.startsWith(href + '/')
        return (
          <Link
            key={href}
            href={href}
            className={`text-[14px] tracking-[0.08em] uppercase transition-colors ${
              isActive
                ? 'text-ink underline underline-offset-4 decoration-[1px]'
                : 'text-body hover:text-ink'
            }`}
          >
            {label}
          </Link>
        )
      })}
    </div>
  )
}

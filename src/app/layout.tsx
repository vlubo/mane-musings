import type { Metadata } from 'next'
import { inter, ibmPlexSans, ibmPlexMono } from '@/lib/fonts'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { NewsletterSection } from '@/components/layout/NewsletterSection'
import './globals.css'

export const metadata: Metadata = {
  title: { default: 'Mane Musings', template: '%s | Mane Musings' },
  description: 'Guides, routines, and honest product reviews for every curl type.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <NewsletterSection />
        <Footer />
      </body>
    </html>
  )
}

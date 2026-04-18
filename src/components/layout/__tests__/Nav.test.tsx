import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { Nav } from '../Nav'

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}))

describe('Nav', () => {
  it('renders the wordmark as a link to /', () => {
    render(<Nav />)
    const wordmark = screen.getByRole('link', { name: /mane musings/i })
    expect(wordmark).toBeInTheDocument()
    expect(wordmark).toHaveAttribute('href', '/')
  })

  it('renders main nav links', () => {
    render(<Nav />)
    expect(screen.getByRole('link', { name: /articles/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /what i use/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
  })
})

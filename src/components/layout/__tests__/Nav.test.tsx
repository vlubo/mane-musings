import { render, screen } from '@testing-library/react'
import { Nav } from '../Nav'

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

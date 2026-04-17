import { render, screen } from '@testing-library/react'
import { Footer } from '../Footer'

describe('Footer', () => {
  it('renders the wordmark as a link to /', () => {
    render(<Footer />)
    const wordmark = screen.getByRole('link', { name: /mane musings/i })
    expect(wordmark).toBeInTheDocument()
    expect(wordmark).toHaveAttribute('href', '/')
  })

  it('renders the current year in copyright', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })
})

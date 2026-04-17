import { render, screen } from '@testing-library/react'
import { Nav } from '../Nav'

describe('Nav', () => {
  it('renders the wordmark', () => {
    render(<Nav />)
    expect(screen.getByText('Mane Musings')).toBeInTheDocument()
  })

  it('renders main nav links', () => {
    render(<Nav />)
    expect(screen.getByRole('link', { name: /articles/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /what i use/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'
import { AffiliateCard } from '../AffiliateCard'
import type { AffiliateLink } from '@/lib/types'

const mockProduct: AffiliateLink = {
  _id: 'aff1',
  productName: 'Coconut CoWash',
  brand: 'As I Am',
  url: 'https://example.com/cowash',
  description: 'A gentle co-wash for curly hair.',
}

describe('AffiliateCard', () => {
  it('renders the product name', () => {
    render(<AffiliateCard product={mockProduct} />)
    expect(screen.getByText('Coconut CoWash')).toBeInTheDocument()
  })

  it('renders the brand name', () => {
    render(<AffiliateCard product={mockProduct} />)
    expect(screen.getByText('As I Am')).toBeInTheDocument()
  })

  it('renders a Shop Now link pointing to the affiliate URL', () => {
    render(<AffiliateCard product={mockProduct} />)
    const link = screen.getByRole('link', { name: /shop now/i })
    expect(link).toHaveAttribute('href', 'https://example.com/cowash')
  })

  it('opens affiliate link in a new tab', () => {
    render(<AffiliateCard product={mockProduct} />)
    const link = screen.getByRole('link', { name: /shop now/i })
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })
})

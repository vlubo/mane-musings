import { render, screen } from '@testing-library/react'
import { ArticleCard } from '../ArticleCard'
import type { PostCard } from '@/lib/types'

const mockPost: PostCard = {
  _id: '1',
  title: 'How to Deep Condition Curly Hair',
  slug: { current: 'how-to-deep-condition' },
  publishedAt: '2026-04-01T00:00:00Z',
  excerpt: 'A guide to deep conditioning.',
  readTime: 5,
  category: { _id: 'cat1', title: 'Moisture', slug: { current: 'moisture' } },
}

describe('ArticleCard', () => {
  it('renders the article title', () => {
    render(<ArticleCard post={mockPost} />)
    expect(screen.getByText('How to Deep Condition Curly Hair')).toBeInTheDocument()
  })

  it('renders the category tag', () => {
    render(<ArticleCard post={mockPost} />)
    expect(screen.getByText('Moisture')).toBeInTheDocument()
  })

  it('renders the read time', () => {
    render(<ArticleCard post={mockPost} />)
    expect(screen.getByText('5 min read')).toBeInTheDocument()
  })

  it('links to /articles/[slug]', () => {
    render(<ArticleCard post={mockPost} />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/articles/how-to-deep-condition')
  })
})

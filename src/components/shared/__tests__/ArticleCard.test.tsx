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

  it('renders the excerpt', () => {
    render(<ArticleCard post={mockPost} />)
    expect(screen.getByText('A guide to deep conditioning.')).toBeInTheDocument()
  })

  it('renders a Read more label', () => {
    render(<ArticleCard post={mockPost} />)
    expect(screen.getByText(/read more/i)).toBeInTheDocument()
  })

  it('links to /articles/[slug]', () => {
    render(<ArticleCard post={mockPost} />)
    const link = screen.getByRole('link', { name: /how to deep condition curly hair/i })
    expect(link).toHaveAttribute('href', '/articles/how-to-deep-condition')
  })

  it('renders no image when coverImage is absent', () => {
    render(<ArticleCard post={mockPost} />)
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })

  it('renders an image when coverImage is provided', () => {
    const postWithImage = {
      ...mockPost,
      coverImage: { asset: { _ref: 'image-abc123-400x300-jpg', _type: 'reference' as const } },
    }
    render(<ArticleCard post={postWithImage} />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})

import { describe, it, expect, vi, beforeEach } from 'vitest'

vi.mock('../lib/client', () => ({
  client: { fetch: vi.fn() },
}))

import { client } from '../lib/client'
import {
  getAllPosts,
  getPostBySlug,
  getPostsByCategory,
  getAllCategories,
  getEnabledHairTypes,
  getPinnedWhatIUsePosts,
} from '../lib/queries'

const mockClient = client as { fetch: ReturnType<typeof vi.fn> }

beforeEach(() => vi.clearAllMocks())

describe('getAllPosts', () => {
  it('fetches all posts ordered by publishedAt desc', async () => {
    mockClient.fetch.mockResolvedValue([{ _id: '1', title: 'Test Post' }])
    const result = await getAllPosts()
    expect(mockClient.fetch).toHaveBeenCalledOnce()
    const query: string = mockClient.fetch.mock.calls[0][0]
    expect(query).toContain('_type == "post"')
    expect(query).toContain('publishedAt desc')
    expect(result).toEqual([{ _id: '1', title: 'Test Post' }])
  })
})

describe('getPostBySlug', () => {
  it('fetches a single post by slug', async () => {
    mockClient.fetch.mockResolvedValue({ _id: '1', slug: { current: 'test-post' } })
    const result = await getPostBySlug('test-post')
    expect(mockClient.fetch).toHaveBeenCalledOnce()
    const [query, params] = mockClient.fetch.mock.calls[0]
    expect(query).toContain('slug.current == $slug')
    expect(params).toEqual({ slug: 'test-post' })
    expect(result).toEqual({ _id: '1', slug: { current: 'test-post' } })
  })
})

describe('getPostsByCategory', () => {
  it('fetches posts filtered by category slug', async () => {
    mockClient.fetch.mockResolvedValue([])
    await getPostsByCategory('moisture')
    const [query, params] = mockClient.fetch.mock.calls[0]
    expect(query).toContain('category->slug.current == $categorySlug')
    expect(params).toEqual({ categorySlug: 'moisture' })
  })
})

describe('getAllCategories', () => {
  it('fetches all categories', async () => {
    mockClient.fetch.mockResolvedValue([{ _id: '1', title: 'Moisture' }])
    const result = await getAllCategories()
    const query: string = mockClient.fetch.mock.calls[0][0]
    expect(query).toContain('_type == "category"')
    expect(result).toEqual([{ _id: '1', title: 'Moisture' }])
  })
})

describe('getEnabledHairTypes', () => {
  it('fetches only hair types where enabled is true', async () => {
    mockClient.fetch.mockResolvedValue([{ _id: '1', title: '3B', enabled: true }])
    await getEnabledHairTypes()
    const query: string = mockClient.fetch.mock.calls[0][0]
    expect(query).toContain('enabled == true')
  })
})

describe('getPinnedWhatIUsePosts', () => {
  it('fetches only posts where pinnedToWhatIUse is true', async () => {
    mockClient.fetch.mockResolvedValue([{ _id: '1', pinnedToWhatIUse: true }])
    await getPinnedWhatIUsePosts()
    const query: string = mockClient.fetch.mock.calls[0][0]
    expect(query).toContain('pinnedToWhatIUse == true')
  })
})

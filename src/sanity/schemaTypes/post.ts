import { defineField, defineType } from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'subtitle', title: 'Subtitle', type: 'string', description: 'Optional subheading shown below the article title.' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime', validation: (r) => r.required() }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Alt Text', type: 'string', description: 'Describe the image for screen readers.' }),
      ],
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Short description shown in article header and card hover.',
      validation: (r) => r.required().max(200),
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time (minutes)',
      type: 'number',
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'hairTypes',
      title: 'Hair Types',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'hairType' }] }],
      description: 'Optional. Tag this post with relevant curl types.',
    }),
    defineField({
      name: 'pinnedToWhatIUse',
      title: 'Pin to What I Use',
      type: 'boolean',
      description: 'When true, this article appears on the /what-i-use page. Only 3 posts should be pinned at a time.',
      initialValue: false,
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', title: 'Alt Text', type: 'string', description: 'Describe the image for screen readers.' }),
          ],
        },
        {
          type: 'object',
          name: 'affiliateCardEmbed',
          title: 'Affiliate Product Card',
          fields: [
            {
              name: 'product',
              title: 'Product',
              type: 'reference',
              to: [{ type: 'affiliateLink' }],
              validation: (r) => r.required(),
            },
          ],
          preview: { select: { title: 'product.productName', subtitle: 'product.brand' } },
        },
        {
          type: 'object',
          name: 'splitSection',
          title: 'Split Section',
          description: 'Two-column layout: heading on left, content on right.',
          fields: [
            defineField({ name: 'heading', title: 'Heading', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'content', title: 'Content', type: 'array', of: [{ type: 'block' }], validation: (r) => r.required().min(1) }),
          ],
          preview: { select: { title: 'heading' } },
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Meta Title', type: 'string' }),
        defineField({ name: 'description', title: 'Meta Description', type: 'text', rows: 2 }),
      ],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'category.title', media: 'coverImage' },
  },
})

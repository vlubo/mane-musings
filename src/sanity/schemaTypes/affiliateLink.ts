import { defineField, defineType } from 'sanity'

export const affiliateLink = defineType({
  name: 'affiliateLink',
  title: 'Affiliate Link',
  type: 'document',
  fields: [
    defineField({ name: 'productName', title: 'Product Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'brand', title: 'Brand', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'url', title: 'Affiliate URL', type: 'url', validation: (r) => r.required() }),
    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Alt Text', type: 'string', description: 'Describe the image for screen readers.' }),
      ],
    }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
  ],
  preview: {
    select: { title: 'productName', subtitle: 'brand' },
  },
})

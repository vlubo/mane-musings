import { defineField, defineType } from 'sanity'

export const hairType = defineType({
  name: 'hairType',
  title: 'Hair Type',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title (e.g. 3B)', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({
      name: 'enabled',
      title: 'Page Enabled',
      type: 'boolean',
      description: 'When true, the /curl-types/[slug] page is publicly accessible.',
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: 'title', enabled: 'enabled' },
    prepare({ title, enabled }) {
      return { title, subtitle: enabled ? '✓ Live' : '○ Hidden' }
    },
  },
})

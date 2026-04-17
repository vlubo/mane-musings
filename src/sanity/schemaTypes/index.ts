import { type SchemaTypeDefinition } from 'sanity'
import { category } from './category'
import { hairType } from './hairType'
import { affiliateLink } from './affiliateLink'
import { post } from './post'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, hairType, affiliateLink, post],
}

import { type SchemaTypeDefinition } from 'sanity'
import { category } from './category'
import { hairType } from './hairType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, hairType],
}

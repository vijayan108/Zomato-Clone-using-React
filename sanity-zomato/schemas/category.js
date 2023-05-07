import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name of Category',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image of the Category',
      type: 'image',
    }),
  ],
})

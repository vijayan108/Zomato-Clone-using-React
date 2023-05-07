import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Featured category name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'restaurant',
      title: 'Restaurant',
      type: "array",
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
      
    }),
    
  ],

})
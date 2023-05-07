import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant Name',
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
      name: 'image',
      title: 'Image of the Restaurant',
      type: 'image',
    }),
    defineField({
      name: "long",
      title: "Longitude of the Restaurant",
      type: "number",
    }),
    defineField({
      name: "lat",
      title: "Latitude of the Restaurant",
      type: "number",

    }),
    defineField({
      name: 'address',
      title: 'Restaurant Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
       
    }),
    defineField({
      name: 'rating',
      title: 'Rating of the Restaurant',
      type: 'number',
      validation: (Rule) => Rule.required().max(5).min(0).error('Rating must be between 0 and 5'),
    }),
    defineField({
      name: 'type',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes',
      type: "array",
      of: [{type: 'reference', to: [{type: 'dish'}]}],
      validation: (Rule) => Rule.required(),
    }),
  ],
  
})

      
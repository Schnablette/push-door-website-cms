export default {
  name: 'homePage',
  type: 'document',
  title: 'Home Page',
  fields: [
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{type: 'reference', weak: true, to: [{type: 'sectionCopy'}]}],
    },
  ],
}

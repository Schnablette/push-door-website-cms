export default {
  name: 'sectionCopy',
  type: 'document',
  title: 'Section Copy',
  fields: [
    {
      name: 'header',
      type: 'string',
      title: 'Header',
    },
    {
      name: 'subheader',
      type: 'string',
      title: 'Subheader',
    },
    {
      name: 'mainText',
      type: 'array',
      title: 'Main Text',
      of: [{type: 'block'}],
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
  ],
}

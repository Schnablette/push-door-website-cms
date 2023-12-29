export default {
  name: 'newsPost',
  type: 'document',
  title: 'News Post',
  fields: [
    {
      name: 'header',
      type: 'string',
      title: 'Header',
    },
    {
      name: 'blurb',
      type: 'string',
      title: 'Blurb',
    },
    {
        name: 'newsArticleUrl',
        type: 'url',
        title: 'News Article URL',
      },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
  ],
}

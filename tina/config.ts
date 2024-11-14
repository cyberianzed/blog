import { defineConfig } from 'tinacms';

export default defineConfig({
  clientId: '<your_client_id>', // Get this from app.tina.io
  branch: 'main',
  token: '<your_read_write_token>', // Get this from app.tina.io
  schema: {
    collections: [
      {
        label: 'Blog Posts',
        name: 'post',
        path: 'content/posts', // Path to your blog posts directory
        fields: [
          {
            type: 'string',
            label: 'Title',
            name: 'title',
          },
          {
            type: 'rich-text',
            label: 'Body',
            name: 'body',
            isBody: true,
          },
          {
            type: 'datetime',
            label: 'Published Date',
            name: 'date',
          },
        ],
      },
    ],
  },
  build: (cms) => cms,
});

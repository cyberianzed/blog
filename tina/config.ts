import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",         // Collection name (usually represents a type of content like "posts")
        label: "Posts",       // Label that shows up in the TinaCMS interface
        path: "src/content/blog",  // Directory where the content files will be stored
        format: "md",         // Content format, usually Markdown (md)
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true
          },
          {
            type: "datetime",
            name: "pubDatetime",
            label: "Publication Date/Time",
            required: false,
            ui: {
              defaultValue: new Date().toISOString(),  // Automatically uses the current date/time in ISO 8601 format
              // dateFormat: "yyyy-MM-dd",  // Date format (optional)
              // timeFormat: "HH:mm:ss",    // Time format (optional)
            },
            description: "The date and time of publication for this content."
          },          
          {
            type: "datetime",
            name: "modDatetime",
            label: "Modification Date/Time",
            required: false
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: false,
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: false,
            description: "The URL-friendly version of the title. Typically lowercase with hyphens."
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured",
            required: false,
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
            required: false,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            required: false
          },
          {
            type: "image",
            name: "ogImage",
            label: "Open Graph Image",
            required: false,
          },
          {
            type: "string",
            name: "canonicalURL",
            label: "Canonical URL",
            required: false,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ]
      },
    ],
  }
  
});

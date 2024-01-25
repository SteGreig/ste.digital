import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemaTypes from './sanity/schemas';

const config = defineConfig({
  projectId: "ujm0yphe",
  dataset: "production",
  useCdn: true,
  title: "ste.digital",
  apiVersion: "2024-01-18",
  basePath: "/studio",
  plugins: [structureTool()],
  schema: { types: schemaTypes }
})

export default config;
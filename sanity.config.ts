import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import {visionTool} from '@sanity/vision'
//import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import schemaTypes from './sanity/schemas';

const config = defineConfig({
  projectId: "ujm0yphe",
  dataset: "production",
  title: "ste.digital",
  apiVersion: "2024-01-18",
  useCdn: true,
  basePath: "/studio",
  plugins: [
    structureTool(),
    visionTool(),
  ],
  schema: { types: schemaTypes }
})

export default config;
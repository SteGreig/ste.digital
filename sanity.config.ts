import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import project from "./sanity/schemas/project-schema";

const config = defineConfig({
  projectId: "ujm0yphe",
  dataset: "production",
  title: "ste.digital",
  apiVersion: "2024-01-18",
  basePath: "/studio",
  plugins: [structureTool()],
  schema: { types: [project] }
})

export default config;
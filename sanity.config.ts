import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

const config = defineConfig({
  projectId: "ujm0yphe",
  dataset: "production",
  title: "ste.digital",
  apiVersion: "2024-01-18",
  basePath: "/studio",
  plugins: [structureTool()],
})

export default config;
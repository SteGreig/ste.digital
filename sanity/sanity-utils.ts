import { createClient, groq } from "next-sanity";

export async function getProjects() {
  const client = createClient({
    projectId: "ujm0yphe",
    dataset: "production",
    apiVersion: "2024-01-18",
  });

  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      content
    }`
  )
}
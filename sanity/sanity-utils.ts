import { createClient, groq } from "next-sanity";

export async function getProjects() {
  const client = createClient({
    projectId: "ujm0yphe",
    dataset: "production",
    apiVersion: "2024-01-18",
  });

  return client.fetch(
    groq`*[_type == "project"] | order(_updatedAt desc){
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      content,
      url,
      'tags': tags[]->title,
      "excerpt": array::join(string::split((pt::text(content)), "")[0..180], "") + "..."
    }`
  )
}
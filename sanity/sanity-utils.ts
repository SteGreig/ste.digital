import { createClient, groq } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
  projectId: "ujm0yphe",
  dataset: "production",
  apiVersion: "2024-01-18",
});

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);
export function urlFor(source) {
  return builder.image(source)
}

export async function getProjects() {
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

export async function getPosts(start: number, end: number) {
  return client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc)[${start}...${end}]{
      _id,
      publishedAt,
      title,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      body,
      'categories': categories[]->title,
      "excerpt": array::join(string::split((pt::text(body)), "")[0..93], "") + "..."
    }`
  )
}

export async function getPost(slug: string) {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      publishedAt,
      title,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      body,
      'categories': categories[]->title,
      "excerpt": array::join(string::split((pt::text(body)), "")[0..180], "") + "..."
    }`,
    { slug }
  )
}

export async function getBlogCats() {
  return client.fetch(
    groq`*[_type == "blogCategory"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      description
    }`
  )
}

export async function getPostsByCat(slug: string, start: number, end: number) {
  return client.fetch(
    groq`*[_type == "post" && $slug in categories[]->slug.current] | order(publishedAt desc)[${start}...${end}]{
      _id,
      publishedAt,
      title,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      body,
      'categories': categories[]->title,
      "excerpt": array::join(string::split((pt::text(body)), "")[0..93], "") + "..."
    }`,
    { slug }
  )
}

export async function postsCount() {
  return client.fetch(
    groq`count(*[_type == "post"])`
  )
}

export async function postsInCatCount(slug: string) {
  return client.fetch(
    groq`count(*[_type == "post" && $slug in categories[]->slug.current])`,
    {slug}
  )
}
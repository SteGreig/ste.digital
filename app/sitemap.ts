import { getPosts } from "@/sanity/sanity-utils";
import { Post as PostType } from "./types/Post";
import { MetadataRoute } from "next";

const baseURL = "https://ste.digital";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts(1, 1000);

  const postEntries: MetadataRoute.Sitemap = posts.map((post: PostType) => ({
    url: `${baseURL}/blog/${post.slug}`,
    //lastModified: new Date(post.publishedAt)
  }))
  return [
    {
      url: `${baseURL}`
    },
    {
      url: `${baseURL}/about`
    },
    {
      url: `${baseURL}/kind-words`
    },
    ...postEntries
  ]
}
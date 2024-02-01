import { PortableTextBlock } from "sanity";

export type Post = {
  _id: string;
  publishedAt: Date;
  title: string;
  slug: string;
  mainImage: string;
  body: PortableTextBlock[];
  categories: string[];
  excerpt: string;
}
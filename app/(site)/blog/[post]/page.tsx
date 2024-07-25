import { Metadata } from "next";
import { getPosts } from "@/sanity/sanity-utils";
import { getPost } from "@/sanity/sanity-utils";
import MyPortableText from "../../components/MyPortableText";
import TransitionWrapper from "../../components/TransitionWrapper";
// import Image from 'next/image'
import "./prism.css";
import DisqusComments from "./DisqusComments";

type Props = {
  params: { post: string };
};

// Generate these posts as static pages (using an array of post slugs) rather than dynamically rendered
export async function generateStaticParams() {
  const posts = await getPosts(1, 30);
  return posts.map(({ slug }: { slug: string }) => slug);
}

// Generate the dynamic meta data for this page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.post;
  const post = await getPost(slug);
  return {
    title: `${post.title}`,
    description: `${post.excerpt}`,
  };
}

export default async function Post({ params }: Props) {
  const slug = params.post;

  const post = await getPost(slug);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date(post.publishedAt);

  return (
    <TransitionWrapper>
      <div className="w-full max-w-[720px] @container">
        <article className="text-base/relaxed text-gray-200 article">
          <span className="font-primary text-xs uppercase tracking-[0.2em] opacity-30 mb-2 block">
            Posted on{" "}
            <time className="" dateTime="">
              {date.getDate()} {months[date.getMonth()]} {date.getFullYear()}
            </time>
          </span>

          <h1 className="text-3xl @xl:text-4xl @2xl:text-5xl font-primary font-semibold text-white pb-2">
            {post.title}
          </h1>

          {/* {post.mainImage && (
            <Image
              className='align-left rounded'
              src={post.mainImage ?? 'https://picsum.photos/400/300'}
              alt={post.title}
              width='300'
              height='200'
            />
          )} */}

          <MyPortableText value={post.body} />
        </article>

        <div className="mt-20 p-4 lg:p-10 2xl:p-12 bg-navy-600 bg-opacity-50 rounded">
          <DisqusComments title={post.title} slug={post.slug} />
        </div>
      </div>
    </TransitionWrapper>
  );
}

import { getPost } from "@/sanity/sanity-utils";
import MyPortableText from "../../components/MyPortableText";
import TransitionWrapper from "../../components/TransitionWrapper";
import Image from 'next/image'
import './prism.css'

type Props = {
  params: { post: string }
}

export default async function Post({params}: Props) {

  const slug = params.post;

  const post = await getPost(slug);

  return (
    <TransitionWrapper>
      <div className="w-full max-w-[720px] @container">
        <article className="@2xl:text-lg text-gray-300 article">

          <h1 className="text-3xl @xl:text-4xl @2xl:text-5xl font-primary font-semibold text-white pb-2">{post.title}</h1>

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
      </div>
    </TransitionWrapper>
  )

}
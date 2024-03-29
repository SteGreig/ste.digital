import { Metadata, ResolvingMetadata } from "next";
import { getPostsByCat } from "@/sanity/sanity-utils";
import { postsInCatCount } from "@/sanity/sanity-utils";
import { Post as PostType } from '../../../../types/Post';
import BlogTeaser from "@/app/(site)/components/BlogTeaser";
import PaginationBtns from "@/app/(site)/components/PaginationBtns";
import TitleDivider from "@/app/(site)/components/TitleDivider";
import unslugify from "@/app/(site)/helpers/unslugify";
import TransitionWrapper from "@/app/(site)/components/TransitionWrapper";

const limit = 12;

type Props = {
  params: { category: string },
  searchParams: {[key: string] : string | string[] | undefined}
}

export function generateMetadata({ params, searchParams }: Props){
  return {
    title: `'${unslugify(params.category)}' Blog Category ${searchParams.page ? 'Page '+searchParams.page : ''}`,
    description: `Posts categorised as '${unslugify(params.category)}' in the personal blog of creative front-end developer, Ste Greig.`,
  }
}

export default async function CatIndex({params, searchParams}: Props) {

  const slug = params.category;

  const catTitle = unslugify(slug);

  const pageNum = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;

  const posts = await getPostsByCat(slug, (pageNum-1)*limit, limit*pageNum);

  const count = await postsInCatCount(slug);

  return (
    <TransitionWrapper>

      <TitleDivider title={`${count} Post${count !== 1 ? 's': ''} in '${catTitle}'`} classes='mb-10 2xl:mb-12' maxWidth='max-w-screen-xl' />

      <div className='max-w-screen-xl @container'>
        <div className='flex flex-wrap w-full @xl:-mx-4 @2xl:-mx-6'>
          {posts.map((post: PostType) => (
            <BlogTeaser key={post._id} {...post} />
          ))}
        </div>
      </div>

      <PaginationBtns
        limit={limit}
        pageNum={pageNum}
        postCount={posts.length}
        totalPostCount={count}
        path={`/blog/cat/${slug}`}
      />
      
    </TransitionWrapper>
  )

}
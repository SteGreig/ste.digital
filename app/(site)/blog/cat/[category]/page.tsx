import { getPostsByCat } from "@/sanity/sanity-utils";
import { postsInCatCount } from "@/sanity/sanity-utils";
import { Post as PostType } from '../../../../types/Post';
import BlogTeaser from "@/app/(site)/components/BlogTeaser";
import PaginationBtns from "@/app/(site)/components/PaginationBtns";
import TitleDivider from "@/app/(site)/components/TitleDivider";
import unslugify from "@/app/(site)/helpers/unslugify";

type Props = {
  params: { category: string },
  searchParams: {[key: string] : string | string[] | undefined}
}

export default async function CatIndex({params, searchParams}: Props) {

  const slug = params.category;

  const catTitle = unslugify(slug);

  const limit = 6;

  const pageNum = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;

  const posts = await getPostsByCat(slug, (pageNum-1)*limit, limit*pageNum);

  const count = await postsInCatCount(slug);

  return (
    <>

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
      
    </>
  )

}
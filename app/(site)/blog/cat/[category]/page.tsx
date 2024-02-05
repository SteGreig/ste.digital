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

  const limit = 3;

  const pageNum = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;

  const posts = await getPostsByCat(slug, (pageNum-1)*limit, limit*pageNum);

  const count = await postsInCatCount(slug);

  return (
    <>

      <TitleDivider title={`'${catTitle}' - Page ${pageNum} of ${Math.ceil(count/limit)}`} classes='mb-10 2xl:mb-12' />

      <div className='flex flex-wrap w-full max-w-[720px] @container'>
        {posts.map((post: PostType) => (
          <BlogTeaser key={post._id} {...post} />
        ))}
      </div>

      <PaginationBtns
        limit={limit}
        pageNum={pageNum}
        postCount={posts.length}
        path={`/blog/cat/${slug}`}
      />
      
    </>
  )

}
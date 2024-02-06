import { getPosts } from '@/sanity/sanity-utils'
import { postsCount } from '@/sanity/sanity-utils';
import { Post as PostType } from '../../types/Post';
import BlogTeaser from '../components/BlogTeaser';
import PaginationBtns from '../components/PaginationBtns';
import TitleDivider from "@/app/(site)/components/TitleDivider";

type Props = {
  searchParams: {[key: string] : string | string[] | undefined}
}

export default async function BlogIndex({searchParams}:Props) {

  const limit = 3;

  const pageNum = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;

  const posts = await getPosts((pageNum-1)*limit, limit*pageNum);

  const count = await postsCount();

  return (
    <>

      <TitleDivider title={`Page ${pageNum} of ${Math.ceil(count/limit)}`} classes='mb-10 2xl:mb-12' />

      <div className='flex flex-wrap w-full max-w-[720px] @container'>
        {posts.map((post: PostType) => (
          <BlogTeaser key={post._id} {...post} />
        ))}
      </div>

      <PaginationBtns
        limit={limit}
        pageNum={pageNum}
        postCount={posts.length}
        path='/blog'
      />

      {/* <BlogCategories /> */}

    </>
  )
}

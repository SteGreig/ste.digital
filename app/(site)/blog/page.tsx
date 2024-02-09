import { getPosts } from '@/sanity/sanity-utils'
import { postsCount } from '@/sanity/sanity-utils';
import { Post as PostType } from '../../types/Post';
import BlogTeaser from '../components/BlogTeaser';
import PaginationBtns from '../components/PaginationBtns';
import TransitionWrapper from '../components/TransitionWrapper';
// import TitleDivider from "@/app/(site)/components/TitleDivider";

type Props = {
  searchParams: {[key: string] : string | string[] | undefined}
}

export default async function BlogIndex({searchParams}:Props) {

  const limit = 6;

  const pageNum = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;

  const posts = await getPosts((pageNum-1)*limit, limit*pageNum);

  const count = await postsCount();

  return (
    <TransitionWrapper>

      {/* <TitleDivider title={`Page ${pageNum} of ${Math.ceil(count/limit)}`} classes='mb-10 2xl:mb-12' /> */}

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
        path='/blog'
      />

      {/* <BlogCategories /> */}

    </TransitionWrapper>
  )
}
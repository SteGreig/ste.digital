import Link from 'next/link';
import { getPosts } from '@/sanity/sanity-utils'
import { Post as PostType } from '../../types/Post';
import BlogTeaser from '../components/BlogTeaser';
import BlogCategories from '../components/BlogCategories';
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

type Props = {
  searchParams: {[key: string] : string | string[] | undefined}
}

export default async function BlogIndex({searchParams}:Props) {

  const limit = 3;

  const pageNum = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;

  const posts = await getPosts((pageNum-1)*limit, limit*pageNum);

  return (
    <>

      <div className='flex flex-wrap w-full max-w-[720px] @container'>
        {posts.map((post: PostType) => (
          <BlogTeaser key={post._id} {...post} />
        ))}
      </div>

      <div className='flex w-full max-w-[720px] mt-14 xl:mt-20'>
        {pageNum !== 1 && (
          <Link
            className='flex items-center border-b border-transparent hover:border-pink'
            href={pageNum === 2 ? '/blog' : {
              pathname: '/blog',
              query: {page: pageNum > 1 ? pageNum - 1 : 1 }
            }}
          >
            <BsArrowLeft className='text-pink' />
            <span className='gradient-text ml-1'>Previous</span>
          </Link>
        )}
        
        {posts.length === limit && (
          <Link
            className='flex items-center border-b border-transparent hover:border-pink ml-auto'
            href={{
              pathname: '/blog',
              query: { page: pageNum + 1 }
            }}
          >
            <span className='gradient-text mr-1'>Next</span>
            <BsArrowRight className='text-pink' />
          </Link>
        )}
        
      </div>

      {/* <BlogCategories /> */}

      {/* <LoadMore /> */}

    </>
  )
}

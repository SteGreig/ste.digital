import Link from 'next/link';
import { getPosts } from '@/sanity/sanity-utils'
import { Post as PostType } from '../../types/Post';
import BlogCategories from '../components/BlogCategories';

type Props = {
  searchParams: {[key: string] : string | string[] | undefined}
}

export default async function BlogIndex({searchParams}:Props) {

  const limit = 3;

  const pageNum = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;

  const posts = await getPosts((pageNum-1)*limit, limit*pageNum);

  return (
    <>

      <div className=''>
        {posts.map((post: PostType) => (
          <div>
            <h2>{post.title}</h2>
          </div>
        ))}
      </div>

      <p>{posts.length}</p>

      <div className='flex space-x-6'>
            {pageNum !== 1 && (
              <Link
                href={pageNum === 2 ? '/blog' : {
                  pathname: '/blog',
                  query: {page: pageNum > 1 ? pageNum - 1 : 1 }
                }}
              >
                Previous
              </Link>
            )}
            
            {posts.length === limit && (
              <Link
                href={{
                  pathname: '/blog',
                  query: { page: pageNum + 1 }
                }}
              >
                Next
              </Link>
            )}
            
          </div>

      {/* <BlogCategories /> */}

      {/* <LoadMore /> */}

    </>
  )
}

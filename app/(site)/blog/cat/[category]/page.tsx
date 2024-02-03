import Link from "next/link";
import { getPostsByCat } from "@/sanity/sanity-utils";
import { Post as PostType } from '../../../../types/Post';

type Props = {
  params: { category: string },
  searchParams: {[key: string] : string | string[] | undefined}
}

export default async function CatIndex({params, searchParams}: Props) {

  const slug = params.category;

  console.log(slug);

  const limit = 3;

  const pageNum = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;

  const posts = await getPostsByCat(slug, (pageNum-1)*limit, limit*pageNum);

  return (
    <div>
      {posts.map((post: PostType) => (
        <div>
          <h2>hello {post.title}</h2>
        </div>
      ))}

      <div className='flex space-x-6'>
        {pageNum !== 1 && (
          <Link
            href={pageNum === 2 ? '/blog/cat/'+slug : {
              pathname: '/blog/cat/'+slug,
              query: {page: pageNum > 1 ? pageNum - 1 : 1 }
            }}
          >
            Previous
          </Link>
        )}
        
        {posts.length === limit && (
          <Link
            href={{
              pathname: '/blog/cat/'+slug,
              query: { page: pageNum + 1 }
            }}
          >
            Next
          </Link>
        )}
        
      </div>
    </div>
  )

}
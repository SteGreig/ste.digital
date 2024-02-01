import { getPosts } from '@/sanity/sanity-utils'
import { Post as PostType } from '../../types/Post';
import BlogCategories from '../components/BlogCategories';

export default async function BlogIndex() {

  const posts = await getPosts();

  return (
    <>

      <div className=''>
        {posts.map((post: PostType) => (
          <div>
            <h2>{post.title}</h2>
          </div>
        ))}
      </div>

      <BlogCategories />

    </>
  )
}

import { getPostsByCat } from "@/sanity/sanity-utils";
import { Post as PostType } from '../../../../types/Post';

type Props = {
  params: { category: string }
}

export default async function CatIndex({params}: Props) {

  const slug = params.category;

  console.log(slug);

  const posts = await getPostsByCat(slug);

  return (
    <div>
      {posts.map((post: PostType) => (
        <div>
          <h2>hello {post.title}</h2>
        </div>
      ))}
    </div>
  )

}
import { getPost } from "@/sanity/sanity-utils";

type Props = {
  params: { post: string }
}

export default async function Post({params}: Props) {

  const slug = params.post;

  const post = await getPost(slug);

  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  )

}
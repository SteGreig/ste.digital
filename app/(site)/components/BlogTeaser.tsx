import Link from 'next/link';
import { Post as PostType } from '../../types/Post';
// import Image from 'next/image'

const BlogTeaser = (props: PostType) => {

  const link = `/blog/${props.slug}`;
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const date = new Date(props.publishedAt);

  return (
    <div className='blog-teaser mb-10 @xl:mb-12 @2xl:mb-14 4xl:mb-16 flex w-full @xl:w-1/2 @xl:px-4 @2xl:px-6 4xl:px-10 @5xl:w-1/3 @container'>

      {/* <Link href={link} className='w-1/4 @2xl:w-1/3'>
        <Image
          className='rounded'
          src={props.mainImage ?? 'https://picsum.photos/400/300'}
          alt={props.title}
          width='400'
          height='300'
        />
      </Link> */}
      
      <div className='flex flex-col items-start w-full'>

        <time className='text-gray-500 text-xs/none mb-2 block' dateTime=''>{date.getDate()} {months[date.getMonth()]} {date.getFullYear()}</time>

        <h2 className='font-primary text-xl @sm:text-2xl @lg:text-3xl 3xl:text-2xl font-semibold'>
          <Link href={link} className='hover:underline decoration-pink'>{props.title}</Link>
        </h2>

        <p className='text-sm @lg:text-base 3xl:text-base mt-2 @sm:mt-3 mb-5 @xl:block text-gray-400'>{props.excerpt}</p>

        <Link
          href={link}
          className='btn btn--outline inline-flex mt-auto'
        >
          <span className='btn--outline__text text-sm'>Read More</span>
        </Link>

      </div>
    </div>
  )
}

export default BlogTeaser
import Link from 'next/link';
import { Post as PostType } from '../../types/Post';
import Image from 'next/image'

const BlogTeaser = (props: PostType) => {

  const link = `/blog/${props.slug}`;
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const date = new Date(props.publishedAt);

  return (
    <div className='blog-teaser mb-10 @xl:mb-12 @2xl:mb-14 last:mb-0 flex w-full'>

      <Link href={link} className='w-1/4 @2xl:w-1/3'>
        <Image
          className='rounded'
          src={props.mainImage ?? 'https://picsum.photos/400/300'}
          alt={props.title}
          width='400'
          height='300'
        />
      </Link>
      
      <div className='flex-1 pl-5 @xl:pl-6 @2xl:pl-8'>

        <time className='text-gray-500 text-xs/none mb-2 block' dateTime=''>{date.getDate()} {months[date.getMonth()]} {date.getFullYear()}</time>

        <h2 className='font-primary text-base @lg:text-lg @xl:text-xl @2xl:text-2xl font-medium @2xl:font-semibold'>
          <Link href={link} className='hover:underline decoration-pink'>{props.title}</Link>
        </h2>

        <p className='text-sm mt-2 @xl:block text-gray-400'>{props.excerpt}</p>

        <Link
          href={link}
          className='btn btn--outline inline-flex mt-3 @2xl:mt-5 text-xs @2xl:text-sm'
        >
          <span className='btn--outline__text'>Read More</span>
        </Link>

      </div>
    </div>
  )
}

export default BlogTeaser
import Link from 'next/link';
import { getBlogCats } from '@/sanity/sanity-utils';
import { BlogCat as BlogCatType } from '../../types/BlogCat';

type Props = {
  pathname: string
}

export default async function BlogCategories(props: Props) {

  const blogCats = await getBlogCats();

  return (

    <div className=''>
      {blogCats.map((cat: BlogCatType) => (
        <li>
          <Link
            href={`/blog/cat/${cat.slug}`}
            className={`${props.pathname === '/blog/cat/'+cat.slug && 'text-red-500'}`}
          >
            {cat.title}
          </Link>
        </li>
      ))}
    </div>

  )
}

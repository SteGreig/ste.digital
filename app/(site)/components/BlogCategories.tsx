import { getBlogCats } from '@/sanity/sanity-utils';
import { BlogCat as BlogCatType } from '../../types/BlogCat';

export default async function BlogCategories() {

  const blogCats = await getBlogCats();

  return (

    <div className=''>
      {blogCats.map((cat: BlogCatType) => (
        <div>
          <h2>{cat.title}</h2>
        </div>
      ))}
    </div>

  )
}

"use client";

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/app/(site)/data/navLinks'
import { BlogCat as BlogCatType } from '@/app/types/BlogCat';

type Props = {
  blogCats: BlogCatType[]
}

const Nav = (props: Props) => {

  const pathname = usePathname()

  return (
    <nav className=''>
      
      <ul className='flex md:flex-col justify-around md:justify-start'>
        {navLinks.map(i => (
          <li key={i.link}>
            <Link className={`${i.link === '/' && pathname === '/' || (i.link !== '/' && pathname.includes(i.link)) ? 'bg-purple bg-gradient-to-br from-purple to-pink' : ''} bg-white text-transparent bg-clip-text font-primary font-semibold antialiased p-3 md:px-0 md:py-4 inline-block text-sm lg:text-base transition duration-500 hover:text-pink`} href={i.link}>
              {i.text}
            </Link>

            {pathname.includes('/blog') && i.text === "Blog" && (
              <ul className='hidden md:flex flex-col -mt-2'>
                {props.blogCats.map((cat: BlogCatType) => (
                  <li key={cat._id}>
                    <Link
                      href={`/blog/cat/${cat.slug}`}
                      className={`${pathname === '/blog/cat/'+cat.slug ? 'text-pink hover:text-pink opacity-80 hover:opacity-100' : 'hover:text-white'} py-1 block text-sm text-gray-400`}
                    >
                      {cat.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}

          </li>
        ))}
      </ul>

    </nav>
  )
}

export default Nav
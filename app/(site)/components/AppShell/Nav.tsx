"use client";

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/app/(site)/data/navLinks'
import { BlogCat as BlogCatType } from '@/app/types/BlogCat';
import { LazyMotion, domAnimation, m } from "framer-motion"

type Props = {
  blogCats: BlogCatType[]
}

const Nav = (props: Props) => {

  const pathname = usePathname()

  const list = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }
  const item = { hidden: { x: -100, opacity: 0 }, show: {x: 0, opacity:1, transition: { duration: 0.5, type: "spring" }} }

  return (
    <LazyMotion features={domAnimation}>
      <nav className='md:pb-5'>
        
        <m.ul initial="hidden" animate="show" variants={list} className='flex md:flex-col justify-around md:justify-start'>
          {navLinks.map(i => (
            <m.li variants={item} key={i.link}>
              <Link className={`${i.link === '/' && pathname === '/' || (i.link !== '/' && pathname.includes(i.link)) ? 'bg-purple bg-gradient-to-br from-purple to-pink' : ''} bg-white text-transparent bg-clip-text font-primary font-semibold antialiased p-3 md:px-0 md:py-4 inline-block text-sm lg:text-base transition duration-500 hover:text-pink`} href={i.link}>
                {i.text}
              </Link>

              {pathname.includes('/blog') && i.text === "Blog" && (
                <m.ul initial="hidden" animate="show" variants={list} className='hidden md:flex flex-col -mt-2'>
                  {props.blogCats.map((cat: BlogCatType) => (
                    <m.li variants={item} key={cat._id}>
                      <Link
                        href={`/blog/cat/${cat.slug}`}
                        className={`${pathname === '/blog/cat/'+cat.slug ? 'text-pink hover:text-pink opacity-80 hover:opacity-100' : 'hover:text-white'} py-1 block text-sm text-gray-400`}
                      >
                        {cat.title}
                      </Link>
                    </m.li>
                  ))}
                </m.ul>
              )}

            </m.li>
          ))}
        </m.ul>

      </nav>
    </LazyMotion>
  )
}

export default Nav
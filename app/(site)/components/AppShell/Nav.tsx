"use client";

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/app/(site)/data/navLinks'

const Nav = () => {

  const pathname = usePathname()

  console.log(pathname);

  return (
    <nav className=''>
      
      <ul className='flex md:flex-col justify-around md:justify-start'>
        {navLinks.map(i => (
          <li key={i.link}><Link className={`${pathname === i.link && 'bg-gradient-to-br from-purple to-pink text-transparent bg-clip-text'} font-primary font-semibold antialiased p-3 md:px-0 md:py-4 inline-block text-sm lg:text-base transition duration-500 hover:text-pink`} href={i.link}>{i.text}</Link></li>
        ))}
      </ul>

    </nav>
  )
}

export default Nav
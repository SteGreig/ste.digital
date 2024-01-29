import React from 'react'
import Link from 'next/link'
import EmailBtn from '../EmailBtn'
import { BsTwitter } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";


const Header = () => {
  return (
    <header className='header border-b border-white border-opacity-10 fixed z-20 top-0 left-0 w-full backdrop-blur-lg bg-[#141D34] bg-opacity-70 h-[69px] flex items-center px-4 md:px-5 z-10'>
      
      <Link href="/" className="logo font-semibold font-primary text-xl flex items-center antialiased mr-auto transition duration-700 hover:hue-rotate-20">
        <div className='rounded overflow-hidden flex w-[22px] h-[22px] mr-2 bg-white'>
          <span className='w-1/2 translate-x-full bg-gradient-to-br from-purple to-pink'></span>
        </div>
        <span>ste</span>
        <span className='bg-gradient-to-br from-purple to-pink text-transparent bg-clip-text pink-outer-glow'>.digital</span>
      </Link>

      <div className='flex items-center gap-1 mr-4 md:mr-6'>
        <a className='opacity-40 hover:opacity-100 transition duration-300 py-2 px-1' target="_blank" rel="noopener noreferrer" href="https://twitter.com/Ste_Greig">
          <BsTwitter className='text-lg' />
        </a>

        <a className='opacity-40 hover:opacity-100 transition duration-300 py-2 px-1' target="_blank" rel="noopener noreferrer" href="https://dribbble.com/ste_greig">
          <BsDribbble className='text-lg' />
        </a>
      </div>

      <EmailBtn />

    </header>
  )
}

export default Header
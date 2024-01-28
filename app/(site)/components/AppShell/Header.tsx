import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='header border-b border-white border-opacity-10 fixed top-0 left-0 w-full backdrop-blur-lg bg-[#141D34] bg-opacity-70 h-[69px] flex items-center px-4 md:px-5 z-10'>
      
      <Link href="/" className="logo font-semibold font-primary text-xl flex items-center antialiased">
        <div className='rounded overflow-hidden flex w-[22px] h-[22px] mr-2 bg-white'>
          <span className='w-1/2 translate-x-full bg-gradient-to-br from-purple to-pink'></span>
        </div>
        <span>ste</span>
        <span className='bg-gradient-to-br from-purple to-pink text-transparent bg-clip-text pink-outer-glow'>.digital</span>
      </Link>

    </header>
  )
}

export default Header
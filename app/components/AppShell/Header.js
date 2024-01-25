import React from 'react'

const Header = () => {
  return (
    <header className='border-b border-white border-opacity-10 fixed top-0 left-0 w-full bg-gradient-to-r from-[#141D34] to-navy h-[69px] flex items-center px-4 md:px-5 z-10'>
      
      <div className="font-semibold font-primary text-xl flex items-center antialiased">
        <div className='rounded overflow-hidden flex w-[22px] h-[22px] mr-2'>
          <span className='w-1/2 bg-white'></span>
          <span className='w-1/2 bg-gradient-to-br from-purple to-pink'></span>
        </div>
        <span>ste</span>
        <span className='bg-gradient-to-br from-purple to-pink text-transparent bg-clip-text'>.digital</span>
      </div>

    </header>
  )
}

export default Header
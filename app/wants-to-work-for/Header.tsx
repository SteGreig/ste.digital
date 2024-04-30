"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import EmailBtn from './EmailBtn'
import { BsTwitter } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { LazyMotion, domAnimation, m } from "framer-motion"


const Header = () => {
  return (
    <LazyMotion features={domAnimation}>
      <header className='header border-b border-white border-opacity-10 fixed z-20 top-0 left-0 w-full backdrop-blur-lg bg-[#141D34] bg-opacity-70 h-[69px] flex items-center px-4 md:px-5'>
        
        <Link href="/" className="logo font-semibold font-primary text-xl flex items-center mr-auto antialiased transition duration-700 hover:hue-rotate-20">
          <m.div initial={{scale:0, rotate:180}} animate={{scale:1,rotate:0}} transition={{duration: 1, type: "spring"}} className='relative rounded overflow-hidden flex w-[22px] h-[22px] mr-2 bg-white'>
            <span className='w-1/2 translate-x-full bg-gradient-to-br from-purple to-pink'></span>
          </m.div>
          <m.span initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration: 0.3}}>ste</m.span>
          <m.span initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration: 0.3}} className='bg-gradient-to-br from-purple to-pink text-transparent bg-clip-text pink-outer-glow'>.digital</m.span>
        </Link>

        <m.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 0.3}} className='flex'>
          <div className='flex items-center gap-1 mr-4 md:mr-6'>
            <a className='opacity-40 hover:opacity-100 transition duration-300 py-2 px-1' target="_blank" rel="noopener noreferrer" href="https://twitter.com/Ste_Greig">
              <BsTwitter className='text-lg' />
            </a>

            <a className='opacity-40 hover:opacity-100 transition duration-300 py-2 px-1' target="_blank" rel="noopener noreferrer" href="https://github.com/SteGreig">
              <BsGithub className='text-lg' />
            </a>

            <a className='opacity-40 hover:opacity-100 transition duration-300 py-2 px-1' target="_blank" rel="noopener noreferrer" href="https://dribbble.com/ste_greig">
              <BsDribbble className='text-lg' />
            </a>
          </div>   

          <EmailBtn />
        </m.div>

      </header>

    </LazyMotion>
  )
}

export default Header
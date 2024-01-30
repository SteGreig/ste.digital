import React from 'react'
import { kindWords } from '../data/kindWords'

const About = () => {
  return (
    <>
      
      <h1 className='sr-only'></h1>

      {kindWords && (
        <ul className='w-full max-w-screen-xl sm:columns-2 md:columns-1 lg:columns-2 2xl:columns-3 gap-x-6 lg:gap-x-8 3xl:gap-x-10'>
          {kindWords.map(item => (
            <li className='flex w-full 2xl:max-w-md break-inside-avoid mb-6 lg:mb-8 3xl:mb-10 shadow-lg shadow-pink/25'>
              <figure className='flex flex-col w-full p-6 xl:p-8 rounded relative bg-gradient-to-br from-purple to-pink after:absolute after:top-1 after:left-1 after:right-1 after:bottom-1 after:bg-navy after:rounded'>
                <blockquote className='relative z-10'>
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className='relative z-10 mt-auto'>
                  <span className='block mt-5 font-primary'>{item.name}</span>
                  {item.position && (
                    <span className='block opacity-60 text-sm'>{item.position}</span>
                  )}
                  {item.company && (
                    <span className='block opacity-60 text-sm'>{item.company}</span>
                  )}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      )}
      
      
    </>
  )
}

export default About
"use client";
import React from 'react'
import { BsXLg } from "react-icons/bs";
import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

const Nutshell = () => {

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => {
    if(y > 50) {
      document.querySelector('.tldr')?.classList.add('fadeInUp');
    }
  })

  const [active, setActive] = useState(false);

  function openModal() {
    setActive(true);
    document.body.classList.add('overflow-hidden');
  }
  function closeModal() {
    setActive(false);
    document.body.classList.remove('overflow-hidden');
  }

  return (
    <>
      <motion.button onClick={openModal} className={`tldr fixed bottom-20 right-4 md:bottom-5 md:right-5 rounded-full px-3 py-2 md:px-4 text-sm md:text-base font-primary tracking-wider btn z-40 opacity-0 invisible`}>TL;DR</motion.button>
      
      <div className={`fixed top-2 left-2 right-2 bottom-2 md:top-1/2 md:left-1/2 md:right-auto md:bottom-auto md:-translate-x-1/2 md:-translate-y-1/2 overflow-hidden z-50 md:w-full md:max-w-screen-sm lg:max-w-screen-md rounded bg-gradient-to-br from-purple to-pink after:rounded after:absolute after:left-[2px] after:right-[2px] after:top-[2px] after:bottom-[2px] after:bg-navy after:z-[-1] pink-outer-box-glow flex transition duration-300 ${!active ? 'opacity-0 pointer-events-none' : ''}`}>
        <div className="relative bottom-[2px] overflow-auto article [&>.heading]:mt-0 [&>.heading]:no-underline p-6 md:p-8">
          <h2 className='heading'><span className='gradient-text font-semibold whitespace-normal'>In a nutshell</span></h2>
          <p>Just in case you're put off by the size of the scroll bar...</p>
          <ul>
            <li>Creating for the web since mid 2000s</li>
            <li>Held "hybrid" roles (design and front-end) for much of my career</li>
            <li>Speciality is UI engineering</li>
            <li>Last few years, my focus has been on React, Next.js, Astro and JavaScript/TypeScript</li>
            <li>Author of CSS3 Pushing the Limits, substantial book on advanced CSS</li>
            <li>Very strong all round knowledge from years of marketing agency experience (SEO, CRO, A/B testing, page speed, DNS etc.)</li>
            <li>Have been heavily involved in training and upskilling colleagues on areas such as page speed / CWV, CSS and JavaScript</li>
            <li>Extremely adaptable to new technologies and a very fast learner</li>
          </ul>
          <p>For more context and work examples, please scroll on!</p>
        </div>
        <button onClick={closeModal} className='absolute top-0 right-0 p-3 bg-gradient-to-br from-purple to-pink text-white text-2xl hover:hue-rotate-20 transition duration-500'>
          <BsXLg />
        </button>
      </div>
      <div onClick={closeModal} className={`fixed top-0 left-0 w-full h-full bg-navy bg-opacity-90 z-40 flex transition duration-300 ${!active ? 'opacity-0 pointer-events-none' : ''}`}>
      </div>
    </>
  )
}

export default Nutshell
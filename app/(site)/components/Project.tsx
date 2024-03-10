"use client";
import React from 'react'
import Image from 'next/image'
import { PortableText } from '@portabletext/react';
import { useState } from 'react';
import { Project as ProjectType } from '@/app/types/Project';
import { MouseTracker } from './MouseTracker';
import { BsRocketTakeoff } from "react-icons/bs";
import { LazyMotion, domAnimation, m } from "framer-motion"

const Project = (props:ProjectType) => {

  const [moreActive, setMoreActive] = useState(false);
  const [target, setTarget] = useState(false);

  function readMore(e:any) {
    e.preventDefault();
    setMoreActive((moreActive) => !moreActive);
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.article
        initial={{y:40, opacity:0}}
        whileInView={{y:0, opacity:1}}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, type: "spring" }}
        className='w-full max-w-[720px]'
      >

        <h2 className='font-primary font-bold text-3xl md:text-4xl lg:text-5xl mb-4 antialiased'>{props.name}</h2>

        <div className='mb-6 font-light'>
          {props.excerpt && (
            <p className={`${moreActive ? 'hidden' : 'block'}`}>{props.excerpt} <button onClick={readMore} className='gradient-text border-b border-transparent hover:border-pink'>Read More</button></p>
          )}
          <div className={`${moreActive ? 'block' : 'hidden'} flex flex-col gap-4`}>
            <PortableText value={props.content} />
          </div>
        </div>

        {props.tags && (
          <ul className='mb-9 flex gap-2'>
          {props.tags.map(tag => (
            <li className='btn btn--outline text-xs after:left-px after:top-px after:bottom-px after:right-px px-4 py-2' key={tag}>
              <span className='btn--outline__text'>{tag}</span>
            </li>
          ))}
          </ul>
        )}

        {target && (
          <MouseTracker className='launch-project rounded-full w-32 h-32 bg-gradient-to-br from-purple to-pink flex items-center justify-center flex-col font-primary font-semibold leading-snug' offset={{ x: -50, y: -50 }}>
            <span>Launch</span>
            <span>Project</span>
            <BsRocketTakeoff className="mt-2 text-xl" />
          </MouseTracker>
        )}

        {props.url ? (
          <a
            className={props.image && 'cursor-none'}
            target="_blank"
            href={props.url}
          >
            {props.image && (
              <Image
                className='rounded mb-6'
                src={props.image}
                alt={props.name}
                width='720'
                height='540'
                onMouseEnter={() => setTarget(true)}
                onMouseLeave={() => setTarget(false)}
              />
            )}
          </a>
        ) : (
          <Image
            className='rounded mb-6'
            src={props.image}
            alt={props.name}
            width='720'
            height='540'
          />
        )}

        {props.url && (
          <a target="_blank" href={props.url} className="btn inline-block rocket-btn overflow-hidden">
            <span className='inline-flex items-center'>
              <span>Launch Project</span>
              <BsRocketTakeoff className="ml-2 transition duration-500 delay-300" />
            </span>
          </a>
        )}

      </m.article>
    </LazyMotion>
  )
}

export default Project
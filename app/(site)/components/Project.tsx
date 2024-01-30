"use client";
import React from 'react'
import Image from 'next/image'
import { PortableText } from '@portabletext/react';
import { useState } from 'react';
import { Project as ProjectType } from '@/app/types/Project';
import { MouseTracker } from './MouseTracker';
import { BsRocketTakeoff } from "react-icons/bs";

const Project = (props:ProjectType) => {

  const [moreActive, setMoreActive] = useState(false);
  const [target, setTarget] = useState(null);

  function readMore(e:any) {
    e.preventDefault();
    setMoreActive((moreActive) => !moreActive);
  }

  return (
    <div className='w-full max-w-[720px]'>

      <h2 className='font-primary font-bold text-3xl md:text-4xl lg:text-5xl mb-4 antialiased'>{props.name}</h2>

      <div className='mb-6 font-light'>
        {props.excerpt && (
          <p className={`${moreActive ? 'hidden' : 'block'}`}>{props.excerpt} <a onClick={readMore} className='gradient-text border-b border-transparent hover:border-pink' href="#">Read More</a></p>
        )}
        <div className={`${moreActive ? 'block' : 'hidden'} flex flex-col gap-4`}>
          <PortableText value={props.content} />
        </div>
      </div>

      {props.tags && (
        <ul className='mb-9 flex gap-2'>
        {props.tags.map(tag => (
          <li className='text-xs rounded-full font-primary font-medium px-3 py-[6px] bg-gradient-to-br from-purple to-pink' key={tag}>{tag}</li>
        ))}
        </ul>
      )}

      {target && (
        <MouseTracker className='rounded-full w-32 h-32 bg-gradient-to-br from-purple to-pink flex items-center justify-center flex-col font-primary font-semibold leading-snug' offset={{ x: -50, y: -50 }}>
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
              onMouseLeave={() => setTarget(null)}
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
        <a href={props.url} className="btn btn--outline inline-block">
          <span className='btn--outline__text inline-flex items-center'>
            <span>Launch Project</span>
            <BsRocketTakeoff className="ml-2 text-pink" />
          </span>
        </a>
      )}

    </div>
  )
}

export default Project
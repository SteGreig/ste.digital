'use client';
import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import { MouseTracker } from '../(site)/components/MouseTracker';
import { BsRocketTakeoff } from "react-icons/bs";

type Props = {
  children: React.ReactNode,
  link?: string,
  imgSrc: string,
  imgAlt: string,
  imgWidth?: number,
  imgHeight?: number,
  caption?: string,
  figureClasses?: string
}

const ProjectImg = (props: Props) => {

  const [target, setTarget] = useState(false);

  return (
    <>
      {target && (
        <MouseTracker className='launch-project rounded-full w-32 h-32 bg-gradient-to-br from-purple to-pink flex items-center justify-center flex-col font-primary font-semibold leading-snug' offset={{ x: -50, y: -50 }}>
          <span>Launch</span>
          <span>Project</span>
          <BsRocketTakeoff className="mt-2 text-xl" />
        </MouseTracker>
      )}

      <figure className={props.figureClasses}>
        {props.link ? (
          <a
            className='cursor-none'
            target="_blank"
            href={props.link}
            rel="nofollow"
          >
            <Image
              className='rounded'
              src={props.imgSrc}
              alt={props.imgAlt}
              width={props.imgWidth ? props.imgWidth : 1280}
              height={props.imgHeight ? props.imgHeight : 960}
              onMouseEnter={() => setTarget(true)}
              onMouseLeave={() => setTarget(false)}
            />
          </a>
        ) : (
          <Image
            className='rounded'
            src={props.imgSrc}
            alt={props.imgAlt}
            width='1600'
              height='1200'
          />
        )}

        {props.caption && (
          <figcaption className='mt-3 text-gray-500 text-sm'>{props.caption}</figcaption>
        )}
        
      </figure>
    </>
  )
}

export default ProjectImg
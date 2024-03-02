import React from 'react'
import { PortableText } from '@portabletext/react'
import { PortableTextBlock } from "sanity";
import Refractor from 'react-refractor'
import Image from 'next/image'
import { urlFor } from '@/sanity/sanity-utils'
import decodeSanityAsset from '../helpers/decodeSanityAsset';
import { BsFillInfoCircleFill } from "react-icons/bs";

// Load any languages you want to use from `refractor`
import js from 'refractor/lang/javascript'
import css from 'refractor/lang/css'

Refractor.registerLanguage(js)
Refractor.registerLanguage(css)

type codeProps = {
  value: {
    language: string,
    code: string,
    highlightedLines: any
  }
}

type imageProps = {
  value: {
    asset: {
      _ref: string
    },
    alt: string,
    caption: string
  }
}

type embedProps = {
  value: {
    url: string,
    title: string,
    height: number
  }
}

type noteProps = {
  value: {
    title: string,
    note: string,
    linktext: string,
    url: string
  }
}

const myPortableTextComponents = {
  types: {
    code: (props: codeProps) => (
      <figure>
        <Refractor
          className='text-sm'
          language={props.value.language}
          value={props.value.code}
          // markers={props.value.highlightedLines}
        />
      </figure>
    ),
    image: (props: imageProps) => (
      <figure>
        <Image
          src={urlFor(props.value.asset._ref).url()}
          alt={props.value.alt}
          width={decodeSanityAsset(props.value.asset._ref).dimensions.width}
          height={decodeSanityAsset(props.value.asset._ref).dimensions.height}
        />
        {props.value.caption && (
          <figcaption className='text-base text-gray-400 mt-1 block'>{props.value.caption}</figcaption>
        )}
      </figure>
    ),
    embed: (props: embedProps) => (
      <figure>
        <iframe height={props.value.height ?? '400'} className='w-full' title={props.value.title} src={props.value.url} loading="lazy"></iframe>
      </figure>
    ),
    note: (props: noteProps) => (
      <aside className="rounded bg-navy-600 bg-opacity-50 border-l-8 border-pink p-6">
        <p className="font-primary font-semibold text-lg mb-4 flex items-center">
          <BsFillInfoCircleFill />
          <span className='ml-2'>{props.value.title ?? 'Note'}</span>
        </p>
        <p className='text-base text-gray-400'>{props.value.note}</p>
        {props.value.url && (
          <a className='text-base text-pink hover:hue-rotate-20' href={props.value.url}>{props.value.linktext}</a>
        )}
      </aside>
    )
  }
}

const MyPortableText = (props: {value: PortableTextBlock[]}) => {
  return (
    <PortableText value={props.value} components={myPortableTextComponents} />
  )
}

export default MyPortableText
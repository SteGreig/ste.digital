import React from 'react'
import { PortableText } from '@portabletext/react'
import { PortableTextBlock } from "sanity";
import Refractor from 'react-refractor'
import Image from 'next/image'
import { urlFor } from '@/sanity/sanity-utils'
import decodeSanityAsset from '../helpers/decodeSanityAsset';

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
    alt: string
  }
}

type embedProps = {
  value: {
    url: string,
    title: string,
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
      </figure>
    ),
    embed: (props: embedProps) => (
      <figure>
        <iframe height="400" className='w-full' title={props.value.title} src={props.value.url} loading="lazy"></iframe>
      </figure>
    )
  }
}

const MyPortableText = (props: {value: PortableTextBlock[]}) => {
  return (
    <PortableText value={props.value} components={myPortableTextComponents} />
  )
}

export default MyPortableText
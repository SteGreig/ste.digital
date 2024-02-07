import React from 'react'
import { PortableText } from '@portabletext/react'
import { PortableTextBlock } from "sanity";
import Refractor from 'react-refractor'
import Image from 'next/image'
import { urlFor } from '@/sanity/sanity-utils'

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

const myPortableTextComponents = {
  types: {
    code: (props: codeProps) => (
      <Refractor
        className='text-sm'
        language={props.value.language}
        value={props.value.code}
        // markers={props.value.highlightedLines}
      />
    ),
    image: (props: imageProps) => (
      <Image src={urlFor(props.value.asset._ref).url()} alt={props.value.alt} width={720} height={540} />
    )
  }
}

const MyPortableText = (props: {value: PortableTextBlock[]}) => {
  return (
    <PortableText value={props.value} components={myPortableTextComponents} />
  )
}

export default MyPortableText
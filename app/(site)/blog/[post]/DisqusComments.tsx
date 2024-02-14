"use client";

import { DiscussionEmbed } from 'disqus-react'
import React from 'react'

const DisqusComments = (props: {title: string, slug: string}) => {

  const pageUrl = typeof window !== 'undefined' ? window.location.href : "";

  const disqusConfig = {
    url: pageUrl,
    identifier: props.slug,
    title: props.title
  }

  return (
    <DiscussionEmbed shortname='ste-digital' config={disqusConfig} />
  )
}

export default DisqusComments
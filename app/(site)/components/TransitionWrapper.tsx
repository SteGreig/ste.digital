"use client"
import React from 'react'
import { LazyMotion, domAnimation, m } from "framer-motion"

const TransitionWrapper = ({children,}: {children: React.ReactNode}) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        {children}
      </m.div>
    </LazyMotion>
  )
}

export default TransitionWrapper
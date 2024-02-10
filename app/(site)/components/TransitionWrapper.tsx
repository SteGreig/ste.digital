"use client"
import React from 'react'
import { LazyMotion, domAnimation, m } from "framer-motion"

const TransitionWrapper = ({children,}: {children: React.ReactNode}) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, ease: [0.83, 0, 0.17, 1] }}>
        {children}
      </m.div>
    </LazyMotion>
  )
}

export default TransitionWrapper
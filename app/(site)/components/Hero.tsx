"use client"
import Image from 'next/image'
import { LazyMotion, domAnimation, m } from "framer-motion"

const Hero = (props: {image: boolean | undefined}) => {
  return (
    <LazyMotion features={domAnimation}>
      <div className='flex relative max-w-screen-xs sm:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 3xl:pr-12'>
        <div className='relative z-10'>
          <p className='text-6xl md:text-7xl lg:text-8xl 2xl:text-[110px] font-bold font-primary mt-4 md:mt-0'>
            <span>Ste</span>
            <span className='bg-gradient-to-br from-purple to-pink text-transparent bg-clip-text pink-outer-glow'>Greig.</span>
          </p>
          <p className={`mt-4 lg:mt-2 text-balance max-w-sm ${props.image ? 'lg:max-w-lg' : 'md:max-w-lg'} 2xl:max-w-screen-sm`}>
            <span className='text-sm/normal lg:text-base/relaxed 2xl:text-lg font-semibold font-primary mt-2 2xs:block'>A front-end developer from Nottingham, UK</span>
            <span className='text-sm/normal 2xl:text-base/normal opacity-60 font-light block md:mt-1'> who orem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan, lacus scelerisque hendrerit ultrices, massa massa consequat erat.</span>
          </p>
        </div>
        {props.image && (
          <m.div initial={{opacity:0}} animate={{opacity:1}} className='absolute -top-4 lg:-top-8 -right-12 sm:right-0 md:-right-12 lg:-right-32 xl:-right-6 2xl:-right-12 3xl:right-0 aspect-square flex-none rounded-full ml-auto w-1/3 xs:w-2/5 lg:w-80 xl:w-[350px] p-[2px] sm:p-[5px] bg-gradient-to-br from-purple to-pink'>
            <Image className='rounded-full object-cover w-full h-full bg-navy' src='/profile.png' alt="Ste Greig profile picture" width='351' height='351' />
          </m.div>
        )}
      </div>
    </LazyMotion>
  )
}

export default Hero
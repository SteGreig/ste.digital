import React from 'react'

const Hero = () => {
  return (
    <div>
      <p className='text-6xl md:text-7xl lg:text-8xl 2xl:text-[110px] font-bold font-primary'>
        <span>Ste</span>
        <span className='bg-gradient-to-br from-purple to-pink text-transparent bg-clip-text pink-outer-glow'>Greig.</span>
      </p>
      <p className='mt-4 lg:mt-2 text-balance max-w-sm sm:max-w-lg 2xl:max-w-screen-sm'>
        <span className='text-sm/normal lg:text-base/relaxed 2xl:text-lg font-semibold font-primary mt-2 2xs:block'>A front-end developer from Nottingham, UK</span>
        <span className='text-sm/normal 2xl:text-base/normal opacity-60 font-light block md:mt-1'> who orem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan, lacus scelerisque hendrerit ultrices, massa massa consequat erat.</span>
      </p>
    </div>
  )
}

export default Hero
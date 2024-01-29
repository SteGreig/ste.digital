import React from 'react'
import Hero from '../components/Hero';
import TitleDivider from '../components/TitleDivider';

const About = () => {
  return (
    <>
      <Hero image={true} />

      <TitleDivider title='Bio' classes='mt-20 xl:mt-28' />
      
    </>
  )
}

export default About
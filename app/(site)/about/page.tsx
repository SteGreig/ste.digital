import React from 'react'
import { Metadata } from 'next';
import Hero from '../components/Hero';
import TitleDivider from '../components/TitleDivider';
import HistoryItem from '../components/HistoryItem';
import Bio from './Bio';
import TransitionWrapper from '../components/TransitionWrapper';

import { employment } from '../data/employment';
import { education } from '../data/education';

export const metadata: Metadata = {
  title: 'About Ste Greig, a UK based front-end developer - ste.digital',
  description:
    'Bio, employment history and educational achievements of Ste Greig, a front-end developer from Nottingham, UK.',
};

const About = () => {
  return (
    <>
      <Hero image={true} />

      <TransitionWrapper>

        <h1 className='sr-only'>About Me</h1>

        <TitleDivider title='Bio' classes='mt-20 xl:mt-28' headingLevel='h2' />

        <Bio />

        <TitleDivider title='Employment History' classes='mt-16 xl:mt-24' headingLevel='h2' />

        <ol className='mt-12 xl:mt-14 flex flex-col gap-6 xl:gap-9'>
          {employment.map(job => (
            <HistoryItem key={job.jobTitle} start={job.start} end={job.end} title={job.jobTitle} details={job.company} />
          ))}
        </ol>

        <TitleDivider title='Education' classes='mt-16 xl:mt-24' headingLevel='h2' />

        <ol className='mt-12 xl:mt-14 flex flex-col gap-6 xl:gap-9'>
          {education.map(item => (
            <HistoryItem key={item.school} start={item.start} end={item.end} title={item.school} details={item.achievements} />
          ))}
        </ol>

      </TransitionWrapper>
      
    </>
  )
}

export default About
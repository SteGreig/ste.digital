import React from 'react'
import Hero from '../components/Hero';
import TitleDivider from '../components/TitleDivider';
import HistoryItem from '../components/HistoryItem';
import Bio from './Bio';

import { employment } from '../data/employment';
import { education } from '../data/education';

const About = () => {
  return (
    <>
      <Hero image={true} />

      <TitleDivider title='Bio' classes='mt-20 xl:mt-28' />

      <Bio />

      <TitleDivider title='Employment History' classes='mt-16 xl:mt-24' />

      <ol className='mt-12 xl:mt-14 flex flex-col gap-6 xl:gap-9'>
        {employment.map(job => (
          <HistoryItem start={job.start} end={job.end} title={job.jobTitle} details={job.company} />
        ))}
      </ol>

      <TitleDivider title='Education' classes='mt-16 xl:mt-24' />

      <ol className='mt-12 xl:mt-14 flex flex-col gap-6 xl:gap-9'>
        {education.map(item => (
          <HistoryItem start={item.start} end={item.end} title={item.school} details={item.achievements} />
        ))}
      </ol>
      
    </>
  )
}

export default About
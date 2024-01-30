import React from 'react'
import Hero from '../components/Hero';
import TitleDivider from '../components/TitleDivider';
import HistoryItem from '../components/HistoryItem';

import { employment } from '../data/employment';
import { education } from '../data/education';

const About = () => {
  return (
    <>
      <Hero image={true} />

      <TitleDivider title='Bio' classes='mt-20 xl:mt-28' />

      <div className='mt-10 md:mt-14 lg:mt-16 max-w-[720px] flex flex-col gap-4 font-light'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut nisi mattis, rutrum lacus eget, lacinia est. Quisque efficitur justo non auctor aliquet. Aenean maximus venenatis arcu. Nullam interdum erat quam, ultricies dictum leo auctor.</p>

        <p>Curabitur ac leo euismod, congue nisl eu, vehicula eros. Cras odio dolor, sagittis in convallis quis, scelerisque ac nibh. In dignissim elit ac arcu dapibus, tincidunt posuere arcu bibendum. Phasellus eget turpis ac urna tincidunt malesuada eu eget lacus. Mauris sed feugiat diam, in aliquam...</p>
      </div>

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
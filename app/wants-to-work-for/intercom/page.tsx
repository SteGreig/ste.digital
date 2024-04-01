import { Metadata } from 'next';
import Hero from '../Hero';
import TitleDivider from '../../(site)/components/TitleDivider';
import HistoryItem from '../../(site)/components/HistoryItem';
import TransitionWrapper from '../../(site)/components/TransitionWrapper';

import { employment } from '../../(site)/data/employment';
import { education } from '../../(site)/data/education';

export const metadata: Metadata = {
  title: "Ste Greig - Application for Web Engineer at Intercom",
  robots: {
    index: false,
    follow: false,
  },
};

const JobApp = () => {
  return (
    <>

      <TransitionWrapper>

        <Hero image={true} />

        <h1 className='sr-only'>Intercom Application</h1>

        <TitleDivider title='Bio' classes='mt-20 xl:mt-28' headingLevel='h2' />

      </TransitionWrapper>
      
    </>
  )
}

export default JobApp
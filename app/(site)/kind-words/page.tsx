import { Metadata } from 'next'
import { kindWords } from '../data/kindWords'
import TransitionWrapper from '../components/TransitionWrapper'

export const metadata: Metadata = {
  title: 'Kind Words',
  description:
    "Kind words about what it's like to work with Ste Greig, from clients, collaborators and managers.",
};

const About = () => {
  return (
    <TransitionWrapper>
      
      <h1 className='sr-only'>Kind Words</h1>

      {kindWords && (
        <ul className='w-full max-w-screen-xl sm:columns-2 md:columns-1 lg:columns-2 3xl:columns-3 gap-x-6 lg:gap-x-8 3xl:gap-x-10'>
          {kindWords.map(item => (
            <li key={item.name} className='flex w-full 2xl:max-w-md break-inside-avoid mb-6 lg:mb-8 3xl:mb-10 '>
              <figure className='flex flex-col w-full p-6 xl:p-8 rounded relative bg-gradient-to-br from-purple to-pink after:absolute after:top-[2px] after:left-[2px] after:right-[2px] after:bottom-[2px] after:bg-navy after:rounded'>
                <blockquote className='relative z-10'>
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className='relative z-10 mt-auto'>
                  <span className='block mt-5 font-primary'>{item.name}</span>
                  {item.position && (
                    <span className='block opacity-60 text-sm'>{item.position}</span>
                  )}
                  {item.company && (
                    <span className='block opacity-60 text-sm'>{item.company}</span>
                  )}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      )}
      
    </TransitionWrapper>
  )
}

export default About
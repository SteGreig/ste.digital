import { Metadata } from 'next';
import Hero from '../Hero';
import Image from 'next/image'
import ContentOneCol from '../ContentOneCol'
import ContentTwoCol from '../ContentTwoCol'
import CopyWrapper from '../CopyWrapper'
import EmailBtn from '../EmailBtn'
import ProjectImg from '../ProjectImg'
import Nutshell from '../Nutshell'
import TitleDivider from '../../(site)/components/TitleDivider';
import HistoryItem from '../../(site)/components/HistoryItem';
import TransitionWrapper from '../../(site)/components/TransitionWrapper';

// Dynamic import to prevent document is not defined error
import dynamic from 'next/dynamic';
const ColourChanger = dynamic(() => import('../../(site)/components/AppShell/ColourChanger'), { ssr: false });

import { employment } from '../../(site)/data/employment';
import { education } from '../../(site)/data/education';
import { kindWords } from '../../(site)/data/kindWords'

export const metadata = {
  title: "Ste Greig - Application for Web Engineer at Intercom",
  robots: {
    index: false,
    follow: false,
  },
};

const JobApp = () => {
  return (
    <TransitionWrapper>

      <div className='w-full max-w-[900px] mx-auto px-4 lg:px-0 pb-12 xl:pb-20'>

        <Hero image={true} />

        <h1 className='sr-only'>Intercom Application</h1>

        <hr className='w-full lg:w-10/12 border-0 h-px bg-white opacity-10 mt-12 mb-12' />

        <div className='article max-w-screen-sm'>

          <p className='text-xl font-bold'>Hi! My name's Stephen (most people call me Ste) and I'm a creative front-end developer based in Nottingham, UK.</p>

          <p>After reading through the description for this role and watching Eoghan speak about the company, I felt it sounded a perfect fit for me, so I'd love to be considered and given the opportunity to work with you! I realise that this is a rather substantial application, but if you could have a quick scroll and a brief look at what I have to offer, I'd be extremely grateful.</p>

          <ColourChanger classes="w-full mt-12 hidden lg:block" />

        </div>

      </div>


      <Nutshell />


      <ContentOneCol>

        <div className="max-w-[900px] mx-auto">

          <CopyWrapper heading="What Am I Good At?" subHeading='An overview of my skills'>
            <p>Firstly, I'm very big on the fundamentals. I have an intricate understanding of <span className='highlight-text'>HTML semantics</span>, an encyclopedic knowledge of <span className='highlight-text'>CSS</span>, and a granular grasp of <span className='highlight-text'>vanilla JavaScript</span>. It's this strong foundational knowledge &#8212; from almost 20 years of creating for the web &#8212; that my front-end development skills are built upon.</p>

            <p>My focus for the last few years has been on <span className='highlight-text'>React</span>, <span className='highlight-text'>JavaScript</span> / <span className='highlight-text'>TypeScript</span>, <span className='highlight-text'>Next.js</span> and more recently <span className='highlight-text'>Astro</span>. My personal website was built using Next, and I have a side-project built in Gatsby which serves millions of users a year.</p>

            <p>To expand further, I'm really a bit of a <span className='highlight-text'>web all-rounder</span>, mainly thanks to my years of experience working alongside marketers on lead-gen and ecom websites.</p>
            
            <p>I'm very much used to wearing many hats, I'm very comfortable managing my own projects, I have a wealth of knowledge around <span className='highlight-text'>SEO</span>, <span className='highlight-text'>CRO</span> and <span className='highlight-text'>A/B Testing</span>, and I've also done considerable research into <span className='highlight-text'>page speed</span> and Google's <span className='highlight-text'>Core Web Vitals</span>.</p>
          </CopyWrapper>

        </div>

        <div className='w-full max-w-screen-lg mx-auto py-8 lg:py-14 lg:px-4'>
          <p className='font-primary text-3xl/snug md:text-4xl/snug lg:text-5xl/snug font-semibold'>But <span className="text-pink">my real speciality lies in UI engineering</span>; implementing designs with meticulous care and precision.</p>
        </div>

        <div className="max-w-[900px] mx-auto">

          <CopyWrapper classes="article--normal-first-p">
            <p>This has stemmed from an early <span className='highlight-text'>passion for design</span> that soon gave way to a love of CSS, and eventually JavaScript. My front-end skills are heavily influenced by this creative background; my knowledge of basic design principles, UX, typography, colour theory, grid systems and more.</p>

            <p>I strongly believe this makes me a better front-end developer, and this skillset also means I can run with text-based briefs alone if needed.</p>

            <p>In terms of soft skills, my organisational qualities and ability to own and manage my projects and time is consistently praised, along with my communication skills; particularly written, which leads us nicely into the next section.</p>
          </CopyWrapper>

        </div>

      </ContentOneCol>


      <ContentTwoCol
        imgSrc="/application/css3-ptl.webp"
        imgAlt="My book, CSS3 Pushing the Limits"
        imgCaption='My book, CSS3 Pushing the Limits'
      >
        <CopyWrapper heading="Technical Writing" subHeading="A recognised industry expert" classes="md:m-auto" width="max-w-[500px]">
          <p>To touch more on my love of CSS, this really manifested during my early years of employment when I was a very earnest blogger, regularly posting tips, tutorials and experimental demos using all the fancy new features that came under the umbrella of “CSS3”.</p>
          
          <p>It was this activity that caught the attention of global publishers Wiley, who approached me with an offer to write an extensive book on advanced CSS3. And after several months of very hard work and very late nights, <a target="_blank" href="https://www.wiley.com/en-gb/CSS3+Pushing+the+Limits-p-9781118652633">CSS3 Pushing the Limits</a> - totalling 384 pages - was published in late 2013.</p>

          <p>The book received favourable reviews, and despite its age would still hold some weight today due to the cutting edge nature of the material, with the likes of Grid, Flexbox, Keyframe Animation and Custom Properties covered in detail.</p>

          <p>I've also been <a href="https://www.smashingmagazine.com/2014/04/understanding-css-timing-functions/">published by Smashing Magazine</a>, writing a chapter on the intricacies of CSS Timing Functions for their book on animation.</p>
        </CopyWrapper>
      </ContentTwoCol>


      <ContentTwoCol
        imgSrc="/application/family.png"
        imgAlt="Me with my wife Hannah and two sons, Leo and Olly"
        imgCaption='Me with my wife Hannah and two sons, Leo (6) and Olly (2)'
        imgOrder={2}
      >
        <CopyWrapper heading="My Journey" subHeading='The past, present and beyond' classes="md:m-auto" width="max-w-[500px]">
          <p>My path towards a career on the web began in the mid 2000s in the same way as many others (via a dodgy copy of Adobe Photoshop!), but I landed my first full-time Web Designer role in 2010, a year before I graduated from University with a <span className='highlight-text'>First Class degree</span>.</p>

          <p>I've held senior positions at small studios in Auckland, New Zealand, and in Cardiff, Wales, but I've spent the last eight years working at Nottingham based marketing agency, Adtrak.</p>
          
          <p>My day-to-day focus has been building websites - a mix of <span className='highlight-text'>lead-generation and ecommerce</span> - and working closely with experienced marketers to ensure they're finely tuned to rank for appropriate search terms, and to convert.</p>

          <p>I've enjoyed my time at Adtrak immensely, and it's been a very comfortable place to work whilst I've settled down, got married, and adjusted to being a dad of two amazing young boys!</p>

          <p className='font-primary text-2xl/snug xl:text-3xl/snug font-semibold text-white xl:-mx-10 my-8 lg:my-10'>But now, I'm ready to take the next step in my career. I feel I have a lot to contribute as an engineer and believe that my skillset can help bridge the gap between design and code.</p>

          <p>The site builds at Adtrak have typically used WordPress, but using a combination of Gutenberg, Timber and Twig for templating, which is more akin to the component/prop based model of more modern front-end frameworks.</p>

          <p>Outside of work, I'm <span className='highlight-text'>very driven and motivated</span> to learn new things, constantly looking to upskill by building new tools and projects. As previously mentioned, my focus for the last few years has been on <span className='highlight-text'>React</span>, with considerable experience using <span className='highlight-text'>Next</span>, <span className='highlight-text'>Astro</span> and <span className='highlight-text'>Gatsby</span>.</p>
        </CopyWrapper>
      </ContentTwoCol>


      <ContentOneCol>

        <div className="max-w-[600px] mx-auto">

          <CopyWrapper heading="Quality Output" subHeading='A showcase of my work'>
            <p>One of my side projects, built in React (Gatsby), has been very successful, pulling in 12 <em>million</em> users in a single year, despite zero financial investment on marketing.</p>
            
            <p>The project, <a target="_blank" href="https://www.messivsronaldo.app/">messivsronaldo.app</a> (excuse the ads!), combined my love of sports, statistics, and development to form a very energising side-hustle that was immeasurably beneficial to my personal development.</p>

            <p>I've also recently launched <a target="_blank" href="https://www.topscorers.club/">Top Scorers Club</a>, another football based app built in Astro. Without going into too much detail about the data side, the site makes creative use of the Google Sheets API, auto-updates and costs nothing to run.</p>
          </CopyWrapper>

        </div>

        <div className='project-list flex flex-wrap justify-center my-8 md:my-16 lg:px-4 2xl:px-2'>

          <ProjectImg
            imgSrc='/application/messi-vs-ronaldo.webp'
            imgAlt='Messi vs Ronaldo app screenshot'
            imgWidth={1600}
            imgHeight={1200}
            caption="One of my side projects built in React, messivsronaldo.app"
            link="https://www.messivsronaldo.app/"
            figureClasses="py-4 md:py-0 md:px-4 2xl:px-5 w-full md:w-1/2"
          />

          <ProjectImg
            imgSrc='/application/top-scorers-club.webp'
            imgAlt='Top Scorers Club app screenshot'
            imgWidth={1600}
            imgHeight={1200}
            caption="A recently launched side project built with Astro, topscorers.club"
            link="https://www.topscorers.club/"
            figureClasses="py-4 md:py-0 md:px-4 2xl:px-5 w-full md:w-1/2"
          />

        </div>

        <div className="max-w-[600px] mx-auto">

          <CopyWrapper classes="article--normal-first-p">
            <p>And here are a handful of my favourite projects from my time at Adtrak, all of which I both designed and coded from the ground up.</p>
          </CopyWrapper>

        </div>

        <div className='project-list flex flex-wrap justify-center mt-8 md:mt-16 lg:px-4 -mx-2 lg:mx-0'>

          <ProjectImg
            imgSrc='/application/doughnotts.webp'
            imgAlt='Doughnotts website screenshot'
            caption="doughnottsofficial.com"
            link="https://www.doughnottsofficial.com/"
            figureClasses="p-2 md:p-3 w-1/2 md:w-1/3 lg:w-1/4"
          />

          <ProjectImg
            imgSrc='/application/ctc.jpg'
            imgAlt='CTC Training website screenshot'
            caption="ctccourses.org"
            link="https://ctccourses.org/"
            figureClasses="p-2 md:p-3 w-1/2 md:w-1/3 lg:w-1/4"
          />

          <ProjectImg
            imgSrc='/application/ducklings.webp'
            imgAlt='Ducklings Nursery website screenshot'
            caption="ducklingsnursery.org.uk"
            link="https://www.ducklingsnursery.org.uk/"
            figureClasses="p-2 md:p-3 w-1/2 md:w-1/3 lg:w-1/4"
          />

          <ProjectImg
            imgSrc='/application/woolfox.jpg'
            imgAlt='Woolfox website screenshot'
            caption="woolfox.uk"
            link="https://www.woolfox.uk/"
            figureClasses="p-2 md:p-3 w-1/2 md:w-1/3 lg:w-1/4"
          />

          <ProjectImg
            imgSrc='/application/london-penthouse.jpg'
            imgAlt='London Penthouse website screenshot'
            caption="londonpenthouse.com"
            link="https://www.londonpenthouse.com/projects/queens-wood-apartments/"
            figureClasses="p-2 md:p-3 w-1/2 md:w-1/3 lg:w-1/4"
          />

          <ProjectImg
            imgSrc='/application/moot.jpg'
            imgAlt='Moot 4x4 website screenshot'
            caption="moot4x4.com (wip)"
            figureClasses="p-2 md:p-3 w-1/2 md:w-1/3 lg:w-1/4"
          />

          <ProjectImg
            imgSrc='/application/als.jpg'
            imgAlt='Artificial Lawn Supply website screenshot'
            caption="artificiallawnsupply.co.uk"
            link="https://www.artificiallawnsupply.co.uk/"
            figureClasses="p-2 md:p-3 w-1/2 md:w-1/3 lg:w-1/4"
          />

          <ProjectImg
            imgSrc='/application/doormatic.jpg'
            imgAlt='Doormatic Garage Doors website screenshot'
            caption="doormaticgaragedoors.co.uk"
            link="https://www.doormaticgaragedoors.co.uk/"
            figureClasses="p-2 md:p-3 w-1/2 md:w-1/3 lg:w-1/4"
          />

        </div>

      </ContentOneCol>


      <ContentOneCol>

        <div className="max-w-[600px] mx-auto">

          <CopyWrapper heading="Natural Teacher" subHeading="Considerable training experience">
            <p>As well as client work, I've also always been heavily involved in training and upskilling the rest of the 20+ strong web team at Adtrak.</p>

            <p>This passion for sharing knowledge has been present from the outset, holding my first training session on CSS3 as a fresh-faced junior in 2011, back when implementing rounded corners without images was still a novelty!</p>

            <p>Some of my <a target="_blank" href="https://github.com/SteGreig/training-materials">training highlights</a> include a 4-part, 6 hour course on <span className="highlight-text">JavaScript fundamentals</span>, a custom-built <span className="highlight-text">CSS animation playground</span> (with accompanying training session), training sessions and accompanying cheatsheets on <span className="highlight-text">Flexbox</span>, <span className="highlight-text">advanced CSS selectors</span> and <span className="highlight-text">Core Web Vitals</span>, and multiple sessions on <span className="highlight-text">page speed</span>.</p>
          </CopyWrapper>

        </div>

        <div className='project-list flex flex-wrap justify-center mt-8 xl:mt-16 lg:px-4 -mx-2 lg:mx-0'>

          <ProjectImg
            imgSrc='/application/cwv.jpg'
            imgAlt='Core Web Vitals cheatsheet preview'
            caption="My practical Core Web Vitals Cheatsheet"
            link="/demos/core-web-vitals-cheatsheet.pdf"
            figureClasses="p-2 md:p-3 lg:p-4 w-1/2 md:w-1/3"
          />

          <ProjectImg
            imgSrc='/application/js-training.jpg'
            imgAlt='Breakdown of my JavaScript fundamentals course'
            caption="A breakdown of the sessions for my JavaScript fundamentals series"
            link="https://github.com/SteGreig/js-training"
            figureClasses="p-2 md:p-3 lg:p-4 w-1/2 md:w-1/3"
          />

          <ProjectImg
            imgSrc='/application/css-animation-playground.jpg'
            imgAlt='CSS Animation Playground screenshot'
            caption="My custom built CSS Keyframe Animation playground"
            link="https://css-animation-playground.vercel.app/"
            figureClasses="p-2 md:p-3 lg:p-4 w-1/2 md:w-1/3"
          />

          <ProjectImg
            imgSrc='/application/ultimate-css-selectors-cheatsheet.jpg'
            imgAlt='CSS Selectors cheatsheet preview'
            caption="My very comprehensive CSS Selectors Cheatsheet"
            link="/demos/the-ultimate-css-selectors-cheatsheet.pdf"
            figureClasses="p-2 md:p-3 lg:p-4 w-1/2 md:w-1/3"
          />

          <ProjectImg
            imgSrc='/application/flexbox-cheatsheet.jpg'
            imgAlt='Flexbox cheatsheet preview'
            caption="My simple Flexbox Cheatsheet"
            link="/demos/flexbox-cheatsheet.pdf"
            figureClasses="p-2 md:p-3 lg:p-4 w-1/2 md:w-1/3"
          />

          <ProjectImg
            imgSrc='/application/css3-training-2011.jpg'
            imgAlt='Preview of CSS3 training slides'
            caption="My first ever training session on CSS3 in 2011"
            link="https://codepen.io/stephengreig/pen/GRLgejd"
            figureClasses="p-2 md:p-3 lg:p-4 w-1/2 md:w-1/3"
          />


        </div>

      </ContentOneCol>


      <ContentOneCol>

        <div className="max-w-[600px] mx-auto">

          <CopyWrapper heading="Kind Words" subHeading="What it's like to work with me">
            <p>I've always enjoyed good relationships with my colleagues and managers; Dan, my manager for several years at Adtrak, was kind enough to provide a very generous reference.</p>

            {kindWords.filter(i => i.name === 'Dan Farrow').map(item => (
              <figure key={item.name} className='flex flex-col w-full p-6 xl:p-8 rounded relative bg-gradient-to-br from-purple to-pink after:absolute after:top-[2px] after:left-[2px] after:right-[2px] after:bottom-[2px] after:bg-navy after:rounded'>
                <blockquote className='relative z-10 border-none testimonial text-gray-300'>
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className='relative z-10 mt-auto'>
                  <span className='block mt-5 font-primary'>{item.name}</span>
                  {item.position && (
                    <span className='block opacity-60 text-sm mt-1'>{item.position}</span>
                  )}
                  {item.company && (
                    <span className='block opacity-60 text-sm'>{item.company}</span>
                  )}
                </figcaption>
              </figure>
            ))}

            <p>And I'm sure my current managers, <a href="mailto:kelly.jordan@adtrak.co.uk">Kelly Jordan</a> and <a href="mailto:dave.prosser@adtrak.co.uk">Dave Prosser</a>, would also be more than happy to provide a reference for me if you'd like to get in touch.</p>

            <p>Finally, although much of my extra-curricular activity is spent on side-projects and my own personal development, I've also established a number of strong freelance relationships over the years, completing work for a number of major brands, such as PepsiCo, SunLife, Virgin Media, Expedia and Allianz.</p>
          </CopyWrapper>

        </div>

        {kindWords && (
          <ul className='w-full max-w-screen-2xl mx-auto flex flex-wrap justify-center mt-8 xl:mt-14 lg:px-4'>
            {kindWords.filter(i => i.type === 'freelance').map(item => (
              <li key={item.name} className='flex w-full sm:w-1/2 lg:w-1/3 py-2 sm:p-4'>
                <figure className='flex flex-col w-full p-6 xl:p-8 rounded relative bg-gradient-to-br from-purple to-pink after:absolute after:top-[2px] after:left-[2px] after:right-[2px] after:bottom-[2px] after:bg-navy after:rounded'>
                  <blockquote className='relative z-10 text-gray-300'>
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <figcaption className='relative z-10 mt-auto'>
                    <span className='block mt-5 font-primary'>{item.name}</span>
                    {item.position && (
                      <span className='block opacity-60 text-sm mt-1'>{item.position}</span>
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

      </ContentOneCol>


      <section className='pt-12 pb-28 md:pb-12 xl:py-20 xl:pb-32 border-t border-white border-opacity-10 px-4 lg:px-0'>

        <div className="max-w-[600px] mx-auto">

          <div className='mb-6'>
            <p className='font-primary text-6xl lg:text-8xl/tight font-semibold gradient-text whitespace-normal'>Thank You!</p>
          </div>

          <CopyWrapper>
            <p>If you've made it this far, thanks so much for taking the time to read through my application - I genuinely appreciate it!</p>

            <p>I hope this has given you an insight into my work, my experience and my ambitions. Intercom seems like a great place to work, and I'd love to join your cause - if you think I'd be a good fit for your team, you can reach out below!</p>

            <div className='flex flex-wrap items-center mt-10 gap-6'>
              <div className='relative inline-flex'>
                <EmailBtn showFull={true} btnText='Copy Email Address' />
              </div>
              <p className="w-full sm:w-auto">Or call me on: <a className='font-semibold' href="tel:+447539614552">+44 (0) 753 9614 552</a></p>
            </div>
          </CopyWrapper>

        </div>

      </section>

    </TransitionWrapper>
  )
}

export default JobApp
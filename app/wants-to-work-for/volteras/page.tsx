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
  title: "Ste Greig - Application for Web Engineer at Volteras",
  robots: {
    index: false,
    follow: false,
  },
};

const JobApp = () => {
  return (
    <TransitionWrapper>

      <div
        className='hey-company mx-auto text-white flex items-center justify-center fixed bottom-0 md:bottom-auto md:top-1 left-0 md:left-1/2 w-full md:w-60 md:-ml-[120px] bg-navy md:bg-transparent p-4 z-30 before:absolute before:top-0 before:w-full before:bg-gradient-to-r before:from-purple before:to-pink before:h-px md:before:bg-none'
      >
        <p className='font-primary font-semibold'>Hey,</p>
        <svg className='ml-2' width="78" height="22" viewBox="0 0 80 22" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Go to homepage</title><path d="M23.3801 11.1523C23.3801 14.5606 20.634 17.2568 17.1769 17.2568C13.7199 17.2568 10.9738 14.5595 10.9738 11.1523C10.9738 7.71969 13.7199 5.04785 17.1769 5.04785C20.634 5.04785 23.3801 7.71969 23.3801 11.1523ZM20.3889 11.1523C20.3889 9.33786 19.1633 7.79397 17.1769 7.79397C15.1905 7.79397 13.965 9.33892 13.965 11.1523C13.965 12.9657 15.1905 14.5107 17.1769 14.5107C19.1633 14.5107 20.3889 12.9668 20.3889 11.1523Z" fill="white"></path><path d="M24.3267 0.113281H27.2691V16.9635H24.3267V0.113281Z" fill="white"></path><path d="M48.1321 11.1035C48.1321 11.3242 48.1321 11.7656 48.1077 12.2071H39.429C39.6497 13.2363 40.8508 14.5606 42.6897 14.5606C44.7249 14.5606 45.8772 13.3838 45.8772 13.3838L47.3479 15.5898C47.3479 15.5898 45.509 17.2568 42.6897 17.2568C39.1595 17.2568 36.4377 14.5595 36.4377 11.1523C36.4377 7.7441 38.9143 5.04785 42.2727 5.04785C45.4592 5.04785 48.1321 7.52339 48.1321 11.1035ZM45.1897 10.0732C45.1408 9.06834 44.2092 7.71969 42.2716 7.71969C40.384 7.71969 39.5255 9.04394 39.4279 10.0732H45.1897Z" fill="white"></path><path d="M55.8751 8.05217C55.7351 7.99381 55.3361 7.78265 54.4777 7.78265C52.6876 7.78265 51.8791 9.35201 51.8791 9.35201V16.9516H48.9366V5.33152H51.7316C51.7316 5.33152 51.7252 5.62226 51.7231 5.78673C51.721 5.9268 51.7199 5.97879 51.7199 5.97879C51.7348 5.965 51.7443 5.95651 51.7496 5.95226C51.8918 5.8313 52.902 5.0376 54.8947 5.0376C55.9484 5.0376 56.516 5.23178 56.9055 5.4058C57.2949 5.57982 57.4848 5.64879 57.7904 5.83766L56.1351 8.21346C56.1341 8.2124 56.0152 8.11053 55.8751 8.05217Z" fill="white"></path><path d="M69.1249 16.9513L68.9774 5.33014H66.1825C66.1825 5.33014 66.1825 5.52644 66.1825 5.71956V5.97529C66.1825 5.97529 66.1453 5.95194 66.1411 5.94982C65.1882 5.3694 64.0592 5.03516 62.84 5.03516C59.383 5.03516 56.6368 7.707 56.6368 11.1396C56.6368 14.5479 59.383 17.2441 62.84 17.2441C64.0528 17.2441 65.1776 16.9109 66.1283 16.3316C66.1453 16.3199 66.1835 16.2934 66.1835 16.2934C66.1835 16.2934 66.1835 16.2955 66.1835 16.4695C66.1835 16.704 66.1835 16.9502 66.1835 16.9502L69.1249 16.9513ZM62.8411 14.5001C60.8558 14.5001 59.6291 12.9552 59.6291 11.1418C59.6291 9.32835 60.8547 7.78339 62.8411 7.78339C64.8274 7.78339 66.053 9.32835 66.053 11.1418C66.053 12.9552 64.8264 14.5001 62.8411 14.5001Z" fill="white"></path><path d="M71.3202 13.0156C71.3202 13.0156 72.8652 14.6826 74.8261 14.6826C76.0272 14.6826 77.0321 14.3388 77.0321 13.6279C77.0321 12.8681 76.4931 12.7206 74.7274 12.3535C72.4227 11.8633 70.413 10.8828 70.413 8.67574C70.413 6.86126 72.2275 5.04785 75.4139 5.04785C78.037 5.04785 79.7782 6.46972 79.7782 6.46972L78.3075 8.62693C78.3075 8.62693 76.9833 7.62207 75.415 7.62207C74.3114 7.62207 73.3066 8.01468 73.3066 8.72561C73.3066 9.43654 74.0907 9.60844 76.0527 10.0255C78.3574 10.5157 80 11.2754 80 13.6788C80 15.6652 77.8916 17.2579 74.9248 17.2579C71.5165 17.2579 69.6787 15.1495 69.6787 15.1495L71.3202 13.0156Z" fill="white"></path><path d="M30.097 8.76074V13.1356C30.097 15.6122 31.8128 17.2548 34.0687 17.2548C35.7601 17.2548 36.8636 16.4951 36.8636 16.4951L36.8626 16.4961C37.183 16.2903 37.3602 16.1322 37.3602 16.1322L36.002 13.9272C36.002 13.9272 35.9596 13.9835 35.7845 14.0938V14.0927C35.7845 14.0927 35.2211 14.5098 34.559 14.5098C33.7737 14.5098 33.0384 14.0927 33.0384 12.6709V9.64888L30.097 8.76074Z" fill="white"></path><path d="M27.8157 7.98834V5.34197H30.096V1.88492L33.0384 0.0810547V5.34197H36.5442V7.9894L27.8157 7.98834Z" fill="white"></path><path d="M3.26074 5.34521L6.20104 11.6683L9.14133 5.34521H12.3023L6.15117 17.5499L0 5.34521H3.26074Z" fill="white"></path></svg>
        <p className='text-xl ml-3'>👋</p>
      </div>

      <div className='w-full max-w-[900px] mx-auto px-4 lg:px-0 pb-12 xl:pb-20'>

        <Hero image={true} tagline="wants to be a front end engineer at Volteras!" />

        <h1 className='sr-only'>Volteras Application</h1>

        <hr className='w-full lg:w-10/12 border-0 h-px bg-white opacity-10 mt-12 mb-12' />

        <div className='article max-w-screen-sm'>

          <p className='text-xl font-bold'>Hi! My name's Stephen (most people call me Ste) and I'm a creative front-end developer based in Nottingham, UK.</p>

          <p>After reading through the description for this role, I felt it sounded a perfect fit for me, so I'd love to be considered and given the opportunity to work with you! The aesthetics of Volteras are beautiful, and <em>"accelerating the transition to a greener and smarter future"</em> is absolutely a cause I can get behind. I realise that this is a rather substantial application, but if you could have a quick scroll and a brief look at what I have to offer, I'd be extremely grateful.</p>

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

            <p>I hope this has given you an insight into my work, my experience and my ambitions. Volteras seems like it's in a great position already, and I'd love to join your cause - if you think I'd be a good fit for your team, you can reach out below!</p>

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
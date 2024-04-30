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
  title: "Ste Greig - Application for Web Engineer at Modernbanc",
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
        {/* <Image className='w-32 brightness-100 invert ml-3' src='/application/intercom-logo.svg' alt="Intercom Logo" width={144} height={29} /> */}
        <svg className='brightness-100 invert ml-3 mr-1' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><rect x="14.8203" y="20.1162" width="10.9613" height="4.38453" rx="2.19226" fill="#0E1438"></rect><rect x="4.58594" y="20.1162" width="8.76905" height="4.38453" rx="2.19226" fill="#0E1438"></rect><rect x="4.21875" y="12.8096" width="16.0766" height="4.38453" rx="2.19226" fill="#0E1438"></rect><rect x="4.21875" y="5.50098" width="8.0383" height="4.38453" rx="2.19226" fill="#0E1438"></rect></svg>
        <svg width="104" height="14" viewBox="0 0 104 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.896484 13.5V0.5625H3.41895L7.43555 10.749H7.4707L11.4521 0.5625H13.9834V13.5H12.0146V3.91992H11.9795L8.27051 13.5H6.60059L2.8916 3.91992H2.85645V13.5H0.896484ZM20.4209 13.6406C19.5361 13.6406 18.7568 13.4414 18.083 13.043C17.4091 12.6387 16.8818 12.0791 16.5009 11.3643C16.1259 10.6436 15.9384 9.81445 15.9384 8.87695C15.9384 7.92773 16.1259 7.09277 16.5009 6.37207C16.8818 5.65137 17.4091 5.08887 18.083 4.68457C18.7568 4.28027 19.5361 4.07812 20.4209 4.07812C21.3115 4.07812 22.0908 4.28027 22.7587 4.68457C23.4326 5.08887 23.957 5.65137 24.332 6.37207C24.7129 7.09277 24.9033 7.92773 24.9033 8.87695C24.9033 9.81445 24.7158 10.6436 24.3408 11.3643C23.9658 12.0791 23.4414 12.6387 22.7675 13.043C22.0937 13.4414 21.3115 13.6406 20.4209 13.6406ZM20.4209 12.041C20.9248 12.041 21.3701 11.9092 21.7568 11.6455C22.1435 11.3818 22.4482 11.0127 22.6709 10.5381C22.8935 10.0576 23.0048 9.50391 23.0048 8.87695C23.0048 8.23242 22.8935 7.67285 22.6709 7.19824C22.4482 6.71777 22.1435 6.34277 21.7568 6.07324C21.3759 5.79785 20.9306 5.66016 20.4209 5.66016C19.9111 5.66016 19.4629 5.79492 19.0761 6.06445C18.6894 6.33398 18.3847 6.70898 18.1621 7.18945C17.9453 7.66992 17.8369 8.23242 17.8369 8.87695C17.8427 9.50391 17.9541 10.0576 18.1709 10.5381C18.3935 11.0127 18.6982 11.3818 19.0849 11.6455C19.4716 11.9092 19.917 12.041 20.4209 12.041ZM30.4794 13.6406C29.706 13.6406 29.0234 13.4473 28.4316 13.0605C27.8456 12.668 27.3886 12.1143 27.0605 11.3994C26.7323 10.6787 26.5683 9.83203 26.5683 8.85938C26.5683 7.86914 26.7323 7.0166 27.0605 6.30176C27.3945 5.58691 27.8544 5.03906 28.4404 4.6582C29.0321 4.27148 29.7089 4.07812 30.4706 4.07812C31.0917 4.07812 31.6513 4.20996 32.1493 4.47363C32.6474 4.73145 33.0341 5.11816 33.3095 5.63379H33.3446V0.5625H35.2343V13.5H33.3534V12.0762H33.3183C33.0136 12.5977 32.6181 12.9902 32.1318 13.2539C31.6454 13.5117 31.0946 13.6406 30.4794 13.6406ZM30.9277 12.0498C31.4433 12.0498 31.8886 11.9209 32.2636 11.6631C32.6445 11.3994 32.9374 11.0273 33.1425 10.5469C33.3476 10.0664 33.4501 9.50391 33.4501 8.85938C33.4501 8.20898 33.3476 7.64648 33.1425 7.17188C32.9374 6.69727 32.6445 6.33105 32.2636 6.07324C31.8886 5.80957 31.4433 5.67773 30.9277 5.67773C30.4413 5.67773 30.0107 5.79785 29.6357 6.03809C29.2665 6.27832 28.9765 6.63574 28.7655 7.11035C28.5605 7.5791 28.4579 8.16211 28.4579 8.85938C28.4579 9.55078 28.5605 10.1338 28.7655 10.6084C28.9765 11.083 29.2665 11.4434 29.6357 11.6895C30.0107 11.9297 30.4413 12.0498 30.9277 12.0498ZM41.5575 13.6406C40.6669 13.6406 39.8934 13.4414 39.2372 13.043C38.5868 12.6387 38.08 12.0791 37.7167 11.3643C37.3593 10.6494 37.1805 9.82031 37.1805 8.87695C37.1805 7.93359 37.3563 7.10156 37.7079 6.38086C38.0653 5.66016 38.5692 5.09766 39.2196 4.69336C39.87 4.2832 40.6346 4.07812 41.5136 4.07812C42.3866 4.07812 43.1366 4.28027 43.7636 4.68457C44.3964 5.08887 44.8798 5.65137 45.2137 6.37207C45.5477 7.09277 45.7147 7.9248 45.7147 8.86816V9.35156H38.0331V7.97168H43.8778C43.8661 7.50293 43.7548 7.09277 43.5438 6.74121C43.3329 6.38965 43.0487 6.11426 42.6913 5.91504C42.3397 5.71582 41.9413 5.61621 41.496 5.61621C40.9979 5.61621 40.5673 5.73633 40.204 5.97656C39.8407 6.2168 39.5624 6.5332 39.369 6.92578C39.1757 7.3125 39.079 7.72559 39.079 8.16504V9.33398C39.0731 9.83789 39.1698 10.3008 39.369 10.7227C39.5682 11.1387 39.8524 11.4727 40.2216 11.7246C40.5966 11.9707 41.0448 12.0938 41.5663 12.0938C41.9179 12.0938 42.246 12.0352 42.5507 11.918C42.8554 11.7949 43.1161 11.625 43.3329 11.4082C43.5497 11.1914 43.702 10.9395 43.7899 10.6523H45.6005C45.4833 11.25 45.2372 11.7744 44.8622 12.2256C44.493 12.6709 44.0243 13.0195 43.4559 13.2715C42.8876 13.5176 42.2548 13.6406 41.5575 13.6406ZM47.6698 13.5V4.21875H49.4715V5.74805H49.5243C49.6942 5.23242 49.9637 4.8252 50.3329 4.52637C50.7079 4.22754 51.1795 4.07812 51.7479 4.07812C51.8885 4.07812 52.0174 4.08691 52.1346 4.10449C52.2577 4.11621 52.3573 4.13086 52.4334 4.14844V5.94141C52.3514 5.91211 52.2166 5.88574 52.0291 5.8623C51.8475 5.83301 51.6512 5.81836 51.4403 5.81836C51.1004 5.81836 50.787 5.89746 50.4998 6.05566C50.2127 6.20801 49.9813 6.44531 49.8055 6.76758C49.6356 7.08984 49.5506 7.5 49.5506 7.99805V13.5H47.6698ZM56.0057 8.13867V13.5H54.116V4.21875H55.9529V5.7832H55.9881C56.1932 5.29688 56.5271 4.89258 56.99 4.57031C57.4529 4.24219 58.0477 4.07812 58.7742 4.07812C59.4188 4.07812 60.0018 4.21582 60.5232 4.49121C61.0506 4.7666 61.4695 5.17676 61.7801 5.72168C62.0906 6.26074 62.2459 6.93164 62.2459 7.73438V13.5H60.365V7.96289C60.365 7.22461 60.1717 6.66504 59.785 6.28418C59.4041 5.90332 58.8885 5.71289 58.2381 5.71289C57.8221 5.71289 57.4441 5.79785 57.1043 5.96777C56.7703 6.1377 56.5037 6.40137 56.3045 6.75879C56.1053 7.11621 56.0057 7.57617 56.0057 8.13867ZM69.3425 13.6406C68.7273 13.6406 68.1765 13.5117 67.6902 13.2539C67.2039 12.9902 66.8084 12.5977 66.5037 12.0762H66.4685V13.5H64.5877V0.5625H66.4773V5.63379H66.5125C66.7879 5.11816 67.1746 4.73145 67.6726 4.47363C68.1707 4.20996 68.7302 4.07812 69.3513 4.07812C70.113 4.07812 70.7869 4.27148 71.3728 4.6582C71.9646 5.03906 72.4246 5.58691 72.7527 6.30176C73.0867 7.0166 73.2537 7.86914 73.2537 8.85938C73.2537 9.83203 73.0896 10.6787 72.7615 11.3994C72.4334 12.1143 71.9763 12.668 71.3904 13.0605C70.8045 13.4473 70.1218 13.6406 69.3425 13.6406ZM68.8943 12.0498C69.3865 12.0498 69.8172 11.9297 70.1863 11.6895C70.5554 11.4434 70.8425 11.083 71.0476 10.6084C71.2586 10.1338 71.364 9.55078 71.364 8.85938C71.364 8.16211 71.2586 7.5791 71.0476 7.11035C70.8425 6.63574 70.5554 6.27832 70.1863 6.03809C69.8172 5.79785 69.3865 5.67773 68.8943 5.67773C68.3787 5.67773 67.9304 5.80957 67.5496 6.07324C67.1746 6.33105 66.8845 6.69727 66.6795 7.17188C66.4744 7.64648 66.3718 8.20898 66.3718 8.85938C66.3718 9.50391 66.4744 10.0664 66.6795 10.5469C66.8845 11.0273 67.1746 11.3994 67.5496 11.6631C67.9304 11.9209 68.3787 12.0498 68.8943 12.0498ZM78.1355 13.6318C77.5202 13.6318 76.9695 13.5293 76.4831 13.3242C76.0027 13.1133 75.6218 12.8027 75.3405 12.3926C75.0593 11.9766 74.9187 11.4609 74.9187 10.8457C74.9187 10.3184 75.0183 9.88477 75.2175 9.54492C75.4226 9.20508 75.698 8.93555 76.0437 8.73633C76.3894 8.53711 76.782 8.3877 77.2214 8.28809C77.6609 8.18262 78.115 8.10352 78.5837 8.05078C79.1696 7.97461 79.6296 7.91602 79.9636 7.875C80.3034 7.82812 80.5437 7.75781 80.6843 7.66406C80.8308 7.56445 80.904 7.40332 80.904 7.18066V7.13672C80.904 6.68555 80.74 6.32227 80.4118 6.04688C80.0896 5.76562 79.6355 5.625 79.0495 5.625C78.4753 5.625 78.0066 5.7627 77.6433 6.03809C77.2859 6.31348 77.0866 6.66211 77.0456 7.08398H75.1472C75.1823 6.50977 75.3611 5.99707 75.6833 5.5459C76.0114 5.09473 76.4626 4.7373 77.0368 4.47363C77.6111 4.20996 78.2878 4.07812 79.0671 4.07812C79.8288 4.07812 80.488 4.20703 81.0446 4.46484C81.6013 4.72266 82.029 5.08008 82.3279 5.53711C82.6325 5.99414 82.7849 6.52734 82.7849 7.13672V13.5H80.948V12.1816H80.9128C80.778 12.4336 80.5964 12.6709 80.3679 12.8936C80.1394 13.1162 79.8435 13.2949 79.4802 13.4297C79.1169 13.5645 78.6687 13.6318 78.1355 13.6318ZM78.5398 12.1289C79.073 12.1289 79.5154 12.0352 79.8669 11.8477C80.2243 11.6543 80.488 11.3994 80.6579 11.083C80.8279 10.7607 80.9128 10.4092 80.9128 10.0283V8.95605C80.7898 9.0498 80.5144 9.1377 80.0866 9.21973C79.6589 9.2959 79.1989 9.36914 78.7068 9.43945C78.3728 9.48633 78.0593 9.56543 77.7663 9.67676C77.4792 9.78223 77.2448 9.93164 77.0632 10.125C76.8874 10.3125 76.7995 10.5645 76.7995 10.8809C76.8054 11.2734 76.9636 11.5811 77.2741 11.8037C77.5847 12.0205 78.0066 12.1289 78.5398 12.1289ZM87.0163 8.13867V13.5H85.1266V4.21875H86.9636V5.7832H86.9987C87.2038 5.29688 87.5378 4.89258 88.0007 4.57031C88.4636 4.24219 89.0583 4.07812 89.7848 4.07812C90.4294 4.07812 91.0124 4.21582 91.5339 4.49121C92.0612 4.7666 92.4802 5.17676 92.7907 5.72168C93.1012 6.26074 93.2565 6.93164 93.2565 7.73438V13.5H91.3757V7.96289C91.3757 7.22461 91.1823 6.66504 90.7956 6.28418C90.4147 5.90332 89.8991 5.71289 89.2487 5.71289C88.8327 5.71289 88.4548 5.79785 88.1149 5.96777C87.7809 6.1377 87.5143 6.40137 87.3151 6.75879C87.1159 7.11621 87.0163 7.57617 87.0163 8.13867ZM99.5446 13.6406C98.6891 13.6406 97.9332 13.4385 97.277 13.0342C96.6266 12.6299 96.1198 12.0674 95.7565 11.3467C95.3932 10.626 95.2116 9.80273 95.2116 8.87695C95.2116 7.93359 95.3903 7.10449 95.7477 6.38965C96.111 5.66895 96.6149 5.10352 97.2594 4.69336C97.9098 4.2832 98.6627 4.07812 99.5182 4.07812C100.35 4.07812 101.056 4.25098 101.636 4.59668C102.216 4.93652 102.662 5.36719 102.972 5.88867C103.283 6.4043 103.45 6.92871 103.473 7.46191H101.645C101.592 7.15137 101.478 6.86133 101.302 6.5918C101.132 6.31641 100.898 6.09375 100.599 5.92383C100.306 5.75391 99.9489 5.66895 99.527 5.66895C99.0465 5.66895 98.6246 5.80371 98.2614 6.07324C97.8981 6.34277 97.6139 6.71777 97.4088 7.19824C97.2096 7.67285 97.11 8.23242 97.11 8.87695C97.11 9.50391 97.2125 10.0547 97.4176 10.5293C97.6286 11.0039 97.9157 11.373 98.2789 11.6367C98.6422 11.9004 99.0612 12.0322 99.5358 12.0322C99.9108 12.0322 100.251 11.9561 100.555 11.8037C100.86 11.6514 101.103 11.4404 101.285 11.1709C101.472 10.8955 101.572 10.5879 101.584 10.248H103.473C103.438 10.834 103.265 11.3848 102.955 11.9004C102.644 12.416 102.202 12.835 101.628 13.1572C101.059 13.4795 100.365 13.6406 99.5446 13.6406Z" fill="#fff"></path></svg>
        <p className='text-xl ml-3'>👋</p>
      </div>

      <div className='w-full max-w-[900px] mx-auto px-4 lg:px-0 pb-12 xl:pb-20'>

        <Hero image={true} tagline="wants to be a Design Engineer at Modernbanc!" />

        <h1 className='sr-only'>Modernbanc Application</h1>

        <hr className='w-full lg:w-10/12 border-0 h-px bg-white opacity-10 mt-12 mb-12' />

        <div className='article max-w-screen-sm'>

          <p className='text-xl font-bold'>Hi! My name's Stephen (most people call me Ste) and I'm a creative front-end developer based in Nottingham, UK.</p>

          <p>After reading through the description for this role, I felt it sounded a perfect fit for me, so I'd love to be considered and given the opportunity to work with you! The aesthetics of Modernbanc are beautiful and the potential of the product feels huge. I realise that this is a rather substantial application, but if you could have a quick scroll and a brief look at what I have to offer, I'd be extremely grateful.</p>

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

            <p>I hope this has given you an insight into my work, my experience and my ambitions. Modernbanc seems like it's in a great position already, and I'd be excited to join your cause - if you think I'd be a good fit for your team, you can reach out below!</p>

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
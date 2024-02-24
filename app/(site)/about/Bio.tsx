"use client";
import React from 'react'
import { useState } from 'react';

const Bio = () => {

  const [moreActive, setMoreActive] = useState(false);

  function readMore(e:any) {
    e.preventDefault();
    setMoreActive((moreActive) => !moreActive);
  }

  return (
    <div className='mt-10 md:mt-12 lg:mt-14 max-w-[720px] flex flex-col gap-5 font-light'>

      <p className='font-semibold'>I was destined for a career on the web ever since a long-lost pal gave me a totally legitimate copy of Adobe Photoshop 7.0 as we waited for the bus to school one morning in 2004. From there I followed what seems to be a well-trodden path, starting out making forum signatures and wallpapers, and following a vast array of online tutorials.</p>

      <p>A year later I was on the official web team for my football club (Hereford United, now defunct 😔), which at 15 years old I thought was the coolest thing in the world. So now I was designing 2005 style website graphics (you know, like rounded corners!) and then a natural progression to Dreamweaver&apos;s WYSIWYG website editor soon followed! <a onClick={readMore} className={`gradient-text border-b border-transparent hover:border-pink ${moreActive && 'hidden'}`} href="#">Read More</a></p>

      {moreActive && (
        <>

          <h3 className='mt-6 font-primary text-2xl'>👨‍💻 From Design to Dev</h3>

          <p>My inevitable foray into the code editor was the next step, in which I wrote my first websites using <em>frames</em>... before confidently declaring that table layouts were actually the future. Thankfully, I soon discovered CSS via an astute purchase: <cite>HTML and CSS for Dummies</cite> (funnily enough published by Wiley who would later go on to publish my own book on advanced CSS!).</p>

          <p>I&apos;ve always been a &quot;hybrid&quot; in the web industry, performing both design and development duties in all of my professional roles to date. However, despite initially seeing myself as more of a designer, I started to lean increasingly more into development, to the extent that this has now been my primary focus for the last decade or so. As the web industry has matured, the hybrid role has been left behind as people increasingly look to specialise, but I think a design background can be a huge advantage in an engineering role, which will undoubtedly be my next step.</p>

          <p>My current focus is NextJS, Astro, React, JavaScript and TypeScript to name a few, but having been building websites since the mid 2000s, I have a strong knowledge of the core web fundamentals that these new tools ultimately compile down to. Semantic HTML, vanilla JavaScript, an encyclopedic knowledge of CSS, servers, DNS, SEO, page speed... this foundational knowledge is important in my opinion and can sometimes be too easily overlooked today as we lose sight of what actually gets shipped to the browser.</p>

          <h3 className='mt-6 font-primary text-2xl'>👨‍👩‍👦‍👦 Personal Life</h3>

          <p>Away from the screen I have an amazing little family; two sons Leo and Olly, and wife Hannah. Being a Dad has its challenges but it&apos;s also the most rewarding thing I can imagine. Those boys are everything to me and I&apos;d do absolutely anything to make sure they&apos;re happy!</p>

          <h4 className='font-primary mt-2'>⚽ Sports</h4>

          <p>I&apos;m a big sports fan; football (⚽), tennis, snooker, rugby to name a few. As mentioned I was a big Hereford United fan until they sadly went under in 2014, and I now have a complicated relationship with the phoenix club Hereford FC whose results I loosely follow. The most passionate you&apos;ll see me these days is when supporting the Wales national team, the country of my birth and where much of my family reside.</p>

          <h4 className='font-primary mt-2'>🎧 Music</h4>

          <p>I'm also a big music lover with an extremely varied taste. I like real fast-paced punk with a rawness and an edge to it, and I like soft acoustic with a thoughtful slowness (and much in-between). My go-to genres are probably punk, indie rock and ska/reggae, but the list could go on and on. A couple of my favourites in recent years are Soft Play (modern punk) and Sticky Fingers (indie with a light ska influence).</p>

          <p>My music listening habits have been tracked for almost 20 years over on <a className='text-pink hover:underline font-medium' href="https://www.last.fm/user/welshbull" target="_blank">Last.fm</a>, which reports an average of 34 tracks per day in that time, and where I'm stuck with a username that was very evidently created by a 14 year old.</p>

          <h4 className='font-primary mt-2'>⚡ Motivators</h4>

          <p>In terms of what makes me tick, I love challenges and problem solving. If I can turn something into a challenge it unlocks a real drive and determinedness within, no matter how trivial. Whether it be completing X amount of tasks in a week, watching X amount of films in a month or running X amount of miles in a year.</p>
          
          <p>Most who know me know I'm very content with my own company, but I'm a big fan of a social gathering too, particularly when it involves a pub crawl! I'm also a fairly opinionated liberal who sometimes gets a bit too disheartened with the current effectiveness of divisive politics.</p>

          <p>And that's enough waffle for now... I tend to get a bit carried away when I start writing! Feel free to drop me an <a className='text-pink hover:underline font-medium' href="mailto:hi@ste.digital">email</a> or a follow over on the <a className='text-pink hover:underline font-medium' href="https://twitter.com/Ste_Greig" target="_blank">bird app</a> (it's still Twitter to me damn it!).</p>
        </>
      )}
    </div>
  )
}

export default Bio
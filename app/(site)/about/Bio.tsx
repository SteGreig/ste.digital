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
    <div className='mt-10 md:mt-12 lg:mt-14 max-w-[720px] flex flex-col gap-4 font-light'>
      <p className='font-semibold'>I was destined for a career on the web ever since a long-lost pal gave me a totally legitimate copy of Adobe Photoshop 7.0 as we waited for the bus to school one morning in 2004. From there I followed what seems to be a well-trodden path, starting out making forum signatures and wallpapers, and following a vast array of online tutorials.</p>

      <p>A year later I was on the official web team for my football club (Hereford United, now defunct 😔), which at 15 years old I thought was the coolest thing in the world. So now I was designing 2005 style website graphics (you know, like rounded corners!) and then a natural progression to Dreamweaver's WYSIWYG editor soon followed! <a onClick={readMore} className={`gradient-text border-b border-transparent hover:border-pink ${moreActive && 'hidden'}`} href="#">Read More</a></p>

      {moreActive && (
        <>
          <p>My inevitable foray into the code editor was the next step, in which I wrote my first websites using <em>frames</em>... before confidently declaring that table layouts were actually the future. Thankfully, I soon discovered CSS via an astute purchase: <cite>HTML and CSS for Dummies</cite> (funnily enough published by Wiley who would later go on to publish my own book on advanced CSS!).</p>

          <p>I've always been a "hybrid" in the web industry, performing both design and development duties in all of my professional roles to date. However, despite initially seeing myself as more of a designer, I started to lean increasingly more into development, to the extent that this has now been my primary focus for the last decade or so. As the web industry has matured, the hybrid role has been left behind as people increasingly look to specialise, but I think a design background can be a huge advantage in an engineering role, which will undoubtedly be my next step.</p>

          <p>My current focus is on React, JavaScript, TypeScript and Tailwind to name a few, but — having been building websites since the days when we'd add space to layouts by putting an invisible image inside a table-cell — I have a strong knowledge of the core web fundamentals that these new tools ultimately compile down to. Semantic HTML, vanilla JavaScript, an encyclopedic knowledge of CSS, servers, DNS... this foundational knowledge is important in my opinion and can sometimes be too easily overlooked today.</p>

          <p>Away from the screen I have an amazing little family; two sons Leo and Olly, and wife Hannah. Being a Dad has its challenges but it's also the most rewarding thing I can imagine. I'd do absolutely anything to make sure those two boys are happy!</p>
        </>
      )}
    </div>
  )
}

export default Bio
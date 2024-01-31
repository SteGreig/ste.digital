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
      <p className='font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut nisi mattis, rutrum lacus eget, lacinia est. Quisque efficitur justo non auctor aliquet. Aenean maximus venenatis arcu. Nullam interdum erat quam, ultricies dictum leo auctor.</p>

      <p>Curabitur ac leo euismod, congue nisl eu, vehicula eros. Cras odio dolor, sagittis in convallis quis, scelerisque ac nibh. In dignissim elit ac arcu dapibus, tincidunt posuere arcu bibendum. Phasellus eget turpis ac urna tincidunt malesuada eu eget lacus. Mauris sed feugiat diam, in aliquam... <a onClick={readMore} className={`gradient-text border-b border-transparent hover:border-pink ${moreActive && 'hidden'}`} href="#">Read More</a></p>

      {moreActive && (
        <>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut nisi mattis, rutrum lacus eget, lacinia est. Quisque efficitur justo non auctor aliquet. Aenean maximus venenatis arcu. Nullam interdum erat quam, ultricies dictum leo auctor.</p>
        </>
      )}
    </div>
  )
}

export default Bio
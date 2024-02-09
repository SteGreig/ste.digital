"use client";
import React from 'react'
import { useState } from 'react';
import { LazyMotion, domAnimation, m } from "framer-motion"

// Get initial CSS variable values so we can reset to these
const pink = getComputedStyle(document.documentElement).getPropertyValue('--pink');
const pinkGlow = getComputedStyle(document.documentElement).getPropertyValue('--pink-glow');
const purple = getComputedStyle(document.documentElement).getPropertyValue('--purple');

const ColourChanger = (props: {classes: string}) => {

  // Get hue value from localStorage if it's been set previously
  const localHue = window.localStorage.getItem('hue');

  // Set initial hue state to localHue if exists
  const [hue, setHue] = useState(localHue ? localHue : null);

  // When slider is interacted with:
  function changeColour(e: React.ChangeEvent<HTMLInputElement>) {
    setHue(e.target.value)
    window.localStorage.setItem('hue', e.target.value);
  }

  // When reset button is clicked
  function resetColour() {
    setHue(null);
    window.localStorage.removeItem('hue');
  }

  if (hue) {
    document.documentElement.style.setProperty('--pink', 'hsl('+hue+'deg, 100%, 70%)');
    document.documentElement.style.setProperty('--pink-glow', 'hsl('+hue+'deg, 100%, 70%, 0.3)');
    document.documentElement.style.setProperty('--purple', 'hsl('+hue+'deg, 100%, 50%)');
    document.documentElement.style.setProperty('--btn-text-color', '#141A29');
  } else {
    document.documentElement.style.setProperty('--pink', pink);
    document.documentElement.style.setProperty('--pink-glow', pinkGlow);
    document.documentElement.style.setProperty('--purple', purple);
    document.documentElement.style.setProperty('--btn-text-color', '#fff');
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.div initial={{y:100, opacity:0}} animate={{y:0, opacity:1}}  className={`${props.classes}`}>
        <p className='flex items-baseline justify-between'>
          <span className='gradient-text text-xs'>Change the vibe</span>
          <button onClick={resetColour} className='border-b border-white opacity-60 hover:opacity-100 border-opacity-60 hover:border-opacity-100 transition duration-300 pb-0 text-[11px]/tight inline-block ml-2 cursor-pointer'>Reset</button>
        </p>
        <input
          type="range"
          value={hue ? hue : 0}
          onInput={changeColour}
          min='0'
          step='1'
          max='360'
          className='colour-slider'
        />
      </m.div>
    </LazyMotion>
  )
}

export default ColourChanger
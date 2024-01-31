"use client";
import React from 'react'
import { useState } from 'react';

// Get initial CSS variable values so we can reset to these
const pink = getComputedStyle(document.documentElement).getPropertyValue('--pink');
const pinkGlow = getComputedStyle(document.documentElement).getPropertyValue('--pink-glow');
const purple = getComputedStyle(document.documentElement).getPropertyValue('--purple');

const ColourChanger = (props) => {

  const [input, setInput] = useState(props?.value ?? '');

  function changeColour(e) {
    setInput(e.target.value)
    
    document.documentElement.style.setProperty('--btn-text-color', '#141A29');
  }

  function resetColour() {
    setInput(null);

    document.documentElement.style.setProperty('--btn-text-color', '#ffffff');
  }

  if (input) {
    document.documentElement.style.setProperty('--pink', 'hsl('+input+'deg, 100%, 70%)');
    document.documentElement.style.setProperty('--pink-glow', 'hsl('+input+'deg, 100%, 70%, 0.3)');
    document.documentElement.style.setProperty('--purple', 'hsl('+input+'deg, 100%, 50%)');
  } else {
    document.documentElement.style.setProperty('--pink', pink);
    document.documentElement.style.setProperty('--pink-glow', pinkGlow);
    document.documentElement.style.setProperty('--purple', purple);
  }

  return (
    <div className={`${props.classes}`}>
      <p className='flex items-baseline justify-between'>
        <span className='gradient-text text-xs'>Change the vibe</span>
        <button onClick={resetColour} className='border-b border-white opacity-60 hover:opacity-100 border-opacity-60 hover:border-opacity-100 transition duration-300 pb-0 text-[11px]/tight inline-block ml-2 cursor-pointer'>Reset</button>
      </p>
      <input
        type="range"
        value={input ? input : 0}
        onInput={changeColour}
        min='0'
        step='1'
        max='360'
        className='colour-slider'
      />
    </div>
  )
}

export default ColourChanger
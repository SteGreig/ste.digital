"use client";
import React from 'react'
import { useState } from 'react';

const ColourChanger = (props) => {

  const [input, setInput] = useState(props?.value ?? '');

  if (input) {
    document.documentElement.style.setProperty(
      '--pink',
      'hsl('+input+'deg, 100%, 70%)'
    );
    document.documentElement.style.setProperty(
      '--pink-glow',
      'hsl('+input+'deg, 100%, 70%, 0.3)'
    );
  
    document.documentElement.style.setProperty(
      '--purple',
      'hsl('+input+'deg, 100%, 50%)'
    );
  }

  return (
    <div className={`${props.classes}`}>
      <input type="range" value={input ? input : 0} onInput={e => setInput(e.target.value)} min='0' step='1' max='360' />
    </div>
  )
}

export default ColourChanger
"use client";
import React from 'react'
import { useState } from 'react';

const ColourChanger = (props) => {

  const [input, setInput] = useState(props?.value ?? '');

  document.documentElement.style.setProperty(
    '--pink',
    'hsl('+input+'deg, 100%, 60%)'
  );

  document.documentElement.style.setProperty(
    '--purple',
    'hsl('+input+'deg, 90%, 80%)'
  );

  return (
    <div className={`${props.classes}`}>
      <input type="range" value={input ? input : 0} onInput={e => setInput(e.target.value)} min='0' step='1' max='360' />
    </div>
  )
}

export default ColourChanger
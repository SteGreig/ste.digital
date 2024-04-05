"use client";
import React from 'react'
import { BsEnvelope } from "react-icons/bs";
import { BsCopy } from "react-icons/bs";
import { BsCheckLg } from "react-icons/bs";
import { useState } from 'react';

const EmailBtn = (props: {btnText?:string, showFull?:boolean}) => {

  const [copied, setCopied] = useState(false);

  function handleClick() {
    copyEmail();
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('hi@ste.digital');
      console.log('Content copied to clipboard');
      setCopied(true);
    } catch (err) {
      console.error('Failed to copy: ', err);
      setCopied(false);
    }
  }

  return (
    <div className='relative'>
      <button className='btn btn--outline email-btn' onClick={handleClick}>
        <BsEnvelope className={`${props.showFull ? 'hidden' : 'lg:hidden'} fill-pink relative z-10`} />
        <span className={`btn--outline__text text-sm ${!props.showFull && 'hidden lg:inline'}`}>{props.btnText ? props.btnText : 'Get in Touch'}</span>
      </button>
      <span className='tooltip absolute top-full right-0 mt-2 text-gray-300 whitespace-nowrap px-3 py-2 text-xs rounded-full bg-navy-600 flex items-center opacity-0 pointer-events-none transition duration-200 scale-75 -translate-y-2'>
        {copied ? (
          <>
            <BsCheckLg className='text-pink' />
            <span className='inline-block ml-1 font-medium'>Copied hi＠ste․digital</span>
          </>
        ) : (
          <>
            <BsCopy className='text-pink' />
            <span className='inline-block ml-1 font-medium'>Copy hi＠ste․digital</span>
          </>
        )}
      </span>
    </div>
  )
}

export default EmailBtn
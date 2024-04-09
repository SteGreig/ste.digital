"use client";

import Image from 'next/image'

type Props = {
  imgSrc: string,
  imgAlt: string,
  imgOrder?: number,
  imgCaption?: string,
  imgWidth?: number,
  imgHeight?: number
}


const ImageWrapper = (props: Props) => {
  
  return (
    <Image
      className='rounded object-cover flex-1'
      src={props.imgSrc}
      alt={props.imgAlt}
      width={props.imgWidth}
      height={props.imgHeight}
    />
  )
}

export default ImageWrapper
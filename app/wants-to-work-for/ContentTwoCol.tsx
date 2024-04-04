import Image from 'next/image'

type Props = {
  children: React.ReactNode,
  imgSrc: string,
  imgAlt: string,
  imgOrder?: number,
  imgCaption?: string
}

const ContentTwoCol = (props: Props) => {
  return (
    <section className="border-t border-white border-opacity-10 mx-auto flex flex-col lg:flex-row opacity-90">
      <div className={`lg:w-1/2 py-12 xl:py-20 flex px-4 border-white border-opacity-10 ${props.imgOrder !== 2 ? 'lg:order-1' : 'border-r'}`}>
        {props.children}
      </div>

      <figure className={`lg:w-1/2 p-10 border-white border-opacity-10 flex flex-col ${props.imgOrder !== 2 && 'border-r items-end'}`}>
        <Image
          className='rounded object-cover flex-1'
          src={props.imgSrc}
          alt={props.imgAlt}
          width='1000'
          height='1172'
        />
        {props.imgCaption && (
          <figcaption className='mt-3 text-gray-500 text-sm'>{props.imgCaption}</figcaption>
        )}
      </figure>
    </section>
  )
}

export default ContentTwoCol
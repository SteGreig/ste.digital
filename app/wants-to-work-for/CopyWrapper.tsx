
type Props = {
  heading?: string,
  children: React.ReactNode,
  width?: string,
  classes?: string
}

const CopyWrapper = (props: Props) => {
  return (
    <div className={`article w-full [&>.heading]:mt-0 [&>.heading]:no-underline [&>.heading]:text-3xl [&>.heading]:mb-8 ${props.classes} ${props.width ? props.width : 'max-w-screen-sm'}`}>
      {props.heading && (
        <h2 className='heading'><span className='gradient-text font-semibold whitespace-normal'>{props.heading}</span></h2>
      )}

      {props.children}
    </div>
  )
}

export default CopyWrapper
import TitleDivider from "../(site)/components/TitleDivider"

type Props = {
  heading?: string,
  subHeading?: string,
  children: React.ReactNode,
  width?: string,
  classes?: string
}

const CopyWrapper = (props: Props) => {
  return (
    <div className={`article w-full [&>.heading]:mt-0 [&>.heading]:no-underline [&>.heading]:text-3xl ${props.subHeading ? '[&>.heading]:mb-0' : '[&>.heading]:mb-8'} ${props.classes} ${props.width ? props.width : 'max-w-screen-sm'}`}>
      {props.heading && (
        <h2 className='heading'><span className='gradient-text font-semibold whitespace-normal'>{props.heading}</span></h2>
      )}
      {props.subHeading && (
        <TitleDivider title={props.subHeading} headingLevel="span" classes="mb-8" />
      )}

      {props.children}
    </div>
  )
}

export default CopyWrapper
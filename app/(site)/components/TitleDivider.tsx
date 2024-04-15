type Props = {
  classes?: string,
  title: string,
  maxWidth?: string,
  headingLevel?: string
}

const headingClasses = 'font-primary text-xs uppercase tracking-[0.2em] opacity-30 pr-4';

const TitleDivider = (props: Props) => {
  return (
    <div className={`${props.classes} flex ${props.maxWidth ?? 'max-w-screen-lg'}`}>
      {props.headingLevel === 'h2' ? (
        <h2 className={headingClasses}>{props.title}</h2>
      ) : props.headingLevel === 'h3' ? (
        <h3 className={headingClasses}>{props.title}</h3>
      ) : props.headingLevel === 'span' ? (
        <span className={headingClasses}>{props.title}</span>
      ) : (
        <h1 className={headingClasses}>{props.title}</h1>
      )}
      <span className='flex-1 h-px bg-white opacity-10 mt-2'></span>
    </div>
  )
}

export default TitleDivider
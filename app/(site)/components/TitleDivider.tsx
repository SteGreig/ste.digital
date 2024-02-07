
const TitleDivider = (props: {classes: string, title: string}) => {
  return (
    <div className={`${props.classes} flex max-w-screen-lg`}>
      <h1 className='font-primary text-xs uppercase tracking-[0.2em] opacity-30 pr-4'>{props.title}</h1>
      <span className='flex-1 h-px bg-white opacity-10 mt-2'></span>
    </div>
  )
}

export default TitleDivider
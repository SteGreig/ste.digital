type Props = {
  title: string,
  start: string,
  end: string | undefined,
  details: Array<string>
}

const HistoryItem = (props: Props) => {
  return (
    <li key={props.title} className='flex'>
      <p className='font-primary text-xs uppercase tracking-[0.2em] opacity-30 w-28 flex-none'>
        <time dateTime={props.start}>{props.start}</time>
        &ndash;
        {props.end && (
          <time dateTime={props.end}>{props.end}</time>
        )}
      </p>
      <div>
        <p className='text-lg/snug xl:text-xl font-primary font-semibold antialiased -mt-1'>{props.title}</p>
        {props.details && (
          <div className="mt-1">
            {props.details.map(i => (
              <p key={i} className='opacity-70 text-sm xl:text-base'>{i}</p>
            ))}
          </div>
        )}
      </div>
    </li>
  )
}

export default HistoryItem
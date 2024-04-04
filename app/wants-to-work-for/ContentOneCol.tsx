
type Props = {
  children: React.ReactNode,
}

const ContentOneCol = (props: Props) => {
  return (
    <section className='py-12 xl:py-20 border-t border-white border-opacity-10 px-4 lg:px-0'>
      {props.children}
    </section>
  )
}

export default ContentOneCol
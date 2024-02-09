import Link from 'next/link';
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

type Props = {
  pageNum: number,
  limit: number,
  postCount: number,
  totalPostCount: number,
  path: string
}

const PaginationBtns = (props: Props) => {

  return (
    <div className='flex w-full max-w-screen-lg mt-4 xl:mt-10 relative'>
      {props.pageNum !== 1 && (
        <Link
          className='flex items-center border-b border-transparent hover:border-pink'
          href={props.pageNum === 2 ? props.path : {
            pathname: props.path,
            query: {page: props.pageNum > 1 ? props.pageNum - 1 : 1 }
          }}
        >
          <BsArrowLeft className='text-pink' />
          <span className='gradient-text ml-1'>Previous</span>
        </Link>
      )}

      <span className='font-primary text-xs uppercase tracking-[0.2em] opacity-30 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>Page {props.pageNum} of {Math.ceil(props.totalPostCount/props.limit)}</span>
      
      {props.postCount === props.limit && (
        <Link
          className='flex items-center border-b border-transparent hover:border-pink ml-auto'
          href={{
            pathname: props.path,
            query: { page: props.pageNum + 1 }
          }}
        >
          <span className='gradient-text mr-1'>Next</span>
          <BsArrowRight className='text-pink' />
        </Link>
      )}
      
    </div>
  )
}

export default PaginationBtns
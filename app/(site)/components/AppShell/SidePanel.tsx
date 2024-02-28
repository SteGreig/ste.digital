import Nav from "./Nav";
import { getBlogCats } from '@/sanity/sanity-utils';

// Dynamic import to prevent document is not defined error
import dynamic from 'next/dynamic';
const ColourChanger = dynamic(() => import('./ColourChanger'), { ssr: false });

const SidePanel = async () => {

  const blogCats = await getBlogCats();

  return (
    <div className="flex flex-wrap w-full md:w-[18.75%] md:max-w-xs border-t md:border-t-0 md:border-r border-white border-opacity-10 fixed z-20 bottom-0 md:top-[69px] md:h-[calc(100vh_-_69px)] md:px-6 bg-navy md:bg-transparent md:bg-gradient-to-t md:from-[#141D34] before:absolute before:top-0 before:w-full before:bg-gradient-to-r before:from-purple before:to-pink before:h-px md:before:bg-none">

      <div className='w-full md:max-w-44 ml-auto flex flex-col md:overflow-y-scroll overflow-x-hidden hide-scrollbar md:h-[82%] md:pt-12 lg:pt-16 pb-10'>

        <Nav blogCats={blogCats} />

      </div>

      <ColourChanger classes="w-full mt-auto hidden lg:block mb-6" />

      <span className="hidden md:block absolute top-0 left-0 w-full bg-gradient-to-b from-[#141D34] to-transparent h-16"></span>
      <span className="hidden md:block absolute top-[calc(82%_-_4rem)] left-0 w-full bg-gradient-to-t from-[#141D34] to-transparent h-16"></span>

    </div>
  )
}

export default SidePanel;
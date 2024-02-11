import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import { Poppins } from 'next/font/google'
import './globals.css'

import Header from './components/AppShell/Header';
import Nav from "./components/AppShell/Nav"
import { getBlogCats } from '@/sanity/sanity-utils';

// Dynamic import to prevent document is not defined error
import dynamic from 'next/dynamic';
const ColourChanger = dynamic(() => import('./components/AppShell/ColourChanger'), { ssr: false });

const nunito_sans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito_sans',
})

const poppins = Poppins({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: {
    default: 'Selected Works of Ste Greig',
    template: '%s - ste.digital'
  },
  description:
    'Selected works of Ste Greig - a front-end developer from Nottingham, UK',
  metadataBase: new URL('https://ste.digital'),
  openGraph: {
    images: {
      url: '/opengraph-image.png',
      width: 1920,
      height: 960,
    },
  },
  twitter: {
    card: "summary_large_image"
  }
};


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const blogCats = await getBlogCats();

  return (
    <html lang="en" className='bg-[#141D34]'>
      <body className={`${nunito_sans.variable} ${poppins.variable} font-body bg-gradient-to-br from-[#141D34] to-navy text-white min-h-screen`}>
        
        <Header />

        <div className='flex flex-row'>

          <div className="flex flex-wrap w-full md:w-[18.75%] md:max-w-xs border-t md:border-t-0 md:border-r border-white border-opacity-10 fixed z-20 bottom-0 md:top-[69px] md:h-[calc(100vh_-_69px)] md:pt-12 lg:pt-16 md:px-6 bg-navy md:bg-transparent before:absolute before:top-0 before:w-full before:bg-gradient-to-r before:from-purple before:to-pink before:h-px md:before:bg-none">
            <div className='w-full md:max-w-44 ml-auto flex flex-col'>
              <Nav blogCats={blogCats} />
            </div>
            <ColourChanger classes="w-full mt-auto hidden lg:block mb-6" />
          </div>

          <div className='flex flex-col w-full md:w-[81.25%] md:left-[18.75%] relative md:mt-[69px] overflow-hidden'>

            <main className="w-full p-6 pt-28 md:p-16 md:pb-4 lg:pt-20 lg:px-20 xl:px-24 2xl:px-32 mb-20 2xl:mb-32">
              {children}
            </main>

            <footer className='w-full mt-auto text-xs px-6 pb-16 md:pb-4 opacity-40'>The footer I guess</footer>
          </div>

        </div>
        
      </body>
    </html>
  )
}

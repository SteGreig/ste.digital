import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import { Poppins } from 'next/font/google'
import '../(site)/globals.css'

import Header from './Header'

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
  title: "Ste Greig - Application",
  robots: {
    index: false,
    follow: false,
  },
};


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className='bg-[#141D34]'>
      <body className={`${nunito_sans.variable} ${poppins.variable} font-body bg-gradient-to-br from-[#141D34] to-navy text-white min-h-screen`}>

        <Header />
        
        <main className="w-full max-w-screen-lg mx-auto mt-20 pt-20 px-4">
          {children}
        </main>
        
      </body>
    </html>
  )
}

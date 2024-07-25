import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

import Header from "./components/AppShell/Header";
import Footer from "./components/AppShell/Footer";
import SidePanel from "./components/AppShell/SidePanel";

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito_sans",
});

const poppins = Poppins({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Ste Greig, Creative Front-end Developer",
    template: "%s - ste.digital",
  },
  description:
    "Selected works of Ste Greig - a creative front-end developer from Nottingham, UK",
  metadataBase: new URL("https://ste.digital"),
  openGraph: {
    images: {
      url: "/opengraph-image.png",
      width: 1920,
      height: 960,
    },
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#141D34]">
      <body
        className={`${nunito_sans.variable} ${poppins.variable} font-body bg-gradient-to-br from-[#141D34] to-navy text-white min-h-screen`}
      >
        <Header />

        <div className="flex flex-row min-h-screen">
          <SidePanel />

          <div className="flex flex-col w-full md:w-[81.25%] md:left-[18.75%] relative md:mt-[69px] overflow-hidden">
            <main className="w-full p-6 pt-28 md:p-16 md:pb-4 lg:pt-20 lg:px-20 xl:px-24 2xl:px-32 mb-20 2xl:mb-32">
              {children}
            </main>

            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

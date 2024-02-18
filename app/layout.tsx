import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://ste.digital'),
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
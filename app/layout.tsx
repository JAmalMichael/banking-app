import { Inter, IBM_Plex_Serif } from 'next/font/google';
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibmFont = IBM_Plex_Serif({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-ibm-plex-serif'
})




export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className={`${inter.variable} ${ibmFont.variable}`}>{children}</body>
      </html>
    );
  }
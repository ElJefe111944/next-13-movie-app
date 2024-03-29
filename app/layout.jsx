import './globals.css'
import { Montserrat } from 'next/font/google'


export const metadata = {
  title: 'Next 13 Movie App',
  description: 'Get The Latest Movies',
}

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400','700'],
  variable: '--font-monserrat'
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} mx-32 my-12`}>{children}</body>
    </html>
  )
}

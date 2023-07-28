import './globals.css'
import { Montserrat } from 'next/font/google'


export const metadata = {
  title: 'Next 13 Movie App',
  description: 'Get The Latest Movies',
}

const montserrat = Montserrat({
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}

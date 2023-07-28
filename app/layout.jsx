import './globals.css'


export const metadata = {
  title: 'Next 13 Movie App',
  description: 'Get The Latest Movies',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

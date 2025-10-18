import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Unlimited Auto - Local Cars. Straight Answers. Fast Appointments.',
  description: 'Transparent pricing • Quick financing • Same-day appointments • No games. Find your next car at Unlimited Auto.',
  keywords: 'used cars, auto dealer, car sales, financing, trade-in',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

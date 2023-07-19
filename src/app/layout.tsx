import './css/globals.css'
import 'normalize.css/normalize.css'
import type {Metadata} from 'next'
import {Roboto} from 'next/font/google'

const robotoFont = Roboto({weight: ["300", "500", "700"], subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Entre.pro',
  description: 'CRM System for small businesses',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
    <body className={robotoFont.className}>{children}</body>
    </html>
  )
}

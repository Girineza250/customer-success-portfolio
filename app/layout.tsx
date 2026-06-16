import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Girineza Honoré — Customer Success Work Samples',
  description: 'Three real examples of how I have resolved issues fast, built systems that stop repeat problems, and kept customers satisfied.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

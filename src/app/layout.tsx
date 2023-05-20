import { ReactNode } from 'react'
import { Roboto } from 'next/font/google'

import StyledComponentsRegistry from '../../lib/registry'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Finx',
  description: 'Improve your finances management'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body className={roboto.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}

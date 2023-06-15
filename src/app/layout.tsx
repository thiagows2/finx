import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { AuthProvider } from '@/contexts/AuthContext'

import StyledComponentsRegistry from '../../lib/registry'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Finx',
  description: 'Improve your finances management'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body className={inter.className}>
        <AuthProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </AuthProvider>
      </body>
    </html>
  )
}

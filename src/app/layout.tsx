import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import StyledComponentsRegistry from '@/components/AntdRegistry'
import ThemeConfigProvider from '@/components/ThemeConfigProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Super EVM Inscription Minter',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-0 m-0`}>
        <StyledComponentsRegistry>
          <ThemeConfigProvider>{children}</ThemeConfigProvider>
        </StyledComponentsRegistry>
        <Toaster />
      </body>
    </html>
  )
}
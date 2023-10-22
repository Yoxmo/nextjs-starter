import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'

import { ToasterProvider } from '@/components/toaster-provider'
// import { ModalProvider } from '@/components/modal-provider'

import './globals.css'

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Moxo',
  description: 'AI Platform',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <meta name = "viewport" content = "width=device-width, minimum-scale=1.0, maximum-scale = 1.0, user-scalable = no"></meta>
        <body className={font.className}>
          <ToasterProvider />
          {/* <ModalProvider /> */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}

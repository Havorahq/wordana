import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ContextProvider } from './context/Context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wordana',
  description: 'Word game - Web application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <main>
            {children}
          </main>
        </ContextProvider>
      </body>
    </html>
  )
}

import { ClerkProvider, auth, currentUser } from '@clerk/nextjs'
import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google';
import Header from './components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Herd',
  description: 'Build with love with genezio',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>
          <Header />
          <main className='container mx-auto'>
            <div className='flex items-start justify-center min-h-screen'>
              <div className='mt-20'>{children}</div>
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}

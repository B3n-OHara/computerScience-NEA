import type { Metadata } from 'next'
import Link from 'next/link';
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image';
import profileIcon from '@/public/healthicons--ui-user-profile.svg'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ContaineriseIt',
  description: 'The Teaching & Learning Platform For Containerisation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/docs">Docs</Link>
              </li>
              <li>
                <Link href="/community">Community</Link>
              </li>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Image 
                  src={profileIcon}
                  width={64}
                  height={64}
                  alt='Profile Icon'
                />
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}

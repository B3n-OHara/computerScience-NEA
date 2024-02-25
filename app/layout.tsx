import type { Metadata } from 'next'
import Link from 'next/link';
import { Rubik, Source_Code_Pro, Roboto_Mono } from 'next/font/google'
import './globals.css'
import Image from 'next/image';
import profileIcon from '@/public/healthicons--ui-user-profile.svg'
import CheckUserLoggedIn from '@/utils/supabase/checkUserLoggedIn'
import { LoginIcon } from '@/components/loginIcon'
import { LoginIconDisabled } from '@/components/loginIconDisabled'

const rubik = Rubik({
  subsets: ['latin'],
  weight: '600',
  display: 'swap',
  variable: '--font-rubik',
})

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: '500',
  style: 'italic',
  display: 'swap',
  variable: '--font-source-code-pro',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: '300',
  display: 'swap',
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: 'ContaineriseIt',
  description: 'The Teaching & Learning Platform For Containerisation',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const loggedIn = await CheckUserLoggedIn()
  
  return (
    <html lang="en">
      <body className={`${rubik.variable} ${sourceCodePro.variable} ${robotoMono.variable}`}>
        <header className='sticky w-full'>
          <nav className='font-text w-full h-[75px] flex flex-row bg-16dp'>
            <ul className='flex flex-row justify-start items-center basis-1/6'>
              <li className='pl-8'>
                <button className='btn btn-outline btn-primary'>
                  <Link href="/contact">Contact</Link>
                </button>
              </li>
            </ul>
            
            <ul className='flex flex-row justify-end items-center basis-5/6 gap-x-20 pr-2'>
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
                {loggedIn ? LoginIconDisabled() : LoginIcon()}
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}

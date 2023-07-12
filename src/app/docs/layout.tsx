'use client';

import { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import { Navbar, Sidenav } from '@/components/internal';

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body className={`${inter.className}`}>
                <Navbar />
                <main className='w-[1024px] flex items-start min-h-screen mx-auto mt-6'>
                    <Sidenav />
                    {children}
                    <Analytics />
                </main>
            </body>
        </html>
    );
}

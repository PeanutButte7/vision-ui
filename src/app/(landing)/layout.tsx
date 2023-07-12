import { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import '@/styles/landing.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Vision UI - components inspired by Apple Vision Pro',
    description: 'The new Tailwind UI kit inspired by Apple Vision Pro',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}

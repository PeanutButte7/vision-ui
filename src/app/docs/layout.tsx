import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang='en'>
            <body className='bg-none'>{children}</body>
        </html>
    );
}

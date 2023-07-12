'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IconBrandGithub, IconSun } from '@tabler/icons-react';

export function Navbar() {
    const [theme, setTheme] = useState('dark');

    return (
        <nav className='sticky top-0 flex justify-center h-16 w-full bg-background-glass glass-blur border-b'>
            <div className='flex items-center justify-between h-full w-[1024px]'>
                <Link
                    href='/docs/introduction'
                    className='flex gap-2 text-lg font-semibold items-center hover:text-foreground-muted'
                >
                    <Image
                        src={
                            theme == 'dark'
                                ? '/vision-ui-icon-dark.png'
                                : '/vision-ui-icon-light.png'
                        }
                        alt=''
                        height={28}
                        width={28}
                    ></Image>
                    <span>Vision UI</span>
                </Link>
                <div className='flex items-center gap-4'>
                    <a
                        href='https://github.com/PeanutButte7/vision-ui'
                        target='_blank'
                    >
                        <IconBrandGithub className='h-6 hover:text-foreground-muted' />
                    </a>
                    <a
                        onClick={() =>
                            theme == 'dark'
                                ? setTheme('light')
                                : setTheme('dark')
                        }
                    >
                        <IconSun className='h-6 cursor-pointer hover:text-foreground-muted' />
                    </a>
                </div>
            </div>
        </nav>
    );
}

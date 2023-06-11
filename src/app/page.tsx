'use client';

import { QueryClient, QueryClientProvider } from 'react-query';
import { EmailSubscription } from '@/components/email-subscription';
import { NewsPill } from '@/components/ui/news-pill';
import { IconBrandTwitter } from '@tabler/icons-react';

export default function Home() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <main className='flex min-h-screen h-screen flex-col items-center justify-center mx-auto'>
                <div className='flex flex-col items-center justify-center w-full h-full md:w-[724px] md:h-auto lg:w-[864px] pt-32 pb-32 bg-glass-50 glass-blur rounded-none md:rounded-canvas border-2 border-glass-20'>
                    <NewsPill>
                        <IconBrandTwitter className='h-5' />
                        <p>Follow me for live updates!</p>
                    </NewsPill>
                    <h1 className='mt-4 md:mt-2 mb-8 text-7xl md:text-8xl text-neutral-50 font-bold'>
                        Vision UI
                    </h1>
                    <EmailSubscription />
                    <h2 className='md:hidden w-80 m-16 px-8 py-3 rounded-3xl bg-glass-50 text-center text-lg text-neutral-200 font-semibold'>
                        Set of beautiful Tailwind components inspired by Apple
                        Vision Pro
                    </h2>
                </div>
                <h2 className='hidden md:block z-10 relative -top-8 w-auto px-8 py-3 rounded-full border border-glass-20 bg-glass-20 glass-blur text-center text-lg text-neutral-200 font-semibold'>
                    Set of beautiful Tailwind components inspired by Apple
                    Vision Pro
                </h2>
            </main>
        </QueryClientProvider>
    );
}

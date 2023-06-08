'use client';

import { EmailSubscription } from '@/components/email-subscription';

export default function Home() {
    const subscribe = async (e) => {
        e.preventDefault();

        // 3. Send a request to our API with the user's email address.
        const res = await fetch('/api/email', {
            body: JSON.stringify({
                email: 'adam.barta404@gmail.com',
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        })
            .then((r) => {
                console.log(r);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <main className='container flex min-h-screen h-screen flex-col items-center justify-center mx-auto'>
            <div className='flex flex-col items-center gap-4 py-24 px-36 py-20 bg-glass-50 glass-blur rounded-3xl border-2 border-glass-20'>
                <h2 className='text-xl text-neutral-200 font-semibold'>
                    Set of Tailwind components inspired by Apple Vision Pro
                </h2>
                <h1 className='text-8xl text-neutral-50 font-bold'>
                    Vision UI
                </h1>
                <EmailSubscription />
            </div>
        </main>
    );
}

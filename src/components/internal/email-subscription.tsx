'use client';

import { useCallback } from 'react';
import { z } from 'zod';
import { useMutation } from 'react-query';
import { useForm, SubmitHandler } from 'react-hook-form';
import { shineEffect } from '@/utils/shine-effect';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { IconLoader2, IconSend } from '@tabler/icons-react';

export function EmailSubscription() {
    const emailSubscriptionSchema = z.object({
        email: z.string().email({
            message: 'Please enter a valid email address',
        }),
    });

    type EmailSubscriptionSchema = z.infer<typeof emailSubscriptionSchema>;

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<EmailSubscriptionSchema>({
        resolver: zodResolver(emailSubscriptionSchema),
        mode: 'onTouched',
    });

    const { mutate, isLoading, isIdle, isSuccess, isError } =
        useMutation(subscribe);

    const onSubmit: SubmitHandler<EmailSubscriptionSchema> = (data) => {
        mutate(data);
    };

    async function subscribe(data: EmailSubscriptionSchema) {
        const response = await fetch('/api/email', {
            body: JSON.stringify({
                email: data.email,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return response.json();
    }

    const buttonRef = useCallback(
        (element: HTMLElement | null) => shineEffect(element),
        []
    );

    const [parent] = useAutoAnimate();

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {isError && (
                <div className='text-center text-neutral-50'>
                    <p className='text-2xl text-neutral-200 font-semibold'>
                        😢 Something went wrong
                    </p>
                    <p className='text-neutral-200'>
                        You might be already signed up or provided an invalid
                        email.
                    </p>
                </div>
            )}

            {isSuccess && (
                <div className='text-center text-neutral-50'>
                    <p className='text-2xl text-neutral-200 font-semibold'>
                        🎉 You are on the list!
                    </p>
                    <p className='text-neutral-200'>
                        When Vision UI releases you will be the first to know.
                    </p>
                </div>
            )}
            {isLoading && (
                <IconLoader2 className='animate-spin h-16 w-16 text-neutral-200' />
            )}

            {isIdle && (
                <fieldset
                    name='email'
                    className='flex flex-col gap-1 items-center text-neutral-200'
                >
                    <p className='text-md text-neutral-200 font-medium'>
                        Get notified for release
                    </p>
                    <div className='flex flex-col gap-1'>
                        <div
                            className='flex flex-row items-center gap-2'
                            ref={parent}
                        >
                            <input
                                id='email'
                                {...register('email')}
                                type='email'
                                placeholder='Email address'
                                className='appearance-none rounded-full h-11 px-4 border border-neutral-400 shadow-inner bg-glass-70 placeholder-neutral-400 focus:bg-glass-60 focus:border-neutral-500 focus:shadow-inner-none focus:outline-none focus:ring-0'
                            />
                            {isValid && (
                                <button
                                    ref={buttonRef}
                                    type='submit'
                                    className='shiny-effect h-11 w-11 flex items-center justify-center appearance-none rounded-full text-neutral-50 font-medium bg-glass-20'
                                >
                                    <IconSend className='text-sm p-0 m-0' />
                                </button>
                            )}
                        </div>
                        {errors?.email?.message && (
                            <p className='text-xs ml-3 transition ease-in-out'>
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                </fieldset>
            )}
        </form>
    );
}

'use client';
import * as Form from '@radix-ui/react-form';

export function EmailSubscription() {
    return (
        <Form.Root>
            <Form.Field name='email' className='text-neutral-200'>
                <div className='flex flex-col items-center'>
                    <Form.Label className='font-semibold'>
                        Subscribe to latest news
                    </Form.Label>
                    <Form.Message match='valueMissing'>
                        Please enter your email
                    </Form.Message>
                    <Form.Message match='typeMismatch'>
                        Please provide a valid email
                    </Form.Message>
                    <Form.Control asChild>
                        <input
                            type='email'
                            required
                            className='appearance-none rounded-full px-4 py-2 border-2 border-neutral-400 bg-glass-70 ring-0 focus:ring-0'
                        />
                    </Form.Control>
                </div>
            </Form.Field>
            <Form.Submit asChild>
                <button className='px-6 py-2 bg-neutral-50'>SUBSCRIBE</button>
            </Form.Submit>
        </Form.Root>
    );
}

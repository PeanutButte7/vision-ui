import { HTMLAttributes, ReactElement } from 'react';
import ComponentExample from '@/components/internal/component-example';
import {
    AccordionExample,
    ButtonExample,
    ImportantButtonExample,
    OutlineButtonExample,
    LinkButtonExample,
    IconButtonExample,
} from '@/components/examples';
import { cn } from '@/utils/class-helper';
import { CopyButton } from '@/components/internal';
import { Separator } from '@/components/ui';

export const mdxComponents = {
    // Internal
    ComponentExample,

    // UI
    AccordionExample,
    ButtonExample,
    ImportantButtonExample,
    OutlineButtonExample,
    LinkButtonExample,
    IconButtonExample,

    // Base
    h2: ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
        <div className='mb-6'>
            <h2
                className={cn('mt-4 mb-2 text-2xl font-semibold', className)}
                {...props}
            />
            <Separator />
        </div>
    ),
    h3: ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
        <h3
            className={cn('mt-4 mb-4 text-xl font-semibold', className)}
            {...props}
        />
    ),
    pre: ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
        <pre
            className={cn(
                'flex justify-between items-center px-4 py-3 my-4 bg-background-glass border rounded-lg font-mono text-sm',
                className
            )}
            {...props}
        >
            {props.children}
            {props.children && (
                <CopyButton code={props.children as ReactElement} />
            )}
        </pre>
    ),
    ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
        <ol className={cn('list-decimal list-inside', className)} {...props} />
    ),
};

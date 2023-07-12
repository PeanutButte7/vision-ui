import { HTMLAttributes } from 'react';
import ComponentExample from '@/components/internal/component-example';
import { AccordionExample } from '@/components/examples';
import { cn } from '@/utils/class-helper';
import { IconCopy } from '@tabler/icons-react';

export const mdxComponents = {
    // Internal
    ComponentExample,

    // UI
    AccordionExample,

    // Base
    h2: ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
        <h2
            className={cn('mt-4 mb-1 text-2xl font-semibold', className)}
            {...props}
        />
    ),
    pre: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <pre
            className={cn(
                'flex justify-between px-4 py-4 bg-background-glass border rounded-lg font-mono text-sm',
                className
            )}
            {...props}
        >
            {props.children}
            <IconCopy />
        </pre>
    ),
    ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
        <ol className={cn('list-decimal list-inside', className)} {...props} />
    ),
};

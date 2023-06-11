import { ReactNode, useCallback } from 'react';
import { shineEffect } from '@/utils/shine-effect';

interface NewsPillProps {
    children?: ReactNode;
}

export function NewsPill({ children }: NewsPillProps) {
    const newsPillRef = useCallback(
        (element: HTMLElement | null) => shineEffect(element),
        []
    );

    return (
        <a
            href='https://twitter.com/AdamBartas'
            target='_blank'
            ref={newsPillRef}
            className='shiny-effect flex flex-row items-center gap-2 px-4 py-1 rounded-full bg-glass-20 text-neutral-50 text-sm'
        >
            {children}
        </a>
    );
}

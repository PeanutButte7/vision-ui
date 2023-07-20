'use client';

import { ReactElement, useEffect, useState } from 'react';
import { IconCheck, IconCopy } from '@tabler/icons-react';
import { Button } from '@/components/ui';

export function CopyButton({ code }: { code: ReactElement }) {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code?.props.children);
        setIsCopied(true);
    };

    useEffect(() => {
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    }, [isCopied]);

    return (
        <Button size='icon' onClick={copyToClipboard}>
            {!isCopied ? <IconCopy size={18} /> : <IconCheck size={18} />}
        </Button>
    );
}

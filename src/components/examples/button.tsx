import { Button } from '@/components/ui';
import { IconHeart } from '@tabler/icons-react';

export function ButtonExample() {
    return <Button>Button</Button>;
}

export function ImportantButtonExample() {
    return <Button variant='important'>Button</Button>;
}

export function OutlineButtonExample() {
    return <Button variant='outline'>Button</Button>;
}

export function LinkButtonExample() {
    return <Button variant='link'>Button</Button>;
}

export function IconButtonExample() {
    return (
        <Button size='icon'>
            <IconHeart size={18} />
        </Button>
    );
}

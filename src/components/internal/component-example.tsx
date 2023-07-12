'use client';

import { ReactNode } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/utils/class-helper';

export default function ComponentExample({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <Tabs defaultValue='example'>
            <TabsList className='mb-2'>
                <TabsTrigger value='example'>Example</TabsTrigger>
                <TabsTrigger value='code'>Code</TabsTrigger>
            </TabsList>
            <div
                className={cn(
                    'flex justify-center items-center w-full min-h-[400px] py-10 bg-background-glass border rounded-2xl'
                )}
            >
                <TabsContent value='example'>{children}</TabsContent>
                <TabsContent value='code'>hi</TabsContent>
            </div>
        </Tabs>
    );
}

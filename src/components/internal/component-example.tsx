'use client';

import { ReactNode } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/utils/class-helper';
import reactElementToJSXString from 'react-element-to-jsx-string';

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
            <TabsContent
                value='example'
                className={cn(
                    'data-[state=active]:flex justify-center items-center w-full min-h-[400px] py-10 bg-background-glass border rounded-2xl'
                )}
            >
                {children}
            </TabsContent>
            <TabsContent
                value='code'
                className={cn(
                    'data-[state=active]:flex justify-center items-center w-full min-h-[400px] py-10 bg-background-glass border rounded-2xl'
                )}
            >
                {reactElementToJSXString(children)}
            </TabsContent>
        </Tabs>
    );
}

'use client';

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { IconChevronDown } from '@tabler/icons-react';
import { cn } from '@/utils/class-helper';

const AccordionRoot = forwardRef<
    ElementRef<typeof AccordionPrimitive.Accordion>,
    ComponentPropsWithoutRef<typeof AccordionPrimitive.Accordion>
>(({ className, ...props }, ref) => (
    <AccordionPrimitive.Root
        ref={ref}
        className={cn(
            'w-[300px] bg-background-glass border divide-y rounded-lg text-base text-foreground',
            className
        )}
        {...props}
    />
));

AccordionRoot.displayName = AccordionPrimitive.Accordion.displayName;

const AccordionItem = forwardRef<
    ElementRef<typeof AccordionPrimitive.Item>,
    ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={cn(
            '[&[data-state=open]]:bg-background-glass-accent',
            className
        )}
        {...props}
    />
));

AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = forwardRef<
    ElementRef<typeof AccordionPrimitive.Trigger>,
    ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header>
        <AccordionPrimitive.Trigger
            ref={ref}
            className={cn(
                'flex justify-between w-full p-4 [&[data-state=open]>svg]:rotate-180',
                className
            )}
            {...props}
        >
            {children}
            <IconChevronDown className='transition-transform duration-300' />
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
));

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = forwardRef<
    ElementRef<typeof AccordionPrimitive.Content>,
    ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
        ref={ref}
        className={cn(
            'px-4 pb-4 overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down ',
            className
        )}
        {...props}
    >
        {children}
    </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { AccordionRoot, AccordionItem, AccordionTrigger, AccordionContent };

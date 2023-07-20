import {
    AccordionRoot,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export function AccordionExample() {
    return (
        <AccordionRoot type='single' defaultValue='item-1' collapsible>
            <AccordionItem value='item-1'>
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value='item-2'>
                <AccordionTrigger>Is it unstyled?</AccordionTrigger>
                <AccordionContent>
                    Yes. It is unstyled by default, giving you freedom over the
                    look and feel.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value='item-3'>
                <AccordionTrigger>Can it be animated?</AccordionTrigger>
                <AccordionContent>
                    Yes! You can animate the Accordion with CSS or JavaScript.
                </AccordionContent>
            </AccordionItem>
        </AccordionRoot>
    );
}
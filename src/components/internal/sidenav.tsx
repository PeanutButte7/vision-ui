import { DocsStructure } from '@/config';
import Link from 'next/link';

export function Sidenav() {
    return (
        <aside className='w-[224px] flex flex-col justify-center gap-5 py-8 px-6 bg-background-glass border rounded-xl text-sm'>
            {DocsStructure.map((section) => (
                <div key={section.title}>
                    <h3 className='font-semibold mb-1'>{section.title}</h3>
                    <ul>
                        {section.items.map((item) => (
                            <li key={item.id}>
                                <Link
                                    href={item.url}
                                    className='text-foreground-muted hover:underline'
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </aside>
    );
}

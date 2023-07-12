import { useMDXComponent } from 'next-contentlayer/hooks';
import { allDocs } from 'contentlayer/generated';
import { mdxComponents } from '@/config';

export const generateStaticParams = async () => {
    return allDocs.map((doc) => ({ slug: doc._raw.flattenedPath }));
};

export function generateMetadata({ params }: { params: { slug: string } }) {
    const docs = allDocs.find(
        (docs) => docs._raw.flattenedPath === params.slug
    );
    if (!docs) throw new Error(`Post not found for slug: ${params.slug}`);
    return { title: docs.title };
}

export default function DocumentPage({ params }: { params: { slug: string } }) {
    const doc = allDocs.find((doc) => doc._raw.flattenedPath === params.slug);
    if (!doc) throw new Error(`Post not found for slug: ${params.slug}`);

    const MDXContent = useMDXComponent(doc.body.code);

    return (
        <article className='ml-10 max-w-xl'>
            <div className='mb-8'>
                <h1 className='mb-2 text-3xl font-semibold'>{doc.title}</h1>
                <h3 className='mb-8 text-lg text-foreground-muted'>
                    {doc.description}
                </h3>
                <MDXContent components={mdxComponents} />
            </div>
        </article>
    );
}

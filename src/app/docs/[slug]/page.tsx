import { allDocs } from 'contentlayer/generated';

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

    return (
        <article className='mx-auto max-w-xl py-8'>
            <div className='mb-8 text-center'>
                <h1 className='text-3xl font-bold'>{doc.title}</h1>
            </div>
        </article>
    );
}

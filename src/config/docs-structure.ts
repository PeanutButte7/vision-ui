import { allDocs } from 'contentlayer/generated';

function findDoc(name: string) {
    const doc = allDocs.find(
        (doc) => doc._raw.sourceFileName === `${name}.mdx`
    );

    if (!doc) {
        throw new Error(`Could not find doc with name "${name}"`);
    }

    return {
        id: doc._id,
        title: doc.title,
        url: doc.url,
    };
}

const gettingStarted = ['introduction', 'guidelines'];
const components = ['accordion', 'button', 'tabs'];

export const DocsStructure = [
    {
        title: 'Getting started',
        items: gettingStarted.map(findDoc),
    },
    {
        title: 'Components',
        items: components.map(findDoc),
    },
];

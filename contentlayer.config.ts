import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Doc = defineDocumentType(() => ({
    name: 'Doc',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (doc) => `./src/docs/${doc._raw.flattenedPath}`,
        },
    },
}));

export default makeSource({
    contentDirPath: './src/docs',
    documentTypes: [Doc],
});

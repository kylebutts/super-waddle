import {
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import rehypePrettyCode from 'rehype-pretty-code'

export const Paper = defineDocumentType(() => ({
  name: "Paper",
  filePathPattern: `papers/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    author: {
      type: "string",
      description: "Array of authors",
      required: true,
    },
    links: {
      type: "string",
      description: "Array of authors",
      required: false,
    },
    category: {
      type: "string",
      description: "Array of Categories",
      required: true,
    },
    status: {
      type: "string",
      description: "Status of paper. WIP, R&R, Under Review, Published",
      required: true,
    },
    display: {
      type: "boolean",
      required: false,
      default: true,
    },
  },
  computedFields,
}));

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blog/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    author: {
      type: "string",
      description: "Array of authors",
      required: true,
    },
    date: {
      type: "string",
      required: false,
    },
    description: {
      type: "string",
      required: true,
    },
    category: {
      type: "string",
      required: false,
    },
    display: {
      type: "boolean",
      required: false,
      default: true,
    },
  },
  computedFields,
}));

export const OpenSource = defineDocumentType(() => ({
  name: "OpenSource",
  filePathPattern: `open-source/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: false,
    },
  },
  computedFields,
}));

const computedFields = {
  slug: {
    type: "string",
    resolve: doc => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
  },
};

const prettyCodeOptions = {
  theme: {
    dark:  'rose-pine-moon',
    light: 'rose-pine-dawn'
  },
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{type: 'text', value: ' '}];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push('highlighted');
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ['word'];
  },
}

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Paper, Blog, OpenSource],
  mdx: {
    remarkPlugins: [
      remarkMath,
    ],
    rehypePlugins: [
      rehypeCodeTitles,
      rehypeKatex,
      [rehypePrettyCode, prettyCodeOptions],
    ],
  },
});

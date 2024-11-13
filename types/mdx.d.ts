interface BlogMetadata {
  title: string;
  date: string;
  author: string;
  desc: string;
}

declare module '*.mdx' {
  import { Element } from 'mdx/types';

  export const metadata: BlogMetadata;
  export default function MDXContent(): Element;
}

// "use client";

import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

type ProjectMarkdownProps = {
  title: string;
  source: string;
};

export default function ProjectMarkdown({
  title,
  source,
}: ProjectMarkdownProps) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="mb-8 text-3xl font-bold tracking-tight">{title}</h1>

      <div
        className="
          prose prose-zinc max-w-none
          prose-headings:font-semibold
          prose-a:text-blue-600 hover:prose-a:text-blue-500
          prose-pre:rounded-xl prose-pre:bg-zinc-900
          prose-code:rounded prose-code:bg-zinc-100 prose-code:px-1 prose-code:py-0.5
          dark:prose-invert dark:prose-a:text-blue-400 dark:prose-pre:bg-zinc-950
        "
      >
        <MDXRemote
          source={source}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </div>
    </article>
  );
}

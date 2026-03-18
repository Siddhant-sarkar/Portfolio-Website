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
          prose-pre:rounded-xl prose-pre:border prose-pre:border-zinc-200 prose-pre:bg-zinc-100 prose-pre:text-zinc-900
          prose-code:before:content-none prose-code:after:content-none
          [&_:not(pre)>code]:rounded [&_:not(pre)>code]:bg-zinc-100 [&_:not(pre)>code]:px-1 [&_:not(pre)>code]:py-0.5
          [&_pre_code]:bg-transparent [&_pre_code]:p-0
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

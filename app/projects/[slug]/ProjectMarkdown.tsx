// "use client";

import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";

type ProjectMarkdownProps = {
  title: string;
  source: string;
};

export default function ProjectMarkdown({
  title,
  source,
}: ProjectMarkdownProps) {
  return (
    <article className="mx-auto max-w-3xl px-6 md:px-20 py-16">
      <h1 className="mb-10 font-serif font-normal text-5xl md:text-6xl leading-[1.05] text-jazz-fg">
        {title}
      </h1>

      <div
        className="
        prose prose-invert max-w-none
        prose-headings:font-sans prose-headings:font-semibold
        prose-p:text-jazz-muted prose-li:text-jazz-muted
        prose-strong:text-jazz-fg
        prose-a:text-jazz-accent hover:prose-a:opacity-78
        prose-pre:overflow-x-auto prose-pre:rounded-[6px] prose-pre:border prose-pre:border-jazz-line prose-pre:bg-jazz-surface prose-pre:text-jazz-fg
        prose-code:before:content-none prose-code:after:content-none
        prose-hr:border-jazz-line
        [&_:not(pre)>code]:rounded [&_:not(pre)>code]:bg-jazz-surface [&_:not(pre)>code]:px-1 [&_:not(pre)>code]:py-0.5
        [&_pre_code]:px-4 [&_pre_code]:py-4
      "
      >
        <MDXRemote
          source={source}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm, remarkMath],
              rehypePlugins: [rehypeKatex, rehypeHighlight],
            },
          }}
        />
      </div>
    </article>
  );
}

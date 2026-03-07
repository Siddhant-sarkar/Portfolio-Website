import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import ProjectMarkdown from "./ProjectMarkdown";

type PageProps = { params: Promise<{ slug: string }> };

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "content/projects", `${slug}.mdx`);
  if (!slug || !fs.existsSync(filePath)) notFound();

  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);

  return (
    <ProjectMarkdown title={String(data.title ?? slug)} source={content} />
  );
}

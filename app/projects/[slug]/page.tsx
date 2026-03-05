// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";
// import { remark } from "remark";
// import html from "remark-html";

// interface ProjectPageProps {
//   params: {
//     slug: string;
//   };
// }

// export default async function ProjectPage({ params }: ProjectPageProps) {
//   const filePath = path.join(
//     process.cwd(),
//     "content/projects",
//     `${params.slug}.md`,
//   );

//   const file = fs.readFileSync(filePath, "utf8");
//   console.log(file);
//   const { content, data } = matter(file);

//   const processed = await remark().use(html).process(content);

//   const contentHtml = processed.toString();

//   return (
//     <article className="max-w-3xl mx-auto px-6 py-24">
//       <h1 className="text-4xl font-bold mb-6">{data.title}</h1>

//       <div
//         className="prose dark:prose-invert"
//         dangerouslySetInnerHTML={{ __html: contentHtml }}
//       />
//     </article>
//   );
// }

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  console.log("Received slug:", slug);
  if (!slug || slug === "undefined") notFound();

  const filePath = path.join(process.cwd(), "content/projects", `${slug}.md`);
  console.log("File path:", filePath);
  //   if (!fs.existsSync(filePath)) notFound();

  const file = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(file);
  const processed = await remark().use(html).process(content);

  return (
    <article className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-6">{String(data.title ?? slug)}</h1>
      <div
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: processed.toString() }}
      />
    </article>
  );
}

import fs from "node:fs";
import path from "path";
import matter from "gray-matter";

export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

const projectsDirectory = path.join(process.cwd(), "content/projects");

export function getProjects(): Project[] {
  const files = fs.readdirSync(projectsDirectory);

  return files.map((filename) => {
    const slug = filename.replace(".md", "");

    const filePath = path.join(projectsDirectory, filename);
    const file = fs.readFileSync(filePath, "utf8");

    const { data } = matter(file);

    return {
      slug,
      title: data.title,
      description: data.description,
      image: data.image,
    };
  });
}

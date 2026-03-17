"use client";

import Link from "next/link";
import { projects } from "./Projects";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProjectCarousel() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`/projects/${project.slug}`}
          className="block h-full"
        >
          <Card className="h-full min-h-44 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">{project.title}</CardTitle>
            </CardHeader>

            <CardContent className="flex h-full flex-col justify-between">
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}

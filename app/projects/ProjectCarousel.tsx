"use client";

import Link from "next/link";
import { projects } from "./Projects";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProjectCarousel() {
  return (
    <div className="relative w-full">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        {/* Carousel content: vertical on mobile, horizontal on md+ */}
        <CarouselContent className="flex flex-col sm:flex-col md:flex-row gap-4">
          {projects.map((project) => (
            <CarouselItem
              key={project.slug}
              className="sm:basis-full md:basis-1/2 lg:basis-1/2"
            >
              <Link href={`/projects/${project.slug}`} className="block h-full">
                <Card className="h-full cursor-pointer hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="flex flex-col justify-between h-full">
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation buttons visible on md+ screens */}
        <CarouselPrevious className="hidden md:flex absolute top-1/2 left-0 transform -translate-y-1/2 bg-white dark:bg-zinc-800 p-2 rounded-full shadow-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors cursor-pointer z-10" />
        <CarouselNext className="hidden md:flex absolute top-1/2 right-0 transform -translate-y-1/2 bg-white dark:bg-zinc-800 p-2 rounded-full shadow-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors cursor-pointer z-10" />
      </Carousel>
    </div>
  );
}

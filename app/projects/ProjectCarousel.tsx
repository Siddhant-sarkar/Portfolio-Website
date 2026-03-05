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
    <div className="relative">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem
              key={project.slug}
              className="md:basis-1/2 lg:basis-1/2"
            >
              <Link href={`/projects/${project.slug}`}>
                <Card className="cursor-pointer hover:shadow-lg transition">
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

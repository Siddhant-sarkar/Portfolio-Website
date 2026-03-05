import ProjectCarousel from "./ProjectCarousel";
import { Separator } from "@/components/ui/separator";

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 space-y-12">
      {/* HEADER */}
      <div className="space-y-6">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
          ENDEAVOURS
        </h1>

        <p className="text-muted-foreground max-w-xl">
          Experiments, products, and technical explorations across quantitative
          finance, competitive programming and software.
        </p>
      </div>

      {/* HORIZONTAL LINE */}
      <Separator className="my-10 h-px w-full bg-zinc-300 dark:bg-zinc-700" />

      {/* CAROUSEL */}
      <ProjectCarousel />
    </section>
  );
}

import ProjectCarousel from "./ProjectCarousel";

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-3 gap-16">
        {/* LEFT COLUMN */}
        <div className="md:col-span-1">
          <div className="sticky top-32 space-y-6">
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
              ENDEAVOURS
            </h1>

            <p className="text-muted-foreground max-w-xs">
              Experiments, products, and technical explorations across
              quantitative finance, competitive programming and software.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="md:col-span-2">
          <ProjectCarousel />
        </div>
      </div>
    </section>
  );
}

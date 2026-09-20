"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Eyebrow from "../components/site/Eyebrow";
import MonoLabel from "../components/site/MonoLabel";
import { projects } from "./Projects";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(
    () => projects.filter((p) => filter === "All" || p.category === filter),
    [filter]
  );

  return (
    <>
      <section className="px-6 md:px-20 pt-16 pb-10 flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-8 flex flex-col gap-7">
            <Eyebrow>Selected work</Eyebrow>
            <h1 className="font-serif font-normal text-6xl sm:text-7xl md:text-8xl lg:text-[128px] leading-[0.95] text-jazz-fg m-0">
              Projects
            </h1>
          </div>
          <p className="md:col-span-4 font-sans text-lg leading-relaxed text-jazz-muted m-0">
            Web apps, data tools and practice aids. Mostly things I wanted to
            exist.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => {
              const active = cat === filter;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  className={cn(
                    "h-11 px-5 rounded-full font-sans text-[15px] transition-colors cursor-pointer",
                    active
                      ? "bg-jazz-accent text-jazz-ink font-semibold glass-primary-shadow"
                      : "glass-chip text-jazz-fg"
                  )}
                >
                  {cat}
                </button>
              );
            })}
          </div>
          <MonoLabel>
            Showing {filtered.length}{" "}
            {filtered.length === 1 ? "project" : "projects"}
          </MonoLabel>
        </div>
      </section>

      <section className="px-6 md:px-20 pt-5 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <article
              key={project.slug}
              className="glass-panel flex flex-col overflow-hidden"
            >
              <div className="h-[180px] shrink-0 border-b border-jazz-line glass-inset-placeholder" />
              <div className="flex-grow p-7 flex flex-col gap-3">
                <Eyebrow>{project.category}</Eyebrow>
                <h3 className="font-serif font-normal text-3xl leading-[1.08] text-jazz-fg m-0">
                  {project.title}
                </h3>
                <p className="font-sans text-[15px] leading-relaxed text-jazz-muted m-0">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="glass-tag font-mono text-[11px] uppercase tracking-[0.12em] text-jazz-muted px-2.5 py-1.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="font-mono text-xs uppercase tracking-[0.12em] text-jazz-fg no-underline hover:opacity-78 transition-opacity"
                  >
                    View project →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

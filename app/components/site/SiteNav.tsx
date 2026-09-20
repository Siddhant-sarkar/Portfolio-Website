"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/music", label: "Music" },
  { href: "/fitness", label: "Fitness" },
  { href: "/projects", label: "Projects" },
  { href: "/photos", label: "Photos" },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="glass-nav h-[88px] shrink-0 border-b border-jazz-line px-6 md:px-20 flex items-center justify-between">
      <Link
        href="/"
        className="flex items-baseline gap-3.5 no-underline text-jazz-fg"
      >
        <span className="font-serif text-[26px] md:text-[32px] leading-none">
          Sonny Sarkar
        </span>
        <span className="hidden sm:inline font-mono text-xs uppercase tracking-[0.12em] text-jazz-muted">
          Dev · Guitar
        </span>
      </Link>

      <nav className="flex gap-6 md:gap-10 items-center">
        {links.map((link) => {
          const active =
            link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-sans text-sm md:text-base no-underline py-3 border-b-2 border-transparent transition-opacity hover:opacity-78",
                active
                  ? "text-jazz-fg font-medium border-jazz-accent"
                  : "text-jazz-muted"
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

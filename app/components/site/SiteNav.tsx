"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="glass-nav relative h-[88px] shrink-0 border-b border-jazz-line px-6 md:px-20 flex items-center justify-between">
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

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-10 items-center">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "font-sans text-base no-underline py-3 border-b-2 border-transparent transition-opacity hover:opacity-78",
              isActive(link.href)
                ? "text-jazz-fg font-medium border-jazz-accent"
                : "text-jazz-muted"
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile menu toggle */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="md:hidden flex items-center justify-center h-11 w-11 -mr-2 text-jazz-fg"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile menu panel */}
      {open ? (
        <nav
          id="mobile-nav-menu"
          className="glass-nav md:hidden absolute left-0 right-0 top-full border-b border-jazz-line flex flex-col px-6 py-4"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "font-sans text-lg no-underline py-4 border-b border-jazz-line last:border-b-0",
                isActive(link.href) ? "text-jazz-fg font-medium" : "text-jazz-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}

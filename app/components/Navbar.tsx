"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Desktop */}
        <nav className="hidden w-full items-center justify-between md:flex">
          <div className="flex items-center gap-8">
            <Link
              href="/projects"
              className="text-sm font-medium hover:opacity-70 transition"
            >
              Projects
            </Link>
            <Link
              href="/music"
              className="text-sm font-medium hover:opacity-70 transition"
            >
              Music
            </Link>
          </div>

          <Link href="/" className="text-xl font-bold tracking-wider">
            Sonny
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="/fitness"
              className="text-sm font-medium hover:opacity-70 transition"
            >
              Fitness
            </Link>
            <Link
              href="/photos"
              className="text-sm font-medium hover:opacity-70 transition"
            >
              Photos
            </Link>
          </div>
        </nav>

        {/* Mobile Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 md:hidden">
          <Link href="/" className="text-lg font-bold tracking-wider">
            Sonny
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="ml-auto md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                {open ? (
                  <X className="h-5 w-5 transition-transform duration-200" />
                ) : (
                  <Menu className="h-5 w-5 transition-transform duration-200" />
                )}
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-full">
              <div className="flex h-full flex-col items-center justify-center gap-8 text-2xl font-semibold">
                <Link href="/" onClick={() => setOpen(false)}>
                  Home
                </Link>
                <Link href="/projects" onClick={() => setOpen(false)}>
                  Projects
                </Link>
                <Link href="/music" onClick={() => setOpen(false)}>
                  Music
                </Link>
                <Link href="/fitness" onClick={() => setOpen(false)}>
                  Fitness
                </Link>
                <Link href="/photos" onClick={() => setOpen(false)}>
                  Photos
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

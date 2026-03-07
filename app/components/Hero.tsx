"use client";
// This component uses client-side features like useState and useEffect
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Youtube, User, Twitter, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const roles = [
  "Data Scientist",
  "Quant Trader",
  "Competitive Programmer",
  "Indie iOS App Developer",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full">
      <div className="mx-auto grid min-h-[90vh] max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2">
        {/* Left — Image */}
        <div className="w-full">
          <Image
            src="/hero.jpg"
            alt="Hero image"
            width={800}
            height={1000}
            priority
            className="h-auto w-full rounded-3xl object-contain"
          />
        </div>

        {/* Right — Text */}
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Hi,
            <br />I am Sonny.
          </h1>

          {/* Animated Role */}
          <div className="mt-6 h-16 md:h-20 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={roles[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-semibold tracking-tight md:text-5xl text-muted-foreground"
              >
                {roles[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Social Links */}
          <div className="mt-12 w-full max-w-xl">
            <div className="grid grid-cols-2 gap-4">
              <Button
                asChild
                variant="outline"
                className="h-14 w-full rounded-full border-2 text-sm font-medium transition-colors
                 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              >
                <Link
                  href="/aboutMe"
                  className="flex items-center justify-center gap-2"
                >
                  <User className="h-4 w-4" />
                  About Me
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-14 w-full rounded-full border-2 text-sm font-medium transition-colors
                 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              >
                <Link
                  href="https://www.linkedin.com/in/siddhant1556/"
                  target="_blank"
                  className="flex items-center justify-center gap-2"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-14 w-full rounded-full border-2 text-sm font-medium transition-colors
                 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              >
                <Link
                  href="https://youtube.com/YoooSonny"
                  target="_blank"
                  className="flex items-center justify-center gap-2"
                >
                  <Youtube className="h-4 w-4" />
                  YouTube
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-14 w-full rounded-full border-2 text-sm font-medium transition-colors
                 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              >
                <Link
                  href="https://github.com/Siddhant-sarkar"
                  target="_blank"
                  className="flex items-center justify-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-14 w-full rounded-full border-2 text-sm font-medium transition-colors
                 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              >
                <Link
                  href="https://x.com/SarkarSonnig"
                  target="_blank"
                  className="flex items-center justify-center gap-2"
                >
                  <Twitter className="h-4 w-4" />
                  X.com
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-14 w-full rounded-full border-2 text-sm font-medium transition-colors
                 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              >
                <Link
                  href="https://codeforces.com/profile/__V3NU5"
                  target="_blank"
                  className="flex items-center justify-center gap-2"
                >
                  <Rocket className="h-4 w-4" />
                  Codeforces
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

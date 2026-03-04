"use client";

import { Button } from "@/components/ui/button";
import NextLink from "next/link";
import { Link as LinkIcon, Mail, Folder } from "lucide-react";
import Image from "next/image";

const education = [
  {
    year: "2018 - 2022",
    title: "B.Sc. in Computer Science",
    institution: "Technische Universität Hamburg",
    logo: "/tu-hamburg.png",
    description:
      "Focused on Data Science, Algorithms, and Software Engineering.",
  },
  {
    year: "2022 - 2024",
    title: "M.Sc. in Quantitative Finance",
    institution: "University of Zurich",
    logo: "/zurich.png",
    description:
      "Specialized in algorithmic trading, financial modeling, and risk management.",
  },
];

const employment = [
  {
    year: "2022 - 2023",
    title: "Data Scientist",
    company: "FinTech Co.",
    logo: "/fintech.png",
    description:
      "Built predictive models for customer behavior and financial forecasting.",
  },
  {
    year: "2023 - Present",
    title: "Quant Trader",
    company: "Trading Firm",
    logo: "/tradingfirm.png",
    description:
      "Developed automated trading strategies leveraging machine learning and Python.",
  },
];

export default function AboutMeTimeline() {
  return (
    <section className="w-full py-20 bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-4 gap-16">
        {/* Left Column: Heading + Sticky Photo */}
        <div className="md:col-span-1 flex flex-col items-center md:items-start">
          {/* Big Heading */}
          <h2 className="text-6xl md:text-8xl font-extrabold mb-12 tracking-tight">
            ABOUT ME
          </h2>

          {/* Sticky Container */}
          <div className="sticky top-32 w-full flex flex-col items-center md:items-start gap-8">
            {/* Profile Photo */}
            <div className="w-60 md:w-64">
              <Image
                src="/profile.jpg"
                alt="Sonny Profile"
                width={300}
                height={450}
                className="rounded-xl object-cover shadow-lg"
              />
            </div>

            {/* Buttons */}
            <div className="w-full max-w-xs grid grid-cols-1 gap-4">
              {/* Projects */}
              <Button
                asChild
                variant="outline"
                className="h-20 w-full rounded-full border-2
               transition-all duration-300
               hover:bg-black hover:text-white
               dark:hover:bg-white dark:hover:text-black"
              >
                <NextLink
                  href="/projects"
                  className="flex items-center gap-4 px-6"
                >
                  <Folder size={20} />

                  <div className="flex flex-col text-left leading-tight">
                    <span className="font-semibold">Projects</span>
                    <span className="text-xs opacity-70">
                      View my work & experiments
                    </span>
                  </div>
                </NextLink>
              </Button>

              {/* Contact */}
              <Button
                asChild
                variant="outline"
                className="h-20 w-full rounded-full border-2
               transition-all duration-300
               hover:bg-black hover:text-white
               dark:hover:bg-white dark:hover:text-black"
              >
                <NextLink
                  href="/contact"
                  className="flex items-center gap-4 px-6"
                >
                  <Mail size={20} />

                  <div className="flex flex-col text-left leading-tight">
                    <span className="font-semibold">Contact Me</span>
                    <span className="text-xs opacity-70">
                      Let’s build something great
                    </span>
                  </div>
                </NextLink>
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column: Timelines */}
        <div className="md:col-span-3 flex flex-col gap-20">
          <div className="pl-0 md:pl-12">
            {" "}
            {/* padding so timeline aligns with top of photo */}
            {/* Education */}
            <div>
              <h3 className="text-4xl font-bold mb-8 border-b-2 border-dashed pb-4">
                Education
              </h3>
              <div className="flex flex-col gap-12">
                {education.map((edu, idx) => (
                  <div key={idx} className="flex gap-6 relative">
                    {/* Logo + Vertical Line */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 relative">
                        <Image
                          src={edu.logo}
                          alt={edu.institution}
                          fill
                          className="object-contain rounded-full"
                        />
                      </div>
                      {idx !== education.length - 1 && (
                        <div className="w-0.5 bg-dashed h-full mt-2" />
                      )}
                    </div>

                    {/* Text */}
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {edu.year}
                      </p>
                      <h4 className="text-2xl font-semibold">{edu.title}</h4>
                      <p className="text-lg">{edu.institution}</p>
                      <p className="mt-2 text-base text-muted-foreground">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Employment */}
            <div>
              <h3 className="text-4xl font-bold mb-8 border-b-2 border-dotted pb-4">
                Employment
              </h3>
              <div className="flex flex-col gap-12">
                {employment.map((job, idx) => (
                  <div key={idx} className="flex gap-6 relative">
                    {/* Logo + Vertical Line */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 relative">
                        <Image
                          src={job.logo}
                          alt={job.company}
                          fill
                          className="object-contain rounded-full"
                        />
                      </div>
                      {idx !== employment.length - 1 && (
                        <div className="w-0.5 bg-dotted h-full mt-2" />
                      )}
                    </div>

                    {/* Text */}
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {job.year}
                      </p>
                      <h4 className="text-2xl font-semibold">{job.title}</h4>
                      <p className="text-lg">{job.company}</p>
                      <p className="mt-2 text-base text-muted-foreground">
                        {job.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import NextLink from "next/link";
import { Mail, Folder } from "lucide-react";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  detailedDescription: string[];
};

type Education = {
  year: string;
  title: string;
  institution: string;
  logo: string;
  description: string[];
};

type Job = {
  year: string;
  title: string;
  company: string;
  logo: string;
  description: string[];
};

const education: Education[] = [
  {
    year: "2024 - Present",
    title: "M.Sc. in Data Science",
    institution: "Technische Universität Hamburg",
    logo: "/tuhh.png",
    description: [
      "Core subjects: Advanced Machine Learning, Statistical Models, Linear Models, and Regression.",
      "Mathematics specialization: Hierarchical Algorithms, Probability Theory, Numerical Methods for Differential Equations, and Numerical Mathematics II.",
      "Business management coursework: Accounting and Financial Statements, Future Trends, and Marketing.",
    ],
  },
  {
    year: "2020 - 2024",
    title: "B.Sc. in Computer Science",
    institution: "Thapar Institute of Engineering and Technology",
    logo: "/tiet.png",
    description: [
      "Specialized in High Performance Computing with coursework in Large Distributed Computing, GPU Computing (in collaboration with NVIDIA), and Parallel Computing.",
      "University Assistant Teacher: Delivered tutorial lectures to approximately 50 students in Engineering Mathematics 1 and 2.",
      "Bachelor’s Thesis: Built a full-stack platform to improve donation transparency using AI-driven user assistance, blockchain-verified smart contracts, and data analytics dashboards.",
      "Implemented a low-latency LLM chatbot for donor support achieving <320 ms response latency through prompt optimization and caching.",
      "Deployed and tested Solidity smart contracts on the Sepolia testnet to ensure transparent and verifiable donation transactions.",
      "Built analytics dashboards using Tableau with the Australian Charity Dataset (2017) to visualize funding, impact, and compliance metrics.",
      "Designed an interactive connected-graph based UI to visualize blockchain transactions and donation flows.",
    ],
  },
];

const employment: Job[] = [
  {
    year: "Apr 2025 -  Sep 2025",
    title: "Working Student - Frontend Android Developer",
    company: "Evitado GmbH",
    logo: "/evitado.png",
    description: [
      "Real-time collision warning interface: Developed and implemented a highly reliable UI with Jetpack Compose to provide pilots and operators with clear and immediate alerts based on live LiDAR sensor data.",
      "Document access integration: Integrated a native PDF viewer for quick access to operating manuals and flight-specific documentation directly within the application.",
      "Custom device configuration: Rooted and deployed a customized Android firmware on airline-issued tablets to ensure system stability, performance optimization, and field readiness.",
      "Remote device management: Enabled ADB shell over SSH for efficient remote diagnostics, updates, and maintenance of deployed tablets.",
      "Interdisciplinary collaboration: Worked closely with backend and systems engineers to synchronize UI logic with real-time sensor data streams and safety-critical operational requirements.",
      "Performance and usability optimization: Conducted rapid UI prototyping, iterations, and stress tests to meet stringent performance, reliability, and usability requirements in mission-critical aviation environments.",
    ],
  },
  {
    year: "Jan 2024 - Jun 2024",
    title: "Intern Android and Machine Learning Developer",
    company: "Samsung R&D Institute India",
    logo: "/samsung.png",
    description: [
      "Developed a standalone Android application in Java for automatic detection of acronyms and context-dependent disambiguation across multiple domains including medicine, aviation, and law.",
      "Replaced the existing CSP + GloVe pipeline with Transformer models (BERT, DistilBERT, and LLaMA variants) and fine-tuned domain-specific models using Hugging Face datasets to significantly improve disambiguation accuracy.",
      "Enabled offline on-device inference through model quantization and runtimes such as TensorFlow Lite, ONNX Runtime, and GGUF, ensuring low-latency performance without cloud dependency.",
      "Migrated semantic lookup to a vector database (Weaviate, Pinecone, Milvus) for fast semantic search while maintaining a relational database for transactional metadata.",
      "Implemented incremental and federated learning capabilities allowing the application to learn new acronyms from user input while preserving user privacy.",
      "Refactored the UI using Java-based Android Views and XML following Material Design principles, adding accessibility support, dark mode, autocomplete, and speech recognition to improve input efficiency.",
    ],
  },
];

const projects: Project[] = [
  {
    title: "Project A",
    description: "Designed and built a responsive UI for desktop and mobile.",
    detailedDescription: [
      "Designed and built a responsive UI for desktop and mobile.",
      "Implemented reusable components and cleaner state handling.",
      "Improved performance and accessibility across key pages.",
    ],
  },
  {
    title: "Project B",
    description: "Built a machine learning model for financial forecasting.",
    detailedDescription: [
      "Built a machine learning model for financial forecasting.",
      "Trained on historical data and evaluated on test data.",
      "Improved accuracy and efficiency.",
    ],
  },
];

export default function AboutMeTimeline() {
  return (
    <section className="w-full py-20 bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-4 gap-16">
        {/* LEFT COLUMN */}
        <div className="md:col-span-1 flex flex-col items-center md:items-start">
          <h2 className="text-6xl md:text-8xl font-extrabold mb-12 tracking-tight">
            ABOUT ME
          </h2>

          <div className="sticky top-32 w-full flex flex-col items-center md:items-start gap-8">
            {/* Profile */}
            <div className="w-60 md:w-64">
              <Image
                src="/profile.png"
                alt="Sonny Profile"
                width={300}
                height={450}
                className="rounded-xl object-cover shadow-lg"
              />
            </div>

            {/* Buttons */}
            <div className="w-full max-w-xs grid grid-cols-1 gap-4">
              <Button
                asChild
                variant="outline"
                className="h-20 w-full rounded-full border-2 transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
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

              <Button
                asChild
                variant="outline"
                className="h-20 w-full rounded-full border-2 transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              >
                <NextLink
                  href="https://x.com/SarkarSonnig"
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

        {/* RIGHT COLUMN */}
        <div className="md:col-span-3 flex flex-col gap-20">
          <div className="pl-0 md:pl-12">
            {/* EDUCATION */}
            <div>
              <h3 className="text-4xl font-bold mb-8 border-b-2 border-dashed pb-4">
                Education
              </h3>

              <div className="flex flex-col gap-12">
                {education.map((edu, idx) => (
                  <div key={idx} className="flex gap-6 relative">
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

                    <div>
                      <p className="text-sm text-muted-foreground">
                        {edu.year}
                      </p>

                      <h4 className="text-2xl font-semibold">{edu.title}</h4>

                      <p className="text-lg">{edu.institution}</p>

                      <ul className="mt-3 list-disc pl-5 text-base text-muted-foreground space-y-1">
                        {edu.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* EMPLOYMENT */}
            <div>
              <h3 className="text-4xl font-bold mb-8 border-b-2 border-dotted pb-4">
                Employment
              </h3>

              <div className="flex flex-col gap-12">
                {employment.map((job, idx) => (
                  <div key={idx} className="flex gap-6 relative">
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

                    <div>
                      <p className="text-sm text-muted-foreground">
                        {job.year}
                      </p>

                      <h4 className="text-2xl font-semibold">{job.title}</h4>

                      <p className="text-lg">{job.company}</p>

                      <ul className="mt-3 list-disc pl-5 text-base text-muted-foreground space-y-1">
                        {job.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
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

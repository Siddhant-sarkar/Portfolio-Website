import Link from "next/link";
import Button from "./components/site/Button";
import Eyebrow from "./components/site/Eyebrow";
import MonoLabel from "./components/site/MonoLabel";
import SectionHeading from "./components/site/SectionHeading";
import { projects } from "./projects/Projects";

function VinylRing() {
  const radii = [372, 340, 308, 276, 244, 212, 180, 148, 116];
  return (
    <svg
      className="absolute -right-40 md:-right-56 top-2 pointer-events-none opacity-60 md:opacity-100"
      width="500"
      height="500"
      viewBox="0 0 760 760"
      aria-hidden="true"
    >
      {radii.map((r) => (
        <circle
          key={r}
          cx="380"
          cy="380"
          r={r}
          fill="none"
          stroke="var(--jazz-line)"
          strokeWidth="2"
        />
      ))}
      <circle cx="380" cy="380" r="84" fill="var(--jazz-accent)" />
      <circle cx="380" cy="380" r="9" fill="var(--jazz-bg)" />
    </svg>
  );
}

function FretboardCard() {
  return (
    <div className="relative glass-panel p-6 flex flex-col gap-5">
      <div className="flex justify-between items-baseline">
        <MonoStrong>Dm7 · drop-2</MonoStrong>
        <span className="font-mono text-xs uppercase tracking-[0.12em] text-jazz-muted">
          ii in C major
        </span>
      </div>
      <svg
        role="img"
        aria-label="Dm7 drop-2 voicing on the fretboard, frets 5 to 8"
        viewBox="0 0 471 236"
        className="w-full h-auto"
      >
        {[24, 58, 92, 126, 160, 194].map((y, i) => (
          <line
            key={y}
            x1="40"
            y1={y}
            x2="440"
            y2={y}
            stroke="var(--jazz-edge)"
            strokeWidth={1.2 + i * 0.5}
          />
        ))}
        {[40, 140, 240, 340, 440].map((x) => (
          <line key={x} x1={x} y1="24" x2={x} y2="194" stroke="var(--jazz-line)" strokeWidth="2" />
        ))}
        <text x="20" y="29" textAnchor="middle" className="fill-jazz-muted font-mono text-[16px]">×</text>
        <text x="20" y="199" textAnchor="middle" className="fill-jazz-muted font-mono text-[16px]">×</text>

        <circle cx="190" cy="58" r="13" fill="var(--jazz-bg)" stroke="var(--jazz-accent)" strokeWidth="2" />
        <text x="190" y="62" textAnchor="middle" className="fill-jazz-accent font-mono text-[12px] font-medium">F</text>

        <circle cx="90" cy="92" r="13" fill="var(--jazz-bg)" stroke="var(--jazz-accent)" strokeWidth="2" />
        <text x="90" y="96" textAnchor="middle" className="fill-jazz-accent font-mono text-[12px] font-medium">C</text>

        <circle cx="290" cy="126" r="13" fill="var(--jazz-bg)" stroke="var(--jazz-accent)" strokeWidth="2" />
        <text x="290" y="130" textAnchor="middle" className="fill-jazz-accent font-mono text-[12px] font-medium">A</text>

        <circle cx="90" cy="160" r="14" fill="var(--jazz-accent)" />
        <text x="90" y="164" textAnchor="middle" className="fill-jazz-ink font-mono text-[12px] font-medium">D</text>

        {["5", "6", "7", "8"].map((label, i) => (
          <text
            key={label}
            x={90 + i * 100}
            y="226"
            textAnchor="middle"
            className="fill-jazz-muted font-mono text-[12px]"
          >
            {label}
          </text>
        ))}
      </svg>
      <p className="font-sans text-sm leading-relaxed text-jazz-muted m-0">
        The first chord of a ii–V–I in C: Dm7, G7, Cmaj7. Voice leading is the whole game.
      </p>
    </div>
  );
}

function MonoStrong({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-xs uppercase tracking-[0.12em] text-jazz-fg">
      {children}
    </span>
  );
}

const rooms = [
  {
    n: "01",
    title: "Music",
    href: "/music",
    desc: "Jazz, neo-soul and funk: what I'm practising and where I'm headed.",
  },
  {
    n: "02",
    title: "Fitness",
    href: "/fitness",
    desc: "The split, the big three lifts and a running training log.",
  },
  {
    n: "03",
    title: "Projects",
    href: "/projects",
    desc: "Web apps, data tools and practice aids I've built.",
  },
  {
    n: "04",
    title: "Photos",
    href: "/photos",
    desc: "Moments away from the screen.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-6 md:px-20 py-16 md:py-0 md:min-h-[760px] flex items-center">
        <VinylRing />
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-6 w-full items-center">
          <div className="md:col-span-7 flex flex-col gap-8">
            <Eyebrow>Hamburg · Developer + jazz guitarist</Eyebrow>
            <h1 className="font-serif font-normal text-6xl sm:text-7xl md:text-8xl lg:text-[132px] leading-[0.92] text-jazz-fg m-0">
              Software
              <br />
              that <em className="italic text-jazz-accent">swings.</em>
            </h1>
            <p className="font-sans text-lg md:text-xl leading-relaxed text-jazz-muted m-0 max-w-xl">
              I&apos;m Sid Sarkar, a developer and M.Sc. Data Science student in
              Hamburg. I build real-time systems and data tools, and I play
              jazz guitar.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/projects">See the projects</Button>
              <Button href="/music" variant="outline">
                Listen to the music
              </Button>
            </div>
          </div>
          <div className="md:col-span-5">
            <FretboardCard />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="border-t border-jazz-line px-6 md:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
          <div className="md:col-span-3">
            <Eyebrow>01 — About</Eyebrow>
          </div>
          <div className="md:col-span-9 flex flex-col gap-14">
            <p className="font-serif font-normal text-3xl md:text-4xl lg:text-[46px] leading-[1.18] text-jazz-fg m-0 max-w-3xl">
              I&apos;m a developer who thinks in systems and plays in swing
              time. I build real-time tools and data products, and on the
              guitar I chase voicings, bebop lines and the discipline of
              listening.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="flex flex-col gap-3 pt-6 border-t border-jazz-line">
                <Eyebrow className="text-xs">Studying</Eyebrow>
                <p className="font-sans text-[17px] leading-relaxed text-jazz-fg m-0">
                  M.Sc. Data Science at Technische Universität Hamburg.
                </p>
              </div>
              <div className="flex flex-col gap-3 pt-6 border-t border-jazz-line">
                <Eyebrow className="text-xs">Experience</Eyebrow>
                <p className="font-sans text-[17px] leading-relaxed text-jazz-fg m-0">
                  Samsung R&amp;D (on-device NLP/ML) and Evitado (Android,
                  real-time sensor systems).
                </p>
              </div>
              <div className="flex flex-col gap-3 pt-6 border-t border-jazz-line">
                <Eyebrow className="text-xs">Looking for</Eyebrow>
                <p className="font-sans text-[17px] leading-relaxed text-jazz-fg m-0">
                  Werkstudent roles in Hamburg, 20 h/week, in quant
                  development and ML engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR ROOMS */}
      <section className="border-t border-jazz-line px-6 md:px-20 py-20">
        <div className="flex flex-col gap-10">
          <SectionHeading eyebrow="02 — Explore" title="Four rooms" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {rooms.map((room) => (
              <Link
                key={room.href}
                href={room.href}
                className="h-[280px] md:h-[360px] p-8 glass-panel flex flex-col no-underline text-jazz-fg hover:opacity-78 transition-opacity"
              >
                <MonoLabel>{room.n}</MonoLabel>
                <h3 className="font-serif font-normal text-4xl md:text-5xl lg:text-[60px] leading-none text-jazz-fg m-0 mt-auto">
                  {room.title}
                </h3>
                <p className="font-sans text-base leading-relaxed text-jazz-muted m-0 mt-3">
                  {room.desc}
                </p>
                <Eyebrow className="mt-6">Enter →</Eyebrow>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="border-t border-jazz-line px-6 md:px-20 py-20">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <SectionHeading eyebrow="03 — Selected work" title="Things I've built" />
            <Link
              href="/projects"
              className="font-mono text-[13px] uppercase tracking-[0.12em] text-jazz-fg no-underline py-3 hover:opacity-78 transition-opacity"
            >
              All projects →
            </Link>
          </div>
          <div className="flex flex-col border-b border-jazz-line">
            {projects.map((project, i) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="py-6 md:h-28 md:py-0 grid grid-cols-1 md:grid-cols-[80px_minmax(0,4fr)_minmax(0,4fr)_minmax(0,3fr)] gap-2 md:gap-6 items-center border-t border-jazz-line no-underline text-jazz-fg hover:opacity-78 transition-opacity"
              >
                <MonoLabel>{String(i + 1).padStart(2, "0")}</MonoLabel>
                <h3 className="font-serif font-normal text-2xl md:text-[40px] leading-[1.05] text-jazz-fg m-0">
                  {project.title}
                </h3>
                <p className="font-sans text-base leading-relaxed text-jazz-muted m-0">
                  {project.description}
                </p>
                <p className="font-mono text-xs uppercase tracking-[0.12em] leading-relaxed text-jazz-muted m-0">
                  {project.tags.join(" · ")}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="glass-band border-t border-jazz-line px-6 md:px-20 py-24">
        <div className="flex flex-col items-center justify-center text-center gap-7 max-w-4xl mx-auto">
          <Eyebrow>04 — Contact</Eyebrow>
          <h2 className="font-serif font-normal text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-none text-jazz-fg m-0">
            Let&apos;s play, or build something together.
          </h2>
          <p className="font-sans text-lg leading-relaxed text-jazz-muted m-0 max-w-xl">
            Open to Werkstudent roles in Hamburg, and to jam sessions. I&apos;m
            looking for bandmates too.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-2">
            <Button href="mailto:siddhant.sarkar999@gmail.com">Email me</Button>
            <Button href="https://github.com/Siddhant-sarkar" variant="outline">
              GitHub
            </Button>
            <Button
              href="https://www.linkedin.com/in/siddhant1556/"
              variant="outline"
            >
              LinkedIn
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

import Eyebrow from "../components/site/Eyebrow";
import MonoLabel from "../components/site/MonoLabel";
import SectionHeading from "../components/site/SectionHeading";
import Button from "../components/site/Button";
import YouTubeEmbed from "../components/YouTubeEmbed";
import PhotoFrame from "../components/site/PhotoFrame";
import { standards, woodshed, recordings, rig } from "@/lib/music-data";
import { heroPhotos } from "@/content/photos";

export default function MusicPage() {
  return (
    <>
      {/* HERO */}
      <section className="px-6 md:px-20 py-16 lg:py-0 lg:min-h-[760px] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 w-full items-center">
          <div className="lg:col-span-7 flex flex-col gap-7">
            <Eyebrow>Jazz · Neo-soul · Funk</Eyebrow>
            <h1 className="font-serif font-normal text-6xl sm:text-7xl md:text-8xl lg:text-[128px] leading-[0.95] text-jazz-fg m-0">
              Chasing the
              <br />
              <em className="italic text-jazz-accent">right note.</em>
            </h1>
            <p className="font-sans text-lg leading-relaxed text-jazz-muted m-0 max-w-xl">
              Jazz first, with neo-soul and funk close behind. I&apos;m working
              toward session-level guitar with a solid theory backbone: voicings
              I can move, lines that target chord tones, and time that swings.
            </p>
          </div>
          <div className="lg:col-span-5">
            <PhotoFrame
              src={heroPhotos.music.src}
              alt={heroPhotos.music.alt}
              position={heroPhotos.music.position}
              caption={heroPhotos.music.caption}
            />
          </div>
        </div>
      </section>

      {/* WOODSHED */}
      <section className="border-t border-jazz-line px-6 md:px-20 py-20">
        <div className="flex flex-col gap-10">
          <SectionHeading eyebrow="01 — In the woodshed" title="What I'm practising" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {woodshed.map((item) => (
              <article
                key={item.numeral}
                className="min-h-[248px] p-8 glass-panel flex flex-col gap-3.5"
              >
                <Eyebrow>{item.numeral}</Eyebrow>
                <h3 className="font-serif font-normal text-3xl leading-[1.1] text-jazz-fg m-0">
                  {item.title}
                </h3>
                <p className="font-sans text-[15px] leading-relaxed text-jazz-muted m-0">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STANDARDS */}
      <section className="border-t border-jazz-line px-6 md:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <SectionHeading
              eyebrow="02 — Repertoire"
              title="Standards"
              description="Tunes I can comp and solo through, called at jam sessions."
            />
          </div>
          <div className="md:col-span-8 border-b border-jazz-line">
            <div className="hidden sm:grid grid-cols-[minmax(0,1fr)_180px_160px] gap-6 h-12 items-center">
              <MonoLabel>Tune</MonoLabel>
              <MonoLabel>Key</MonoLabel>
              <MonoLabel>Feel</MonoLabel>
            </div>
            {standards.map((standard) => (
              <div
                key={standard.tune}
                className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_180px_160px] gap-1 sm:gap-6 py-4 sm:h-[76px] sm:items-center border-t border-jazz-line"
              >
                <p className="font-serif font-normal text-3xl leading-[1.1] text-jazz-fg m-0">
                  {standard.tune}
                </p>
                <p className="font-mono text-[13px] uppercase tracking-[0.12em] text-jazz-muted m-0">
                  {standard.key}
                </p>
                <p className="font-mono text-[13px] uppercase tracking-[0.12em] text-jazz-muted m-0">
                  {standard.feel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECORDINGS */}
      <section className="border-t border-jazz-line px-6 md:px-20 py-20">
        <div className="flex flex-col gap-10">
          <SectionHeading eyebrow="03 — Listen" title="Recordings" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {recordings.map((rec) => (
              <div key={rec.src} className="flex flex-col gap-4">
                <YouTubeEmbed src={rec.src} title={rec.title} />
                <div className="flex flex-col gap-1.5">
                  <p className="font-serif font-normal text-[28px] leading-[1.1] text-jazz-fg m-0">
                    {rec.title}
                  </p>
                  <MonoLabel>{rec.caption}</MonoLabel>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RIG */}
      <section className="border-t border-jazz-line px-6 md:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <Eyebrow>04 — Rig</Eyebrow>
          </div>
          <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {rig.map((item) => (
              <div key={item.label} className="flex flex-col gap-3 pt-6 border-t border-jazz-line">
                <Eyebrow>{item.label}</Eyebrow>
                <h3 className="font-serif font-normal text-3xl leading-[1.1] text-jazz-fg m-0">
                  {item.title}
                </h3>
                <p className="font-sans text-[15px] leading-relaxed text-jazz-muted m-0">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANDMATES CTA */}
      <section className="glass-band border-t border-jazz-line px-6 md:px-20 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="font-serif font-normal text-4xl md:text-5xl lg:text-[64px] leading-[1.05] text-jazz-fg m-0 max-w-2xl text-center md:text-left">
            Playing in Hamburg? I&apos;m looking for bandmates.
          </h2>
          <Button href="mailto:siddhant.sarkar999@gmail.com">Let&apos;s jam</Button>
        </div>
      </section>
    </>
  );
}

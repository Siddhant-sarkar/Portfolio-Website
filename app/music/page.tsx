"use client";

import Image from "next/image";

type SoloOrRiff = {
  caption: string;
  src?: string;
  youtubeEmbedUrl?: string;
};

const solosAndRiffs: SoloOrRiff[] = [
  {
    src: "/music_page/solo-2.mp4",
    caption:
      "Random Jam session with my band The Guild, I shreaded a solo over.",
  },
  {
    src: "/music_page/solo-3.mp4",
    caption:
      "It was snowing outside, so I decided to record a improvise a little bit.",
  },
  {
    src: "/music_page/solo-5.mp4",
    caption: "My Solo over a song Dört Duvar by Canby and Wolker.",
  },
  {
    src: "/music_page/solo-1.mp4",
    caption: "Flamenco style solo over a classical Am - G - F -E progression.",
  },
  {
    src: "/music_page/solo-4.mp4",
    caption: "If the song `Heartless` by the Weeknd had a guitar solo.",
  },
];

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xl font-semibold">{value}</p>
      <p className="text-l text-muted-foreground">{label}</p>
    </div>
  );
}

export default function MusicPage() {
  return (
    <section className="w-full py-20 bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-4 gap-50">
        {/* LEFT COLUMN (IDENTICAL STRUCTURE TO ABOUT) */}
        <div className="md:col-span-1">
          <div className="sticky top-0 h-screen flex flex-col items-center md:items-start pt-20">
            {/* TITLE */}
            <h2 className="text-6xl md:text-8xl font-extrabold mb-12 tracking-tight">
              MUSIC
            </h2>
            {/* IMAGE */}
            <div className="w-full md:w-80 lg:w-90 mb-10">
              <Image
                src="/music.jpg"
                alt="Music"
                width={1800}
                height={2400}
                className="rounded-xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="md:col-span-3 flex flex-col gap-22">
          <div className="pl-0 md:pl-12">
            <h2 className="text-4xl font-bold mb-8 border-b-2 border-dotted pb-4">
              My Affiliations
            </h2>
            <div className="mb-20 max-w-2xl">
              <p className="text-muted-foreground leading-relaxed mb-8">
                Completely self trained. But have a strong foundation in music
                theory and performance. Started with Rock and Metal, then moved
                to blues and funk, and currently expoloring jazz.
              </p>
              <div className="grid grid-cols-1 gap-6 max-w-md pb-2">
                <Stat label="Jazz Guitarist" value="Skyliner Big Band." />
              </div>
              <div className="grid grid-cols-1 gap-6 max-w-md pb-2">
                <Stat label="Lead Guitarist" value="The Guild" />
              </div>
            </div>

            {/* TRAINING SPLIT */}
            <div className="pb-4">
              <h2 className="text-4xl font-bold mb-8 border-b-2 border-dotted pb-4">
                My Solos and Riffs
              </h2>

              <div className="flex flex-col gap-8 text-muted-foreground">
                {solosAndRiffs.map((video) => (
                  <figure
                    key={video.src ?? video.youtubeEmbedUrl ?? video.caption}
                    className="space-y-3"
                  >
                    {video.youtubeEmbedUrl ? (
                      <div className="aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted">
                        <iframe
                          src={video.youtubeEmbedUrl}
                          title={video.caption}
                          className="h-full w-full"
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <video
                        controls
                        preload="auto"
                        playsInline
                        className="mx-auto h-auto w-auto max-h-[70vh] max-w-full rounded-xl border border-border bg-muted"
                      >
                        <source src={video.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                    <figcaption className="text-m">{video.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>

            {/* My Gear */}
            <div className="pb-4">
              <h2 className="text-4xl font-bold mb-8 border-b-2 border-dotted pb-4">
                My Gear
              </h2>

              <div className="text-muted-foreground space-y-4">
                <p>
                  I have a collection of guitars and amps sims that I use for
                  different styles and tones. My main guitar is a Jackson JS32
                  Super- Stratocaster.
                </p>

                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-foreground">
                      Electric Guitar :
                    </strong>{" "}
                    — Jackson JS32 Super-Stratocaster (HH, 24 frets, compound
                    radius) | Versatile for rock, metal, blues tones just warm
                    enough for jazz.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Acoustic Guitar :
                    </strong>{" "}
                    — Ibanez AEG50-BK (Fishman pickup, cutaway) | Perfect for
                    unplugged sessions.
                  </li>
                  <li>
                    <strong className="text-foreground">Strings : </strong> —
                    Ernie Ball Regular Slinky (10-46) | Balanced tension for
                    both rhythm and lead playing.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Audio Interface :{" "}
                    </strong>{" "}
                    — Focusrite Scarlett 2i2 (3rd Gen) | Reliable, low-latency
                    recording
                  </li>
                  <li>
                    <strong className="text-foreground">DAW : </strong> —{" "}
                    Ableton Live 13 | Intuitive workflow for both composition
                    and live performances. recording
                  </li>
                  <li>
                    <strong className="text-foreground">Pick : </strong> —{" "}
                    Gravity Pick - Standar "Tipp" | Oval hole for better grip,
                    medium thickness for versatility for fast legato runs and
                    chunky rhythm work.
                  </li>
                  <li>
                    <strong className="text-foreground"> Amp Simp : </strong> —{" "}
                    Guitar Rig 7 Pro | Wide range of amp models and effects for
                    crafting tones
                  </li>
                </ul>
              </div>
            </div>

            {/* NUTRITION */}
            <div className="pb-4">
              <h2 className="text-4xl font-bold mb-8 border-b-2 border-dashed pb-4">
                Nutrition
              </h2>

              <div className="grid md:grid-cols-2 gap-10 text-muted-foreground">
                <div className="space-y-3">
                  <p className="font-semibold text-foreground">Approach</p>
                  <p>
                    Lean bulk with ~200–300 kcal surplus. Focus on whole foods.
                  </p>

                  <p className="font-semibold text-foreground mt-4">
                    Daily Structure
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Oats + eggs</li>
                    <li>Chicken + rice</li>
                    <li>Yogurt snack</li>
                    <li>Whey post workout</li>
                    <li>Meat + carbs dinner</li>
                  </ul>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between border-b pb-2">
                    <span>Protein</span>
                    <span className="font-medium">140g</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>Carbs</span>
                    <span className="font-medium">250g</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>Fats</span>
                    <span className="font-medium">70g</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>Calories</span>
                    <span className="font-medium">2150</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

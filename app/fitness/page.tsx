import { cn } from "@/lib/utils";
import Eyebrow from "../components/site/Eyebrow";
import MonoLabel from "../components/site/MonoLabel";
import SectionHeading from "../components/site/SectionHeading";
import PhotoFrame from "../components/site/PhotoFrame";
import {
  stats,
  split,
  bigThree,
  goals,
  recentSessions,
} from "@/lib/fitness-data";
import { heroPhotos } from "@/content/photos";

function StatTile({ big, label }: { big: string; label: string }) {
  return (
    <div className="min-h-[150px] p-5 glass-panel flex flex-col justify-between">
      <p className="font-serif font-normal text-4xl sm:text-5xl lg:text-6xl xl:text-[72px] leading-none text-jazz-accent m-0">
        {big}
      </p>
      <p className="font-sans text-sm leading-snug text-jazz-muted m-0">{label}</p>
    </div>
  );
}

export default function FitnessPage() {
  return (
    <>
      {/* HERO */}
      <section className="px-6 md:px-20 py-16 lg:py-0 lg:min-h-[760px] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 w-full items-center">
          <div className="lg:col-span-7 flex flex-col gap-7">
            <Eyebrow>Strength · Hypertrophy</Eyebrow>
            <h1 className="font-serif font-normal text-6xl sm:text-7xl md:text-8xl lg:text-[120px] leading-[0.95] text-jazz-fg m-0">
              Built for the
              <br />
              <em className="italic text-jazz-accent">V-taper.</em>
            </h1>
            <p className="font-sans text-lg leading-relaxed text-jazz-muted m-0 max-w-xl">
              Compound-heavy sessions, minimal accessory volume, and a split
              trimmed to fit real life. Efficiency is the constraint.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <StatTile big={stats.trainingDaysPerWeek} label="training days a week" />
              <StatTile big={stats.coreLiftsLabel} label="core lifts: squat, bench, deadlift" />
              <StatTile big={stats.bodyweightKg} label="current bodyweight, kg" />
              <StatTile big={stats.yearsTraining} label="years of training" />
            </div>
          </div>
          <div className="lg:col-span-5">
            <PhotoFrame
              src={heroPhotos.fitness.src}
              alt={heroPhotos.fitness.alt}
              position={heroPhotos.fitness.position}
              caption={heroPhotos.fitness.caption}
            />
          </div>
        </div>
      </section>

      {/* SPLIT */}
      <section className="border-t border-jazz-line px-6 md:px-20 py-20">
        <div className="flex flex-col gap-10">
          <SectionHeading eyebrow="01 — The split" title="Seven days, five sessions" />
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {split.map((day) => (
              <div
                key={day.day}
                className={cn(
                  "min-h-[220px] p-5 flex flex-col",
                  day.rest ? "glass-soft" : "glass-panel"
                )}
              >
                <p
                  className={cn(
                    "font-mono text-xs uppercase tracking-[0.12em] m-0",
                    day.rest ? "text-jazz-muted" : "text-jazz-accent"
                  )}
                >
                  {day.day}
                </p>
                <h3
                  className={cn(
                    "font-serif font-normal text-3xl leading-none m-0 mt-auto",
                    day.rest ? "text-jazz-muted" : "text-jazz-fg"
                  )}
                >
                  {day.label}
                </h3>
                {day.rest ? (
                  <p className="font-sans text-sm leading-snug text-jazz-muted m-0 mt-2">
                    Recover.
                  </p>
                ) : (
                  <>
                    <MonoLabel className="mt-3">Anchor</MonoLabel>
                    <p className="font-sans text-[15px] leading-snug text-jazz-fg m-0 mt-1">
                      {day.anchor}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BIG THREE */}
      <section className="border-t border-jazz-line px-6 md:px-20 py-20">
        <div className="flex flex-col gap-10">
          <SectionHeading eyebrow="02 — The big three" title="Bench, squat, deadlift" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bigThree.map((lift) => (
              <article
                key={lift.name}
                className="min-h-[340px] p-8 glass-panel flex flex-col"
              >
                <Eyebrow>{lift.dayLabel}</Eyebrow>
                <h3 className="font-serif font-normal text-5xl md:text-[56px] leading-none text-jazz-fg m-0 mt-3">
                  {lift.name}
                </h3>
                <MonoLabel className="mt-auto">Personal best</MonoLabel>
                <p className="font-serif font-normal text-6xl md:text-[72px] leading-none text-jazz-fg m-0 mt-1">
                  {lift.bestWeightKg}{" "}
                  <span className="font-mono text-base uppercase tracking-[0.12em] text-jazz-muted">
                    kg
                  </span>
                </p>
                <div className="mt-5 pt-4 border-t border-jazz-line">
                  <p className="font-sans text-sm leading-relaxed text-jazz-muted m-0">
                    Best set: {lift.bestSet}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GOALS */}
      <section className="border-t border-jazz-line px-6 md:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <Eyebrow>03 — Goals</Eyebrow>
          </div>
          <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {goals.map((goal) => (
              <div key={goal.numeral} className="flex flex-col gap-3 pt-6 border-t border-jazz-line">
                <Eyebrow>{goal.numeral}</Eyebrow>
                <h3 className="font-serif font-normal text-[34px] leading-[1.1] text-jazz-fg m-0">
                  {goal.title}
                </h3>
                <p className="font-sans text-[15px] leading-relaxed text-jazz-muted m-0">
                  {goal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOG */}
      <section className="border-t border-jazz-line px-6 md:px-20 py-20">
        <div className="flex flex-col gap-10">
          <SectionHeading eyebrow="04 — Log" title="Recent sessions" />
          <div className="border-b border-jazz-line">
            <div className="hidden md:grid grid-cols-[130px_110px_minmax(0,1fr)_140px_120px_minmax(0,1.2fr)] gap-4 h-12 items-center">
              <MonoLabel>Date</MonoLabel>
              <MonoLabel>Session</MonoLabel>
              <MonoLabel>Lift</MonoLabel>
              <MonoLabel>Sets × reps</MonoLabel>
              <MonoLabel>Weight</MonoLabel>
              <MonoLabel>Notes</MonoLabel>
            </div>
            {recentSessions.length === 0 ? (
              <p className="font-sans text-base leading-relaxed text-jazz-muted py-10 border-t border-jazz-line">
                No sessions logged yet.
              </p>
            ) : (
              recentSessions.map((entry, i) => (
                <div key={i} className="border-t border-jazz-line">
                  {/* Mobile: labeled stack */}
                  <div className="md:hidden grid grid-cols-[80px_minmax(0,1fr)] gap-x-4 gap-y-2 py-4">
                    <MonoLabel>Date</MonoLabel>
                    <p className="font-sans text-base leading-snug text-jazz-fg m-0">{entry.date}</p>
                    <MonoLabel>Session</MonoLabel>
                    <p className="font-sans text-base leading-snug text-jazz-fg m-0">{entry.session}</p>
                    <MonoLabel>Lift</MonoLabel>
                    <p className="font-sans text-base leading-snug text-jazz-fg m-0">{entry.lift}</p>
                    <MonoLabel>Sets × reps</MonoLabel>
                    <p className="font-sans text-base leading-snug text-jazz-fg m-0">{entry.setsReps}</p>
                    <MonoLabel>Weight</MonoLabel>
                    <p className="font-sans text-base leading-snug text-jazz-fg m-0">{entry.weight}</p>
                    <MonoLabel>Notes</MonoLabel>
                    <p className="font-sans text-base leading-snug text-jazz-fg m-0">{entry.notes}</p>
                  </div>

                  {/* Desktop: table row */}
                  <div className="hidden md:grid grid-cols-[130px_110px_minmax(0,1fr)_140px_120px_minmax(0,1.2fr)] gap-4 h-16 items-center">
                    <p className="font-sans text-base leading-snug text-jazz-muted m-0">{entry.date}</p>
                    <p className="font-sans text-base leading-snug text-jazz-muted m-0">{entry.session}</p>
                    <p className="font-sans text-base leading-snug text-jazz-muted m-0">{entry.lift}</p>
                    <p className="font-sans text-base leading-snug text-jazz-muted m-0">{entry.setsReps}</p>
                    <p className="font-sans text-base leading-snug text-jazz-muted m-0">{entry.weight}</p>
                    <p className="font-sans text-base leading-snug text-jazz-muted m-0">{entry.notes}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import Image from "next/image";

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xl font-semibold">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

export default function FitnessPage() {
  return (
    <section className="w-full py-20 bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-4 gap-50">
        {/* LEFT COLUMN (IDENTICAL STRUCTURE TO ABOUT) */}
        <div className="md:col-span-1">
          <div className="sticky top-0 h-screen flex flex-col items-center md:items-start pt-20">
            {/* TITLE */}
            <h2 className="text-6xl md:text-8xl font-extrabold mb-12 tracking-tight">
              FITNESS
            </h2>
            {/* IMAGE */}
            <div className="w-full md:w-80 lg:w-90 mb-10">
              <Image
                src="/fitness.jpg"
                alt="Fitness"
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
              My Mindset
            </h2>
            <div className="mb-20 max-w-2xl">
              <p className="text-muted-foreground leading-relaxed mb-8">
                Training isn’t a hobby. It’s the system underneath everything —
                discipline, structure, and long-term progression.
              </p>
              <div className="grid grid-cols-3 gap-6 max-w-md pb-2">
                <Stat label="Weekly training" value="5-6×" />
                <Stat label="Experience" value="3 yr" />
                <Stat label="Bodyweight" value="72.6 Kg" />
              </div>
              <div className="grid grid-cols-3 gap-6 max-w-md pt-2">
                <Stat label="Squat PR" value="160kgs x 12" />
                <Stat label="Deadlift PR" value="205kgs x 1" />
                <Stat label="Bench Press PR" value="95kgs x 1" />
              </div>
            </div>

            {/* TRAINING SPLIT */}
            <div className="pb-4">
              <h2 className="text-4xl font-bold mb-8 border-b-2 border-dotted pb-4">
                Training Split
              </h2>

              <div className="flex flex-col gap-12 text-muted-foreground">
                {/* DAY 1: PUSH */}
                <div>
                  <p className="text-sm">Monday</p>
                  <h3 className="text-xl font-semibold text-foreground">
                    Push — Chest, Shoulders, Triceps
                  </h3>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Flat Bench Press — 1×warmup, 3×working</li>
                    <li>Incline Dumbbell Press — 3×working</li>
                    <li>Chest Dips — 3×failure</li>
                    <li>Overhead Shoulder Press — 1×warmup, 3×working</li>
                    <li>Lateral Raises — 3×working</li>
                    <li>Close-Grip Bench Press — 3×working</li>
                  </ul>
                </div>

                {/* DAY 2: PULL */}
                <div>
                  <p className="text-sm">Tuesday</p>
                  <h3 className="text-xl font-semibold text-foreground">
                    Pull — Back, Biceps
                  </h3>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Weighted Pull-ups — 1×warmup, 3×working</li>
                    <li>Bent-Over Barbell Rows — 3×working</li>
                    <li>Chest-Supported Machine Rows — 3×working</li>
                    <li>Face Pulls — 3×working</li>
                    <li>Preacher Curls — 3×working</li>
                    <li>Incline Dumbbell Curls — 3×working</li>
                  </ul>
                </div>

                {/* DAY 3: LEGS (Quad-Focused) */}
                <div>
                  <p className="text-sm">Wednesday</p>
                  <h3 className="text-xl font-semibold text-foreground">
                    Legs — Quad-Focused
                  </h3>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Squats — 1×warmup, 6×working</li>
                    <li>Bulgarian Split Squats (Dumbbells) — 3×working</li>
                    <li>Slow Tempo Leg Extensions — 3×working</li>
                    <li>Seated Calf Raises — 3×working</li>
                  </ul>
                </div>

                {/* DAY 4: ARMS */}
                <div>
                  <p className="text-sm">Thursday</p>
                  <h3 className="text-xl font-semibold text-foreground">
                    Arms — Biceps, Triceps, Abs
                  </h3>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>EZ Bar Curls — 1×warmup, 3×working</li>
                    <li>Reverse-Grip Curls — 3×working</li>
                    <li>Dumbbell Spider Curls — 3×working</li>
                    <li>Overhead Rope Tricep Extensions — 3×working</li>
                    <li>Triceps Dips — 3×failure</li>
                    <li>Hanging Leg Raises — 3×working</li>
                    <li>Cable Crunches — 3×working</li>
                  </ul>
                </div>

                {/* DAY 5: PUSH-PULL HYBRID */}
                <div>
                  <p className="text-sm">Friday</p>
                  <h3 className="text-xl font-semibold text-foreground">
                    Push-Pull Hybrid — Chest + Back
                  </h3>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Incline Barbell Press — 1×warmup, 3×working</li>
                    <li>Weighted Chest Dips — 3×working</li>
                    <li>T-Bar Rows — 3×working</li>
                    <li>Unilateral Dumbbell Pullover — 3×working</li>
                    <li>Shrugs (Dumbbell/Barbell) — 3×working</li>
                  </ul>
                </div>

                {/* DAY 6: LEGS (Hamstrings, Glutes, Shoulders) */}
                <div>
                  <p className="text-sm">Saturday</p>
                  <h3 className="text-xl font-semibold text-foreground">
                    Legs — Hamstrings, Glutes, Shoulders
                  </h3>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Romanian Deadlifts — 1×warmup, 3×working</li>
                    <li>Conventional Deadlifts — 1×warmup, 3×working</li>
                    <li>Nordic Hamstring Curls — 3×working</li>
                    <li>Hip Thrusts — 3×working</li>
                    <li>Seated Overhead Shoulder Press — 3×working</li>
                    <li>Rear Deltoid Flys — 3×working</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* PHILOSOPHY */}
            <div className="pb-4">
              <h2 className="text-4xl font-bold mb-8 border-b-2 border-dotted pb-4">
                Philosophy
              </h2>

              <div className="text-muted-foreground space-y-4">
                <p>
                  I follow a hybrid model — hypertrophy-focused lifting with
                  conditioning layered in. No crash dieting, no extremes.
                </p>

                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-foreground">
                      Consistency over intensity
                    </strong>{" "}
                    — showing up wins
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Progressive overload
                    </strong>{" "}
                    — always improve
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Sleep is critical
                    </strong>{" "}
                    — recovery builds muscle
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Enjoy the process
                    </strong>{" "}
                    — sustainability &gt; perfection
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

export const stats = {
  trainingDaysPerWeek: "5",
  coreLiftsLabel: "3",
  bodyweightKg: "72.6",
  yearsTraining: "3",
};

export type SplitDay = {
  day: string;
  label: string;
  anchor?: string;
  rest?: boolean;
};

export const split: SplitDay[] = [
  { day: "Day 1", label: "Push", anchor: "Bench press" },
  { day: "Day 2", label: "Pull", anchor: "Deadlift" },
  { day: "Day 3", label: "Legs", anchor: "Squat" },
  { day: "Day 4", label: "Rest", rest: true },
  { day: "Day 5", label: "Upper", anchor: "Incline barbell press" },
  { day: "Day 6", label: "Lower", anchor: "Romanian deadlift" },
  { day: "Day 7", label: "Rest", rest: true },
];

export type BigThreeLift = {
  dayLabel: string;
  name: string;
  bestWeightKg: number;
  bestSet: string;
};

export const bigThree: BigThreeLift[] = [
  {
    dayLabel: "Push day",
    name: "Bench press",
    bestWeightKg: 95,
    bestSet: "95 kg × 1",
  },
  {
    dayLabel: "Legs day",
    name: "Squat",
    bestWeightKg: 160,
    bestSet: "160 kg × 12",
  },
  {
    dayLabel: "Pull day",
    name: "Deadlift",
    bestWeightKg: 205,
    bestSet: "205 kg × 1",
  },
];

export const goals = [
  {
    numeral: "i",
    title: "Wide back and shoulders",
    description: "The V-taper: lats and delts carry the silhouette.",
  },
  {
    numeral: "ii",
    title: "Strong legs",
    description:
      "Quads on one side, hamstrings and glutes on the other. Both chains, every cycle.",
  },
  {
    numeral: "iii",
    title: "Big arms and forearms",
    description: "Built from heavy compounds first, accessories second.",
  },
  {
    numeral: "iv",
    title: "A developed core",
    description: "Trained as part of the split, not left to chance.",
  },
];

export type SessionLogEntry = {
  date: string;
  session: string;
  lift: string;
  setsReps: string;
  weight: string;
  notes: string;
};

export const recentSessions: SessionLogEntry[] = [];

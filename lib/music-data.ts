export type Standard = {
  tune: string;
  key: string;
  feel: string;
};

export const standards: Standard[] = [
  { tune: "Blue Bossa", key: "C minor", feel: "Bossa" },
];

export const woodshed = [
  {
    numeral: "i",
    title: "Shell voicings and drop-2",
    description:
      "Comping vocabulary built from 3rds and 7ths, extended into drop-2 shapes across the middle strings.",
  },
  {
    numeral: "ii",
    title: "ii–V–I voice leading",
    description:
      "Smooth motion between chords: keeping common tones and moving by step through the changes.",
  },
  {
    numeral: "iii",
    title: "Bebop scales",
    description:
      "Dominant, major and Dorian bebop scales, so eighth-note lines land chord tones on the beat.",
  },
  {
    numeral: "iv",
    title: "Approach notes and enclosures",
    description:
      "Chromatic approaches and enclosures applied to ii–V–I progressions for a jazzier vocabulary.",
  },
  {
    numeral: "v",
    title: "Altered dominants and m7♭5",
    description:
      "Colour for the V chord and the minor ii: altered sounds, half-diminished shapes, melodic minor sources.",
  },
  {
    numeral: "vi",
    title: "Reading while comping",
    description:
      "Following a chart bar by bar while the swing feel keeps going underneath.",
  },
];

export type Recording = {
  title: string;
  caption: string;
  src: string;
};

export const recordings: Recording[] = [
  {
    title: "Hotel California solo",
    caption: "My take on the iconic solo, harmonic minor and pentatonic scales over the original progression.",
    src: "https://www.youtube.com/watch?v=9VK0dAm-IVY",
  },
  {
    title: "Dört Duvar solo",
    caption: "My solo over Dört Duvar by Canby and Wolker.",
    src: "/music_page/solo-5.mp4",
  },
  {
    title: "Flamenco improvisation",
    caption: "Flamenco style solo over a classical Am–G–F–E progression.",
    src: "/music_page/solo-1.mp4",
  },
];

export const rig = [
  {
    label: "Guitar",
    title: "Jackson JS32 Super-Stratocaster",
    description:
      "HH, 24 frets, compound radius — versatile for rock, metal and blues, warm enough for jazz. Ibanez AEG50 acoustic for unplugged sessions.",
  },
  {
    label: "Amp and pedals",
    title: "Guitar Rig 7 Pro → Focusrite Scarlett 2i2",
    description:
      "Amp modelling into a low-latency interface. Ernie Ball Regular Slinky strings, Gravity Standard Tipp pick.",
  },
  {
    label: "Software",
    title: "Ableton Live 13",
    description: "DAW for composition, recording and live performance.",
  },
];

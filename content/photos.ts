export type HeroPhoto = {
  key: "home" | "music" | "fitness";
  src: string;
  alt: string;
  position: string;
  caption: string;
  width: number;
  height: number;
};

export const heroPhotos: Record<HeroPhoto["key"], HeroPhoto> = {
  home: {
    key: "home",
    src: "/profile.png",
    alt: "Sonny Sarkar smiling at a desk",
    position: "50% 30%",
    caption: "Sonny Sarkar · Hamburg",
    width: 840,
    height: 1018,
  },
  music: {
    key: "music",
    src: "/music.jpg",
    alt: "Sonny playing an electric guitar",
    position: "38% 42%",
    caption: "Practice",
    width: 1855,
    height: 3088,
  },
  fitness: {
    key: "fitness",
    src: "/fitness.jpg",
    alt: "Sonny after a training session",
    position: "50% 8%",
    caption: "Training",
    width: 1676,
    height: 3008,
  },
};

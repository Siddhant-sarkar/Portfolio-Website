import Eyebrow from "../components/site/Eyebrow";

const tiles = [
  { colStart: 1, colEnd: 6, rowStart: 1, rowEnd: 4 },
  { colStart: 6, colEnd: 10, rowStart: 1, rowEnd: 3 },
  { colStart: 10, colEnd: 13, rowStart: 1, rowEnd: 4 },
  { colStart: 6, colEnd: 10, rowStart: 3, rowEnd: 4 },
  { colStart: 1, colEnd: 5, rowStart: 4, rowEnd: 6 },
  { colStart: 5, colEnd: 9, rowStart: 4, rowEnd: 7 },
  { colStart: 9, colEnd: 13, rowStart: 4, rowEnd: 6 },
  { colStart: 1, colEnd: 5, rowStart: 6, rowEnd: 7 },
  { colStart: 9, colEnd: 13, rowStart: 6, rowEnd: 7 },
];

export default function PhotosPage() {
  return (
    <>
      <section className="px-6 md:px-20 pt-16 pb-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
        <div className="md:col-span-8 flex flex-col gap-7">
          <Eyebrow>Contact sheet</Eyebrow>
          <h1 className="font-serif font-normal text-6xl sm:text-7xl md:text-8xl lg:text-[128px] leading-[0.95] text-jazz-fg m-0">
            Photos
          </h1>
        </div>
        <p className="md:col-span-4 font-sans text-lg leading-relaxed text-jazz-muted m-0">
          Moments away from the screen.
        </p>
      </section>

      <section className="px-6 md:px-20 pt-4 pb-24">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-jazz-muted mb-6">
          Real photos coming soon.
        </p>
        <div className="flex flex-col gap-4 md:hidden">
          {tiles.map((_, i) => (
            <div key={i} className="h-44 glass-placeholder" />
          ))}
        </div>
        <div className="hidden md:grid grid-cols-12 grid-rows-[repeat(6,180px)] gap-6">
          {tiles.map((tile, i) => (
            <div
              key={i}
              className="glass-placeholder"
              style={{
                gridColumnStart: tile.colStart,
                gridColumnEnd: tile.colEnd,
                gridRowStart: tile.rowStart,
                gridRowEnd: tile.rowEnd,
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
}

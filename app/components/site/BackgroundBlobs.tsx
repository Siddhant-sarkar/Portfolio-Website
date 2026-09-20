"use client";

type Blob = {
  className: string;
  color: string;
  left: string;
  top: string;
  width: string;
  height: string;
};

// Positions derived from the design's 1440x900 reference board, converted to
// viewport percentages so the layer scales with `position: fixed; inset: 0`.
const blobs: Blob[] = [
  { className: "blob-1", color: "var(--jazz-accent)", left: "61.11%", top: "4.44%", width: "36.11%", height: "51.11%" },
  { className: "blob-2", color: "var(--jazz-umber)", left: "-12.5%", top: "42.22%", width: "43.06%", height: "62.22%" },
  { className: "blob-3", color: "var(--jazz-copper)", left: "37.5%", top: "55.56%", width: "26.39%", height: "37.78%" },
  { className: "blob-4", color: "var(--jazz-accent)", left: "77.78%", top: "60%", width: "20.83%", height: "37.78%" },
  { className: "blob-5", color: "var(--jazz-brown)", left: "18.06%", top: "3.33%", width: "19.44%", height: "28.89%" },
  { className: "blob-6", color: "var(--jazz-umber)", left: "52.78%", top: "33.33%", width: "25%", height: "35.56%" },
];

export default function BackgroundBlobs() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 overflow-hidden z-0 pointer-events-none"
    >
      {blobs.map((blob) => (
        <div
          key={blob.className}
          className={`blob ${blob.className} absolute`}
          style={{
            left: blob.left,
            top: blob.top,
            width: blob.width,
            height: blob.height,
            backgroundColor: blob.color,
          }}
        />
      ))}
    </div>
  );
}

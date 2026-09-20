import { isYouTubeUrl, toYouTubeEmbedUrl } from "@/lib/youtube";

export default function YouTubeEmbed({
  src,
  title,
  className,
}: {
  src: string;
  title: string;
  className?: string;
}) {
  const isYouTube = isYouTubeUrl(src);

  return (
    <div
      className={`aspect-video w-full overflow-hidden glass-panel ${className ?? ""}`}
    >
      {isYouTube ? (
        <iframe
          src={toYouTubeEmbedUrl(src)}
          title={title}
          className="h-full w-full"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <video controls preload="metadata" playsInline className="h-full w-full object-cover">
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}

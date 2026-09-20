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
  const embedSrc = isYouTubeUrl(src) ? toYouTubeEmbedUrl(src) : src;

  return (
    <div
      className={`aspect-video w-full overflow-hidden glass-panel ${className ?? ""}`}
    >
      <iframe
        src={embedSrc}
        title={title}
        className="h-full w-full"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}

import Image from "next/image";

type PhotoFrameProps = {
  src: string;
  alt: string;
  position: string;
  caption: string;
  priority?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export default function PhotoFrame({
  src,
  alt,
  position,
  caption,
  priority,
  className,
  children,
}: PhotoFrameProps) {
  return (
    <div
      className={`relative w-full max-w-[480px] mx-auto lg:max-w-none lg:mx-0 aspect-[4/5] ${className ?? ""}`}
    >
      {/* Offset frosted plate behind the photo */}
      <div className="absolute inset-0 translate-x-3 translate-y-3 md:translate-x-[22px] md:translate-y-[22px] glass-soft" />

      {/* Photo */}
      <div className="absolute inset-0 rounded-[22px] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 519px, 100vw"
          className="object-cover"
          style={{
            objectPosition: position,
            filter: "saturate(.92) contrast(1.04) brightness(.94)",
          }}
        />
        {/* Bottom fade so the caption stays readable */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(14,12,10,.55), transparent 40%)",
          }}
        />
      </div>

      {/* Glass rim */}
      <div
        className="absolute inset-0 rounded-[22px] pointer-events-none border"
        style={{
          borderColor: "rgba(255,244,228,.26)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,.42)",
        }}
      />

      {/* Caption chip */}
      <div className="glass-tag absolute left-5 bottom-5 inline-flex items-center gap-2 px-3 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-jazz-accent shrink-0" />
        <span className="font-mono text-xs uppercase tracking-[0.12em] text-jazz-fg">
          {caption}
        </span>
      </div>

      {children}
    </div>
  );
}

import Eyebrow from "./Eyebrow";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-serif font-normal text-4xl md:text-5xl lg:text-[64px] leading-[1.05] text-jazz-fg m-0">
        {title}
      </h2>
      {description ? (
        <p className="font-sans text-base leading-relaxed text-jazz-muted m-0 max-w-sm">
          {description}
        </p>
      ) : null}
    </div>
  );
}

import { cn } from "@/lib/utils";

export default function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-mono text-xs md:text-[13px] uppercase tracking-[0.12em] text-jazz-accent m-0",
        className
      )}
    >
      {children}
    </p>
  );
}

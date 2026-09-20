import { cn } from "@/lib/utils";

export default function MonoLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-mono text-xs uppercase tracking-[0.12em] text-jazz-muted m-0",
        className
      )}
    >
      {children}
    </p>
  );
}

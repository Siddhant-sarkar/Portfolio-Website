import Link from "next/link";

const links = [
  { href: "/music", label: "Music" },
  { href: "/fitness", label: "Fitness" },
  { href: "/projects", label: "Projects" },
  { href: "/photos", label: "Photos" },
];

export default function SiteFooter() {
  return (
    <footer className="min-h-[140px] shrink-0 border-t border-jazz-line px-6 md:px-20 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
      <p className="font-sans text-sm leading-relaxed text-jazz-muted m-0">
        © 2026 Siddhant Sarkar · Hamburg, Germany
      </p>
      <div className="flex gap-6 md:gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-sans text-sm leading-relaxed text-jazz-muted no-underline hover:opacity-78 transition-opacity"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}

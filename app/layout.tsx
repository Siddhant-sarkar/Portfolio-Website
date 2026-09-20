import type { Metadata } from "next";
import { DM_Sans, IBM_Plex_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SiteNav from "./components/site/SiteNav";
import SiteFooter from "./components/site/SiteFooter";
import BackgroundBlobs from "./components/site/BackgroundBlobs";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Sid Sarkar — Dev · Guitar",
  description:
    "Sid Sarkar: developer and M.Sc. Data Science student in Hamburg. Real-time systems, data tools, and jazz guitar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${plexMono.variable} ${instrumentSerif.variable} antialiased bg-jazz-bg text-jazz-fg font-sans`}
      >
        <BackgroundBlobs />
        <div className="relative z-10 flex flex-col min-h-screen">
          <SiteNav />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

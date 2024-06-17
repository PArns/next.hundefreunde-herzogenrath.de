import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import PageBaseConfiguration from "@/configuration";

import Footer from "@/components/navigation/footer";
import Link from "next/link";

import "@/app/globals.css";
import "@/app/body.css";

const inter = Inter({ subsets: ["latin"] });

export function generateMetadata(): Readonly<Metadata> {
  const config = PageBaseConfiguration();

  return {
    title: {
      default: config.title,
      template: `%s - Die Hundeschule in der StädteRegion Aachen | Hundefreunde Herzogenrath e.V`,
    },
    description: config.description,
    keywords: [
      "Hundefreunde Herzogenrath",
      "Hundeschule",
      "Hundetraining",
      "Hundeverein",
      "Hundesport",
      "Agility",
      "Welpen Erziehung",
      "Hunde Erziehung",
      "Hundeveranstaltungen Herzogenrath",
    ],
    creator: config.creator,
    publisher: config.publisher,
    metadataBase: config.baseUrl,
    robots: { index: true, follow: true },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${inter.className} relative min-h-screen overflow-x-hidden`}
      >
        {children}
        <Footer>
          <div className="flex gap-4">
            <Link href={"/anfahrt"}>Anfahrt & Kontakt</Link>
            <Link href={"/impressum"}>Impressum</Link>
          </div>
        </Footer>
        <Analytics />
      </body>
    </html>
  );
}

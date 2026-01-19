import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PageBaseConfiguration from "@/configuration";

import "@/app/globals.css";
import "@/app/body.css";

const inter = Inter({ subsets: ["latin"] });

export function generateMetadata(): Readonly<Metadata> {
  const config = PageBaseConfiguration();

  return {
    title: {
      default: config.title,
      template: `%s - Die Hundeschule in der Städteregion Aachen | Hundefreunde Herzogenrath e.V`,
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
    openGraph: {
      title: {
        default: config.title,
        template: `%s - Die Hundeschule in der Städteregion Aachen | Hundefreunde Herzogenrath e.V`,
      },
      description: config.description,
      locale: "de-DE",
      siteName: "Hundefreunde Herzogenrath e.V.",
      type: "website",
      images: { 
        url: "/jumbotron/gruppe.jpg", 
        width: 1200, 
        height: 630,
        alt: "Hundefreunde Herzogenrath - Hundetraining Gruppe"
      },
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      images: ["/jumbotron/gruppe.jpg"],
    },
    alternates: {
      canonical: config.baseUrl,
    },
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
      </body>
    </html>
  );
}

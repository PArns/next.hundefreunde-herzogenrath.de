import GalleryCard from "@/components/gallery-card";
import ContentBox from "@/components/layout/default-box";
import {
  GetGalleries,
  ImageGallery,
} from "@/data-provider/contentful/provider/gallery-provider";
import Kurse from "@/sections/kurse";
import Link from "next/link";

export function generateMetadata() {
  return {
    title: "Bilder unserer Veranstaltungen",
    description:
      "Hier findet ihr einige Bilder unseres Trainings, sowie einige unserer Veranstaltungen",
  };
}

export default async function Bilder() {
  const galleries: ImageGallery[] = await GetGalleries();

  return (
    <>
      <ContentBox>
        <h2>Bilder unseres Trainings & vergangener Events</h2>
        Hier findet ihr einige Bilder unseres{" "}
        <Link href="/kurse" className="text-sky-800">
          Trainings
        </Link>
        , sowie einige unserer{" "}
        <Link href="/termine" className="text-sky-800">
          Veranstaltungen
        </Link>
        .
      </ContentBox>

      <div className="grid grid-cols-1 gap-4 pb-4 lg:grid-cols-3">
        {galleries.map((g) => (
          <Link href={`/bilder/${g.slug}`} key={g.slug}>
            <GalleryCard gallery={g} />
          </Link>
        ))}
      </div>

      <Kurse />
    </>
  );
}

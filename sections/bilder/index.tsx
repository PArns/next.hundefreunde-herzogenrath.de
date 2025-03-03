import GalleryCard from "@/components/gallery-card";
import {
  GetGalleries,
  ImageGallery,
} from "@/data-provider/contentful/provider/gallery-provider";
import Link from "next/link";

export default async function Bilder() {
  const galleries: ImageGallery[] = await GetGalleries(0, 3);

  return (
    <div className="grid grid-cols-1 gap-4 pb-4 md:grid-cols-3">
      {galleries.map((g) => (
        <Link href={`/bilder/${g.slug}`} key={g.slug}>
          <GalleryCard gallery={g} />
        </Link>
      ))}
    </div>
  );
}

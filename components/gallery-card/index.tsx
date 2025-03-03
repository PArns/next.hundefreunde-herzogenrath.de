import { ImageGallery } from "@/data-provider/contentful/provider/gallery-provider";
import ContentfulImageAsset from "../contentful/image-asset";

export default function GalleryCard({ gallery }: { gallery: ImageGallery }) {
  return (
    <div className="flex h-full w-full flex-col rounded-lg border-2 border-gray-300 bg-white drop-shadow-lg">
      <div className="relative h-60">
        <ContentfulImageAsset
          asset={gallery.teaserImage}
          fill
          alt={gallery.name}
          className="rounded-t-lg object-cover"
        />
      </div>
      <div className="flex w-full px-2 pt-2 text-center text-2xl font-semibold text-sky-900">
        {gallery.name}
      </div>
      <div className="flex w-full px-2 pt-1 pb-2">{gallery.description}</div>
    </div>
  );
}

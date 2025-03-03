import { ImageGallery } from "@/data-provider/contentful/provider/gallery-provider";
import ContentfulImageAsset from "../contentful/image-asset";
import DateRenderer from "../date-renderer";

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

        <div className="absolute bottom-0 left-2 overflow-hidden">
          <div className="text-lg font-semibold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            <DateRenderer date={gallery.date} format="long" />
          </div>
        </div>
      </div>
      <div className="flex w-full px-2 pt-2 text-center text-2xl font-semibold text-sky-900">
        {gallery.name}
      </div>
      <div className="flex w-full px-2 pt-1 pb-2">{gallery.description}</div>
    </div>
  );
}

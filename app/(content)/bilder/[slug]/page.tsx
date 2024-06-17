import Button from "@/components/button";
import { getImageSource } from "@/components/contentful/image-asset";
import ContentBox from "@/components/layout/default-box";
import Lightbox from "@/components/lightbox";
import PhotoGallery, { GalleryPhoto } from "@/components/photo-gallery";
import { GetGalleryBySlug } from "@/data-provider/contentful/provider/gallery-provider";
import { notFound } from "next/navigation";

export default async function Gallerie({
  params,
}: {
  params: { slug: string };
}) {
  const gallery = await GetGalleryBySlug(params.slug);

  if (!gallery) {
    notFound();
  }

  let galleryImages: GalleryPhoto[] = [];

  gallery.images.map((image: any) => {
    galleryImages.push({
      src: getImageSource(image, 400),
      lightboxImageSrc: getImageSource(image, 1200),
      alt: image.description,
      title: image.title,
      width: image.width,
      height: image.height,
    });
  });

  return (
    <ContentBox>
      <h2>{gallery.name}</h2>
      <h4>{gallery.date.toLocaleDateString("de")}</h4>
      <div className="pb-2">{gallery.description}</div>

      <PhotoGallery photos={galleryImages} />
      <div className="pb-2 pt-6">
        <Button href="/bilder">Zurück zur Übersicht</Button>
      </div>
      <Lightbox />
    </ContentBox>
  );
}

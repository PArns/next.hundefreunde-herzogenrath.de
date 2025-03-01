import Button from "@/components/button";
import { getImageSource } from "@/components/contentful/image-asset";
import ContentBox from "@/components/layout/default-box";
import Lightbox from "@/components/lightbox";
import PhotoGallery, { GalleryPhoto } from "@/components/photo-gallery";
import PageBaseConfiguration from "@/configuration";
import {
  GetAllGallerySlugs,
  GetGalleryBySlug,
} from "@/data-provider/contentful/provider/gallery-provider";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

interface GalleryParams {
  slug: string;
}

export async function generateStaticParams(): Promise<GalleryParams[]> {
  const config = PageBaseConfiguration();
  const entries: GalleryParams[] = [];

  const galleries = await GetAllGallerySlugs();

  if (!galleries) notFound();

  galleries.forEach((g) => {
    entries.push({ slug: g.slug });
  });

  return entries;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const config = PageBaseConfiguration();
  const post = await GetGalleryBySlug(slug);
  if (!post) return {};

  return {
    metadataBase: config.baseUrl,
    title: `${post.name}`,
    description: post.description,
    openGraph: {
      type: "article",
      description: post.description,
      publishedTime: post.date.toISOString(),
      url: `${config.baseUrl}bilder/${slug}`,
      images: [
        { url: getImageSource(post.teaserImage, 800), width: 800 },
        { url: getImageSource(post.teaserImage, 1800), width: 1800 },
      ],
    },
  };
}

export default async function Gallerie({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const gallery = await GetGalleryBySlug(slug);

  if (!gallery) {
    notFound();
  }

  let galleryImages: GalleryPhoto[] = [];

  gallery.images.map((image: any) => {
    galleryImages.push({
      src: getImageSource(image, 400),
      lightboxImageSrc: getImageSource(image, 1200),
      albumTitle: gallery.name,
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

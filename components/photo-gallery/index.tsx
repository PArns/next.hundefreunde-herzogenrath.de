"use client";

import { Photo, RenderImageContext, RenderImageProps, RowsPhotoAlbum } from "react-photo-album";
import Image from "next/image";
import { showLightBoxImage } from "../lightbox";
import clsx from 'clsx';

import "react-photo-album/rows.css";

export interface GalleryPhoto extends Photo {
  lightboxImageSrc: string;
  albumTitle: string | null;
  next: GalleryPhoto | null;
  prev: GalleryPhoto | null;
}

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext,
) {
  const galleryPhoto = photo as GalleryPhoto;
  const imageClasses = clsx(
    "cursor-zoom-in opacity-0 transition-opacity",
  );

  var imageTitle = alt;

  if (galleryPhoto.albumTitle) {
    imageTitle = galleryPhoto.albumTitle;
  } else if (title) {
    imageTitle = title
  }

  return (
    <div style={{ width: "100%", position: "relative", aspectRatio: `${width} / ${height}` }}>
      <Image
        src={photo}
        alt={alt}
        title={title}
        sizes={sizes}
        className={imageClasses}
        onClick={(e) => {
          showLightBoxImage(galleryPhoto);
        }}
        onLoad={(image: any) => {
          image.currentTarget.classList.remove("opacity-0");
        }}
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />
    </div>
  );
}

export default function PhotoGallery({ photos }: { photos: GalleryPhoto[] }) {
  return (
    <RowsPhotoAlbum
      photos={photos}
      render={{ image: renderNextImage }}
      defaultContainerWidth={1200}
      spacing={10}
      sizes={{
        size: "calc(100vw - 40px)",
        sizes: [
          {
            viewport: "(max-width: 299px)",
            size: "calc(100vw - 10px)",
          },
          {
            viewport: "(max-width: 599px)",
            size: "calc(100vw - 20px)",
          },
          {
            viewport: "(max-width: 1199px)",
            size: "calc(100vw - 30px)",
          },
        ],
      }}
    />
  );
}

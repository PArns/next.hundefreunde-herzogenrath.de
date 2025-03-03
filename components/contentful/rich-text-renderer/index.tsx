import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { BLOCKS, INLINES } from "@contentful/rich-text-types";

import Link from "next/link";
import ContentfulImageAsset, { getImageSource } from "../image-asset";

import PhotoGallery, { GalleryPhoto } from "@/components/photo-gallery";
//import DynamicReactPlayer from "@/components/dynamic/react-player";
import BlogPostImage from "./blogPostImage";

function renderOptions(links: any) {
  const assetMap = new Map();
  const entryMap = new Map();

  if (links) {
    for (const asset of links.assets.block) {
      assetMap.set(asset.sys.id, asset);
    }

    for (const entry of links.entries.block) {
      entryMap.set(entry.sys.id, entry);
    }

    for (const entry of links.entries.inline) {
      entryMap.set(entry.sys.id, entry);
    }
  }

  return {
    renderNode: {
      [INLINES.EMBEDDED_ENTRY]: (node: any) => {
        if (!node.data.target) return <b>UNKNOWN TARGET!</b>;

        // find the entry in the entryMap by ID
        const entry = entryMap.get(node.data.target.sys.id);

        switch (entry.__typename) {
          case "BlogPostImage": {
            return <BlogPostImage imageData={entry} />;
          }
          case "ImageGallery": {
            let galleryImages: GalleryPhoto[] = [];

            entry.imagesCollection.items.map((image: any, index: number) => {
              if (image.width && image.height) {
                galleryImages.push({
                  src: getImageSource(image, 400),
                  lightboxImageSrc: getImageSource(image, 1200),
                  albumTitle: null,
                  alt: image.description || image.title,
                  title: image.title,
                  width: image.width,
                  height: image.height,
                  prev: null,
                  next: null,
                });
              }
            });

            galleryImages.forEach((image, index) => {
              image.prev = index > 0 ? galleryImages[index - 1] : null;
              image.next =
                index < galleryImages.length - 1
                  ? galleryImages[index + 1]
                  : null;
            });

            return <PhotoGallery photos={galleryImages} />;
          }
          /*case "BlogPostVideo": {
            return (
              <div className="flex w-auto flex-col items-center justify-center text-center">
                <DynamicReactPlayer url={entry.videoUrl} />
                {entry.title}
              </div>
            );
          }*/
          default: {
            return (
              <b className="mr-2 bg-red-500">
                UNKNOWN EMBEDDED TYPE {entry.__typename}
              </b>
            );
          }
        }
      },
      [INLINES.HYPERLINK]: (node: any) => {
        const uri = node.data.uri as string;
        const content = node.content[0];

        const external = uri.startsWith("https://");
        const target = external ? "_blank" : "";

        return (
          <Link href={uri} target={target} className="external">
            {content.value}
          </Link>
        );
      },
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        return (
          <ContentfulImageAsset
            asset={node.data.target}
            width={500}
            height={500}
            alt={node.data.target.fields.description}
          />
        );
      },
      [BLOCKS.HEADING_1]: (node: any, children: any) => {
        return <h1>{children}</h1>;
      },
      [BLOCKS.HEADING_2]: (node: any, children: any) => {
        return <h2>{children}</h2>;
      },
      [BLOCKS.HEADING_3]: (node: any, children: any) => {
        return <h3>{children}</h3>;
      },
      [BLOCKS.HEADING_4]: (node: any, children: any) => {
        return <h4>{children}</h4>;
      },
      [BLOCKS.HEADING_5]: (node: any, children: any) => {
        return <h5>{children}</h5>;
      },
      [BLOCKS.HEADING_6]: (node: any, children: any) => {
        return <h6>{children}</h6>;
      },
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
        return <p className="pb-3 last-of-type:pb-0">{children}</p>;
      },
      [BLOCKS.OL_LIST]: (node: any, children: any) => {
        return <ol className="ml-6 list-decimal pb-2">{children}</ol>;
      },
      [BLOCKS.UL_LIST]: (node: any, children: any) => {
        return <ul className="ml-6 list-disc pb-2">{children}</ul>;
      },
      [BLOCKS.HR]: (node: any, children: any) => {
        return <hr className="pb-3" />;
      },
    },
  };
}

export default function RichTextRenderer({
  document,
}: {
  document: any | null;
}) {
  if (!document) return null;
  return (
    <>
      {documentToReactComponents(document.json, renderOptions(document.links))}
    </>
  );
}

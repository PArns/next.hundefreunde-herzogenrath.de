import { fetchGraphQL } from "@/data-provider/contentful/client";

export interface ImageGalleries {
  galleries: ImageGallery[];
}

export interface ImageGallery {
  name: string;
  slug: string;
  date: Date;
  description: string;
  teaserImage: any;
  images: any[];
}

export async function GetGalleries(): Promise<ImageGallery[]> {
  const data = await fetchGraphQL(
    `query {
      imageGalleryCollection(order: date_DESC) {
          total
          items {
            name
            slug
            date
            description
            teaserImage {
              url
            }
          }
        }
      }`,
  );

  const collection = data.data.imageGalleryCollection;

  const galleries: ImageGallery[] = collection.items.map(
    (galleryEntry: any) => {
      return {
        name: galleryEntry.name,
        slug: galleryEntry.slug,
        date: new Date(galleryEntry.date),
        description: galleryEntry.description,
        teaserImage: galleryEntry.teaserImage,
      };
    },
  );

  return galleries;
}

export async function GetGalleryBySlug(
  slug: string,
): Promise<ImageGallery | null> {
  const query = `query($slug: String!) {
    imageGalleryCollection(where: {slug: $slug}, limit: 1) {
        items {
          name
          slug
          date
          description
          teaserImage {
            url
          }
          imagesCollection {
            items {
              title
              description
              url
              width
              height
            }
          }
        }
      }
    }`;

  const variables = { slug: slug };
  const data = await fetchGraphQL(query, variables);
  const postData = data?.data?.imageGalleryCollection?.items[0];

  if (!postData) return null;

  const gallery: ImageGallery = {
    name: postData.name,
    slug: postData.slug,
    date: new Date(postData.date),
    description: postData.description,
    teaserImage: postData.teaserImage,
    images: postData.imagesCollection.items,
  };

  return gallery;
}

export interface GallerySlug {
  slug: string;
  publishedAt: Date;
}

export async function GetAllGallerySlugs(): Promise<GallerySlug[]> {
  const query = `query {
    imageGalleryCollection(
        order: date_DESC) {
          items {
            slug
          }
        }
    }`;

  const data = await fetchGraphQL(query);
  const collection = data.data.imageGalleryCollection;

  const posts: GallerySlug[] = collection.items.map((postEntry: any) => {
    return {
      slug: postEntry.slug,
      publishedAt: new Date(postEntry.date),
    };
  });

  return posts;
}

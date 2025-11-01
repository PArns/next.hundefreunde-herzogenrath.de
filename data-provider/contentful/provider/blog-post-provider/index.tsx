import { fetchGraphQL } from "@/data-provider/contentful/client";

export interface BlogPosts {
  posts: BlogPost[];
  total: number;
  skip: number;
  limit: number;
}

export interface BlogPost {
  title: string;
  subTitle: string;
  slug: string;
  body?: any;
  excerpt: string;
  image: any;
  publishedAt: Date;
}

export async function GetBlogPosts(
  skip: number = 0,
  limit: number = 10,
): Promise<BlogPosts | null> {
  const query = `query($limit: Int!, $skip: Int!) {
    blogPostCollection(
        order: publishedAt_DESC, 
        limit: $limit, 
        skip: $skip) {
          total
          skip
          limit
          items {
            title
            subTitle
            slug
            publishedAt
            excerpt
            image {
              url
            }
            contentfulMetadata {
              tags {
                  id
                  name
              }
            }
          }
        }
    }`;

  const variables = { limit: limit, skip: skip };
  const data = await fetchGraphQL(query, variables);
  const collection = data?.data?.blogPostCollection;

  if (!collection) return null;

  const posts: BlogPost[] = collection.items.map((postEntry: any) => {
    return {
      title: postEntry.title,
      subTitle: postEntry.subTitle,
      slug: postEntry.slug,
      excerpt: postEntry.excerpt,
      image: postEntry.image,
      publishedAt: new Date(postEntry.publishedAt),
    };
  });

  return {
    posts: posts,
    total: collection.total,
    skip: collection.skip,
    limit: collection.limit,
  };
}

const BLOG_POST_DATA = `title
subTitle
slug
publishedAt
excerpt
body { 
  json
  links {
    entries {
      inline {
        sys {
          id
        }
        __typename
        ... on BlogPostImage {
          useDefaultStyle
          floatingDirection
          maxWidth
          classes
          imageClasses
          styles
          showSubtitle
          image {
            url
          }
          name
        }
        ... on ImageGallery {
          imagesCollection {
            items {
              url
              width
              height
              description
              title
            }
          }
        }
      }
      block {
        sys {
          id
        }
        __typename
      }
    }
    assets {
      block {
        sys {
          id
        }
        url
        title
        width
        height
        description
      }
    }
  }
}
image {
  url
}
contentfulMetadata {
  tags {
      id
      name
  }
}`;

export async function GetBlogPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  const query = `query($slug: String!) {
    blogPostCollection(where: {slug: $slug}, limit: 1) {
        items {
          ${BLOG_POST_DATA}
        } 
      }
    }`;

  const variables = { slug: slug };
  const data = await fetchGraphQL(query, variables);

  const postEntry = data?.data?.blogPostCollection?.items[0];
  if (!postEntry) return null;

  const post: BlogPost = {
    title: postEntry.title,
    subTitle: postEntry.subTitle,
    slug: postEntry.slug,
    excerpt: postEntry.excerpt,
    image: postEntry.image,
    body: postEntry.body,
    publishedAt: new Date(postEntry.publishedAt),
  };

  return post;
}

export interface BlogPostSlug {
  slug: string;
  publishedAt: Date;
}

export async function GetAllBlogPostSlugs(): Promise<BlogPostSlug[]> {
  const query = `query {
    blogPostCollection(
        order: publishedAt_DESC) {
          items {
            slug
            publishedAt
          }
        }
    }`;

  const data = await fetchGraphQL(query);
  const collection = data?.data?.blogPostCollection;

  if (!collection) return [];

  const posts: BlogPostSlug[] = collection.items.map((postEntry: any) => {
    return {
      slug: postEntry.slug,
      publishedAt: new Date(postEntry.publishedAt),
    };
  });

  return posts;
}

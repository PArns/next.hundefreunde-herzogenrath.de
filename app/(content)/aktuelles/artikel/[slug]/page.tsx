import BlogHeader from "@/components/blog/blog-header";
import Button from "@/components/button";
import { getImageSource } from "@/components/contentful/image-asset";
import RichTextRenderer from "@/components/contentful/rich-text-renderer";
import DateRenderer from "@/components/date-renderer";
import ContentBox from "@/components/layout/default-box";
import PageBaseConfiguration from "@/configuration";
import {
  GetAllBlogPostSlugs,
  GetBlogPostBySlug,
} from "@/data-provider/contentful/provider/blog-post-provider";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PostParams {
  slug: string;
}

export async function generateStaticParams(): Promise<PostParams[]> {
  const config = PageBaseConfiguration();
  const entries: PostParams[] = [];

  const galleries = await GetAllBlogPostSlugs();

  if (!galleries) notFound();

  galleries.forEach((g) => {
    entries.push({ slug: g.slug });
  });

  return entries;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const config = PageBaseConfiguration();
  const post = await GetBlogPostBySlug(params.slug);
  if (!post) return {};

  return {
    metadataBase: config.baseUrl,
    title: `${post.title}`,
    description: post.excerpt,
    openGraph: {
      type: "article",
      description: post.excerpt,
      publishedTime: post.publishedAt.toISOString(),
      url: `${config.baseUrl}aktuelles/artikel/${params.slug}`,
      images: [
        { url: getImageSource(post.image, 800), width: 800 },
        { url: getImageSource(post.image, 1800), width: 1800 },
      ],
    },
  };
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const article = await GetBlogPostBySlug(params.slug);
  if (!article) notFound();

  return (
    <div className="pt-4">
      <BlogHeader title={article.title} backgroundImage={article.image} />
      <ContentBox>
        <h2>{article.title}</h2>
        <h3>{article.subTitle}</h3>
        <DateRenderer date={article.publishedAt} format="long" />
        <div className="pt-4">
          <RichTextRenderer document={article.body} />
        </div>
        <div className="pb-2 pt-6">
          <Button href="/aktuelles">Zurück zur Übersicht</Button>
        </div>
      </ContentBox>
    </div>
  );
}

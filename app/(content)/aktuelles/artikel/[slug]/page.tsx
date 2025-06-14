import BlogHeader from "@/components/blog/blog-header";
import Button from "@/components/button";
import { getImageSource } from "@/components/contentful/image-asset";
import RichTextRenderer from "@/components/contentful/rich-text-renderer";
import DateRenderer from "@/components/date-renderer";
import ContentBox from "@/components/layout/default-box";
import Lightbox from "@/components/lightbox";
import PageBaseConfiguration from "@/configuration";
import {
  GetAllBlogPostSlugs,
  GetBlogPostBySlug,
} from "@/data-provider/contentful/provider/blog-post-provider";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

interface PostParams {
  slug: string;
}

export async function generateStaticParams(): Promise<PostParams[]> {
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
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const config = PageBaseConfiguration();
  const post = await GetBlogPostBySlug(slug);
  if (!post) return {};

  return {
    metadataBase: config.baseUrl,
    title: `${post.title}`,
    description: post.excerpt,
    openGraph: {
      type: "article",
      description: post.excerpt,
      publishedTime: post.publishedAt.toISOString(),
      url: `${config.baseUrl}aktuelles/artikel/${slug}`,
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
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await GetBlogPostBySlug(slug);
  if (!article) notFound();

  return (
    <div className="pt-4">
      <BlogHeader
        title={article.title}
        subTitle={article.subTitle}
        backgroundImage={article.image}
        useH1={false}
      />
      <ContentBox>
        <article>
          <header>
            <h1>{article.title}</h1>
            {article.subTitle && <h2>{article.subTitle}</h2>}
          </header>
          <DateRenderer date={article.publishedAt} format="long" />
          <div className="flex flex-col pt-4">
            <RichTextRenderer document={article.body} />
          </div>
        </article>
        <div className="pb-2 pt-6">
          <Button href="/aktuelles">Zurück zur Übersicht</Button>
        </div>
      </ContentBox>
      <Lightbox />
    </div>
  );
}

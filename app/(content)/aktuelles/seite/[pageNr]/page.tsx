import BlogCard from "@/components/blog/blog-card";
import Pagination from "@/components/blog/pagination";
import ContentBox from "@/components/layout/default-box";
import PageBaseConfiguration from "@/configuration";
import {
  GetAllBlogPostSlugs,
  GetBlogPosts,
} from "@/data-provider/contentful/provider/blog-post-provider";
import Motds from "@/sections/motd";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export function generateMetadata() {
  return {
    title: "Aktuelles rund um die Hundefreunde",
    description:
      "Hier findet ihr alle aktuellen Neuigkeiten rund um die Hundefreunde Herzogenrath e.V.",
  };
}

interface PostPageParams {
  pageNr: string;
}

export async function generateStaticParams(): Promise<PostPageParams[]> {
  const postsPerPage = PageBaseConfiguration().blogPostsPerPage;
  const entries: PostPageParams[] = [];
  const posts = await GetAllBlogPostSlugs();

  if (!posts) notFound();

  const pageCount = posts.length / postsPerPage;

  for (var x: number = 1; x < pageCount; x++) {
    entries.push({ pageNr: x.toString() });
  }

  return entries;
}

export default async function Aktuelles({
  params,
}: {
  params: { pageNr: number };
}) {
  const postsPerPage = PageBaseConfiguration().blogPostsPerPage;
  const activePage = +params.pageNr - 1;

  const posts = await GetBlogPosts(
    postsPerPage * (activePage * postsPerPage),
    postsPerPage,
  );

  if (!posts) notFound();

  const pageCount = Math.ceil(posts.total / postsPerPage);

  return (
    <>
      <Motds />

      <ContentBox>
        <h2>Aktuelles rund um die Hundefreunde</h2>
        Hier findet ihr alle aktuellen Neuigkeiten rund um die Hundefreunde
        Herzogenrath e.V.
      </ContentBox>

      <div className="flex flex-col gap-4">
        {posts &&
          posts?.posts.map((post) => <BlogCard post={post} key={post.slug} />)}
      </div>

      {pageCount > 1 && (
        <div className="mt-4 flex w-full place-content-end">
          <Pagination
            baseUrl={`/aktuelles`}
            paginationSlug="seite"
            currentPage={+params.pageNr}
            pageCount={pageCount}
          />
        </div>
      )}
    </>
  );
}

import BlogCard from "@/components/blog/blog-card";
import ContentBox from "@/components/layout/default-box";
import PageBaseConfiguration from "@/configuration";
import { GetBlogPosts } from "@/data-provider/contentful/provider/blog-post-provider";
import Motds from "@/sections/motd";

export const dynamic = "force-static";

export function generateMetadata() {
  return {
    title: "Aktuelles rund um die Hundefreunde",
    description:
      "Hier findet ihr alle aktuellen Neuigkeiten rund um die Hundefreunde Herzogenrath e.V.",
  };
}

export default async function Aktuelles({
  params,
}: {
  params: { pageNr: string };
}) {
  const postsPerPage = PageBaseConfiguration().blogPostsPerPage;
  const posts = await GetBlogPosts(0, 10);

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
    </>
  );
}

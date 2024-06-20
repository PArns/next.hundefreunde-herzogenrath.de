import BlogTeaser from "@/components/blog/blog-teaser";
import { GetBlogPosts } from "@/data-provider/contentful/provider/blog-post-provider";

export default async function News() {
  const blogPosts = await GetBlogPosts(0, 2);

  return (
    <div className="grid grid-cols-1 gap-4 pb-4 md:grid-cols-2">
      {blogPosts &&
        blogPosts?.posts.map((post) => (
          <BlogTeaser post={post} key={post.slug} />
        ))}
    </div>
  );
}

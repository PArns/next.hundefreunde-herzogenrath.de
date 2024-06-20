import { BlogPost } from "@/data-provider/contentful/provider/blog-post-provider";
import ContentfulImageAsset from "@/components/contentful/image-asset";
import Link from "next/link";
import DateRenderer from "@/components/date-renderer";

export default function BlogTeaser({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/aktuelles/artikel/${post.slug}`}
      className="flex h-full flex-col rounded-lg border bg-white shadow-lg"
    >
      <div className="@lg/card:p-48 relative overflow-hidden bg-cover bg-no-repeat p-36">
        <ContentfulImageAsset
          asset={post.image}
          alt={post.title}
          fill={true}
          quality={50}
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full rounded-t-lg object-cover"
        />

        <div className="absolute left-2 top-2 overflow-hidden">
          <div className="text-white">
            <h2 className="text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              {post.title}
            </h2>
            <h3 className="text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              {post.subTitle}
            </h3>
          </div>
        </div>

        <div className="absolute bottom-0 left-2 overflow-hidden">
          <div className="text-lg font-semibold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            <DateRenderer date={post.publishedAt} format="long" />
          </div>
        </div>
      </div>

      <div className="h- rounded-b-lg p-2 dark:bg-neutral-800">
        {post.excerpt && <div className="h-full">{post.excerpt}</div>}
      </div>
    </Link>
  );
}

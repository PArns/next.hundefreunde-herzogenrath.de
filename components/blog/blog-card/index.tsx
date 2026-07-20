import { BlogPost } from "@/data-provider/contentful/provider/blog-post-provider";
import ContentfulImageAsset from "@/components/contentful/image-asset";
import Link from "next/link";
import DateRenderer from "@/components/date-renderer";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="flex h-full w-full flex-col rounded-lg drop-shadow-lg">
      <Link href={`/aktuelles/artikel/${post.slug}`}>
        <div className="relative overflow-hidden bg-cover bg-no-repeat p-36 lg:p-56">
          <ContentfulImageAsset
            asset={post.image}
            alt={post.title}
            fill={true}
            quality={50}
            className="absolute top-0 right-0 bottom-0 left-0 h-full w-full rounded-t-lg object-cover object-top"
          />

          <div className="absolute top-2 left-2 overflow-hidden">
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
      </Link>

      <div className="flex h-full flex-col rounded-b-lg bg-white p-2">
        <div className="h-full">
          {post.excerpt && <div>{post.excerpt}</div>}
        </div>
        <div className="mt-2 mr-1 flex w-full flex-nowrap place-content-end text-neutral-800">
          <Link
            href={`/aktuelles/artikel/${post.slug}`}
            className="rounded-sm bg-sky-400 px-2 py-2 font-semibold text-white transition hover:bg-sky-700 lg:px-4"
          >
            Mehr ...
          </Link>
        </div>
      </div>
    </article>
  );
}

import { BlogPost } from "@/data-provider/contentful/provider/blog-post-provider";
import ContentfulImageAsset from "@/components/contentful/image-asset";
import Link from "next/link";
import DateRenderer from "@/components/date-renderer";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="flex w-full rounded-lg drop-shadow-lg">
      <article className="w-full">
        <Link href={`/aktuelles/artikel/${post.slug}`}>
          <div className="relative overflow-hidden bg-cover bg-no-repeat p-36 lg:p-56">
            <ContentfulImageAsset
              asset={post.image}
              alt={post.title}
              fill={true}
              quality={50}
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full rounded-t-lg object-cover object-top"
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
        </Link>

        <div className="rounded-b-lg bg-white p-2 dark:bg-neutral-800">
          {post.excerpt && <div>{post.excerpt}</div>}
          <div className="mr-1 mt-2 flex w-full flex-nowrap place-content-end text-neutral-800">
            <Link
              href={`/aktuelles/artikel/${post.slug}`}
              className="rounded bg-sky-400 px-2 py-2 font-semibold text-white transition hover:bg-sky-700 lg:px-4 dark:bg-sky-600 dark:hover:bg-sky-700"
            >
              Mehr ...
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

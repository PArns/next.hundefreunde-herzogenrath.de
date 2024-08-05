import ContentfulImageAsset from "@/components/contentful/image-asset";

export default function BlogHeader({
  title,
  subTitle,
  backgroundImage,
}: {
  title: string;
  subTitle?: string;
  backgroundImage: any;
}) {
  return (
    <div className="relative w-full overflow-hidden rounded-lg bg-cover bg-no-repeat text-center">
      <ContentfulImageAsset
        asset={backgroundImage}
        alt={title}
        fill={true}
        quality={80}
        usePlaceholder={true}
        className="absolute bottom-0 left-0 right-0 top-0 h-max w-max object-cover"
      />
      <div className="py-10 md:py-20 lg:py-48">
        <div className="flex h-full items-center justify-center">
          <div>
            <h1 className="mb-2 font-semibold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              {title}
            </h1>
            {subTitle && (
              <h2 className="font-semibold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                {subTitle}
              </h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

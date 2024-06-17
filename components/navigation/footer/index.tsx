import Image from "next/image";
import Link from "next/link";

import CurrentYear from "@/components/date/current-year";
import ImgTop from "@/public/theme/top.png";
import PageBaseConfiguration from "@/configuration";

export default function Footer({ children }: { children: React.ReactNode }) {
  const pageConfig = PageBaseConfiguration();

  return (
    <>
      <div className="pt-20" />
      <div className="absolute bottom-0 mx-auto h-max w-screen">
        <div className="mx-auto max-w-screen-2xl px-6 pb-6 2xl:px-0">
          <div className="flex flex-row text-[#9B6347]">
            <div>
              &copy; {pageConfig.title} <CurrentYear />
            </div>
            <div className="grow"></div>
            <div>{children}</div>
            <div className="hidden sm:block">
              <Link href="#top">
                <Image
                  src={ImgTop}
                  alt="Zum Anfang der Seite"
                  width={24}
                  className="ml-3"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

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
      <div className="mx-auto h-max w-screen">
        <footer className="max-w-(--breakpoint-2xl) px-2 pb-8 md:px-6 md:pb-6 2xl:mx-auto 2xl:px-0">
          <div className="flex flex-row text-[#9B6347]">
            <div>
              &copy; <span className="md:hidden">HfH e.V.</span>
              <span className="hidden md:inline">{pageConfig.title}</span>{" "}
              <CurrentYear />
            </div>
            <div className="grow"></div>
            <div>{children}</div>
            <div className="hidden shrink sm:block">
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
        </footer>
      </div>
    </>
  );
}

import Footer from "@/components/navigation/footer";
import Header, { HeaderItem } from "@/components/navigation/header";
import Jumbotron, { Slide } from "@/components/navigation/jumbotron";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navigationItems: HeaderItem[] = [
    { name: "Über uns", href: "/" },
    { name: "Kurse & Termine", href: "/kurse" },
    { name: "Unser Team", href: "/team" },
    { name: "Aktuelles", href: "/aktuelles" },
    { name: "Bilder", href: "/bilder" },
  ];

  return (
    <>
      <Header menuItems={navigationItems}>
        <div className="mx-auto max-w-(--breakpoint-2xl) px-6 2xl:px-0">
          <Jumbotron>
            <Slide
              bgImage={"/jumbotron/gruppe.jpg"}
              className="object-top"
              imageAlt="Willkommen bei den Hundefreunden Herzogenrath e.V."
              priority={true}
            >
              <div className="text-center font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" role="banner" aria-hidden="true">
                <div className="text-2xl md:text-4xl lg:text-6xl">
                  Willkommmen
                </div>
                <div className="text-xl md:text-2xl lg:text-4xl">
                  bei den Hundefreunden Herzogenrath e.V.
                </div>
              </div>
            </Slide>
          </Jumbotron>
        </div>
      </Header>

      <div id="top"></div>
      <main className="mx-auto max-w-(--breakpoint-2xl) px-6 2xl:px-0">{children}</main>
      <Footer>
        <nav aria-label="Footer Navigation" className="flex flex-wrap gap-4 text-sm">
          <Link href="/anfahrt" className="hover:text-white transition-colors">
            Anfahrt & Kontakt
          </Link>
          <Link href="/impressum" className="hover:text-white transition-colors">
            Impressum
          </Link>
          <Link href="/aktuelles" className="hover:text-white transition-colors">
            News
          </Link>
        </nav>
      </Footer>
    </>
  );
}

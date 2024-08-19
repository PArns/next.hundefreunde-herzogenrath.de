import Button from "@/components/button";
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
    { name: "Aktuelles", href: "/aktuelles" },
    { name: "Termine", href: "/termine" },
    { name: "Kurse & Zeiten", href: "/kurse" },
    { name: "Unser Team", href: "/team" },
    { name: "Bilder", href: "/bilder", disabled: true },
    { name: "Anfahrt & Kontakt", href: "/anfahrt" },
  ];

  return (
    <>
      <Header menuItems={navigationItems}>
        <div className="mx-auto max-w-screen-2xl px-6 2xl:px-0">
          <Jumbotron>
            <Slide
              bgImage={"/jumbotron/gruppe.jpg"}
              className="object-top"
              imageAlt="Willkommen bei den Hundefreunden Herzogenrath e.V."
            >
              <div className="text-center font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                <div className="text-2xl md:text-4xl lg:text-6xl">
                  Willkommmen
                </div>
                <div className="text-xl md:text-2xl lg:text-4xl">
                  bei den Hundefreunden Herzogenrath e.V.
                </div>
              </div>
            </Slide>
            <Slide
              bgImage={"/jumbotron/hund-stock.jpg"}
              imageAlt="Wir suchen Verstärkung - werde jetzt Teil unseres Teams"
            >
              <div className="text-center font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                <div className="text-2xl md:text-4xl lg:text-6xl">
                  Wir suchen Verstärkung!
                </div>
                <div className="text-xl md:text-2xl lg:text-4xl">
                  Werde jetzt Teil unseres Teams
                </div>
                <div className="mt-8">
                  <Button href="/aktuelles/artikel/ausbilder-gesucht">
                    Mehr informationen
                  </Button>
                </div>
              </div>
            </Slide>
          </Jumbotron>
        </div>
      </Header>

      <div id="top"></div>
      <main className="mx-auto max-w-screen-2xl px-6 2xl:px-0">{children}</main>
      <Footer>
        <div className="flex gap-4">
          <Link href={"/anfahrt"}>Anfahrt & Kontakt</Link>
          <Link href={"/impressum"}>Impressum</Link>
        </div>
      </Footer>
    </>
  );
}

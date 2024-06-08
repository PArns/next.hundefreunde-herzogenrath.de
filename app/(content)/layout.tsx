import Header, { HeaderItem } from "@/components/navigation/header";
import Jumbotron, { Slide } from "@/components/navigation/jumbotron";

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
    { name: "Bilder", href: "/bilder" },
    { name: "Anfahrt & Kontakt", href: "/anfahrt" },
  ];

  return (
    <>
      <Header menuItems={navigationItems} />
      <div className="mx-auto max-w-screen-2xl px-6 pb-6 2xl:px-0">
        <Jumbotron>
          <Slide bgImage={"/jumbotron/hunde-wald.jpg"}>
            <div className="font-bold text-7xl text-white drop-shadow-xl">Wir suchen Verstärkung</div>
          </Slide>
          <Slide bgImage={"/jumbotron/hunde-wald.jpg"}>
            <div>Slide 2</div>
          </Slide>
        </Jumbotron>

        <div id="top"></div>

        {children}
      </div>
    </>
  );
}

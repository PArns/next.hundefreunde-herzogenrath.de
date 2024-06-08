import React from "react";
import Image from "next/image";

import Dog from "@/public/theme/dog-forfoot.svg";
import Button from "@/components/button";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="rounded-xl bg-white px-10 py-8 text-center shadow-lg">
        <Image
          src={Dog}
          alt="Lost dog"
          width={300}
          height={216}
          className="mx-auto"
        />
        <h1 className="my-4 text-4xl font-bold text-gray-800">
          Oops! Seite nicht gefunden
        </h1>
        <p className="mb-6 text-gray-600">
          Es sieht so aus, als ob die Seite, die du suchst, nicht existiert.
          <br />
          Vielleicht hat einer unserer Hunde sie gefressen - bestimmt ein Welpe
        </p>
        <Button href="/">Zurück zur Startseite</Button>
      </div>
    </div>
  );
}

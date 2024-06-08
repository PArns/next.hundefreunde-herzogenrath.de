"use client";

import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import Image from "next/image";

import "./embla.css";

export function Slide({
  children,
  bgImage,
}: {
  children: React.ReactNode;
  bgImage?: string;
}) {
  return (
    <div className="relative flex h-full w-full rounded-lg border-2">
      <div className="z-10 flex h-full w-full items-center justify-center">
        {children}
      </div>

      <div className="absolute left-0 top-0 -z-10 h-full w-full">
        {bgImage && (
          <Image
            src={bgImage}
            alt="Slide"
            fill
            style={{
              objectFit: "cover",
            }}
            className="rounded-lg"
          />
        )}
      </div>
    </div>
  );
}

export default function Jumbotron({
  children,
}: {
  children: Array<React.ReactElement<typeof Slide>>;
}) {
  const emblaOptions: EmblaOptionsType = { loop: true };
  const [emblaRef] = useEmblaCarousel(emblaOptions, [
    Autoplay({ delay: 5000 }),
  ]);

  return (
    <div className="relative isolate pt-16">
      <section className="embla">
        <div className="embla__viewport h-96" ref={emblaRef}>
          <div className="embla__container">
            {children.map((slide, index) => (
              <div className="embla__slide" key={index}>
                {slide}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

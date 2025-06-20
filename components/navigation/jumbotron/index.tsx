"use client";

import { ReactElement } from "react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import Image from "next/image";

import "./embla.css";

export function Slide({
  children,
  imageAlt,
  className,
  bgImage,
  priority = false,
}: {
  children: React.ReactNode;
  imageAlt: string;
  className?: string;
  bgImage?: string;
  priority?: boolean;
}) {
  if (!className) className = "";

  return (
    <div className="relative flex h-full w-full rounded-lg border-2">
      <div className="z-10 flex h-full w-full items-center justify-center">
        {children}
      </div>

      <div className="absolute left-0 top-0 -z-10 h-full w-full">
        {bgImage && (
          <Image
            src={bgImage}
            alt={imageAlt}
            fill
            priority={priority}
            sizes="100vw"
            className={`rounded-lg object-cover ${className}`.trim()}
          />
        )}
      </div>
    </div>
  );
}

type SlideType = ReactElement<typeof Slide>;

export default function Jumbotron({
  children,
}: {
  children: SlideType | SlideType[];
}) {
  const emblaOptions: EmblaOptionsType = { loop: true };
  const [emblaRef] = useEmblaCarousel(emblaOptions, [
    Autoplay({ delay: 5000 }),
  ]);

  const slides = Array.isArray(children) ? children : [children];

  return (
    <div className="relative isolate pt-16">
      <section className="embla" data-nosnippet role="banner" aria-label="Bildkarussell">
        <div className="embla__viewport h-56 lg:h-96" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
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

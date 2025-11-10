"use client";

import { Button } from "../ui/button";
import data from "../../lib/placeholder-images.json";
// import Link from "next/link";

const PlaceHolderImages = data.placeholderImages;
export function HeroBanner() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-banner");

  return (
    <section className="relative h-[70vh] w-full bg-primary md:h-[90vh]">
      <div className="absolute inset-0">
        {heroImage && (
          <div className="relative w-full h-[500px]">
            <img
              src={heroImage.imageUrl}
              alt={heroImage.description}
              data-ai-hint={heroImage.imageHint}
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="font-headline text-4xl font-bold italic text-white md:text-6xl lg:text-7xl">
          Your Signature Story
        </h1>
        <p className="mt-4 max-w-xl text-base text-primary-foreground/90 md:text-lg">
          Explore a world of exquisite scents, crafted to capture your essence
          and create unforgettable memories.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            {/* <Link href="/shop">Shop Now</Link> */}
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white bg-transparent text-white hover:bg-white hover:text-primary"
          >
            {/* <Link href="/discovery">Discover Your Scent</Link> */}
          </Button>
        </div>
      </div>
    </section>
  );
}

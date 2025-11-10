
// import Image from "next/image";
import data from "../../lib/placeholder-images.json";
import { Button } from "../ui/button";
// import Link from "next/link";

const PlaceHolderImages = data.placeholderImages;
export function AboutSection() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === "about-section");

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20">
          <div className="order-last h-full rounded-lg md:order-first">
            {aboutImage && (
              <img
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                width={800}
                height={600}
                className="rounded-lg object-cover shadow-lg"
                loading="lazy"
              />
            )}
          </div>
          <div className="flex flex-col items-start text-center md:text-left">
            <h2 className="font-headline text-3xl font-bold italic md:text-4xl">
              The Art of Perfumery
            </h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              At MECINA, we believe that fragrance is an art form. Our journey began with a passion for storytelling through scent, blending timeless traditions with modern sensibilities. Each perfume is a masterpiece, meticulously composed of the world's finest and most precious ingredients.
            </p>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              We are committed to craftsmanship, quality, and the pursuit of beauty in every bottle. Our values are rooted in authenticity and elegance, ensuring every MECINA fragrance is an experience to be cherished.
            </p>
            <Button asChild size="lg" variant="link" className="mt-6 px-0 text-accent-foreground hover:text-accent">
                {/* <Link href="/about">Read Our Story &rarr;</Link> */}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

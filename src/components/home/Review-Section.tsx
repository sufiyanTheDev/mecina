"use client";

import * as React from "react";
import type { Review } from "../../lib/data";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Star, StarHalf } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

interface ReviewsSectionProps {
  reviews: Review[];
}

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center justify-center gap-1 text-accent">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="h-5 w-5 fill-current" />
      ))}
      {halfStar && <StarHalf key="half" className="h-5 w-5 fill-current" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="h-5 w-5 opacity-30" />
      ))}
    </div>
  );
}

export function ReviewsSection({ reviews }: ReviewsSectionProps) {
    // ✅ Initialize autoplay plugin with continuous play
  const autoplay = React.useRef(
    Autoplay({
      delay: 2500, // Increased time between slides for smoother feel
    })
  );

  // Memoize the plugins array
  const plugins = React.useMemo(() => [autoplay.current], []);

  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center">
          <h2 className="font-headline text-3xl font-bold italic md:text-4xl">
            From Our Customers
          </h2>
          <p className="mt-2 max-w-2xl text-base text-muted-foreground md:text-lg">
            Hear what our community has to say about their MECINA experience.
          </p>
        </div>

        {/* ✅ Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true, // Enables momentum scrolling
            duration: 70, // Smooth animation duration
            watchDrag: false, // Don't watch drag while autoplaying
          }}
          plugins={plugins}
          className="mt-12 w-full"
        >
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem
                key={review.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="h-full border-none bg-background shadow-none hover:shadow-md transition-shadow duration-300">
                    <CardContent className="flex h-full flex-col justify-between p-6 text-center">
                      <div>
                        <StarRating rating={review.rating} />
                        <blockquote className="mt-4 text-base italic text-foreground">
                          “{review.quote}”
                        </blockquote>
                      </div>
                      <footer className="mt-6 text-sm font-medium text-muted-foreground">
                        — {review.name}
                      </footer>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons - Positioned inside with semi-transparent background */}
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/40 hover:bg-background/60 backdrop-blur left-icon-margin-left" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/40 hover:bg-background/60 backdrop-blur right-icon-margin-right" />
        </Carousel>
      </div>
    </section>
  );
}

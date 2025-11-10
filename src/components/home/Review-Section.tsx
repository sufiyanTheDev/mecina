import type { Review } from "../../lib/data"
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Star, StarHalf } from "lucide-react";

interface ReviewsSectionProps {
  reviews: Review[];
}

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1 text-accent">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="h-5 w-5 fill-current" />
      ))}
      {halfStar && <StarHalf key="half" className="h-5 w-5 fill-current" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="h-5 w-5" />
      ))}
    </div>
  );
}

export function ReviewsSection({ reviews }: ReviewsSectionProps) {
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-headline text-3xl font-bold italic md:text-4xl">
            From Our Customers
          </h2>
          <p className="mt-2 max-w-2xl text-base text-muted-foreground md:text-lg">
            Hear what our community has to say about their MECINA experience.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mt-12 w-full"
        >
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full border-none bg-background shadow-none">
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
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}

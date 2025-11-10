import type { Product } from "../../lib/data";
import { ProductCard } from "../products/Products-card";
interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-headline text-3xl font-bold italic md:text-4xl">
            Our Collection
          </h2>
          <p className="mt-2 max-w-2xl text-base text-muted-foreground md:text-lg">
            Hand-picked ingredients, blended to perfection. Find the scent that defines you.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

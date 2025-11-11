import { HeroBanner } from "../components/home/Hero-banner"
import { ProductGrid } from "../components/home/Product-grid";
import { AboutSection } from "../components/home/About-section"
import { ReviewsSection } from "../components/home/Review-Section";
import { getProducts, getReviews } from "../lib/data";

export default function Home() {
  const products = getProducts();
  const reviews = getReviews();

  return (
    <div className="flex flex-col min-h-dvh">      
      <HeroBanner />
      <ProductGrid products={products} />
      <AboutSection />
      <ReviewsSection reviews={reviews} />
    </div>
  );
}

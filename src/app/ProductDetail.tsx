import { useParams, useNavigate } from 'react-router-dom';
import { getProducts } from '../lib/data';
import { Button } from '../components/ui/button';
import { ShoppingCart } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const products = getProducts();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto py-24 px-4">
        <p>Product not found.</p>
      </div>
    );
  }

  return (
    <section className="py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <img src={product.imageUrl} alt={product.name} className="w-full object-cover rounded-lg" />
          </div>

          <div className="lg:col-span-1">
            <h1 className="font-headline text-3xl font-bold italic">{product.name}</h1>
            <p className="mt-2 text-muted-foreground">{product.notes}</p>
            <p className="mt-4 text-lg font-semibold">₹{product.price.toFixed(2)}</p>

            <div className="mt-4 space-y-3">
              <p className="text-sm">{product.description}</p>

              <div className="flex flex-wrap gap-2">
                {(product.characteristics || []).map((c) => (
                  <span key={String(c)} className="rounded-full border px-3 py-1 text-sm">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-2">
              <Button size="lg" className="w-full" onClick={() => alert('Added to cart (mock)')}>
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="w-full" onClick={() => navigate(-1)}>
                Back
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

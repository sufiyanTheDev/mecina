// import Image from "next/image";
// import Link from "next/link";
import type { Product } from "../../lib/data";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { ShoppingCart, Eye } from "lucide-react";
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col rounded-lg bg-card text-card-foreground transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative overflow-hidden rounded-t-lg">
        <Link to={`/products/${product.id}`} className="absolute inset-0 z-10" aria-label={`View ${product.name}`}>
          <span className="sr-only">View {product.name}</span>
        </Link>
        <img
            src={product.imageUrl}
            alt={`Bottle of ${product.name}`}
            data-ai-hint={product.imageHint}
            width={600}
            height={800}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            />
        {product.badge && (
          <Badge
            variant={product.badge === 'New' ? 'default' : 'secondary'}
            className="absolute top-3 right-3 bg-accent text-accent-foreground"
          >
            {product.badge}
          </Badge>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold">
            <Link to={`/products/${product.id}`} className="hover:underline">{product.name}</Link>
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{product.notes}</p>
        </div>
        
        <div className="mt-4 flex items-end justify-between">
            <p className="text-lg font-bold text-foreground">
                ₹{product.price.toFixed(2)}
            </p>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
            <Button size="sm" className="w-full">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
            </Button>
            <Link to={`/products/${product.id}`} className="w-full">
              <Button size="sm" variant="outline" className="w-full">
                <Eye className="mr-2 h-4 w-4" />
                Quick View
              </Button>
            </Link>
        </div>
      </div>
    </div>
  );
}

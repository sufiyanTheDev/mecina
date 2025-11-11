import React, { useMemo, useState } from 'react';
import { getProducts, Product } from '../lib/data';
import { ProductCard } from '../components/products/Products-card';
import ProductsFilter, { Filters } from '../components/products/ProductsFilter';
import FilterDialog from '../components/products/FilterDialog';

export default function ProductsPage() {
  const products = getProducts();
  const [filters, setFilters] = useState<Filters>({
    characteristics: [],
    intensity: [],
    gender: [],
  });

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (filters.characteristics.length > 0) {
        const has = filters.characteristics.some((c) => p.characteristics.includes(c as any));
        if (!has) return false;
      }
      if (filters.intensity.length > 0) {
        if (!p.intensity || !(filters.intensity as string[]).includes(p.intensity)) return false;
      }
      if (filters.gender.length > 0) {
        if (!p.gender || !(filters.gender as string[]).includes(p.gender)) return false;
      }
      return true;
    });
  }, [products, filters]);

  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="font-headline text-3xl font-bold italic">Products</h1>
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">{filtered.length} items</p>
            <FilterDialog
              initialFilters={filters}
              onApply={(f) => setFilters(f)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

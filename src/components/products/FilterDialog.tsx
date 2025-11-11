import React, { useState, useRef, useEffect } from 'react';
import { Sliders } from 'lucide-react';
import { Button } from '../ui/button';
import ProductsFilter, { Filters } from './ProductsFilter';

interface Props {
  initialFilters?: Filters;
  onApply?: (f: Filters) => void;
}

export default function FilterDialog({ initialFilters, onApply }: Props) {
  // Fallback simple dropdown implementation (no Radix) to avoid environment-specific hangs.
  const [local, setLocal] = useState<Filters>(initialFilters || { characteristics: [], intensity: [], gender: [] });
  const [open, setOpen] = React.useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('click', onDocClick);
    }
    return () => document.removeEventListener('click', onDocClick);
  }, [open]);

  const handleApply = () => {
    onApply?.(local);
  };

  const handleClear = () => setLocal({ characteristics: [], intensity: [], gender: [] });

  return (
    <div className="relative inline-block" ref={containerRef}>
      <button
        className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm"
        aria-label="Open filters"
        onClick={() => setOpen((s) => !s)}
      >
        <Sliders className="h-4 w-4" />
        <span className="hidden sm:inline">Filter</span>
      </button>

      {open && (
        <div className="absolute right-0 z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md bg-background">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Filter</h3>
            <button className="text-sm text-muted-foreground" onClick={handleClear}>Clear</button>
          </div>

          <ProductsFilter filters={local} onChange={setLocal} />

          <div className="mt-4 flex justify-end gap-2">
            <Button variant="outline" onClick={handleClear}>Clear</Button>
            <Button onClick={() => { handleApply(); setOpen(false); }}>Apply</Button>
          </div>
        </div>
      )}
    </div>
  );
}

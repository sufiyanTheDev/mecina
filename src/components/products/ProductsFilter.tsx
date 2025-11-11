import React from 'react';
import type { Characteristic } from '../../lib/products';

export type Filters = {
  characteristics: Characteristic[] | string[];
  intensity: ('Light' | 'Moderate' | 'Strong')[] | string[];
  gender: ('Unisex' | 'Male' | 'Female')[] | string[];
};

const ALL_CHARACTERISTICS: Characteristic[] = ['Floral', 'Woody', 'Oriental', 'Fresh', 'Citrus', 'Aromatic'];
const ALL_INTENSITY = ['Light', 'Moderate', 'Strong'];
const ALL_GENDERS = ['Unisex', 'Male', 'Female'];

interface Props {
  filters: Filters;
  onChange: (f: Filters) => void;
}

function toggle<T>(arr: T[], val: T): T[] {
  if (arr.includes(val)) return arr.filter((x) => x !== val);
  return [...arr, val];
}

export default function ProductsFilter({ filters, onChange }: Props) {
  return (
  <div className="rounded-lg border bg-card p-4">
      <h3 className="mb-3 text-lg font-semibold">Filter</h3>

      <div className="mb-4">
        <h4 className="mb-2 text-sm font-medium">Characteristics</h4>
        <div className="flex flex-wrap gap-2">
          {ALL_CHARACTERISTICS.map((c) => (
            <button
              key={c}
              onClick={() => onChange({ ...filters, characteristics: toggle(filters.characteristics as any, c) })}
              className={`rounded-full px-3 py-1 text-sm border ${
                (filters.characteristics as any).includes(c) ? 'bg-accent text-accent-foreground' : 'bg-transparent'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="mb-2 text-sm font-medium">Intensity</h4>
        <div className="flex flex-col gap-2">
          {ALL_INTENSITY.map((i) => (
            <label key={i} className="inline-flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={(filters.intensity as any).includes(i)}
                onChange={() => onChange({ ...filters, intensity: toggle(filters.intensity as any, i) })}
              />
              {i}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="mb-2 text-sm font-medium">Gender</h4>
        <div className="flex flex-col gap-2">
          {ALL_GENDERS.map((g) => (
            <label key={g} className="inline-flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={(filters.gender as any).includes(g)}
                onChange={() => onChange({ ...filters, gender: toggle(filters.gender as any, g) })}
              />
              {g}
            </label>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button
          className="rounded-md px-3 py-2 text-sm bg-muted text-muted-foreground"
          onClick={() => onChange({ characteristics: [], intensity: [], gender: [] })}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

import placeholder from './placeholder-images.json';

export const PlaceHolderImages = placeholder.placeholderImages;

export type Characteristic = 'Floral' | 'Woody' | 'Oriental' | 'Fresh' | 'Citrus' | 'Aromatic';

export interface Product {
  id: string;
  name: string;
  notes: string; // short notes string used in cards
  price: number;
  imageUrl: string;
  imageHint?: string;
  badge?: 'New' | 'Bestseller';
  description?: string;
  characteristics: Characteristic[];
  gender?: 'Unisex' | 'Male' | 'Female';
  intensity?: 'Light' | 'Moderate' | 'Strong';
  season?: 'All' | 'Summer' | 'Winter' | 'Autumn' | 'Spring';
}

export const products: Product[] = [
  {
    id: 'prod_1',
    name: 'Celestial Bloom',
    notes: 'Jasmine, Tuberose, Sandalwood',
    price: 180,
    imageUrl: PlaceHolderImages.find(p => p.id === 'product-1')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'product-1')?.imageHint || '',
    badge: 'New',
    description:
      'A luminous floral heart wrapped in creamy sandalwood — soft, elegant and long-lasting.',
    characteristics: ['Floral', 'Woody'],
    gender: 'Unisex',
    intensity: 'Light',
    season: 'Spring',
  },
  {
    id: 'prod_2',
    name: 'Velvet Oud',
    notes: 'Oud, Rose, Saffron',
    price: 220,
    imageUrl: PlaceHolderImages.find(p => p.id === 'product-2')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'product-2')?.imageHint || '',
    badge: 'Bestseller',
    description:
      'Opulent oud and saffron mingle with velvety rose for a deep, seductive trail.',
    characteristics: ['Oriental', 'Woody'],
    gender: 'Male',
    intensity: 'Strong',
    season: 'Winter',
  },
  {
    id: 'prod_3',
    name: 'Amber Glow',
    notes: 'Amber, Vanilla, Bergamot',
    price: 165,
    imageUrl: PlaceHolderImages.find(p => p.id === 'product-3')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'product-3')?.imageHint || '',
    description:
      'Warm amber and vanilla lifted by bergamot — cozy and inviting for everyday wear.',
    characteristics: ['Oriental', 'Citrus'],
    gender: 'Unisex',
    intensity: 'Moderate',
    season: 'Autumn',
  },
  {
    id: 'prod_4',
    name: "Siren's Call",
    notes: 'Sea Salt, Orchid, Driftwood',
    price: 195,
    imageUrl: PlaceHolderImages.find(p => p.id === 'product-4')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'product-4')?.imageHint || '',
    description:
      "A sophisticated aquatic floral that balances sea-breeze freshness with earthy driftwood notes.",
    characteristics: ['Fresh', 'Floral'],
    gender: 'Female',
    intensity: 'Moderate',
    season: 'Summer',
  },
];

export const getAllProducts = (): Product[] => products;

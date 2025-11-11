import { getAllProducts, Product } from './products';
export type { Product } from './products';

export interface Review {
    id: string;
    name: string;
    quote: string;
    rating: number;
}
const reviews: Review[] = [
    {
        id: 'rev_1',
        name: 'Alex Johnson',
        quote: 'Celestial Bloom is my new signature scent. It\'s light, floral, and lasts all day. I get so many compliments!',
        rating: 5,
    },
    {
        id: 'rev_2',
        name: 'Samantha Lee',
        quote: 'The depth of Velvet Oud is simply intoxicating. It feels so luxurious and special. Perfect for evening wear.',
        rating: 5,
    },
    {
        id: 'rev_3',
        name: 'Michael Chen',
        quote: 'Amber Glow is such a warm and comforting fragrance. It\'s sweet but not overpowering. My go-to for daily wear.',
        rating: 4,
    },
    {
        id: 'rev_4',
        name: 'Jessica Davis',
        quote: 'I was looking for something unique and Siren\'s Call is it. It smells like a day at the beach in the most sophisticated way.',
        rating: 5,
    },
    {
        id: 'rev_5',
        name: 'David Rodriguez',
        quote: 'Excellent quality and presentation. The packaging feels as premium as the scent inside. Impressed with the brand.',
        rating: 4,
    }
]

export const getProducts = (): Product[] => getAllProducts();
export const getReviews = (): Review[] => reviews;

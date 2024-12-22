export interface Product {
    id: number;
    name: string;
    brand: string;  // TODO: This shouldn't be a string
    description: string;
    images: string[];
    category: string;  // TODO: This shouldn't be a string
    averageScoreOutOf100: number;

    priceCents: number;
    taxPer1000: number;
    discountPer1000: number;
}

export function productFinalPriceCents(p: Product): number {
    return p.priceCents
        * (1 + p.taxPer1000 / 1000)
        * (1 - p.discountPer1000 / 1000);
}

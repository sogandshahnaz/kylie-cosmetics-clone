export type Product = {
    id: number;
    brand: string;
    name: string;
    price: string;
    image: string;
    hoverImage?: string;
    badge?: string;
    shades?: number;
    rating?: number;
    reviews?: number;
    colors?: string[];
    href: string
}
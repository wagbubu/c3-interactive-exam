export type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  rating: number;
  tag?: string;
  variants?: Variant[];
};

export type Variant = {
  variantId: string;
  image: string;
};

const productList: Product[] = [
  {
    id: 1,
    title: "Meal Mates",
    image: "/images/meal-mates.png",
    price: 29.0,
    category: "Kitchen Gear",
    rating: 4.9,
  },
  {
    id: 2,
    title: "Meal Mates",
    image: "/images/meal-mates.png",
    price: 29.0,
    category: "Kitchen Gear",
    rating: 4.9,
  },
  {
    id: 3,
    title: "Meal Mates",
    image: "/images/meal-mates.png",
    price: 29.0,
    category: "Kitchen Gear",
    rating: 4.9,
  },
  {
    id: 4,
    title: "Meal Mates",
    image: "/images/meal-mates.png",
    price: 29.0,
    category: "Kitchen Gear",
    rating: 4.9,
  },
  {
    id: 5,
    title: "Meal Mates",
    image: "/images/meal-mates.png",
    price: 29.0,
    category: "Kitchen Gear",
    rating: 4.9,
  },
  {
    id: 6,
    title: "Meal Mates",
    image: "/images/meal-mates.png",
    price: 29.0,
    category: "Kitchen Gear",
    rating: 4.9,
  },
];

export const sampleBestSeller: Product[] = [
  {
    id: 1,
    title: "Vera premium ceramic cup",
    image: "/images/vera_blue.jpeg",
    price: 94.0,
    category: "Kitchen gear",
    rating: 4.69,
    tag: "Limited Edition",
    variants: [
      { variantId: "blue", image: "/images/vera_blue.jpeg" },
      { variantId: "gray", image: "/images/vera_gray.jpeg" },
      { variantId: "pink", image: "/images/vera_pink.jpeg" },
    ],
  },
];

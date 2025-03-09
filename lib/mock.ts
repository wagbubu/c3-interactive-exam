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

export const productList: Product[] = [
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
    title: "Mocha Mate",
    image: "/images/mocha_mate2.png",
    price: 388.0,
    category: "Kitchen Gear",
    rating: 4.9,
  },
  {
    id: 3,
    title: "Barber Tool",
    image: "/images/barber_tool.png",
    price: 199.0,
    category: "Self Care",
    rating: 4.9,
  },
  {
    id: 4,
    title: "Hot Cup",
    image: "/images/hot_cup.png",
    price: 94.0,
    category: "Kitchen Gear",
    rating: 4.9,
  },
  {
    id: 5,
    title: "Peugeot Paris Mill",
    image: "/images/peugeot_paris_mill.png",
    price: 26.99,
    category: "Kitchen Gear",
    rating: 4.9,
  },
  {
    id: 6,
    title: "Marcel The Shell",
    image: "/images/marcel_the_shell.png",
    price: 33.99,
    category: "Home Decor",
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

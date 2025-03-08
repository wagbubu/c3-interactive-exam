type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  rating: number;
  tag?: string;
  variants?: Variant[];
};

type Variant = Pick<Product, "title" | "image">;

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

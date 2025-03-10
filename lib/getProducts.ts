import { useQuery } from "@tanstack/react-query";

const fetchProducts = async (category: string) => {
  const url = category
    ? `https://fakestoreapi.com/products/category/${category}`
    : "https://fakestoreapi.com/products";
  console.log(url);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const useProducts = (category: string) => {
  return useQuery({
    queryKey: ["products", category],
    queryFn: () => fetchProducts(category),
  });
};

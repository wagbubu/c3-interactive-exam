"use client";

import { ListFilter } from "lucide-react";
import SortButton from "./SortButton";
import ProductList from "./ProductList";
import Filter from "./Filter";
import { useState } from "react";
import { useProducts } from "@/lib/getProducts";

export default function Shop() {
  const [category, setCategory] = useState("");
  const products = useProducts(category);

  return (
    <div className="w-full hidden lg:block">
      <div className="max-w-7xl m-auto px-8">
        <div className="grid grid-cols-4 justify-between uppercase py-1 border-b-2 gap-x-4">
          <div className="flex justify-between col-span-1 items-center">
            <p>Filter</p>
            <ListFilter />
          </div>
          <div className="col-span-3">
            <SortButton className="float-end" />
          </div>
        </div>
      </div>
      <div className="max-w-7xl px-8 grid grid-cols-4 gap-x-4 m-auto">
        <div className="col-span-1 border-r px-4">
          <Filter category={category} setCategory={setCategory} />
        </div>
        <div className="col-span-3">
          <ProductList products={products.data} category={category} />
        </div>
      </div>
    </div>
  );
}

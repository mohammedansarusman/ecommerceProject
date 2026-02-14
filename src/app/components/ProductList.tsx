import { products } from "../../constants/products";
import { Categories } from "./Categories";
import { ProductCard } from "./ProductCard";
import { Filter } from "./Filter";

import Link from "next/link";
export const ProductList = ({ category, params }: { category: string, params: "homepage" | "productspage" }) => {
  return (
    <div className="w-full">
      <Categories />
      <div className="w-full flex justify-end">
        {params === "productspage" && <Filter />}
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-gray-100 gap-2 py-5 place-items-center mt-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Link href={category ? `/products/?category=${category}` : `/products`} className="text-center w-full block mt-5 text-blue-500">
        View All Products
      </Link>
    </div>
  );
};

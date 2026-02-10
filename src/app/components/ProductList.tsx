import { products } from "../../constants/products"
import { ProductCard } from "./ProductCard";
export const ProductList = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-gray-700 gap-2 py-5 place-items-center">
        {products.map(product=><ProductCard key={product.id} product = {product} />)}
    </div>
  )
}

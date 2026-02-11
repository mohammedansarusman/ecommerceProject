import { ProductType } from "../../constants/types"

type ProductCardProps = {
  product: ProductType;
}

export const ProductCard = ({product}: ProductCardProps) => {
  console.log("p=>",product);
  return (
    <div className='w-50 h-75 bg-gray-400'>
      {product.name}
    </div>
  )
}

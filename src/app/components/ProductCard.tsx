import { ProductType } from "../../constants/types"

export const ProductCard = ({product}: {product:ProductType}) => {
  const {id} = product;
  return (
    <div className='w-50 h-75 bg-gray-400'>
      {product.name}
    </div>
  )
}

import { ProductType } from "../../constants/types";
import Image from "next/image";
type ProductCardProps = {
  product: ProductType;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  console.log("p=>", product);
  return (
    <div className="shadow-lg rounded-lg w-60 h-100">
      {/* product Image */}
      <div className="w-full h-70 overflow-hidden">
        <Image
          src={product.images[product.colors[0]]}
          alt="product-img"
          width={500}
          height={750}
          className="w-full h-full object-contain hover:scale-105 transition-all duration-500 "
        />
      </div>
      {/* product features */}
      <div className="bg-gray-100 w-full h-30 flex flex-col pl-4">
        <h1 className="text-sm font-bold">{product.name}</h1>
        <p className=" text-sm line-clamp-2">{product.shortDescription}</p>
        {/* size and color */}
        <div className="flex flex-row">
          {/* size */}
          <div className="flex flex-col">
            <span>Size</span>
            <select>
              {product.sizes.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
            </select>
          </div>
          {/* color */}
          <div className="flex flex-col"></div>
        </div>
      </div>
    </div>
  );
};

"use client";

import { ShoppingCart } from "lucide-react";
import { ProductType } from "../../constants/types";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../../store/cartSlice";

import Image from "next/image";
type ProductCardProps = {
  product: ProductType;
};
import { useState } from "react";

type ProductFeature = {
  sizes: string;
  colors: string;
};
type ProductFeatureKey = "sizes" | "colors";

export const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch();

  const checking = useSelector((store) => store.cart.cartItems);

  const [productType, setProductType] = useState<ProductFeature>({
    sizes: product.sizes[0],
    colors: product.colors[0],
  });

  const handleChange = (type: ProductFeatureKey, value: string) => {
    setProductType((prev) => ({ ...prev, [type]: value }));
  };
  const handleCartItem = (): void => {
    dispatch(
      addItems({
        id: product.id,
        name: product.name,
        price: product.price,
        sizes: productType.sizes,
        color: productType.colors,
        quantity: 1,
        image: product.images[productType.colors],
      }),
    );
    console.log("product", product);
    console.log("checking=>", checking);
    console.log("type=", productType);
  };

  return (
    <div className="shadow-lg rounded-lg w-60 h-120">
      {/* product Image */}
      <div className="w-full h-70 overflow-hidden">
        <Image
          src={product.images[productType.colors]}
          alt="product-img"
          width={500}
          height={750}
          className="w-full h-full object-contain hover:scale-105 transition-all duration-500 "
        />
      </div>
      {/* product features */}
      <div className="bg-gray-100 w-full h-50 flex flex-col px-3">
        <h1 className="text-sm font-bold">{product.name}</h1>
        <p className=" text-sm line-clamp-2">{product.shortDescription}</p>
        {/* size and color */}
        <div className="flex flex-row gap-4">
          {/* size */}
          <div className="flex flex-col">
            <span>Size</span>
            <select
              defaultValue={productType.sizes}
              onChange={(event) => handleChange("sizes", event.target.value)}
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          {/* color */}
          <div className="flex flex-col gap-1">
            <span>Color</span>
            <div className="flex items-center gap-1">
              {product.colors.map((color) => (
                <div
                  key={color}
                  className={`cursor-pointer w-4 h-4 rounded-full border-1 ${productType.colors === color ? "border-black" : "border-gray-400"}`}
                  style={{ background: color }}
                  onClick={() => handleChange("colors", color)}
                ></div>
              ))}
            </div>
          </div>
        </div>
        {/* add to cart button */}
        <div className="w-full flex items-center justify-between mt-5">
          <p>{`$${product.price.toFixed(2)}`}</p>
          <button
            className="flex items-center gap-2 px-2 border border-gray-200 p-1 rounded-md cursor-pointer
           hover:bg-gray-600 hover:text-white transition-colors duration-150 ease-in-out"
            onClick={() => handleCartItem()}
          >
            <ShoppingCart className="w-4 h-4" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

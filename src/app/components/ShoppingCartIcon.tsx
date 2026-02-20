"use client";
import { ShoppingCart } from "lucide-react";
import { useAppSelector } from "../../store/hooks";
import Link from "next/link";

export const ShoppingCartIcon = () => {
  const lengthCart = useAppSelector((store) => store.cart.cartItems);
  return (
    <Link className="relative" href={"/cart"}>
      <ShoppingCart />
      <div className="absolute -top-3 -right-2 w-5 h-5 bg-amber-300 rounded-full flex justify-center items-center text-sm">
        <span>{lengthCart.length}</span>
      </div>
    </Link>
  );
};

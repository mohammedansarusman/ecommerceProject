import Image from "next/image";
import { cartItems } from "../../constants/cartItems";
import { DeleteIcon } from "lucide-react";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../store/hooks";



export const CartItemsContainer = () => {
  console.log("rendering cartItmescontainer")
  const productInCart= useAppSelector((store) => store.cart.cartItems);
  console.log("caart products=>", productInCart);
  console.log(cartItems);

  return (
    <div className="w-full flex flex-col lg:w-6/10 rounded-xl shadow-xl border border-gray-100">
      {/* TITLE */}
      <header className="flex justify-start items-center pl-4 pt-4 h-10">
        <h1>Cart Items</h1>
      </header>
      {/* CART ITEMS */}
      <div className="w-full h-120 flex flex-col items-center gap-4 overflow-scroll mt-7 py-2 ">
        {productInCart.length > 0 &&
          productInCart.map((cart) => (
            <div key={`${cart.id+Math.random()}`} className="w-9/10 h-36 flex gap-2 py-2">
              {/* Image */}
              <div className="w-2/8">
                <Image
                  src={cart.image}
                  alt="cart-pic"
                  width={750}
                  height={1000}
                  className="w-30 h-full object-fill"
                />
              </div>
              {/* product features */}
              <div className="flex flex-col justify-start w-5/8">
                <h1 className="font-semibold">{cart.name}</h1>
                <div className="text-sm text-gray-500 mt-2">
                  <p>{`Quantity: ${cart.quantity}`}</p>
                  <p>{`Size: ${cart.sizes.toUpperCase()}`}</p>
                  <p className="capitalize">{`Color: ${cart.color}`}</p>
                  <div className="font-bold text-black mt-5">
                    <p>{`$ ${cart.price.toFixed(2)}`}</p>
                  </div>
                </div>
              </div>
              {/* delete button */}
              <div className="flex flex-col items-center justify-center w-1/8">
                <DeleteIcon />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

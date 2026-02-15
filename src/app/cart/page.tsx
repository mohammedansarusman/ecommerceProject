import { CartItemsContainer } from "../components/CartItemsContainer";
import { CartSteps } from "../components/CartSteps";
import { PriceSummary } from "../components/PriceSummary";

export default function CartPage() {
  
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8">
      {/* HEADING */}
      <header className="w-full flex justify-center items-center text-md font-bold mt-10">
        <h1>Your Shopping Cart</h1>
      </header>
      {/* STEPS */}
      <CartSteps />
    </div>
  );
}

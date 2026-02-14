"use client";

const steps = [
  {
    id: 1,
    title: "Shopping Cart",
  },
  {
    id: 2,
    title: "Shipping Address",
  },
  {
    id: 3,
    title: "Payment Method",
  },
];
export default function CartPage() {
  return (
    <div className="w-full">
      <header className="w-full flex justify-center items-center text-md font-bold mt-10">
          <h1>Your Shopping Cart</h1>
      </header>
    </div>
  );
}

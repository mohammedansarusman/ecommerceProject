"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { CartItemsContainer } from "./CartItemsContainer";
import { ShippingAddress } from "./ShippingAddress";
import { PriceSummary } from "./PriceSummary";
import { PaymentForm } from "./PaymentForm";
import { Provider } from "react-redux";
import appStore from "../../store/appStore";

type StepProp = {
  id: number;
  title: string;
};

const steps: StepProp[] = [
  { id: 1, title: "Shopping Cart",},
  { id: 2, title: "Shipping Address",},
  { id: 3, title: "Payment Method",},
];

export const CartSteps = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeStep = parseInt(searchParams.get("step") || "1");

  const handleStep = (value: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("step", value.toString());
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };
  return (
    <div className="w-full flex flex-col gap-8 items-center">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {steps.map((item) => (
          <div
            className={`flex items-center justify-between px-3 py-8
             w-50 h-12  ${Number(activeStep) === item.id ? "border-b-2 border-gray-950" : "border-b-2 border-gray-100"} `}
            key={item.id}
            onClick={() => handleStep(item.id)}
          >
            <span
              className={`w-10 h-10 rounded-full flex items-center justify-center 
              ${Number(activeStep) === item.id ? "bg-black text-white" : "bg-gray-400 text-gray-500 "}`}
            >
              {item.id}
            </span>
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      {/* ------------------------ */}
      <div className="flex flex-col gap-15 w-full lg:flex-row px-2">
        {/* CART ITEMS CONTAINER */}
        {activeStep===1 ? 
          <CartItemsContainer/> 
        :
          activeStep===2 ? <ShippingAddress/> : <Provider store = {appStore}><PaymentForm/></Provider>
        }            
        
        {/* PRICE SUMMARY */}
        <PriceSummary />
      </div>
    </div>
  );
};

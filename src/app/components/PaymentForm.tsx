'use client'
import { SubmitHandler, useForm } from "react-hook-form";
import { PaymentFormInput, PaymentFormSchema } from "../../constants/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

export const PaymentForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormInput>({
    resolver: zodResolver(PaymentFormSchema),
  });
  const handlePaymentForm:SubmitHandler<PaymentFormInput> = (data) =>{
    console.log("data=>",data);
    router.push("/cart/?step=3")

  }
  return (
    <div className="w-full flex flex-col lg:w-6/10 rounded-xl shadow-xl border border-gray-100">
      {/* TITLE */}
      <header className="flex justify-start items-center pl-4 pt-4 h-10">
        <h1>Payment Method</h1>
      </header>

      <form 
        className="w-full flex flex-col items-center gap-4 mt-7 py-10 px-4"
        onSubmit={handleSubmit(handlePaymentForm)}
      >
        <div className="w-full flex flex-col items-start gap-2">
          <label htmlFor="name" className="w-8/10">
            Name on Card
          </label>
          <input
            id="name"
            type="text"
            placeholder="James Smith"
            {...register("name")}
            className="border-b border-gray-400 w-8/10 outline-none"
          />
          {errors.name && (
            <p className="text-xs text-red-400 ">{errors.name.message}</p>
          )}
        </div>
        <div className="w-full flex flex-col items-start gap-2">
          <label htmlFor="card" className="w-8/10">
            Card Number
          </label>
          <input
            id="card"
            type="string"
            placeholder="1234 5678 9987 7676"
            maxLength={5}
            {...register("card")}
            className="border-b border-gray-400 w-8/10 outline-none"
          />
          {errors.card && (
            <p className="text-xs text-red-400 ">{errors.card.message}</p>
          )}
        </div>
        <div className="w-full flex flex-col items-start gap-2">
          <label htmlFor="expiry" className="w-8/10">
            Expiry Date
          </label>
          <input
            id="expiry"
            type="text"
            {...register("expiry")}
            className="border-b border-gray-400 w-8/10 outline-none"
          />
          {errors.expiry && (
            <p className="text-xs text-red-400 ">{errors.expiry.message}</p>
          )}
        </div>
        <div className="w-full flex flex-col items-start gap-2">
          <label htmlFor="cvv" className="w-8/10">
            CVV
          </label>
          <input
            id="cvv"
            type="text"
            {...register("cvv")}
            className="border-b border-gray-400 w-8/10 outline-none"
          />
          {errors.cvv && (
            <p className="text-xs text-red-400 ">{errors.cvv.message}</p>
          )}
        </div>
        
        {/* Checkout Button */}
        <div className="w-full flex justify-center items-center">
          <button className="w-6/10 h-10 bg-sky-800 text-white rounded-md" type="submit">
            Check Out
          </button>
        </div>
      </form>
    </div>
  );
};

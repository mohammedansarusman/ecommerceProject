'use client'
import { SubmitHandler, useForm } from "react-hook-form";
import { ShippingFormInput, shippingFormSchema } from "../../constants/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

export const ShippingAddress = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInput>({
    resolver: zodResolver(shippingFormSchema),
  });
  const handleShippingForm:SubmitHandler<ShippingFormInput> = (data) =>{
    console.log("data=>",data);
    router.push("/cart/?step=3")

  }
  return (
    <div className="w-full flex flex-col lg:w-6/10 rounded-xl shadow-xl border border-gray-100">
      {/* TITLE */}
      <header className="flex justify-start items-center pl-4 pt-4 h-10">
        <h1>Shipping Address</h1>
      </header>

      <form 
        className="w-full h-120 flex flex-col items-center gap-4 mt-7 py-2 px-4"
        onSubmit={handleSubmit(handleShippingForm)}
      >
        <div className="w-full flex flex-col items-start gap-2">
          <label htmlFor="name" className="w-8/10">
            Name
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
          <label htmlFor="name" className="w-8/10">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="example@yahoo.com"
            {...register("email")}
            className="border-b border-gray-400 w-8/10 outline-none"
          />
          {errors.email && (
            <p className="text-xs text-red-400 ">{errors.email.message}</p>
          )}
        </div>
        <div className="w-full flex flex-col items-start gap-2">
          <label htmlFor="phone" className="w-8/10">
            Phone
          </label>
          <input
            id="phone"
            type="text"
            {...register("phone")}
            className="border-b border-gray-400 w-8/10 outline-none"
          />
          {errors.phone && (
            <p className="text-xs text-red-400 ">{errors.phone.message}</p>
          )}
        </div>
        <div className="w-full flex flex-col items-start gap-2">
          <label htmlFor="address" className="w-8/10">
            Address
          </label>
          <input
            id="address"
            type="text"
            {...register("address")}
            className="border-b border-gray-400 w-8/10 outline-none"
          />
          {errors.address && (
            <p className="text-xs text-red-400 ">{errors.address.message}</p>
          )}
        </div>
        <div className="w-full flex flex-col items-start gap-2">
          <label htmlFor="city" className="w-8/10">
            City
          </label>
          <input
            id="city"
            type="text"
            {...register("city")}
            className="border-b border-gray-400 w-8/10 outline-none"
          />
          {errors.city && (
            <p className="text-xs text-red-400 ">{errors.city.message}</p>
          )}
        </div>
        {/* Continue Button */}
        <div className="w-full flex justify-center items-center">
          <button className="w-6/10 h-10 bg-sky-800 text-white rounded-md" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

import React from "react";

export const PriceSummary = () => {
  return (
    <div className="w-full h-70 flex flex-col items-start lg:w-4/10 px-4 shadow-lg border border-gray-100 rounded-lg">
      <h1 className="mt-5">Cart Details</h1>
      <div className="w-full text-gray-400 text-sm mt-5 flex flex-col gap-2">
        {/* Sub Total */}
        <div className="flex justify-between">
          <p>Sub Total</p>
          <p>10</p>
        </div>
        {/* Discount */}
        <div className="flex justify-between">
          <p>Discount(10%)</p>
          <p>10</p>
        </div>
        {/* Shopping fee */}
        <div className="flex justify-between">
          <p>Shopping Fee</p>
          <p>10</p>
        </div>
      </div>
      <div className="h-[0.1px] bg-gray-400 w-full mt-5"></div>
      <div className="flex justify-between w-full mt-5 font-bold text-lg">
        <p className="">Total</p>
        <p>10</p>
      </div>
      {/* Continue Button */}
      <div className="w-full flex justify-center items-center"> 
        <button className="w-6/10 h-10 bg-sky-800 text-white rounded-md">Continue</button>
      </div>
    </div>
  );
};

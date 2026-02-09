import Link from "next/link";
import Image from "next/image";
import { Copyright } from "lucide-react";
export const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center mt-20 bg-gray-200 gap-2 py-10 md:flex md:flex-row md:justify-around">
      <section className="flex flex-col items-center px-2 ">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="logo"
            width={1000}
            height={1000}
            className="w-10 h-10 md:w-15 md:h-15 lg:w-20 lg:h-20"
          />
          <p className="text-md font-medium tracking-wider">
            ONLINE MART
          </p>
        </Link>
        <p className="flex gap-2 text-sm"><Copyright/> 2026 Online Mart</p>
        <p className="text-sm">All Rights Reserved</p>
      </section>
      <section className="flex flex-col items-center px-2 text-sm gap-2">
        <p className="font-bold">Links</p>
        <p>Home</p>
        <p>Contact</p>
        <p>Terms of Service</p>
        <p>Private Policy</p>
      </section>
      <section className="flex flex-col items-center px-2 text-sm gap-2">
        <p className="font-bold">Products</p>
        <p>All Products</p>
        <p>New Arrivals</p>
        <p>Best Sellers</p>
        <p>Sale</p>
      </section>
      
      
    </div>
  );
};

"use client";
import {
  ShoppingBag,
  Shirt,
  Footprints,
  Glasses,
  Venus,
  Hand,
} from "lucide-react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export const Categories = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedCategory = searchParams.get("category");
  
  const handleChange=(value: string)=>{
    const params = new URLSearchParams(searchParams)
    params.set("category",value || "all")
    router.push(`${pathname}?${params.toString()}`,{scroll:false})
  }

  const categories = [
    {
      name: "All",
      icon: <ShoppingBag className="w-4 h-4" />,
      slug: "all",
    },
    {
      name: "T-Shirts",
      icon: <Shirt className="w-4 h-4" />,
      slug: "t-shirts",
    },
    {
      name: "Shoes",
      icon: <Footprints className="w-4 h-4" />,
      slug: "shoes",
    },
    {
      name: "Accessories",
      icon: <Glasses className="w-4 h-4" />,
      slug: "accessories",
    },
    {
      name: "Dresses",
      icon: <Venus className="w-4 h-4" />,
      slug: "dresses",
    },
    {
      name: "Jackets",
      icon: <Shirt className="w-4 h-4" />,
      slug: "jackets",
    },
    {
      name: "Gloves",
      icon: <Hand className="w-4 h-4" />,
      slug: "gloves",
    },
  ];
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 bg-gray-200 w-full py-2 place-items-center">
      {categories.map((item) => (
        <div
          className={`flex justify-center items-center gap-2 w-30 h-10 rounded-lg hover:bg-white cursor-pointer ${selectedCategory === item.slug ? "bg-white" : "bg-gray-200"}`}
          key={item.slug}
          onClick={()=>handleChange(item.slug)}
        >
          {item.icon}
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

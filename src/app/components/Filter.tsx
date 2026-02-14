"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
export const Filter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleFilterChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('sort',value);
    router.push(`${pathname}?${params.toString()}`)
  };

  return (
    <div className="flex items-center gap-2 text-sm mt-4 ">
      <span>Sort by</span>
      <select 
        name="sort" 
        id="sort" 
        className="ring-1 ring-gray-400 shadow-md"
        onChange={(e)=>handleFilterChange(e.target.value)}
      >
        <option value="new">New</option>
        <option value="old">Old</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  );
};

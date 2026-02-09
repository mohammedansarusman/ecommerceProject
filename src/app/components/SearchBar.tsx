import { SearchIcon } from "lucide-react"
export const SearchBar = () => {
  return (
    <div className="hidden w-50 h-7 border border-gray-400 rounded-full sm:flex sm:items-center sm:justify-center shadow-md">
        <SearchIcon className="text-gray-400"/>
        <input placeholder="Search..." id="search" className="text-sm outline-none px-2"/>

    </div>
  )
}

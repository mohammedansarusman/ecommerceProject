import Image from "next/image"
import Link from "next/link"
import { SearchBar } from "./SearchBar"
import { Home, Bell, ShoppingCart } from "lucide-react"
import { ShoppingCartIcon } from "./ShoppingCartIcon"
export const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-2 border-b border-gray-300 mb-1">
      <Link href="/" className="flex items-center">
        <Image src="/logo.jpg" alt="logo" width={1000} height={1000} className="w-15 h-15 md:w-30 md:h-30 lg:w-40 lg:2-40"/>
        <p className="text-md font-medium tracking-widest hidden md:block">ONLINE MART</p>
      </Link>
      <aside className="flex justify-center items-center gap-6">
        <SearchBar />
        <Link href="/">
          <Home/>
        </Link>
        <Bell/>
        <ShoppingCartIcon/>
        <Link href="/sign-in">
          <p>Sign In</p>
        </Link>
      </aside>

    </nav>
  )
}

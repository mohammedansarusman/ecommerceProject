import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export const ShoppingCartIcon = () => {
  return (
    <Link className='relative' href={"/cart"}>
        <ShoppingCart/>
        <div className='absolute -top-3 -right-2 w-5 h-5 bg-amber-300 rounded-full flex justify-center items-center text-sm'>
            <span>0</span>  
        </div>
    </Link>
  )
}

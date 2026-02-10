import Image from "next/image"


export const HomePageImage = () => {
  return (
    <div className='w-full'>
        <Image src="/background.jpg" alt="backgroung-image" width={1000} height={500} className="w-full h-60 object-fill lg:h-70"/>
    </div>
  )
}

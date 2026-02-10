import { HomePageImage } from "./components/HomePageImage";
import { ProductList } from "./components/ProductList";
import { Categories } from "./components/Categories";
export default function Home() {
  return (
    <div className="w-full">
      <HomePageImage />
      <Categories />  
      <ProductList/>
    </div>
  );
}

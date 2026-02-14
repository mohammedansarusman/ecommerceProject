import { HomePageImage } from "./components/HomePageImage";
import { ProductList } from "./components/ProductList";
import { Categories } from "./components/Categories";
export default async function Home({searchParams}:{searchParams: Promise<{category: string}>}) {
  const { category } = await searchParams;
  return (
    <div className="w-full">
      <HomePageImage />
      <ProductList category={category} params="homepage" />
    </div>
  );
}

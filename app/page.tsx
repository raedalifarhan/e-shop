
import { products } from "@/utils/products";
import BannerHome from "./components/BannerHome";
import Container from "./components/Container";
import { TruncateText } from "@/utils/TruncateText";
import ProductCard from "./components/products/ProductCard";

export default function Home() {
  return (
    <div className="p-8">
      <Container>
        <div>
          <BannerHome />
        </div>
        <div className="
        grid grid-cols-2
        sm:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-8
        ">
          {products && products.map((item: any) => (
            <ProductCard product={item} key={item.id} />
          ))}
        </div>
      </Container>
    </div>
  );
}

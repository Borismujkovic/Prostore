// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

import ProductList from "@/components/ui/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

const Homepage = async () => {
  // await delay(2000)

  const latestProducts = await getLatestProducts()
  console.log(latestProducts);
  

  return (
    <>
      <ProductList
        data={latestProducts}
        title="Newest Arrivals"
        limit={4}
      />
    </>
  );
};

export default Homepage;

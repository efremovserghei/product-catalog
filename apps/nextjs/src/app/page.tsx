import { Metadata } from "next";
import { request } from "../utils/api";
import { Container, ProductList, Title } from "../components";

export default async () => {
  const { data: products, error } = await request<TProduct[]>("/products");
  const showProducts = products && !error;

  return (
    <Container errorMessage={error}>
      <Title text="Product List" />
      {showProducts && <ProductList products={products} />}
      {!products && <h2 className="text-center">No products was found, please add one! :)</h2>}
    </Container>
  );
};

export const metadata: Metadata = {
  title: "Product List",
};

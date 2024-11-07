import { Container, Title } from "@/components";
import { request } from "@/utils/api";
import { Metadata } from "next";

export default async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const { data: product, error } = await request<TProduct>(`/products/${id}`);
  const showProduct = product && !error;

  return (
    <Container errorMessage={error}>
      <Title text="Product Item" />
      {showProduct && (
        <div className="mx-auto p-4 bg-white shadow-sm rounded-lg border border-grey-100">
          <h1 className="text-xl font-bold text-gray-900 mb-2">
            {product?.name}
          </h1>
          <p className="text-sm text-gray-500 mb-3">{product?.description}</p>
          <div className="flex items-center">
            <span className="text-md font-semibold text-green-600">
              ${product?.price}
            </span>
          </div>
        </div>
      )}
      {!product && <h2 className="text-center">Something went wrong while getting product data!</h2>}
    </Container>
  );
};

export const metadata: Metadata = {
  title: "Product Item",
};

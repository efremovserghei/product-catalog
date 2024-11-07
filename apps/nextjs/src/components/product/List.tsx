import Item from "./Item";

export default ({ products }: { products: TProduct[] }) => (
  <ul className="space-y-4">
    {products?.map((product: TProduct) => (
      <Item key={product.id} product={product} />
    ))}
  </ul>
);

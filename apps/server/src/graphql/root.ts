import { TProduct, TProductInput } from "../types";

let products: TProduct[] = [
  {
    id: 1,
    name: "EcoWave Reusable Water Bottle",
    description:
      "The EcoWave Reusable Water Bottle is an eco-friendly hydration solution designed to keep beverages at the ideal temperature. Made from BPA-free stainless steel, it features double-walled insulation that keeps drinks cold for up to 24 hours and hot for up to 12. Its durable, leak-proof cap and sleek design make it perfect for travel, work, or the gym. Available in various colors and sizes, EcoWave promotes sustainability by reducing plastic waste and is fully recyclable. A convenient, stylish choice for environmentally-conscious consumers seeking quality and functionality.",
    price: "100",
  },
  {
    id: 2,
    name: "SonicClean Electric Toothbrush",
    description:
      "The SonicClean Electric Toothbrush offers a superior oral care experience with its high-frequency vibration technology, effectively removing plaque and reducing gum inflammation. Featuring multiple brushing modes—clean, sensitive, polish, and massage—it adapts to various dental needs. The toothbrush’s long-lasting battery lasts up to 30 days on a single charge, and its built-in timer ensures optimal brushing time. With soft, replaceable bristles and a sleek, waterproof design, SonicClean prioritizes both user comfort and hygiene, making it a convenient, effective addition to any daily routine.",
    price: "200",
  },
];

const getProduct = ({ id }: { id: number }) =>
  products.find((product) => product.id == id);

const createProduct = ({ input }: { input: TProductInput }) => {
  // Create a new id based on greatest id from products list
  const nextId =
    products.length === 0
      ? 1
      : Math.max(...products.map((product) => product.id)) + 1;

  const product = {
    id: nextId,
    ...input,
  };
  products.push(product);

  return product;
};

const deleteProduct = ({ id }: { id: number }) => {
  products = products.filter((product) => product.id != id);

  return products;
};

export default {
  getAllProducts: () => products,
  getProduct,
  createProduct,
  deleteProduct,
};

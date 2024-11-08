export type TProduct = {
  id: number;
  name: string;
  description: string;
  price: string;
};

export type TProductInput = Omit<TProduct, "id">;

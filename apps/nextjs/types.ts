type TProduct = {
  id: string;
  name: string;
  description: string;
  price: string;
};

type TProductInput = Omit<TProduct, "id">;

type TGraphQLResponse<T> = {
  data?: T;
  error?: string;
};

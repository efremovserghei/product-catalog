type TProduct = {
  id: string;
  name: string;
  description: string;
  price: string;
};

type TGraphQLResponse<T> = {
  data?: T;
  error?: string;
};


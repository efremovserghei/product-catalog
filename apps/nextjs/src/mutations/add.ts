"use server";
import { executeGraphQL } from "@/lib/apollo";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async (input: TProductInput) => {
  const response = await executeGraphQL<{
    createProduct: TProduct;
  }>(
    "mutation",
    `mutation($input: ProductInput) {
        createProduct(input: $input) {
          id,
          name,
          description,
          price
        }
      }`,
    { input }
  );

  const data = response.data?.createProduct;
  const error = response.error;

  if (data && !error) {
    revalidatePath("/");
    redirect("/");
  }
};

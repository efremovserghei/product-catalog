"use server";
import { executeGraphQL } from "@/lib/apollo";
import { revalidatePath } from "next/cache";

export default async (id: string) => {
  try {
    const response = await executeGraphQL<{
      deleteProduct: TProduct[];
    }>(
      "mutation",
      `mutation($id: ID!) {
      deleteProduct(id: $id) {
        id
        name
        description
        price
      }
    }`,
      { id }
    );

    const data = response.data?.deleteProduct;
    const error = response.error;

    if (data && !error) {
      revalidatePath("/");
    } else {
      throw new Error(error);
    }
  } catch (error) {
    console.error(error);
  }
};

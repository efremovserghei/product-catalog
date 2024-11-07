"use server";
import { executeGraphQL } from "@/lib/apollo";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async (formData: FormData) => {
  const input = {
    name: formData.get("name") as String,
    description: formData.get("description") as String,
    price: formData.get("price") as String,
  };

  try {
    const response = await executeGraphQL<{
      createProduct: TProduct;
    }>(
      "mutation",
      `mutatio($input: ProductInput) {
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
    } else {
      throw new Error(error);
    }
  } catch (error) {
    console.error(error);
  }
};

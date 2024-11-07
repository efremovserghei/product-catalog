"use client";

import add from "@/mutations/add";
import Input from "../common/Input";
import Textarea from "../common/Textarea";
import { useState } from "react";
import { validateFields } from "@/utils/validate";

export default () => {
  const [errors, setErrors] = useState(
    {} as Partial<Record<"name" | "description" | "price", string>>
  );

  const addProduct = async (formData: FormData) => {
    const product = {
      name: formData.get("name"),
      description: formData.get("description"),
      price: formData.get("price"),
    } as TProductInput;

    const formErrors = validateFields(product);
    if (Object.keys(formErrors).length != 0) {
      setErrors(formErrors);
      return;
    }

    await add(product);
  };

  return (
    <form
      action={addProduct}
      className="max-w-lg mx-auto p-8 bg-white shadow-sm rounded-lg border border-grey-100"
    >
      <Input label="Name" name="name" type="text" error={errors?.["name"]} />
      <Textarea
        label="Description"
        name="description"
        error={errors?.["description"]}
      />
      <Input
        label="Price"
        name="price"
        type="number"
        error={errors?.["price"]}
      />
      <button
        className="px-4 w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition duration-300"
        type="submit"
      >
        Add Product
      </button>
    </form>
  );
};

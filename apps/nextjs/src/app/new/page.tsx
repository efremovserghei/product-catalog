import { Container, Input, Textarea, Title } from "@/components";
import add from "@/mutations/add";
import { Metadata } from "next";

export default async () => {
  return (
    <Container>
      <Title text="Add New Product" />
      <form
        action={add}
        className="max-w-lg mx-auto p-8 bg-white shadow-sm rounded-lg border border-grey-100"
      >
        <Input label="Name" name="name" type="text" />
        <Textarea label="Description" name="description" />
        <Input label="Price" name="price" type="number" />
        <button
          className="px-4 w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          type="submit"
        >
          Add Product
        </button>
      </form>
    </Container>
  );
};

export const metadata: Metadata = {
  title: "Add New Product",
};

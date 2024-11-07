import { Container, Form, Title } from "@/components";
import { Metadata } from "next";

export default async () => {
  return (
    <Container>
      <Title text="Add New Product" />
      <Form />
    </Container>
  );
};

export const metadata: Metadata = {
  title: "Add New Product",
};

import { executeGraphQL } from "@/lib/apollo";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse<TGraphQLResponse<TProduct[]>>> {
  // Extract the 'id' query parameter
  const { id } = await params;

  const { data, error } = await executeGraphQL<{
    getProduct: TProduct[];
  }>(
    "query",
    `query getProduct($id: ID!) {
      getProduct(id: $id) {
        id, name, description, price
      }
    }`,
    { id }
  );

  if (error) console.error(error);

  return NextResponse.json({
    data: data?.getProduct,
    error,
  });
}

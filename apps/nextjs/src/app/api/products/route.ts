import { executeGraphQL } from "@/lib/apollo";
import { NextResponse } from "next/server";

export async function GET(): Promise<
  NextResponse<TGraphQLResponse<TProduct[]>>
> {
  const { data, error } = await executeGraphQL<{
    getAllProducts: TProduct[];
  }>(
    "query",
    `query {
      getAllProducts {
        id, name, description, price
      }
    }`
  );

  if (error) console.error(error);

  return NextResponse.json({
    data: data?.getAllProducts,
    error,
  });
}

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});

export const executeGraphQL = async <T>(
  operationType: "query" | "mutation",
  operation: string,
  variables: Record<string, unknown> = {}
): Promise<TGraphQLResponse<T>> => {
  try {
    const response =
      operationType === "query"
        ? await client.query<T>({
            query: gql`
              ${operation}
            `,
            variables,
            fetchPolicy:'no-cache'
          })
        : await client.mutate<T>({
            mutation: gql`
              ${operation}
            `,
            variables,
          });

    return { data: response.data ?? undefined };
  } catch (error: any) {
    console.error(error);
    return {
      error: `GraphQL ${operationType} execution error: ${
        error
      }`,
    };
  }
};

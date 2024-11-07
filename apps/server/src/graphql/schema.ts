import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Product {
    id: ID,
    name: String,
    description: String,
    price: String
  }

  input ProductInput {
    name: String!,
    description: String!,
    price: String!
  }

  type Query {
    getAllProducts: [Product],
    getProduct(id: ID!): Product
  }

  type Mutation {
    createProduct(input: ProductInput): Product,
    deleteProduct(id: ID!): [Product]
  }
`);

export default schema;

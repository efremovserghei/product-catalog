import express from "express";
import root from "./graphql/root";
import schema from "./graphql/schema";
import { graphqlHTTP } from "express-graphql";

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({ graphiql: true, schema: schema, rootValue: root })
);
app.listen(8000, () => console.log("Server started on port 8000"));

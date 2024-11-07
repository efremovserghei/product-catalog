
# Product Catalog

This project is a basic e-commerce application that includes a product listing, product details, and a product creation page. It’s structured as a monorepo with a separate Apollo server and a Next.js frontend for the user interface. It demonstrates the following features:

* Product List: Displays all products available, fetched using SSR.
* Product Details: Shows information about a specific product.
* Create Product: Allows the user to add new products.


## Installation
Clone the repository to your local machine and run these commands in the root folder.

1.Install **pnpm**:
```
npm install -g pnpm
```
2.Install dependencies:
```
pnpm i
```
3.Run the projects:
```
pnpm run dev
```
Both Client and Server projects should start and be ready to be used.

You can access the project at http://localhost:3000.

The backend GraphQL Interface are available at http://localhost:8000/graphql.  

## Project structure
- **apps/**: Contains separate applications in the monorepo, including the `nextjs` frontend and `server` backend.
  - **nextjs/**: A Next.js app for the frontend.
    - **.env**: Environment configuration for secrets and settings.
    - **package.json**: Specifies dependencies, scripts, and project metadata.
    - **src/**: Source directory for all frontend code.
      - **app/**: Next.js API routes and pages.
        - **api**: API routes folder.
          - **route.ts**: API route to fetch all products data.
          - **[id]/route.ts**: API route to fetch one product data.
        - **[id]/page.ts**: Page for displaying information for a single product.
        - **new/page.ts**: Page with the form to create a new product.
      - **components/**: UI components.
      - **lib/**: Includes Apollo Client setup for GraphQL.
      - **mutations/**: GraphQL mutations related to product operations.
      - **styles/**: Global CSS styles.
      - **utils/**: Utility functions and API helpers.
  - **server/**: A GraphQL backend server with schemas and resolvers.
    - **graphql/**: Defines the schema and resolvers for the API.
    - **index.ts**: Main entry point for the server.
- **pnpm-workspace.yaml**: Configures the monorepo setup for `pnpm`.
- **.gitignore**: Lists files and folders to be ignored by Git across the project.
- **README.md**: Documentation with a project overview, installation, and usage instructions.
import { ReactNode } from "react";
import Error from "./Error";

export default ({
  children,
  errorMessage,
}: {
  children: ReactNode;
  errorMessage?: String;
}) => (
  <main className="container max-w-4xl mx-auto p-6">
    {children}
    {errorMessage && <Error errorMessage={errorMessage} />}
  </main>
);

"use client";
import remove from "@/mutations/remove";
import Link from "next/link";

export default ({
  product: { id, name, description, price },
}: {
  product: TProduct;
}) => (
  <li className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 flex justify-between items-start">
    <Link href={`/${id}`} className="hover:cursor-pointer">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-500 text-sm mb-3">{description}</p>
      <span className="text-md font-bold text-green-600">${price}</span>
    </Link>
    <button
      onClick={() => remove(id)}
      className="ml-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors duration-300"
    >
      Delete
    </button>
  </li>
);

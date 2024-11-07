import Link from "next/link";

export default () => (
  <div className="flex justify-center bg-gray-100 py-2 font-semibold border-b border-gray-200">
    <div className="flex justify-between container max-w-4xl px-6">
      <Link href="/" className="hover:text-blue-500">
        Home
      </Link>
      <Link href="/new" className="hover:text-blue-500">
        New
      </Link>
    </div>
  </div>
);

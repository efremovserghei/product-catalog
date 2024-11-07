export default ({
  label,
  name,
  type,
  error,
}: {
  label: string;
  name: string;
  type: string;
  error?: string;
}) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-gray-700 font-semibold mb-2">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {error && <p className="mt-0.5 text-xs text-red-500">{error}</p>}
  </div>
);

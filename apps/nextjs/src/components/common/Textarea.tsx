export default ({
  label,
  name,
  error,
  required,
}: {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
}) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-gray-700 font-semibold mb-2">
      {label}
    </label>
    <textarea
      id={name}
      name={name}
      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      required={required}
    />
    <p className="mt-0.5 text-xs text-red-500">{error}</p>
  </div>
);

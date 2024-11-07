"use client"
import { useState, useEffect } from "react";

export default ({ errorMessage }: { errorMessage?: String }) => {
  const [error, setError] = useState<{ message: String } | null>(null);

  useEffect(() => {
    if (errorMessage) {
      setError({ message: errorMessage });

      // Automatically hide the error after 5 seconds
      const timer = setTimeout(() => {
        setError(null);
      }, 5000);

      // Clear the timer if the component unmounts or errorMessage changes
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  if (!error) return null;

  return (
    <div className="fixed w-1/2 bottom-4 right-4 bg-red-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-3 animate-fadeIn">
      <span className="text-xl">⚠️</span>
      <div className="flex-1">
        <h2 className="text-lg font-semibold">Error</h2>
        <p>{error.message}</p>
      </div>
      <button
        onClick={() => setError(null)}
        className="text-sm font-semibold bg-red-700 hover:bg-red-800 px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        Dismiss
      </button>
    </div>
  );
};

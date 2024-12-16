import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={`h-screen flex items-center justify-center ${
        darkMode ? "bg-gray-800" : "bg-gray-100"
      }`}
    >
      <div
        className={`text-center p-6 ${
          darkMode ? "text-white" : "text-gray-800"
        }`}
      >
        {/* "Created by Parcel" with SVG and animation */}
        <div className="text-sm text-gray-400 mb-4 flex items-center justify-center space-x-2">
          <p>Created by Parcel</p>
          {/* Parcel SVG Icon with animation */}
        </div>

        {/* Edit instructions */}
        <h1 className="text-4xl font-bold mb-4">
          {darkMode ? "Dark Mode" : "Light Mode"}
        </h1>
        <p className="mb-4">
          Edit <code>App.jsx</code> to change this content.
        </p>

        <div className="mb-6">
          {/* Gradient button */}
          <button
            onClick={toggleDarkMode}
            className="px-6 py-2 mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow hover:from-blue-600 hover:to-purple-700"
          >
            Toggle Dark Mode
          </button>
        </div>

        <div className="text-3xl font-semibold">
          <p>Counter: {count}</p>
        </div>
        <div className="mt-4">
          {/* Increment button */}
          <button
            onClick={() => setCount(count + 1)}
            className="px-6 py-2 mr-4 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg shadow hover:from-green-600 hover:to-teal-600"
          >
            Increment
          </button>

          {/* Decrement button */}
          <button
            onClick={() => setCount(count - 1)}
            className="px-6 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg shadow hover:from-red-600 hover:to-orange-600"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

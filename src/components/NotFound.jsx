import React from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate for routing

const NotFound = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold mb-4">404</h1>
        <p className="text-xl mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <button
          onClick={() => navigate("/")} // Navigate to home when clicked
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-md hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 transition-all duration-300"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;

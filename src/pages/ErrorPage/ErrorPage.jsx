import React from "react";
import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center">
        {/* Illustration / Image Placeholder */}
        <div className="mb-8"></div>

        {/* Main Error Text */}
        <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-500 mb-6 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* Go Home Button */}
        <Link>
          <button
            to="/"
            className="btn btn-primary btn-lg px-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

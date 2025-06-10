import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
      <p className="text-gray-600 text-center mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-6 py-3 rounded-lg font-medium hover:from-green-500 hover:to-teal-600 transition-colors duration-200"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound; 
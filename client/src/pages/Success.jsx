import React from 'react';
import { Link } from 'react-router-dom';

function Success() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 bg-white rounded-lg shadow max-w-lg mx-auto mt-12">
      <div className="text-green-600 text-6xl mb-4">✓</div>
      <h2 className="text-2xl font-bold mb-2 text-gray-800">Order Placed Successfully!</h2>
      <p className="mb-6 text-gray-700 text-center">Thank you for shopping with us. Your order has been received and is being processed.</p>
      <Link to="/shop" className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded font-medium transition">Continue Shopping</Link>
    </div>
  );
}

export default Success;

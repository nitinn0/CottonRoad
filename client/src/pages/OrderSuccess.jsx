import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import axios from '../utils/axios';

function OrderSuccess() {
  const { clearCart } = useCart();
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Clear the cart when the success page is shown
    clearCart();
  }, [clearCart]);

  const handleViewDetails = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      const response = await axios.get('/api/orders/latest', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setOrderDetails(response.data);
      setShowDetails(true);
    } catch (error) {
      console.error('Error fetching order details:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Placed Successfully!</h1>
        
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. Your order has been received and is being processed.
          You will receive an email confirmation shortly.
        </p>

        {!showDetails ? (
          <div className="space-y-4">
            <button
              onClick={handleViewDetails}
              disabled={loading}
              className="block w-full bg-gradient-to-r from-green-400 to-teal-500 text-white px-6 py-3 rounded-lg font-medium hover:from-green-500 hover:to-teal-600 transition-colors duration-200 disabled:opacity-50"
            >
              {loading ? 'Loading...' : 'View Order Details'}
            </button>
            
            <Link
              to="/shop"
              className="block w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
            >
              Continue Shopping
            </Link>
          </div>
        ) : orderDetails && (
          <div className="mt-8 text-left">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Details</h2>
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Order ID:</span>
                <span className="font-medium">{orderDetails._id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Amount:</span>
                <span className="font-medium">₹{orderDetails.totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Payment Method:</span>
                <span className="font-medium">{orderDetails.paymentMethod}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping Address:</span>
                <span className="font-medium text-right max-w-[60%]">{orderDetails.shippingAddress}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Order Date:</span>
                <span className="font-medium">
                  {new Date(orderDetails.createdAt).toLocaleDateString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Order Status:</span>
                <span className={`font-medium px-3 py-1 rounded-full text-sm ${
                  orderDetails.status === 'delivered' 
                    ? 'bg-green-100 text-green-800'
                    : orderDetails.status === 'shipped'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {orderDetails.status.charAt(0).toUpperCase() + orderDetails.status.slice(1)}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Ordered Items</h3>
              <div className="space-y-4">
                {orderDetails.products.map((item) => (
                  <div key={item._id} className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{item.product.name}</h4>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      <p className="text-sm text-gray-600">Price: ₹{item.product.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">
                        ₹{(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                to="/shop"
                className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-6 py-3 rounded-lg font-medium hover:from-green-500 hover:to-teal-600 transition-colors duration-200"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderSuccess; 
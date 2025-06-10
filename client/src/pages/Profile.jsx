import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';

function Profile() {
  const navigate = useNavigate();
  const { isAuthenticated, handleLogout } = useCart();
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showOrderDetails, setShowOrderDetails] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!isAuthenticated) {
          navigate('/login');
          return;
        }

        const [userResponse, ordersResponse] = await Promise.all([
          axios.get('/api/users/me'),
          axios.get('/api/orders')
        ]);

        setUser(userResponse.data);
        setOrders(ordersResponse.data);
      } catch (err) {
        console.error('Error fetching profile:', err);
        if (err.response?.status === 401) {
          toast.error('Session expired. Please login again.');
          handleLogout();
          navigate('/login');
        } else {
          setError('Failed to load profile data. Please try again.');
          toast.error('Failed to load profile data');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate, isAuthenticated, handleLogout]);

  const handleViewOrderDetails = (order) => {
    setSelectedOrder(order);
    setShowOrderDetails(true);
  };

  const handleCloseOrderDetails = () => {
    setShowOrderDetails(false);
    setSelectedOrder(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Error</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
          <p className="mt-2 text-gray-600">Manage your account information and view your orders</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* User Information */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Account Information</h2>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <p className="text-gray-900 bg-gray-50 p-2 rounded-md">{user?.name || 'Not provided'}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                    <p className="text-gray-900 bg-gray-50 p-2 rounded-md">{user?.username}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <p className="text-gray-900 bg-gray-50 p-2 rounded-md">{user?.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <p className="text-gray-900 bg-gray-50 p-2 rounded-md">{user?.phone || 'Not provided'}</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Shipping Address</label>
                  <p className="text-gray-900 bg-gray-50 p-2 rounded-md">
                    {user?.address || 'No shipping address provided'}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Member Since</p>
                      <p className="text-gray-900">
                        {new Date(user?.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                    <button
                      onClick={() => navigate('/edit-profile')}
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                    >
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900">Recent Orders</h3>
              </div>
              <div className="p-6">
                {orders.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-600">No orders found.</p>
                    <button
                      onClick={() => navigate('/products')}
                      className="mt-4 text-green-600 hover:text-green-700"
                    >
                      Start Shopping →
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {orders.slice(0, 5).map((order) => (
                      <div key={order._id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start">
                          <div className="space-y-2">
                            <div>
                              <p className="font-medium text-gray-900">Order #{order._id}</p>
                              <p className="text-sm text-gray-600">
                                {new Date(order.createdAt).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                              </p>
                            </div>
                            <div className="text-sm text-gray-600">
                              <p>{order.items?.length || 0} items</p>
                              <p>Shipping: {order.shippingAddress?.address || 'Not provided'}</p>
                            </div>
                          </div>
                          <div className="text-right space-y-2">
                            <p className="font-medium text-gray-900">₹{order.totalPrice}</p>
                            <span className={`px-3 py-1 text-xs rounded-full ${
                              order.status === 'delivered' 
                                ? 'bg-green-100 text-green-800'
                                : order.status === 'processing'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                            </span>
                            <button
                              onClick={() => handleViewOrderDetails(order)}
                              className="block w-full mt-2 text-sm text-green-600 hover:text-green-700"
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {orders.length > 5 && (
                  <div className="mt-6 text-center">
                    <button
                      onClick={() => navigate('/orders')}
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      View all orders →
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Quick Actions Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button
                  onClick={() => navigate('/orders')}
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                >
                  View All Orders
                </button>
                <button
                  onClick={() => navigate('/products')}
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                >
                  Browse Products
                </button>
                <button
                  onClick={() => {
                    localStorage.removeItem('token');
                    navigate('/login');
                  }}
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>

            {/* Account Status */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Account Type</span>
                  <span className="font-medium text-gray-900">
                    {user?.isAdmin ? 'Administrator' : 'Customer'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Orders</span>
                  <span className="font-medium text-gray-900">{orders.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Details Modal */}
      {showOrderDetails && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-900">Order Details</h3>
                <button
                  onClick={handleCloseOrderDetails}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6 space-y-6">
              {/* Order Summary */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700">Order Number</p>
                    <p className="text-gray-900">#{selectedOrder._id}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Order Date</p>
                    <p className="text-gray-900">
                      {new Date(selectedOrder.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Status</p>
                    <span className={`px-3 py-1 text-xs rounded-full ${
                      selectedOrder.status === 'delivered' 
                        ? 'bg-green-100 text-green-800'
                        : selectedOrder.status === 'processing'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {selectedOrder.status.charAt(0).toUpperCase() + selectedOrder.status.slice(1)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Total Amount</p>
                    <p className="text-gray-900">₹{selectedOrder.totalPrice}</p>
                  </div>
                </div>
              </div>

              {/* Shipping Information */}
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">Shipping Information</h4>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="text-gray-900">{selectedOrder.shippingAddress?.address || 'No shipping address provided'}</p>
                </div>
              </div>

              {/* Order Items */}
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">Order Items</h4>
                <div className="space-y-4">
                  {selectedOrder.items?.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-md">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                      <p className="text-gray-900">₹{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="border-t border-gray-200 pt-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900">₹{selectedOrder.totalPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-gray-900">Free</span>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span className="text-gray-900">Total</span>
                    <span className="text-gray-900">₹{selectedOrder.totalPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile; 
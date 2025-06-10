import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const { cart, clearCart, isAuthenticated } = useCart();
  const [address, setAddress] = useState('');
  const [payment, setPayment] = useState('COD');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication on component mount
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Validate cart
    if (!cart || cart.length === 0) {
      setError('Your cart is empty');
      setLoading(false);
      return;
    }

    // Validate address
    if (!address.trim()) {
      setError('Please enter your shipping address');
      setLoading(false);
      return;
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Please log in to place an order');
        navigate('/login');
        return;
      }

      const orderData = {
        products: cart.map(item => ({
          product: item._id,
          quantity: item.quantity
        })),
        totalPrice: total,
        paymentMethod: payment,
        shippingAddress: address
      };

      const response = await axios.post('/api/orders', orderData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      // Redirect to success page
      navigate('/order-success');
    } catch (err) {
      console.error('Error placing order:', err);
      setError(err.response?.data?.message || 'Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">Your cart is empty.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-lg shadow p-8">
        <div>
          <label className="block mb-1 font-medium">Shipping Address</label>
          <textarea className="w-full border rounded px-3 py-2" value={address} onChange={e => setAddress(e.target.value)} required />
        </div>
        <div>
          <label className="block mb-1 font-medium">Payment Method</label>
          <select className="w-full border rounded px-3 py-2" value={payment} onChange={e => setPayment(e.target.value)}>
            <option value="COD">Cash on Delivery</option>
            <option value="UPI">UPI</option>
            <option value="Wallet">Wallet</option>
          </select>
        </div>
        <div className="bg-gray-50 rounded p-4">
          <h3 className="font-semibold mb-2 text-gray-800">Order Summary</h3>
          <ul className="mb-2">
            {cart.map(item => (
              <li key={item._id || item.id} className="flex justify-between text-sm mb-1">
                <span>{item.name} x {item.quantity}</span>
                <span>₹{(item.price * item.quantity).toLocaleString()}</span>
              </li>
            ))}
          </ul>
          <div className="font-bold text-lg text-gray-900">Total: ₹{total.toLocaleString()}</div>
        </div>
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <button type="submit" disabled={loading} className="w-full bg-orange-200 hover:bg-orange-100 text-black py-3 rounded font-semibold text-lg transition disabled:opacity-50">
          {loading ? 'Placing Order...' : 'Place Order'}
        </button>
      </form>
    </div>
  );
}

export default Checkout;

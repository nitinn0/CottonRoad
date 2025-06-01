import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import { useCart } from '../context/CartContext';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Scroll to top when component mounts or product ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);
        setProduct(response.data);
        
        // Fetch recommendations (products from same category)
        const allProducts = await axios.get('/api/products');
        const filteredProducts = allProducts.data
          .filter(p => p.category === response.data.category && p._id !== response.data._id)
          .sort(() => 0.5 - Math.random())
          .slice(0, 4);
        setRecommendations(filteredProducts);
        
        setLoading(false);
      } catch (err) {
        setError('Failed to load product details');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      navigate('/cart');
    }
  };

  const memoizedRecommendations = useMemo(() => recommendations, [recommendations]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading product details...</div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-red-500">{error || 'Product not found'}</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Product Image */}
        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {product.name}
          </h1>
          <p className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6">
            ₹{product.price.toLocaleString()}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
            {product.description}
          </p>

          {/* Quantity Selector */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Quantity
            </label>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                -
              </button>
              <span className="text-lg font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-indigo-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Add to Cart
          </button>

          {/* Product Details */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Product Details
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Category</span>
                <span className="font-medium text-gray-900 dark:text-white">{product.category}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Availability</span>
                <span className="font-medium text-green-600">In Stock</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      {memoizedRecommendations.length > 0 && (
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {memoizedRecommendations.map((rec) => (
              <div
                key={rec._id}
                className="backdrop-blur-xl bg-white/5 dark:bg-gray-800/5 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border border-white/10 dark:border-gray-700/10 hover:bg-white/10 dark:hover:bg-gray-800/10"
                onClick={() => navigate(`/product/${rec._id}`)}
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={rec.image}
                    alt={rec.name}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-400 mb-2">
                    {rec.name}
                  </h3>
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                    ₹{rec.price.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;

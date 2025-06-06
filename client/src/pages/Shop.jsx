import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from '../utils/axios';
import ProductCard from '../components/ProductCard';

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  useEffect(() => {
    axios.get('/api/products')
      .then(res => {
        let filteredProducts = res.data;
        if (category) {
          filteredProducts = res.data.filter(product => 
            product.category && product.category.toLowerCase() === category.toLowerCase()
          );
        }
        setProducts(filteredProducts);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading products:', err);
        setError('Failed to load products');
        setLoading(false);
      });
  }, [category]);

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-400 to-teal-500 p-8 text-center text-gray-800">
        {category ? `${category} Products` : 'All Products'}
      </h2>
      {products.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No products found in this category.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {products.map(product => (
            <ProductCard key={product._id || product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Shop;

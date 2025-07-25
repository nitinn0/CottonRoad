import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import ProductCard from '../components/ProductCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Add custom styles for testimonial slider
const testimonialStyles = `
  .testimonial-slider .slick-dots {
    margin-top: 3rem !important;
  }
`;

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // In-memory cache for products (lives as long as the page is not reloaded)
  let cachedProducts = null;

  useEffect(() => {
    if (cachedProducts) {
      setProducts(cachedProducts);
      setLoading(false);
      return;
    }
    axios.get('/api/products')
      .then(res => {
        cachedProducts = res.data;
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading products:', err);
        if (err.response && err.response.status === 429) {
          setError('Too many requests. Please wait a minute and try again.');
        } else {
          setError('Failed to load products');
        }
        setLoading(false);
      });
  }, []);

  // Get 4 random products for featured section
  const featuredProducts = products.length > 0 
    ? [...products].sort(() => 0.5 - Math.random()).slice(0, 4)
    : [];

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      title: 'Summer Collection 2024',
      subtitle: 'Discover the Latest Trends in Cotton Wear',
      link: '/shop?category=Women'
    },
    {
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      title: 'Premium Cotton Collection',
      subtitle: 'Experience Unmatched Comfort and Style',
      link: '/shop?category=Men'
    },
    {
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      title: 'Luxury Cotton Wear',
      subtitle: 'Elevate Your Style with Premium Quality',
      link: '/shop?category=Luxury'
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    fade: true
  };

  const categories = [
    { 
      name: 'Women', 
      image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    { 
      name: 'Men', 
      image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    { 
      name: 'Kids', 
      image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    { 
      name: 'Luxury', 
      image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const handleAddToCart = async (productId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      await axios.post('/cart/add', { productId }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      toast.success('Product added to cart!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast.error('Failed to add product to cart', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-8">
      <style>{testimonialStyles}</style>
      <ToastContainer />
      <div className="relative rounded-2xl overflow-hidden mt-4 mb-14">
        <Slider {...sliderSettings}>
          {heroSlides.map((slide, index) => (
            <div key={index} className="relative">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30">
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl">
                      {slide.subtitle}
                    </p>
                    <Link
                      to={slide.link}
                      className="inline-block bg-white text-teal-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-700 hover:text-white transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      
      <section className="mb-24">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 dark:text-gray-500 text-xl">
            Explore our curated collection of premium cotton wear
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              to={`/shop?category=${category.name}`}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-1 aspect-h-1 w-full">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-all duration-300 flex items-end">
                  <h3 className="text-white text-xl font-semibold p-6 transform group-hover:translate-y-0 transition-transform duration-300">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

          {/* Featured Products */}
          <section className="mb-28">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Featured Products
          </h2>
          <p className="text-gray-600 dark:text-gray-500 text-xl">
            Handpicked selections from our latest collection
          </p>
        </div>
        {loading ? (
          <div className="text-center py-8">Loading products...</div>
        ) : error ? (
          <div className="text-center py-8 text-red-500">{error}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product._id || product.id} product={product} />
            ))}
          </div>
        )}
      </section>


      {/* Testimonials */}
      <section className="mb-14 bg-orange-100 py-36">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-black mb-20 text-center">
            What Our Customers Say
          </h2>
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={3000}
            arrows={true}
            className="testimonial-slider"
          >
            <div className="px-4">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.803 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.803-2.034a1 1 0 00-1.175 0l-2.803 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg text-gray-700 italic mb-6">
                  "Great selection of cotton clothing for men and women, with consistently excellent quality over the years. The customer service is exceptional and the delivery is always on time."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
                    alt="Reyna Kraig"
                    className="w-20 h-20 rounded-full object-cover border-4 border-orange-200 shadow-lg"
                  />
                  <div className="ml-6">
                    <p className="text-black font-semibold text-lg">Reyna Kraig</p>
                    <p className="text-gray-600">Moscow, Russia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Review */}
            <div className="px-4">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.803 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.803-2.034a1 1 0 00-1.175 0l-2.803 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg text-gray-700 italic mb-6">
                  "The kids' collection is amazing! My children love the comfortable cotton clothes, and they last through multiple washes. The prices are reasonable and the quality is outstanding."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
                    alt="Sarah Johnson"
                    className="w-20 h-20 rounded-full object-cover border-4 border-orange-200 shadow-lg"
                  />
                  <div className="ml-6">
                    <p className="text-black font-semibold text-lg">Sarah Johnson</p>
                    <p className="text-gray-600">London, UK</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Review */}
            <div className="px-4">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.803 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.803-2.034a1 1 0 00-1.175 0l-2.803 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg text-gray-700 italic mb-6">
                  "I've been shopping here for years and have never been disappointed. The luxury collection is particularly impressive, with beautiful designs and premium quality materials."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
                    alt="Priya Sharma"
                    className="w-20 h-20 rounded-full object-cover border-4 border-orange-200 shadow-lg"
                  />
                  <div className="ml-6">
                    <p className="text-black font-semibold text-lg">Priya Sharma</p>
                    <p className="text-gray-600">Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>

    </div>
  );
}

export default Home;

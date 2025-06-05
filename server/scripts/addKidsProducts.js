const mongoose = require('mongoose');
const Product = require('../models/Product');
require('dotenv').config();

const kidsProducts = [
  {
    name: "Kids' Blue Denim Jeans",
    description: "Comfortable blue denim jeans for kids, perfect for daily wear.",
    price: 999,
    category: "Kids",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b",
    inStock: true
  },
  {
    name: "Kids' Pink Cotton T-Shirt",
    description: "Cute pink cotton t-shirt for kids, great for casual wear.",
    price: 599,
    category: "Kids",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/6/320655764/CV/YD/ZN/180706459/kdk-01-32-2--1000x1000.jpg",
    inStock: true
  },
  {
    name: "Kids' Green Track Suit",
    description: "Comfortable green track suit for kids, perfect for sports and outdoor activities.",
    price: 1299,
    category: "Kids",
    image: "https://images.meesho.com/images/products/463249012/60onj_512.webp",
    inStock: true
  },
  {
    name: "Kids' Red Hooded Sweatshirt",
    description: "Warm red hooded sweatshirt for kids, great for winter wear.",
    price: 899,
    category: "Kids",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQeiZFnyUxPqH-PAKblMXdCS2PKiINptC187cORdpGAQWHVdb0Jk18125NZ0mkvJDEeNHKU0pP0-6lN7XZRsilwrLJMkjHsvSMze9JnlQ7WI0wPzcbKyr5O",
    inStock: true
  },
  {
    name: "Kids' Yellow Summer Dress",
    description: "Bright yellow summer dress for kids, perfect for hot weather.",
    price: 799,
    category: "Kids",
    image: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/19930952a.webp",
    inStock: true
  },
  {
    name: "Kids' Black School Shoes",
    description: "Comfortable black school shoes for kids, perfect for daily wear.",
    price: 1499,
    category: "Kids",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQbPcVlSTYUXhz_1cVMoJhiO-hvr55VKlVXSp6hp7wHuwujF3amXO8X_lmZJ2cQijdLUF-yDMjFAQGVemR0XDINh47XMmczRy0urVUwaS4vL-hjDBew1JAH",
    inStock: true
  },
  {
    name: "Kids' White Cotton Socks Pack",
    description: "Pack of 6 white cotton socks for kids, comfortable for daily wear.",
    price: 399,
    category: "Kids",
    image: "https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/51QN5pU4baL._SX679_.jpg",
    inStock: true
  },
  {
    name: "Kids' Multicolor Party Dress",
    description: "Beautiful multicolor party dress for kids, perfect for special occasions.",
    price: 1299,
    category: "Kids",
    image: "https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/61zoQNLBxQL._SY741_.jpg",
    inStock: true
  }
];

const addKidsProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // First, delete all existing kids products
    await Product.deleteMany({ category: "Kids" });
    console.log('Deleted existing kids products');

    // Add new kids products
    const result = await Product.insertMany(kidsProducts);
    console.log(`Successfully added ${result.length} kids products`);

    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

addKidsProducts(); 
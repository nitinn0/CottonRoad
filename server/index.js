const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

require('dotenv').config();

connectDB();

const app = express();

// CORS configuration
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://cottonroad.onrender.com', 'http://localhost:3001']
    : 'http://localhost:3001',
  credentials: true
}));
app.use(express.json());

app.use('/api/products', require('./routes/productRoute'));
app.use('/api/orders', require('./routes/orderRoute'));
app.use('/api/users', require('./routes/userRoute'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

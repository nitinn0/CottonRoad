const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables first
dotenv.config();

// Verify email configuration
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error('Warning: Email configuration is missing in .env file');
}

const contactRoutes = require('./routes/contact');
connectDB();

const app = express();

// CORS configuration
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://cottonroad-frontend.onrender.com', 'http://localhost:3001']
    : 'http://localhost:3001',
  credentials: true
}));
app.use(express.json());

app.use('/api/products', require('./routes/productRoute'));
app.use('/api/orders', require('./routes/orderRoute'));
app.use('/api/users', require('./routes/userRoute'));
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

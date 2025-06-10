const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const verifyToken = require('../middleware/verifyToken');

// Protected routes - require authentication
router.use(verifyToken);

router.get('/', orderController.getOrders);
router.get('/latest', orderController.getLatestOrder);
router.get('/:id', orderController.getOrderById);
router.post('/', orderController.createOrder);
router.put('/:id', orderController.updateOrder);
router.delete('/:id', orderController.deleteOrder);

module.exports = router; 
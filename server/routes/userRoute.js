const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const verifyToken = require('../middleware/verifyToken');

// Authentication routes
router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/me', verifyToken, userController.getMe);
router.put('/update-profile', verifyToken, userController.updateProfile);

module.exports = router; 
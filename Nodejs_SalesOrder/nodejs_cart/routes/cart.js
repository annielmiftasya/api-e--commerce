const express = require('express');
const fs = require('fs');
const path = require('path');

const cartController = require('../controllers/cart');

const router = express.Router();


router.post('/add-cart', cartController.postCart);
router.get('/cart', cartController.getCart);
router.post('/delete-cart/:id', cartController.deleteCart);

module.exports = router;
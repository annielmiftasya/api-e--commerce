const express = require('express');
const fs = require('fs');
const path = require('path');

const adminController = require('../controllers/product');
const cartController = require('../controllers/cart');
const router = express.Router();


router.post('/add-product', adminController.postProduct);
router.put('/edit-product/:id', adminController.editProductPost);
router.get('/', adminController.getAllProducts);
router.get('/product/:prodId', adminController.getProductDetail);
router.post('/delete-product/:id', adminController.deleteProduct);

module.exports = router;
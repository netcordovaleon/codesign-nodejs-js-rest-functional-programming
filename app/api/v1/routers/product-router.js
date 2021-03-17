const express = require('express');
const productController = require('../controller/product-controller');

const router = express.Router();
router.get('/product', productController.getAll);
router.post('/product', productController.saveProduct);
router.get('/product/:id', productController.getById);

module.exports = router;
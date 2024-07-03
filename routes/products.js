const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// GET all products
router.get('/', productsController.getAllProducts);

// GET products by name containing 'kw'
router.get('/search', productsController.findProductsByName);

// GET product by ID
router.get('/:id', productsController.getProductById);

// POST create new product
router.post('/', productsController.createProduct);

// PUT update product by ID
router.put('/:id', productsController.updateProductById);

// DELETE product by ID
router.delete('/:id', productsController.deleteProductById);

// DELETE all products
router.delete('/', productsController.deleteAllProducts);



module.exports = router;



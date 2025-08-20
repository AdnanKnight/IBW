// products.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');

router.get('/', controller.getAll);
router.post('/', controller.create);
router.delete('/:id', controller.remove);

router.get('/:id', controller.getProductById);

module.exports = router;

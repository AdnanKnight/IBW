const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const controller = require('../controllers/productController');

// === Multer Setup ===
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // stores in /uploads folder
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${ext}`;
        cb(null, uniqueName);
    }
});

const upload = multer({ storage: storage });

// Read Product
router.get('/read', controller.getAll);

// Create Product
router.post('/create', controller.create); // Up to 10 images

// Update Product
router.put('/update/:id', controller.update); // You can enhance this later with file support

// Delete Product
router.delete('/delete/:id', controller.remove);


// Read Individual Product
router.get('/:id', controller.getProductById);

module.exports = router;
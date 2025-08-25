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

// === Routes ===
router.get('/', controller.getAll);

// ✅ Use Multer middleware for image upload
router.post('/', upload.array('images', 10), controller.create); // Up to 10 images

router.put('/:id', controller.update); // You can enhance this later with file support
router.delete('/:id', controller.remove);
router.get('/:id', controller.getProductById);

module.exports = router;

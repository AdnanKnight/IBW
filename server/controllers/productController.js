// backend/controllers/productController.js
const Product = require('../models/Product');
const BASE_URL = process.env.BASE_URL || 'http://localhost:5555';

// ✅ Get all products
exports.getAll = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        console.error("GetAll error:", err);
        res.status(500).json({ message: "Error fetching products" });
    }
};

// ✅ Create new product
exports.create = async (req, res) => {
    try {
        const {
            name, price, description, author, brand,
            type, weight, length, breadth, height, images
        } = req.body;

        if (!name || !price || !images || images.length === 0) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const newProduct = new Product({
            name,
            price,
            description,
            author,
            brand,
            type,
            weight,
            length,
            breadth,
            height,
            images
        });

        await newProduct.save();
        res.status(201).json({ success: true, message: "Product created successfully." });
    } catch (err) {
        console.error("Create error:", err);
        res.status(500).json({ message: "❌ Failed to create product" });
    }
};

// ✅ Update product
exports.update = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });

        let updatedImages = Array.isArray(product.images) ? product.images : [];

        // frontend may send existingImages as JSON string
        if (req.body.existingImages) {
            try {
                updatedImages = JSON.parse(req.body.existingImages); // expects URLs
            } catch {
                console.warn("Invalid existingImages JSON, fallback to DB images");
            }
        }

        // add new Cloudinary URLs
        if (req.files && req.files.length > 0) {
            const newUrls = req.files.map(f => f.path);
            updatedImages = [...updatedImages, ...newUrls];
        }

        const updateData = { ...req.body, images: updatedImages };
        delete updateData.existingImages;

        const updated = await Product.findByIdAndUpdate(req.params.id, updateData, { new: true });
        res.json(updated);
    } catch (err) {
        console.error("Update error:", err);
        res.status(500).json({ message: "Error updating product", error: err.message });
    }
};

// ✅ Delete product
exports.remove = async (req, res) => {
    try {
        const deleted = await Product.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Product not found' });
        res.json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// ✅ Get single product by ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.json(product);
    } catch (err) {
        console.error("Fetch error:", err);
        res.status(500).json({ message: "Server error" });
    }
};

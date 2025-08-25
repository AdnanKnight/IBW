// backend/controllers/productController.js
const Product = require('../models/Product');

const BASE_URL = process.env.BASE_URL || 'http://localhost:5555'; // for serving images

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
        const { name, price, description, author, brand, type, weight, length, breadth, height } = req.body;

        // store filenames only
        const imagePaths = req.files ? req.files.map(f => f.filename) : [];

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
            images: imagePaths
        });

        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        console.error("Create error:", err);
        res.status(500).json({ message: "❌ Failed to create product" });
    }
};

// ✅ Update product
exports.update = async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });

        let updatedImages = Array.isArray(product.images) ? product.images : [];

        // frontend may send existingImages
        if (req.body.existingImages) {
            try {
                updatedImages = JSON.parse(req.body.existingImages); // expects filenames
            } catch {
                console.warn("Invalid existingImages JSON, fallback to DB images");
            }
        }

        // add new uploads
        if (req.files && req.files.length > 0) {
            const newPaths = req.files.map(f => f.filename);
            updatedImages = [...updatedImages, ...newPaths];
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
        await Product.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        console.error("Delete error:", err);
        res.status(500).json({ message: "Error deleting product" });
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

// productController.js
const Product = require('../models/Product');

exports.getAll = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};

exports.create = async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
};

exports.remove = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.status(204).send();
};

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(product);
    } catch (err) {
        console.error('Error fetching product:', err);
        res.status(500).json({ message: 'Server error' });
    }
};